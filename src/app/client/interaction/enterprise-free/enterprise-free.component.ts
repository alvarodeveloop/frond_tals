import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, forkJoin } from 'rxjs'
import { Router, ActivatedRoute} from '@angular/router'
import { InteractionService } from '../../../service/interaction.service'
import { PublicityService } from '../../../service/publicity.service'

import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment'

declare var $ : any

@Component({
  selector: 'app-enterprise-free',
  templateUrl: './enterprise-free.component.html',
  styleUrls: ['./enterprise-free.component.css']
})
export class EnterpriseFreeComponent implements OnInit {

  enterpriseId : string  = ""
  enterprise   : any
  btn_disabled : boolean = false
  route_btn    : string  = "../../../../../assets/images/conecctionbtn.png"
  publicity    : any
  constructor(
    private router: Router, 
    private _router: ActivatedRoute,
    private toastr: ToastrService, 
    private isvc: InteractionService,
    private psvc: PublicityService
    )
  {
    this.enterpriseId = this._router.snapshot.paramMap.get('id')
  }

  ngOnInit(){
    this.init()
  }

  init(){
    if(this.enterpriseId){

      const enterpriseObservable = this.isvc.getEnterpriseById(this.enterpriseId)
      const publicity            = this.psvc.getEnterprisePublicityActive(this.enterpriseId)
      //const publicityObservable  = this.psvc.getEnterprisePublicity(this.enterpriseId)
      forkJoin([
        enterpriseObservable,
        publicity
      ])
      .subscribe(res => {
        this.enterprise = res[0][0]
        this.publicity  = res[1]
        this.btn_disabled = this.enterprise.enterpriseonline[0].sordo_id ? false : true

        this.renderPublicity()
      }, err => {
        this.toastr.error(err.error.message,'Error!')
        this.router.navigate(['/client/interaction']);
      })
    }else{
      this.router.navigate(['/client/interaction']);
    }
  }

  renderPublicity(){
    let html = `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">`
    let con  = 0
    let active = ""

    console.log(this.publicity,'aqui')

    this.publicity.publicempresa.forEach((i,e) => {
      if(con === 0){
        active = "active"
      }else{
        active = ""
      }

      html += `<div class="carousel-item ${active}">
                  <img class="d-block w-100" src="${environment.url}publicity/${i.publicidades.image}" alt="First slide" style="height: 250px">
               </div>`
      con++

    })

    html+= `</div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>`
    
    $('#div_carrousel').html(html)
  }
}
