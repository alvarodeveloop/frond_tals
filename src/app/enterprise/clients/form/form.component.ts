import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clients } from '../../../class/enterprise/clients'
import { Router, ActivatedRoute } from '@angular/router'
import { ClientsService } from '../../../service/clients.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formClient : FormGroup
  submitted : boolean = false
  registerById: Clients
  edit: Boolean = false
  nameStatus: String

  constructor( private _fb: FormBuilder, 
              private csvc: ClientsService, 
              private router: Router,
              private _route: ActivatedRoute,
              private toastr: ToastrService) { 
  }

  ngOnInit() {

    this.initForm()
     
     const id = this._route.snapshot.paramMap.get('id');
     if(id){
       this.csvc.findById(id).subscribe(res => {
         this.registerById = res
         if(res.tipo_profile_id){
           this.edit = true
         }
         this.nameStatus = res.statu_id == 1 ?  "Activo" : "Desactivado";
         this.initForm(this.registerById)  
       })
     }
  }

  initForm(clients?: Clients){
    this.formClient = this._fb.group({
      id: [clients ? clients.id : null],
      correo: [clients ? clients.correo : null, [Validators.required,Validators.email] ],
      nombre: [clients ? clients.nombre : null, Validators.required ],
      statu_id: [clients ? clients.statu_id : null]
    })
  }

  get f(){ return this.formClient.controls }

  onlyNubers(value){

    var val = value.target.value,
        elem = value.target.getAttribute("formControlName")

    if(isNaN(val)){
      var val = val.substring(0,val.length - 1)
      $('#'+elem).val(val) 
    }
  }

  changeStatus(e){
    if(e.target.checked){
      this.nameStatus = "Activo"
    }else{
      this.nameStatus = "Desactivado"
    }
  }

  onSubmit(data){

    this.submitted = true

    data = JSON.parse(JSON.stringify(data.value))

    if (this.formClient.invalid) {
        
        if($('#password').val() === "" && !this.edit){
          this.toastr.warning('La contraseña no puede estar vacia','Información!')
        }

        return;
    } 
    
    if(data.id){
      
      if($('#password').val() !== ""){
        data.password = $('#password').val()
      }

      this.csvc.update(data).subscribe(res => {
        this.toastr.success('El cliente ha sido modificado con éxito', 'Éxito!')
        this.router.navigate(['/enterprise/clients'])
      },err => {
        this.toastr.error(err.error.message, 'Error!')
      })
    }else{
      
      if($('#password').val() === ""){
        this.toastr.warning('La contraseña no puede estar vacia','Información!')
        return false
      }

      data.password = $('#password').val()

      this.csvc.stored(data).subscribe(res => {
        this.toastr.success('El cliente ha sido registrado con éxito', 'Éxito!')
        this.router.navigate(['/enterprise/clients'])
      },err => {
        this.toastr.error(err.error.message, 'Error!')
      })
    }
  }

}
