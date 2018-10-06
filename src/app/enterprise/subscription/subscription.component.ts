import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '../../service/subscription.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { Subscription } from '../../class/shared/subscription'

declare var $ : any

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subs : any

  constructor(private _fb: FormBuilder, private toastr: ToastrService, private router: Router, private ssvcs: SubscriptionService) { }

  ngOnInit() {
    this.init()
  }


  init(){
    this.ssvcs.getSubscriptionActive().subscribe(res => {
      this.subs = res
      this.renderCards()
    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  renderCards(){
    let html = ""
    let con = 0
    this.subs.forEach(function(i,e){
      
      if(con === 0){
        html += "<div class='row clearfix'>"
      }

      html+=`
      <div class="col-lg-4 col-md- col-sm-4 mb-30">
        <div class="card box-shadow">
          <img class="card-img-top" src="../../../assets/images/img2.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title weight-500">${i.titulo}</h5>
            <p class="card-text">${i.descripcion}</p>
            <p><b>Precio:</b>&nbsp;&nbsp;<span class="badge badge-primary" style="font-size: 16px;">${i.precio}$</span></p>
            <p><b>Duración:</b>&nbsp;&nbsp;${i.periodo+" meses"}</p>
            <a href="#" class="btn btn-danger btn-block">Pagar</a>
          </div>
        </div>
      </div>`
      
      con++

      if(con === 3){
        con = 0
        html +="</div>"
      }
    })

    if(con > 0 && con < 4){
      html+="</div>"
    }

    $('#div_cards').html(html)
  }
}
