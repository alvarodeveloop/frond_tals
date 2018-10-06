import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAdminService } from '../../../service/login-admin.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  formValidate: FormGroup
  submitted: Boolean = false
  btnString: String = "Entrar"
  submitted1: Boolean = false
  constructor(private _fb: FormBuilder, private lasvc: LoginAdminService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.formValidate = this._fb.group({
      code: [null,Validators.required]
    })
  }

  get f(){ return this.formValidate.controls }

  onSubmit(data){
    const datos = JSON.parse(JSON.stringify(data.value))

    this.submitted = true
    this.submitted1 = true
    if(this.formValidate.invalid){
      this.submitted1 = false
      return false;
    }

    this.btnString = "Enviando..."

    this.lasvc.verifyToken(datos).subscribe(res => {  
      var session = JSON.parse(localStorage.getItem('session'))
      var session1 = session
      session1.email_verify = true

      localStorage.removeItem('session')
      localStorage.setItem('session',JSON.stringify(session1))
      //localStorage.removeItem('session')
      
      this.toastr.success('Cuenta validada con éxito','Éxito')

      if(session.profile == 1){
        this.router.navigate(['/admin'])
      }else if(session.profile == 2){
        this.router.navigate(['/enterprise'])
      }else if(session.profile == 3){
        this.router.navigate(['/client'])
      }
    },err => {
      this.submitted1 = false
      this.submitted = false
      this.btnString = "Entrar"
      this.toastr.error(err.error.message,'Error!')
    })
  }

}
