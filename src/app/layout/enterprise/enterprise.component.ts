import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { InteractionService } from '../../service/interaction.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit,AfterViewChecked,OnDestroy {

  loading: Boolean = true
  userName: String = ''
  interval : any

  constructor(private _router: Router, private isvc: InteractionService, private toastr: ToastrService) { 

    window.onbeforeunload = () => {
      if(localStorage.getItem('recarga')){
        localStorage.removeItem('recarga')
      }
    }
    
  }

  sendRate(val: number){
    let obj = { rate : val }

    this.isvc.sendRate(obj).subscribe(res => {
      this.toastr.success('Gracias por ayudarnos a mejorar','Éxito!')
      localStorage.removeItem('rate')
      $('#modal_rate').modal('hide')
      clearInterval(this.interval)
    },err => {
      this.toastr.error('Ha ocurrido un error','Error')
    })

  }

  ngOnInit() {
    var session = JSON.parse(localStorage.getItem('session'))
    this.userName = session.nombre
    this.initInterval()
  }

  initInterval(){

    this.interval = window.setInterval(() => {
      if(localStorage.getItem('rate')){
        $('#modal_rate').modal('show')
      }
    },5000)
        
  }
        

  ngAfterViewChecked(){
    setTimeout( () => {
      this.loading = false
    },3000)
  }

  logout(){
     localStorage.removeItem('token')
     localStorage.removeItem('session')
     this._router.navigate(['/login'])
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
