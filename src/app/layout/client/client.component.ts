import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { InteractionService } from '../../service/interaction.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit,AfterViewChecked,OnDestroy {

  loading: Boolean = true
  userName: String = ''
  client_particular: Boolean = true
  interval : any
  token : any = localStorage.getItem('token')

  constructor(private _router: Router, private isvc: InteractionService, private toastr: ToastrService) { 

    window.onbeforeunload = () => {
      if(localStorage.getItem('recarga')){
        localStorage.removeItem('recarga')
      }
    }
  }

  ngOnInit() {
    var session = JSON.parse(localStorage.getItem('session'))
    this.userName = session.nombre
    this.client_particular = session.tipo_profile_id == 6 ? true : false  

    this.interval = window.setInterval(() => {
      if(localStorage.getItem('rate')){
        $('#modal_rate').modal('show')
      }
    },5000)
  }

  sendRate(val: number){
    let obj = { rate : val }

    this.isvc.sendRate(obj,this.token).subscribe(res => {
      this.toastr.success('Gracias por ayudarnos a mejorar','Éxito!')
      localStorage.removeItem('rate')
      clearInterval(this.interval)
      $('#modal_rate').modal('hide')
    },err => {
      this.toastr.error('Ha ocurrido un error','Error')
    })

  }

  ngAfterViewChecked(){
    setTimeout( () => {
      this.loading = false
    },3000)
  }

  logout(){
     localStorage.removeItem('token')
     localStorage.removeItem('session')
     localStorage.removeItem('rate')
     this._router.navigate(['/login'])
  }

  ngOnDestroy(){
    localStorage.removeItem('recarga')
    clearInterval(this.interval)
  }



}
