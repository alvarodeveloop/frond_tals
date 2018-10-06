import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator} from '@angular/forms'
import { Router} from '@angular/router'

import { SubscriptionService } from '../../service/subscription.service'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from '../../class/shared/subscription'

declare var $ : any

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  formSub : FormGroup
  subs : Subscription[]  = []

  constructor(private _fb: FormBuilder, private ssvc: SubscriptionService, private toastr: ToastrService, private router: Router) { 

  }

  ngOnInit() {
    this.init()
  }

  init(){
    this.ssvc.get().subscribe(res => {
      this.subs = res
      this.renderTable()
    },err => {
      this.toastr.error(err.error.message)
    })
  }

  renderTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      $('.data-table').DataTable().destroy()
    }

    $('.data-table').dataTable({
      data: this.subs,
      columns: [
        {"data": "titulo"},
        {"data": "periodo", "render": function(p){
          return p+" meses"
        }},
        {"data": "precio"},
        {"data": "subscripciones","render": function(sub){
          return sub.length
        }},
        {"data": "activo", "render" : function(act){
          return act ? "Activa" : "Desactivada"
        }},
        {"data": "id", "render": function(id){
          var html = `<button class="btn btn-link btn_editar" title="Editar" data-toggle="tooltip">
                      <img src="../../../../assets/images/editar.png" width="30px"
                      </button>
                      <button class="btn btn-link btn_destroy" title="Eliminar" data-toggle="tooltip">
                      <img src="../../../../assets/images/eliminar.png" width="30px"
                      </button>`
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

          $('td > .btn_destroy', row).bind('click', () => {
            self.deleteRegister(data);
          });
          return row;
      }
    })
  }

  editRegister(data){
    this.router.navigate(['/admin/subscription/form/',data.id])
  }

  deleteRegister(data){
    if(confirm('Esta seguro de querer eliminar este registro?')){
      this.ssvc.delete(data.id).subscribe(res => {
        this.toastr.success('Proceso Completado','Éxito')
        this.init()
      }, err => {
        this.toastr.error(err.error.message,'Error!')
      })
    }
  }
}
