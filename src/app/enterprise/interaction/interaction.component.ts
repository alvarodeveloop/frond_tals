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
  token : any = localStorage.getItem('token')
  escuchandoMicrofono: boolean = false
  recognoze : any
  escuchando : boolean = false
  

  constructor(private asvc : AnimationsService, private toastr: ToastrService, private _ele: ElementRef, private isvc: InteractionService) { 

    (<any>window).SpeechRecognition = (<any>window).webkitSpeechRecognition || (<any>window).SpeechRecognition;

    this.recognoze = new (<any>window).SpeechRecognition();

    this.recognoze.continuous = true; 
    this.recognoze.lang = 'es-ES'; // idioma
    this.recognoze.interimResults = true; // nos da resultados aunque no sean finales
  }

  ngOnInit() {

    this.session = JSON.parse(localStorage.getItem('session'))
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
        setTimeout(() => {
          var objDiv = this._ele.nativeElement.querySelector(".div_chat");
          objDiv.scrollTop = objDiv.scrollHeight;
        },500)
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

    this.isvc.rateGet(this.token).subscribe(res => {
      this.rate = res.rate
    },err => {
      this.toastr.error('Ha ocurrido un error','Error1')
    })
  }

  initSpeakers(){ 

    var btn = this._ele.nativeElement.querySelector('button.recog')

    // Funcion empezar / parar
    if( this.escuchando == false ){
        this.recognoze.start();
        this.escuchando = true;
        btn.innerHTML = 'Parar la escucha';
        this.escuchandoMicrofono = true
    }else{
        this.escuchandoMicrofono = false
        this.recognoze.stop()
        this.escuchando = false;
        btn.innerHTML = 'Reconocer Voz&nbsp;<i class="fa fa-comment"></i>';
    }
    // Eventos del Recognizer
    this.recognoze.onresult = (event) => {
      console.log(event,'aqui el evento que frao')
      for( var i=event.resultIndex; i < event.results.length; i++ ){
          if( event.results[i].isFinal ){
              // Si considera que el usuario ya no va a hablar mas
              // o que la frase ha terminado
              $('#entradaTexto').text(event.results[i][0].transcript)
              this.initSpeakers.bind(this);
          }else{
              // Si considera que el usuario va a seguir hablando
              $('#entradaTexto').text(event.results[i][0].transcript)
          }
      }
    }
  }

  sendMessage(){

    let message1 = this._ele.nativeElement.querySelector('#entradaTexto').value
    console.log('entro para enviar el mesaje')
    this.isvc.sendMsg({message: "enterpriseClient",msg: message1})
    setTimeout(() => {
        this.isvc.sendMsg({message: "historial"})
    },500)
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
