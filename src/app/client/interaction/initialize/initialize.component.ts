import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AnimationsService } from '../../../service/animations.service'
import { InteractionService } from '../../../service/interaction.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment'

declare var $ : any
declare var knn_image_classifier : any
declare var dl : any

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.css']
})
export class InitializeComponent implements OnInit, OnDestroy {

  /*route1 : string = "../../../../assets/images/cat.jpg"
  route2 : string = "../../../../assets/images/dog1.jpg"
  route3 : string = "../../../../assets/images/dog2.jpg"
  route4 : string = "../../../../assets/images/ejemplo1.jpg"
  route5 : string = "../../../../assets/images/ejemplo2.jpg"*/

  videoPlaying : boolean = false
  video : any
  knn : any
  timer: any
  registers: any[] = []
  arreglo_elements : any[] = []
  session : any
  idEnterprise: string = ""
  loading: boolean = false
  classPredilect : number = 0
  btn_disabled : boolean  = true
  count: number = 0
  backup : any = ""
  historial : any[] = []
  count_saliendo : number = 0;

  constructor(
    private asvc : AnimationsService, 
    private toastr: ToastrService, 
    private isvc: InteractionService,
    private router: Router,
    private _router: ActivatedRoute) { 
    this.session = JSON.parse(localStorage.getItem('session'))
    this.idEnterprise = this._router.snapshot.paramMap.get('id')
    this.count_saliendo = 0;
  }

  ngOnInit() {

    this.appendVideo()
    this.init()

    // socket 
    var obj = {type:2, profile: this.session.profile, correo: this.session.correo, enterprise_id: this.idEnterprise, message: 'typeconnection'}
    this.sendWsMsg(obj)

    this.isvc.messages.subscribe(res => {

      if(res.type === "enterpriseClient"){
        setTimeout(() => {
          this.start()
          this.renderResponseClient(res.data.data)
          this.sendWsMsg({'message': "historial"})
        },2500)        
      }

      if(res.type === "historial"){
        this.historial = res.data.mensj
      }

      if(res.type === "exit"){
        this.count_saliendo++
        if(this.count_saliendo === 1){
          this.toastr.warning('La empresa se ha desconectado de la sesión','Información')
          this.router.navigate(['/client/interaction'])
        }
      }
    })

  }  

  sendWsMsg(data){
    this.isvc.sendMsg(data)
  }

  renderResponseClient(data){

    console.log(data)
    const ruta_audio = environment.url+"animation/"+data.audio

    var html = `<h3>${data.texto}</h3>`
    
    var html_img = `<img src="${environment.url}animation/${data.imagen}" width="50%" />`

    $('#tag_audio').empty()
    $('#tag_audio').html(html)
    $('#tag_animacion').html()
    $('#tag_animacion').html(html_img)

    this.loading = false

    this.btn_disabled = false

  }


  init(){

      var self = this

      this.asvc.getImagesInteraction().subscribe( async (res) => {

        this.registers = res

        if(this.registers.length > 0){  

          if (dl == null) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }

          this.knn = new knn_image_classifier.KNNImageClassifier(self.registers.length, 3);
          await this.knn.load();

          var con = 0;
          var con1 = 0;


          this.registers.forEach( async function(i,e){
            i.animationImg.forEach(async function(i2,e2){

              var imageUrl = `${environment.url}animationImagen/${i2.ruta_imagen}` 

              var image = document.createElement('img')
              image.crossOrigin = "Anonymous"
              image.width = 227
              image.height = 227
              image.id = `image_${con1}`
              image.dataset.id_animacion = `${con}`

              image.onload = async () => {
                var image_pixel = dl.fromPixels(image)
                await self.knn.addImage(image_pixel, e);
                
                if(e2 + 1 == i.animationImg.length){
                  self.arreglo_elements.push(self.registers[e])
                }

                if(e + 1  == self.registers.length){
                  if(e2 + 1 == i.animationImg.length){

                    /*var image_pixel2;
                    
                    image_pixel2 = dl.fromPixels(dog2)

                    const prediction = await self.knn.predictClass(image_pixel2);
                    const indexClass = prediction.classIndex
                    console.log(prediction)
                    console.log(self.registers[indexClass])

                    alert(prediction.classIndex+1) */

                    self.start()
                  }
                }
              }
              image.src = imageUrl
            })
          })
          
          //$('#result').text('Predicted to be class '+)

        }
        
      }, err => {
        this.toastr.error(err.error.message,'Error!')
      })
  }


  appendVideo(){
    this.video = document.createElement('video');
    this.video.setAttribute('autoplay', '');
    this.video.setAttribute('playsinline', '');    

    $('#div_camera').append(this.video)
    //document.body.appendChild(this.video);

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then((stream) => {
      this.video.srcObject = stream;
      this.video.width = 227;
      this.video.height = 227;

      this.video.addEventListener('playing', ()=> this.videoPlaying = true);
      this.video.addEventListener('paused', ()=> this.videoPlaying = false);
    })
  }

  start(){
    
    this.video.play();
    this.videoPlaying = true
    this.animate()
    this.btn_disabled = true

    this.timer = requestAnimationFrame(this.animate.bind(this));
  }

  stop(){
    this.video.pause();
    this.videoPlaying = false
    
    cancelAnimationFrame(this.timer);

  }

  animate(){

    if(this.videoPlaying){
      // Get image data from video element
      const image = dl.fromPixels(this.video);
      
      // If any examples have been added, run predict
      const exampleCount = this.knn.getClassExampleCount();
      if(Math.max(...exampleCount) > 0){
        this.knn.predictClass(image)
        .then((res)=>{
          this.count++
          const indexClass = res.classIndex
          this.classPredilect = indexClass
          
          if(this.count === 20 && this.classPredilect === this.backup){

            let objSend = this.arreglo_elements[indexClass]

            this.sendWsMsg({ message: "clientEnterprise",  data: objSend})
            this.count = 0
            this.stop()
            this.loading = true
            this.btn_disabled = true
          }else if(this.count === 20){
            this.count = 0
          }
          
          this.backup = indexClass

        })
        // Dispose image when done
        .then(()=> image.dispose())
      } else {
        image.dispose()
      }
    }
    this.timer = requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(){
    this.stop()
    this.sendWsMsg({message: "saliendo"})
  }

}
