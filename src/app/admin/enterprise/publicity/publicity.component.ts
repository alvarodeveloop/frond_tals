import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AdminEnterpriseService } from '../../../service/admin-enterprise.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment'
 
declare var $ : any

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  registers: any
  enterpriseName: String
  idRegister : string

  constructor(private toastr: ToastrService, 
              private routep: ActivatedRoute, 
              private router: Router, 
              private asvc: AdminEnterpriseService) { }

  ngOnInit() {
    this.idRegister = this.routep.snapshot.paramMap.get('id')
    if(this.idRegister){
      this.init(this.idRegister)
    }else{
      this.router.navigate(['/admin/enterprise'])
    }
  }

  init(id: string){
    this.asvc.getPublicity(id).subscribe(res => {
       this.registers = res
       this.enterpriseName = this.registers.publicempresa[0].empresas.nombre
       this.makeTable()
    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  makeTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      
      $('.data-table').DataTable().destroy()
      $('.data-table > tbody').empty()
    }

    let cont = 0

    $('.data-table').dataTable({
      data: this.registers.publicempresa,
      columns: [
        {"data": "publicidades","render" : function(publi){
          return publi.name
        }},
        {"data": "publicidades","render" : function(publi){
          return `<img src="${environment.url}/publicity/${publi.image}" width="80px">`
        }},
        {"data": "statu","render" : function(status){
          cont++
          var html = `
                      <div class="row">
                        <div class="custom-control custom-checkbox mb-5 text-center col-md-3 offset-md-4">
                          <input type="checkbox" ${status ? 'checked=""' : ''} class="custom-control-input change_status" id="changePassword${cont}" (click)="changeStatus()">
                          <label for="changePassword${cont}" class="custom-control-label">${status ? 'Activa' : 'Desactivada'}</label>
                        </div>
                      </div`
          return html
        }}
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
          const self = this;
          // Unbind first in order to avoid any duplicate handler
          // (see https://github.com/l-lin/angular-datatables/issues/87)
          $('td', row).unbind('click');
          $('td > .row > .custom-control > .change_status', row).bind('click', () => {
            self.changeStatus(data);
          });

          return row;
        }
    })
  }

  changeStatus(data){
    const datos = { statu: !data.statu }

    this.asvc.changeStatusPublicity(datos,data.id).subscribe(res => {
      this.toastr.success("Configuración realizada",'Éxito!')
      this.init(this.idRegister)
    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })

  }
}
