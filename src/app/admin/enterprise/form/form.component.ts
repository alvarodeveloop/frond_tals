import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminEnterprise } from '../../../class/admin/admin-enterprise'
import { Router, ActivatedRoute } from '@angular/router'

import { AdminEnterpriseService } from '../../../service/admin-enterprise.service'

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formEnterprise : FormGroup
  submitted : boolean = false
  registerById: AdminEnterprise
  statusWordEnterprise: String
  edit: Boolean = false

  constructor( private formBuilder: FormBuilder, 
              private _entService: 
              AdminEnterpriseService, 
              private router: Router,
              private _route: ActivatedRoute) { 

  }

  ngOnInit() {

     this.initForm()
     
     const id = this._route.snapshot.paramMap.get('id');
     if(id){
       this._entService.findById(id).subscribe(res => {
         this.registerById = res
         this.edit = true
         this.statusWordEnterprise = res.statu_id == 1 ?  "Activa" : "Inactiva";
         this.initForm(this.registerById)  
       })
     }
  }

  initForm(enterprise?: AdminEnterprise){
    this.formEnterprise = this.formBuilder.group({
      id: [enterprise ? enterprise.id : null],
      nombre: [enterprise ? enterprise.nombre : null, Validators.required],
      rut:  [enterprise ? enterprise.rut : null, [Validators.required] ],
      direccion: [enterprise ? enterprise.direccion : null, Validators.required],
      telefono: [enterprise ? enterprise.telefono : null, [Validators.required] ],
      giro: [enterprise ? enterprise.giro : null, Validators.required],
      correo: [enterprise ? enterprise.correo : null, [Validators.required,Validators.email] ],
      ceo: [enterprise ? enterprise.ceo : null, Validators.required],
      rut_ceo: [enterprise ? enterprise.rut_ceo : null, Validators.required],
      telefono_ceo: [enterprise ? enterprise.telefono_ceo : null, [Validators.required] ],
      correo_ceo: [enterprise ? enterprise.correo_ceo : null, [Validators.required, Validators.email] ],
      statu_id: [enterprise ? enterprise.statu_id : null]
    })
  }

  get f(){ return this.formEnterprise.controls }

  changeWord(e){
    if(e.target.checked){
      this.statusWordEnterprise = "Activo"
    }else{
      this.statusWordEnterprise = "Desactivado"
    }
  }

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

    data = JSON.parse(JSON.stringify(data.value))

    if (this.formEnterprise.invalid) {
        return;
    } 
    
    if(data.id){
      this._entService.update(data).subscribe(res => {
        this.router.navigate(['/admin/enterprise'])
      },err => {
        alert(err.error.message)
      })
    }else{
      this._entService.stored(data).subscribe(res => {
        this.router.navigate(['/admin/enterprise'])
      },err => {
        alert(err.error.message)
      })
    }
      

  }
}
