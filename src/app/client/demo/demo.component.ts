import { Component, OnInit, OnDestroy,OnChanges, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AnimationsService } from '../../service/animations.service'
import { InteractionService } from '../../service/interaction.service'
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs'
import { environment } from '../../../environments/environment'


declare var $ : any
declare var knn_image_classifier : any
declare var dl : any
declare var compatibility : any
declare var profiler: any
declare var dat : any
declare var jsfeat : any
declare var profiler : any

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy {

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
  btn_disabled : boolean  = false
  btn_disabled1 : boolean  = true
  count: number = 0
  backup : any = ""
  historial : any[] = []
  count_saliendo : number = 0;
  string_output  : string = ""
  rate : boolean = false
  token : any = localStorage.getItem('token')
  canvas : any
  webcam : any
  attempts: number = 0
  stat = new profiler();
  ctx : any
  options: any
  img_u8 : any

  constructor(
    private asvc : AnimationsService, 
    private toastr: ToastrService, 
    private isvc: InteractionService,
    private router: Router,
    private _router: ActivatedRoute,
    private _eleRef : ElementRef
    ) { 
    this.session = JSON.parse(localStorage.getItem('session'))
    this.idEnterprise = this._router.snapshot.paramMap.get('id')
    this.count_saliendo = 0;
  }

  ngOnInit() {

    this.appendVideo()
    this.init()

    //this.initFrame()
    // socket 
    var obj = {type:2, profile: this.session.profile, correo: this.session.correo, enterprise_id: this.idEnterprise, message: 'typeconnection'}
    this.sendWsMsg(obj)

    this.isvc.messages.subscribe(res => {

      if(res.type === "enterpriseClient"){
        setTimeout(() => {
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

  initFrame(){
    this.canvas = this._eleRef.nativeElement.querySelector('#canvas')
    this.webcam = this._eleRef.nativeElement.querySelector('#webcam')

    this.readyListener()

    this.webcam.addEventListener('loadeddata', this.readyListener.bind(this));

    compatibility.getUserMedia({video: true, audio: false}, (stream) =>  {
        try {
            this.webcam.src = compatibility.URL.createObjectURL(stream);
            this.webcam.addEventListener('playing', ()=> this.videoPlaying = true);
            this.webcam.addEventListener('paused', ()=> this.videoPlaying = false);
        } catch (error) {
            this.webcam.src = stream;
            this.webcam.addEventListener('playing', ()=> this.videoPlaying = true);
            this.webcam.addEventListener('paused', ()=> this.videoPlaying = false);
        }
        setTimeout(() =>{
          this.webcam.play();
        }, 500);
    }, function (error) {
        $('#canvas').hide();
        $('#log').hide();
        $('#no_rtc').html('<h4>WebRTC not available.</h4>');
        $('#no_rtc').show();
    });
  }

  readyListener(){
    this.findVideoSize()
  }

  findVideoSize(){
    if(this.webcam.videoWidth > 0 && this.webcam.videoHeight > 0) {
        this.webcam.removeEventListener('loadeddata', this.readyListener);
        this.onDimensionsReady(this.webcam.videoWidth, this.webcam.videoHeight);
    } else {
        if(this.attempts < 10) {
            this.attempts++;
            setTimeout(this.findVideoSize.bind(this), 200);
        } else {
            this.onDimensionsReady(227, 227);
        }
    }
  }

  onDimensionsReady(width:number, height: number){

      var canvasWidth  = this.canvas.width;
      var canvasHeight = this.canvas.height;
      this.ctx = this.canvas.getContext('2d');

      this.ctx.fillStyle = "rgb(0,255,0)";
      this.ctx.strokeStyle = "rgb(0,255,0)";

      this.img_u8 = new jsfeat.matrix_t(227, 227, jsfeat.U8C1_t);

      //var gui = new dat.GUI();

      var demo_opt = function(){
          this.blur_radius = 2;
          this.low_threshold = 20;
          this.high_threshold = 50;
      }

      this.options = new demo_opt()

      //gui.add(this.options, 'blur_radius', 0, 4).step(1);
      //gui.add(this.options, 'low_threshold', 1, 127).step(1);
      //gui.add(this.options, 'high_threshold', 1, 127).step(1);

      this.stat.add("grayscale");
      this.stat.add("gauss blur");
      this.stat.add("canny edge");
      compatibility.requestAnimationFrame(this.tick.bind(this));

  }

  tick() {
    compatibility.requestAnimationFrame(this.tick.bind(this));

    this.stat.new_frame();

    if (this.webcam.readyState === this.webcam.HAVE_ENOUGH_DATA) {
        this.ctx.drawImage(this.webcam, 0, 0, 227, 227);
        var imageData = this.ctx.getImageData(0, 0, 227, 227);

        this.stat.start("grayscale");
        jsfeat.imgproc.grayscale(imageData.data, 227, 227, this.img_u8);
        this.stat.stop("grayscale");

        var r = this.options.blur_radius|0;
        var kernel_size = (r+1) << 1;

        this.stat.start("gauss blur");
        jsfeat.imgproc.gaussian_blur(this.img_u8, this.img_u8, kernel_size, 0);
        this.stat.stop("gauss blur");

        this.stat.start("canny edge");
        jsfeat.imgproc.canny(this.img_u8, this.img_u8, this.options.low_threshold|0, this.options.high_threshold|0);
        this.stat.stop("canny edge");

        // render result back to canvas
        var data_u32 = new Uint32Array(imageData.data.buffer);
        var alpha = (0xff << 24);
        var i = this.img_u8.cols*this.img_u8.rows, pix = 0;
        while(--i >= 0) {
            pix = this.img_u8.data[i];
            data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
        }

        this.ctx.putImageData(imageData, 0, 0);

        var image = document.createElement('img')
            image.crossOrigin = "Anonymous"
            image.width = 227
            image.height = 227
            image.src = this.ctx.canvas.toDataURL("image/png");

            image.onload = async () => {
              this.animate()
            }
    }
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

  erase_character(){
    this.string_output = this.string_output.substring(0,this.string_output.length -1)
  }

  clean_string(){
   this.string_output = "" 
  }

  send(){
    if(this.string_output.length > 0){
      this.sendWsMsg({ message: "clientEnterprise",  data: this.string_output})
      setTimeout(() => {
        this.sendWsMsg({'message': "historial"})
      },500)
      this.stop()
    }else{
       this.toastr.error('Debe crear una oración mediante la cámara')
    }
  }


  init(){

      var self = this

      const imagesInteraction = this.asvc.getImagesInteraction()
      const validateRate      = this.isvc.rateGet(this.token)
      forkJoin([
        imagesInteraction,
        validateRate
      ]).subscribe( async res => {

        this.registers = res[0]
        this.rate = res[1].rate

        if(this.registers.length > 0){  

          if (dl == null) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }

          this.knn = new knn_image_classifier.KNNImageClassifier(self.registers.length, 30);
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
              image.src = imageUrl

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
            })
          })

        }

      },err => {
        this.toastr.error(err.error.message,'Error!')
      })
  }

  start(){
    
    this.video.play();
    this.videoPlaying = true
    this.btn_disabled = true
    this.btn_disabled1 = false;
    this.timer = requestAnimationFrame(this.animate.bind(this));
    //this.tick()
  }

  stop(){
    this.video.pause();
    this.videoPlaying = false
    this.btn_disabled1 = true;
    this.btn_disabled = false;
    //compatibility.cancelAnimationFrame(this.tick)
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
          
          if(this.count === 1 && this.classPredilect !== this.backup){
            if(this.arreglo_elements[indexClass].texto === "_vacio"){
              if(this.string_output !== ""){
                this.string_output+= " "
              }
            }else if(this.arreglo_elements[indexClass].texto === "_nada"){
              
            }else{
              let last_letter = this.string_output.substring(this.string_output.length -1)
              if(last_letter !== this.arreglo_elements[indexClass].texto){
                this.string_output+= this.arreglo_elements[indexClass].texto
              }
            }

            this.count = 0
          }else if(this.count === 1){
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
    if(!this.rate){
      localStorage.setItem('rate',JSON.stringify({value: 1}))
    }
  }

}
