import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'

import { ToastrService } from 'ngx-toastr';
import { TicketsAdminService } from '../../../service/tickets-admin.service'
import { MasterService } from '../../../service/master.service'

import { Tickets } from '../../../class/shared/tickets'

import * as moment from 'moment/moment'


declare var $ : any

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  ticketManage: any
  validate : boolean = false
  visible  : boolean = true 
  formAnsswer: FormGroup
  submitted: boolean = false
  idTicket : string
  arrayStatus: any
  statusTicket : number

  constructor(private tsvc: TicketsAdminService, 
              private toastr: ToastrService, 
              private router: Router, 
              private _router: ActivatedRoute,
              private _fb: FormBuilder,
              private _ele: ElementRef,
              private msvc: MasterService){ }

  ngOnInit() {
    const id = this._router.snapshot.paramMap.get('id')
    this.idTicket = id

    if(id){
      this.initForm()
      this.init(id)
    }else{
      this.toastr.error('Petición incorrecta','Error!')
      this.router.navigate(['/admin/tickets'])
    }
  }

  init(id: string){
    const manage = this.tsvc.getManageTicket(id)
    const statusTicket  = this.msvc.getStatusForClients(2)

    forkJoin([
        manage,
        statusTicket
      ])
      .subscribe(res => {
        
        this.ticketManage = res[0][0]
        
        this.statusTicket = parseInt(this.ticketManage.statu_id)
        console.log(this.ticketManage,'aquiii')
        if(this.ticketManage){
          this.validate = true
          this.renderMessages()
        }

        this.arrayStatus = res[1]

      },err => {
        this.toastr.error(err.error.message)
      })

    this.tsvc.getManageTicket(id).subscribe(res => {
      
    },err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  renderMessages(){
    let html = "";
    let navs = "";
    let con  = 0;
    let session = JSON.parse(localStorage.getItem('session'))

    this.ticketManage.ticketResticket.forEach(function(i,e){

      let name = ""
      if(i.user_id == 1 && session.profile == 1){
        name = "Usted <br/> "+moment(i.createdAt).format('DD-MM-YYYY HH:MM:SS')
      }else if(i.user_id == 1 && session.profile != 1){
        name = "Administrador <br/> "+moment(i.createdAt).format('DD-MM-YYYY HH:MM:SS')
      }else if(i.user_id != 1 && session.profile != 1){
        name = "Usted <br/> "+moment(i.createdAt).format('DD-MM-YYYY HH:MM:SS')
      }

      let active = con === 0 ? "active" : ""
      let show_active = con === 0 ? "show active" : ""

      navs += `<a class="nav-link ${active}" id="${con}" data-toggle="pill" href="#div${con}" role="tab" aria-controls="v-pills-${con}" aria-selected="true">${name}</a>`
      html+= `<div class="tab-pane fade ${show_active}" id="div${con}" role="tabpanel" aria-labelledby="">${i.description}</div>`
      con++;
    })


    if(this.ticketManage.ticketResticket.length > 0){
      this.visible = true
      setTimeout(function(){
        $('#v-pills-tab').html(navs)
        $('#v-pills-tabContent').html(html)
      },500)
    }else{
      
      this.visible = false
    }
  }

  initForm(){
    this.formAnsswer = this._fb.group({
      description: [null, Validators.required],
      idTicket : [this.idTicket]
    })
  }

  get f(){return this.formAnsswer.controls}

  changeStatus(e){
    
    const update = { statu_id : e.target.value }
    this.tsvc.updateTicket(update,this.idTicket).subscribe(res => {
      this.toastr.success('Status cambiado','Éxito!')
      this.statusTicket = e.target.value
    },err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  onSubmit(data){
    
    var datos = JSON.parse(JSON.stringify(data.value))
    var formData;
    var file = this._ele.nativeElement.querySelector('#file_answer').files[0]
    this.submitted = true
    if(this.formAnsswer.invalid){
      return
    } 

    if(file !== undefined){
      let formData1 = new FormData(this._ele.nativeElement.querySelector('#form_register'))

      formData1.append('description',datos.description)
      formData1.append('idTicket',this.idTicket)
      formData1.append('file_answer',file,'file_answer')

      formData = formData1
    }else{
      formData = datos
    }
      

    this.tsvc.saveResponseTicket(formData).subscribe(res => {
      this.toastr.success('Respuesta almacenada','Éxito')
      this.init(this.idTicket)
      this.initForm()
      this.submitted = false
      $('#modal_cuenta').modal('hide')
    }, err => {
      $('#modal_cuenta').modal('hide')
      this.toastr.error(err.error.message,'Error!')
    })

  }

}
