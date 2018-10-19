import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAdminService } from '../../service/login-admin.service'
import { ToastrService } from 'ngx-toastr';
import { InteractionService } from '../../service/interaction.service'
import { Router } from '@angular/router'

declare  var $ : any

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formLogin: FormGroup
  formRecovery : FormGroup
  submitted: Boolean = false
  type_div : Boolean = false
  btnLogin : String = 'Entrar'
  stringRecovery: String = "Recuperar"
  submitted1: Boolean = false

  constructor(private _fb: FormBuilder, private lasvc: LoginAdminService, private router: Router,private toastr: ToastrService,private isvc: InteractionService) { }

  ngOnInit() {
    var token = localStorage.getItem('token')
    var session : any = localStorage.getItem('session')

    if(token && session){
      session = JSON.parse(session)
      if(session.profile == 1){
        this.router.navigate(['/admin'])
      }else if(session.profile == 2){
        this.router.navigate(['/enterprise'])
      }else if(session.profile == 3){
        this.router.navigate(['/user'])
      }
    }

    this.initForm()
    this.initFormRecovery()

  }

  initForm(){
    this.formLogin = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  initFormRecovery(){
    this.formRecovery = this._fb.group({
       email: [null,[Validators.required, Validators.email] ]
    })
  }

  get f(){ return this.formLogin.controls }
  get r(){ return this.formRecovery.controls }

  show_div_password(){
    this.type_div = !this.type_div
  }

  onSubmit(data){

    const datos = JSON.parse(JSON.stringify(data.value))
    this.submitted = true
    this.btnLogin = "Cargando..."
    if(this.formLogin.invalid){
      this.btnLogin = "Entrar"
      return;
    }

    this.lasvc.submit(datos).subscribe(res => {
      
      localStorage.setItem('token',res.token)
      localStorage.setItem('session',JSON.stringify(res.user))
      localStorage.setItem('recarga',JSON.stringify(res.user))
      localStorage.removeItem('rate')

      if(res.user.profile == 2){
        if(!res.user.email_verify){
          this.toastr.warning('Debe validar su cuenta con el código enviado a su correo','Información!')
          this.router.navigate(['/login/verify_account'])
        }else{
          this.toastr.success('Ha iniciado sesión correctamente','Éxito!')
          this.router.navigate(['/enterprise'])
        }
      }else if(res.user.profile == 1){
        this.toastr.success('Ha iniciado sesión correctamente','Éxito!')
        this.router.navigate(['/admin/publicity'])
      }else if(res.user.profile == 3){
        this.toastr.success('Ha iniciado sesión correctamente','Éxito!')
        this.router.navigate(['/client'])
      }

    },err => {
      this.btnLogin = "Entrar"
      this.submitted = false
      this.toastr.error(err.error.message,'Error!')
    })

  }

  onSubmitRecovery(data){
    const datos = JSON.parse(JSON.stringify(data.value))

    this.submitted = true
    this.submitted1 = true

    this.stringRecovery = "Enviando..."

    if(this.formRecovery.invalid){
      this.submitted1 = false
      return;
    }

    this.lasvc.recoveryPassword(datos).subscribe(res => {
      this.toastr.success('Se ha enviado con éxito su contraseña al correo','Éxito!')
      this.submitted = false
      this.router.navigate(['/login/verify_token'])
    }, err => {
      this.submitted = false
      this.submitted1 = false
      this.stringRecovery = "Recuperar"
      this.toastr.error(err.error.message,'Error!')
    })
  }

}
