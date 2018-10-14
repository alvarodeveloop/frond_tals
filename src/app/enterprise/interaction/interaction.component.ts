import { Component, OnInit,ElementRef, OnDestroy } from '@angular/core';
import { AnimationsService } from '../../service/animations.service'
import { ToastrService } from 'ngx-toastr';
import { InteractionService } from '../../service/interaction.service'
import { environment } from '../../../environments/environment'
import { forkJoin } from 'rxjs'

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
  rate : boolean = false
  h: any 


  constructor(private asvc : AnimationsService, private toastr: ToastrService, private _ele: ElementRef, private isvc: InteractionService) { 
    this.session = JSON.parse(localStorage.getItem('session'))
  }

  ngOnInit() {
    this.init()

    window.speechSynthesis.onvoiceschanged = () => {
      var  voices = window.speechSynthesis.getVoices();
        for ( var i=0; i<voices.length; i++ ){
            if ( voices[i]['lang'] == 'es-CL'  ){
                this.h.voice = voices[i];
            }
        }
    };
  }


  init(){
    this.isvc.messages.subscribe(res => {
      if(res.type === "clientEnterprise"){
        this.loading = true
        setTimeout(() => {
          this.renderResponseClient(res.data)
          this.isvc.sendMsg({message: "historial"})
        },2000)
      }  

      if(res.type === "historial"){
        this.historial = res.data.data
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

    this.isvc.rateGet().subscribe(res => {
      this.rate = res.rate
    },err => {
      this.toastr.error('Ha ocurrido un error','Error1')
    })
  }

  sendMessage(){

    let message1 = this._ele.nativeElement.querySelector('#entradaTexto').value
    console.log('entro para enviar el mesaje')
    this.isvc.sendMsg({message: "enterpriseClient",msg: message1})
  }

  renderResponseClient(data){

    this.h = new SpeechSynthesisUtterance();
    this.h.lang = "es-CL";
    this.h.text = data

    speechSynthesis.speak(this.h);

    var html = `<button class="btn btn-primary speak">Reproducir Audio&nbsp;<i class="fa fa-play"></i></button>`
    
    var html_img = `<h4>${data}</h4>`

    $('#tag_audio').empty()
    $('#tag_audio').html(html)
    $('#tag_animacion').html()
    $('#tag_animacion').html(html_img)

    $('#tag_audio').on('click','.speak',() => {
      this.hablar(data)
    })

    this.loading = false

  }

  hablar(data){
    
    this.h = new SpeechSynthesisUtterance();
    this.h.lang = "es-CL";
    this.h.text = data

    speechSynthesis.speak(this.h);

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
    if(!this.rate){
      localStorage.setItem('rate',JSON.stringify({value: 1}))
    }
  }

}
