import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { AnimationsService } from '../../service/animations.service'
import { InteractionService } from '../../service/interaction.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'

declare var $ : any


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit, OnDestroy {

  EnterpriseOnline : any[]
  intervalVarible  : any
  token : any = localStorage.getItem('token')

  constructor(private isvc: InteractionService, private tostr: ToastrService, private router: Router){

  }
  ngOnInit(){

    this.init()
    this.intervalVarible =  this.getEnterpriseOnline()
  }

  init(){
    
    this.isvc.getEnterprise(this.token).subscribe(res => {
      this.EnterpriseOnline = res
      this.renderTableEnterprise()
    }, err => {
      this.tostr.error(err.error.message,'Error!')
    })

  }

  renderTableEnterprise(){
   if($.fn.DataTable.isDataTable('#table')){
     $('#table') .DataTable().destroy()
   }

   $('#table').dataTable({
        data: this.EnterpriseOnline,
        columns: [
        {"data": 'nombre'},
        {"data": 'correo'},
        {"data": 'telefono'},
        {"data": 'enterpriseonline', "render": function(data){

          let html = "";
          let datos = data[0]

          if(!datos.sordo_id){
            html = `<button class="btn btn-success btn_editar" title="Click para ver datos de la empresa" data-toggle="tooltip">
                      Conexión disponible&nbsp;&nbsp;
                      <i class="fa fa-check"></i>
                    </button>`
          }else{

            html = `<button class="btn btn-danger btn_editar" title="Click para ver datos de la empresa" data-toggle="tooltip">
                      Conexión Ocupada&nbsp;&nbsp;
                      <i class="fa fa-remove"></i>
                    </button>`
          }

          return html

        }}
        ],
        rowCallback: (row: Node, data: any[] | Object, index: number) => {
          const self = this;
          // Unbind first in order to avoid any duplicate handler
          // (see https://github.com/l-lin/angular-datatables/issues/87)
          $('td', row).unbind('click');
          $('td > .btn_editar', row).bind('click', () => {
            self.editRegister(data);
          });

          return row;
        }
      })  

  }

  editRegister(data){
    this.router.navigate(['/client/interaction/enterprise',data.id])
  }

  getEnterpriseOnline(){
    return window.setInterval(() => {
      this.init()
    },15000)
  }

  ngOnDestroy(){
    clearInterval(this.intervalVarible)
  }
}
