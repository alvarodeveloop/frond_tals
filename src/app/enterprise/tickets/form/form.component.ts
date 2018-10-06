import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Tickets } from '../../../class/shared/tickets'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { TicketsAdminService } from '../../../service/tickets-admin.service'
import { MasterService } from '../../../service/master.service'

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formTicket : FormGroup
  submitted  : Boolean = false
  motivos    : any[] = []

  constructor(private router: Router, 
              private _fb: FormBuilder, 
              private toastr: ToastrService, 
              private tsvc: TicketsAdminService,
              private msvc: MasterService  ) { }

  ngOnInit() {
    this.initForm()
    this.msvc.getMotivoTickets().subscribe(res => {
      this.motivos = res
    },err => {  
      this.toastr.error(err.error.message,'Error!')
      this.router.navigate(['/enterprise/tickets'])
    })
  }

  initForm(){
    this.formTicket = this._fb.group({
      motivo_id: [null,Validators.required],
      description: [null,Validators.required]
    })
  }

  get f(){ return this.formTicket.controls }

  onSubmit(data){
    const datos = JSON.parse(JSON.stringify(data.value))

   this.submitted = true
   if(this.formTicket.invalid){
     return false;
   }

   this.tsvc.storedTicketsClient(datos).subscribe(res => {
     this.toastr.success('Proceso Completado', 'Éxito!')
     this.router.navigate(['/enterprise/tickets'])
   },err => {
     this.toastr.error(err.error.message,'Error!')
   })
  }
}
