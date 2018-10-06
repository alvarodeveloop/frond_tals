import { Component, OnInit, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimationsService } from '../../../service/animations.service'
import { Router, ActivatedRoute } from '@angular/router'
import { environment } from '../../../../environments/environment'

import baguetteBox from 'baguettebox.js';

declare var $ : any


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  idRegister : string
  arregloImg : any[]
  register   : any = null
  ruta_animacion: string
  ruta_audio : string 
  editTextoString: string
  loading: Boolean = true

  constructor(private router: Router, 
              private _router: ActivatedRoute, 
              private toastr: ToastrService, 
              private asvc: AnimationsService,
              private _ele: ElementRef) { }

  ngOnInit() {
      const id = this._router.snapshot.paramMap.get('id')
      if(id){
        this.idRegister = id
       this.init()
      }else{
        this.router.navigate(['/admin/animations'])
      }
  }

  init(){
    this.asvc.findById(this.idRegister).subscribe(res => {
      
      this.arregloImg = res.animationImg
      this.register = res
      this.ruta_audio = environment.url+"animation/"+res.audio
      this.ruta_animacion = environment.url+"animation/"+res.imagen
      this.renderGallery()
    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  renderGallery(){
    var html = ""
    var con  = 0

    this.arregloImg.forEach(function(i,e){
      if(con === 0){
        html+="<br/><div class='row'>"
      }

      html+=`<div class="col-md-3 col-sm-3 text-center">
               <a href="${environment.url}animationImagen/${i.ruta_imagen}" target="_blank" data-caption="Image caption">
                <img src="${environment.url}animationImagen/${i.ruta_imagen}" alt="sin imagen" />
               </a>
               <button type="button" class="btn btn-link btn_erase" data-id="${i.id}" data-toggle="tooltip" title="eliminar imagen"><i class="fa fa-remove"></i></button>
              </div>`
      con++

      if(con === 4) {
        con = 0
        html+="</div>"
      }
    })

    if(con > 0 && con < 4){
      html+="</div>"
    }
    
    this._ele.nativeElement.querySelector('#div_pictures').innerHTML= html

    var self = this

    $('#div_pictures').on('click','div > .btn_erase',function(e){
      self.asvc.deleteImageErase($(this).data('id')).subscribe(res => {
        self.toastr.success('Imagen eliminada','Éxito')
        self.init()
      },err => {
        self.toastr.error(err.error.message,'Error!')
      })
    })

    this.loading = false

  }

  add_img(input: string){
    $('#'+input).click()
  }

  remove_all_img(){
    if(confirm("Esta seguro de querer eliminar todas las imagenes?")){
      this.loading = true
      this.asvc.deleteImageEraseAll(this.idRegister).subscribe(res => {
        this.toastr.success('Proceso completado','Éxito!')
        this.init()
      },err => {
        this.toastr.error(err.error.message,'Error!')
      })
    }
  }

  editFileUpload(e : any, route: string,campo: string){
    this.loading = true
    route = route+this.idRegister
    
    var file = e.target.files[0]
    var formData = new FormData()

   formData.append(campo,file,file.name)

    this.asvc.editFileUpload(formData,route).subscribe(res => {
      this.toastr.success('Proceso completado','Éxito!')
      this.loading = false
      if(route.indexOf('AnimationsAudio') !== -1){
        
        this.ruta_audio = environment.url+"animation/"+res.audio

        var html = `<audio controls id="audio" *ngIf="register">
                      <source src="${this.ruta_audio}" type="audio/mpeg">
                      Your browser does not support the audio tag.
                    </audio>`
        $('#tag_audio').empty()
        $('#tag_audio').html(html)

      }else if(route.indexOf('AnimationsAnimacion') !== -1){
        this.ruta_animacion = environment.url+"animation/"+res.aminacion
      }

    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  editTexto(){
    const datos = { texto: this.editTextoString }
    const route = "AnimationsTexto/"+this.idRegister
    this.loading = true
    
    this.asvc.editFileUpload(datos,route).subscribe(res => {
      this.toastr.success('Proceso completado','Éxito!')
      this.register.texto = res.texto
      $('#modal_texto').modal('hide')
      this.loading = false
    },err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  upload_img(){
    this.loading = true
    const imgs = this._ele.nativeElement.querySelector('#add_img').files
     
    var formData = new FormData()

    for (var i = imgs.length - 1; i >= 0; i--) {
      formData.append('imagenes',imgs[i],imgs[i].name)
    }

    formData.append('animation_id',this.idRegister)

    this.asvc.upload_img(formData).subscribe(res => {
      this.toastr.success('Proceso Completado','Éxito')
       this.init()
    }, err => {
      this.toastr.error(err.error.messagee,'Error!')
    })
  }
}
