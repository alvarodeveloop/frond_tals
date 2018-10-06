import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clients } from '../../class/enterprise/clients'
import { Router, ActivatedRoute } from '@angular/router'
import { ClientsService } from '../../service/clients.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  formClient : FormGroup
  submitted : boolean = false
  submitted1 : boolean = false
  stringBtn: String = "Enviar"

  constructor( private _fb: FormBuilder, 
              private csvc: ClientsService, 
              private router: Router,
              private _route: ActivatedRoute,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.initForm()
  }

  initForm(clients?: Clients){
    this.formClient = this._fb.group({
      id: [clients ? clients.id : null],
      nombre: [clients ? clients.nombre : null, Validators.required],
      rut:  [clients ? clients.rut : null, [Validators.required] ],
      direccion: [clients ? clients.direccion : null, Validators.required],
      telefono: [clients ? clients.telefono : null, [Validators.required] ],
      correo: [clients ? clients.correo : null, [Validators.required,Validators.email] ],
      statu_id: [clients ? clients.statu_id : null]
    })
  }

  get f(){ return this.formClient.controls }

  onlyNubers(value){

    var val = value.target.value,
        elem = value.target.getAttribute("formControlName")

    if(isNaN(val)){
      var val = val.substring(0,val.length - 1)
      //$('#'+elem).val(val) 
    }
  }

  onSubmit(data){

    this.submitted = true
    this.submitted1 = true
    data = JSON.parse(JSON.stringify(data.value))

    if (this.formClient.invalid) {        
        if($('#password').val() === ""){
          this.toastr.warning('La contraseña no puede estar vacia','Información!')
        }
        this.submitted1 = false
        return;
    } 
      
    if($('#password').val() === ""){
      this.toastr.warning('La contraseña no puede estar vacia','Información!')
      this.submitted1 = false
      return false
    }

    this.stringBtn = "Enviando..."
    data.password = $('#password').val()

    this.csvc.storedOwned(data).subscribe(res => {
      this.toastr.success('El cliente ha sido registrado con éxito', 'Éxito!')
      this.router.navigate(['/login'])
    },err => {
      this.submitted = false
      this.submitted1 = false
      this.stringBtn = "Enviar"
      this.toastr.error(err.error.message, 'Error!')
    })
  }
}
