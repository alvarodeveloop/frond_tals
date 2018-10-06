import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../class/admin/profile'
import { Router, ActivatedRoute } from '@angular/router'

import { ProfileService } from '../../service/profile.service';
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formProfile : FormGroup
  submitted : boolean = false
  registerById: Profile
  password_input: Boolean = true

  constructor( private formBuilder: FormBuilder, 
              private psvc: ProfileService, 
              private router: Router,
              private _route: ActivatedRoute,
              private toastr: ToastrService) { 

  }

  ngOnInit() {
    this.initForm()
    this.psvc.get().subscribe(res => {
      this.registerById = res.profile
      this.initForm(this.registerById)
    }, err => {
      this.toastr.error('Contacte a Soporte','Error!')
    })
  }

  initForm(profile?: Profile){
    this.formProfile = this.formBuilder.group({
      nombre: [profile ? profile.nombre : null, Validators.required],
      rut:  [profile ? profile.rut : null, [Validators.required] ],
      direccion: [profile ? profile.direccion : null, Validators.required],
      telefono: [profile ? profile.telefono : null, [Validators.required] ],
      correo: [profile ? profile.correo : null, [Validators.required,Validators.email] ],
      changePassword: [false],
      password: [{value: null, disabled: this.password_input}]
    })
  }

  get f(){ return this.formProfile.controls }

  onlyNubers(value){

    var val = value.target.value,
        elem = value.target.getAttribute("formControlName")

    if(isNaN(val)){
      var val = val.substring(0,val.length - 1)
      $('#'+elem).val(val) 
    }
  }

  changePass(e){
    if(e.target.checked){
      this.password_input = false
      this.formProfile.get('password').enable()
    }else{
      this.password_input = true
      this.formProfile.get('password').disable()
    }
  }

  onSubmit(data){

    this.submitted = true
    data = JSON.parse(JSON.stringify(data.value))

    if (this.formProfile.invalid) {
        return;
    } 

    if(!this.password_input){
      if(!data.password){
        this.toastr.warning('La contraseña no puede estar vacia','Aviso')
        return false;
      }
    }
    
    this.psvc.update(data).subscribe(res => {
      this.toastr.success('Datos de la cuenta actualizados','Éxito!')
      this.router.navigate(['/client'])
    },err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

}
