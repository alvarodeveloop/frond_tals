import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAdminService } from '../../service/login-admin.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.css']
})
export class VerifyTokenComponent implements OnInit {

  formValidate: FormGroup
  submitted: Boolean = false
  submitted1: Boolean = false
  btnString: String = "Validar"

  constructor(private _fb: FormBuilder, private lasvc: LoginAdminService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.formValidate = this._fb.group({
      code: [null,[Validators.required, Validators.pattern('[0-9 A-Z]{6}')] ]
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

    this.lasvc.verifyCodeRecoveryPassword(datos).subscribe(res => {  
      
      localStorage.removeItem('email_recovery')
      this.toastr.success('Se ha reestablecido su contraseña, revise su correo para obtener la nueva constraseña','Éxito')
      this.router.navigate(['/login'])

    },err => {
      this.btnString = "Validar"
      this.submitted1 = false
      this.submitted = false
      this.toastr.error(err.error.message,'Error!')
    })
  }

}
