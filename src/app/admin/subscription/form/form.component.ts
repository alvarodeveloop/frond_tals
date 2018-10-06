import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'

import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../service/subscription.service'

import { Subscription } from '../../../class/shared/subscription'

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formSub : FormGroup
  submitted: Boolean
  nameStatus: String
  registerById: Subscription

  constructor(
    private ssvc : SubscriptionService, 
    private _fb: FormBuilder, 
    private router: Router, 
    private _router: ActivatedRoute,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.initForm()
    const id = this._router.snapshot.paramMap.get('id')
    if(id){
      this.ssvc.findById(id).subscribe(res => {
        
        this.registerById = res
        this.nameStatus = this.registerById.activo ? "Activo" : "Desactivado"

        this.initForm(res)
      }, err => {
        this.toastr.error(err.error.message,'Error!')
      })
    }
  }

  initForm(data ? : Subscription){
    this.formSub = this._fb.group({
      id: [data ? data.id : null],
      titulo: [data ? data.titulo : null, Validators.required],
      descripcion: [data ? data.descripcion : null, Validators.required],
      periodo: [data ? data.periodo : null, Validators.required],
      precio: [data ? data.precio : null, Validators.required ],
      activo: [data ? data.activo : null]
    })
  }

  get f(){ return this.formSub.controls }

  changeStatus(e){
    if(e.target.checked){
      this.nameStatus = "Activado"
    }else{
      this.nameStatus = "Desactivado"
    }
  }

  onSubmit(form){
    const  data = JSON.parse(JSON.stringify(form.value))

    this.submitted = true

    if(this.formSub.invalid){
      return;
    }

    if(data.id){
      this.ssvc.update(data,data.id).subscribe(res => {
        this.toastr.success('Subscripción modificada','Éxito!')
        this.router.navigate(['/admin/subscription'])
      }, err => {
        this.submitted = false
        this.toastr.error(err.error.message,'Error!')
      })
    }else{
      this.ssvc.post(data).subscribe(res => {
        this.toastr.success('Subscripción agregada','Éxito!')
        this.router.navigate(['/admin/subscription'])
      }, err => {
        this.submitted = false
        this.toastr.error(err.error.message,'Error!')
      })
    }
      
  }
}
