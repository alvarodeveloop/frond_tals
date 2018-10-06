import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { Publicity } from '../../../class/admin/publicity'
import { environment } from '../../../../environments/environment'

import { PublicityService } from '../../../service/publicity.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formPublicity : FormGroup
  submitted : Boolean = false
  registerById: Publicity
  url : String = environment.url
  nameStatus: String

  constructor(
    private psvc : 
    PublicityService, 
    private _fb: FormBuilder, 
    private router: Router, 
    private _router: ActivatedRoute,
    private toastr: ToastrService,
    private _ele: ElementRef) { }

  ngOnInit() {

    this.initForm()

    const id = this._router.snapshot.paramMap.get('id');
     if(id){
       this.psvc.findById(id).subscribe(res => {
         this.registerById = res
         
         this.nameStatus = this.registerById.statu ? "Activa" : "Desactivada"

         this.initForm(this.registerById)  
       })
     }
  }

  initForm(row?: Publicity){
    this.formPublicity = this._fb.group({
      id:   [row ? row.id : null],
      name: [row ? row.name : null, Validators.required],
      type: [row ? row.type : '', Validators.required],
      statu:[row ? row.statu : true]
    })
  }

  get f(){
    return this.formPublicity.controls
  }

  changeStatus(e){
    if(e.target.checked){
      this.nameStatus = "Activa"
    }else{
      this.nameStatus = "Desactivada"
    }
  }

  onSubmit(data){
    const datos = JSON.parse(JSON.stringify(data.value))

    this.submitted = true
    if(this.formPublicity.invalid){
      return;
    }

    var image = this._ele.nativeElement.querySelector('#publicity').files[0]
    
    let formData = new FormData()
    
    formData.append('name',datos.name)
    formData.append('statu',datos.statu)
    formData.append('type',datos.type)
    formData.append('id',datos.id)

    if(datos.id){
      if(image !== undefined && image !== null){
        formData.append('publicity',image,image.name)
      }

      this.psvc.update(formData,datos.id).subscribe(res => {
        this.toastr.success('Registro modificado','Éxito')
        this.router.navigate(['/admin/publicity']);
      }, err => {
        this.toastr.success(err.error.message,'Error!')
      })

    }else{
      
      if(image === undefined){
        this.toastr.warning('Debe escoger una imagen','Información!')
        return false
      }

      
      formData.append('publicity',image,image.name)

      
      this.psvc.stored(formData).subscribe(res => {
        this.toastr.success('Registro Agregado','Éxito')
        this.router.navigate(['/admin/publicity']);
      }, err => {
        this.toastr.success(err.error.message,'Error!')
      })
    }
  }

}
