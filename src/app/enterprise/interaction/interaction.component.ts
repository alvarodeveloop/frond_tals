import { Component, OnInit,ElementRef, OnDestroy } from '@angular/core';
import { AnimationsService } from '../../service/animations.service'
import { ToastrService } from 'ngx-toastr';
import { InteractionService } from '../../service/interaction.service'
import { environment } from '../../../environments/environment'

declare var $ : any

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit,OnDestroy {

  rec : any
  audioChunks: any[]
  stop: boolean = true
  play: boolean = false
  estadoConexionCliente : string = ""
  session : any
  loading: boolean = false
  historial: any[] = []
  count_saliendo : number = 0;
  count_saludo   : number = 0;


  constructor(private asvc : AnimationsService, private toastr: ToastrService, private _ele: ElementRef, private isvc: InteractionService) { 
    this.session = JSON.parse(localStorage.getItem('session'))
  }

  ngOnInit() {
    this.init()
  } 


  init(){

    this.isvc.messages.subscribe(res => {
      if(res.type === "clientEnterprise"){
        this.loading = true
        setTimeout(() => {
          this.renderResponseClient(res.data)
        },2000)
      }  

      if(res.type === "historial"){
        this.historial = res.data.mensj
      }

      if(res.type === "saludo"){
        this.count_saliendo = 0;
        if(this.count_saludo === 0){
          this.count_saludo++
          this.toastr.success('Ya esta en sesión con un usuario cliente','Aviso!')
        }
      }

      if(res.type === "exit"){
        this.count_saliendo++
        if(this.count_saliendo === 1){
          this.count_saludo = 0
          this.toastr.warning('El cliente se ha desconectado de la sesión','Información')
        }
      }
    })

    this.isvc.sendMsg({type:1, profile: this.session.profile, correo: this.session.correo, message: 'typeconnection'})
  }

  sendMessage(){

    let message1 = this._ele.nativeElement.querySelector('#entradaTexto').value
    console.log('entro para enviar el mesaje')
    this.isvc.sendMsg({message: "enterpriseClient",msg: message1})
  }

  renderResponseClient(data){

    const ruta_audio = environment.url+"animation/"+data.audio

    var html = `<audio controls id="audio" *ngIf="register">
                  <source src="${ruta_audio}" type="audio/mpeg">
                  Your browser does not support the audio tag.
                </audio>`
    
    var html_img = `<img src="${environment.url}/animation/${data.imagen}" width="50%" />`

    $('#tag_audio').empty()
    $('#tag_audio').html(html)
    $('#tag_animacion').html()
    $('#tag_animacion').html(html_img)

    this.loading = false

  }
     

  startRecord(){

    this.stop = false
    this.play = true
    this.audioChunks = [];
    this.rec.start();
  }

  stopRecord(){

    this.stop = true
    this.play = false
    this.rec.stop();

  }
  
  ngOnDestroy(){
    this.isvc.sendMsg({message: "saliendo"})
  }

}
