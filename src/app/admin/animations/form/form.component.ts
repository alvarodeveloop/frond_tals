import { Component, OnInit,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AnimationsService } from '../../../service/animations.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formAnimation : FormGroup
  submitted : boolean = false
  registerById: any
  nameStatus : String

  constructor( private _fb: FormBuilder, 
              private asvc: 
              AnimationsService, 
              private router: Router,
              private _route: ActivatedRoute,
              private toastr: ToastrService,
              private _ele: ElementRef) { 

  }

  ngOnInit() {
     this.initForm()
     const id = this._route.snapshot.paramMap.get('id');
     if(id){
       this.asvc.findById(id).subscribe(res => {
         
         this.registerById = res
         this.nameStatus = this.registerById.activo ? "Activo" : "Desactivado"

       }, err => {
         this.toastr.error(err.error.message,'Error!')
       })
     }
  }

  initForm(datos ? : any){  
    this.formAnimation = this._fb.group({
      id: [datos ? datos.id : null],
      texto: [ datos ? datos.texto : null, Validators.required],
      name: [ datos ? datos.name : null, Validators.required]
    })
  }

  get f(){ return this.formAnimation.controls }

  open_file(field: string){
    $('#'+field).click()
  }

  onSubmit(data){

    const datos = JSON.parse(JSON.stringify(data.value))
    const animacion = this._ele.nativeElement.querySelector('#animacion').files[0]
    const mp3 = this._ele.nativeElement.querySelector('#audio').files[0]

    console.log(mp3,animacion)

    this.submitted = true
    
    if(this.formAnimation.invalid){
      return false;
    }


    if(mp3 === undefined){
      this.toastr.warning('Debe escoger un sonido de salida al usuario')
      $('#mp3').click()
      return false
    }

    if(animacion === undefined){
      this.toastr.warning('Debe escoger una animación 3D para la salida al usuario')
      $('#animacion').click()
      return false
    }

    let formData = new FormData()
    var arreglo_files = [animacion,mp3];

    formData.append('animacion',animacion)
    formData.append('audio',mp3)
    formData.append('texto',datos.texto)
    formData.append('name',datos.name)

    if(datos.id){
      this.asvc.update(formData,datos.id).subscribe(res => {  
         this.toastr.success("Proceso completado",'Éxito!')
         this.router.navigate(['/admin/animations'])
      }, err => {
        this.submitted = false
        this.toastr.error(err.error.message,'Error!')
      })
    }else{
      this.asvc.stored(formData).subscribe(res => {  
         this.toastr.success("Proceso completado",'Éxito!')
         this.router.navigate(['/admin/animations'])
      }, err => {
        this.submitted = false
        this.toastr.error(err.error.message,'Error!')
      })
    }
  }

}
