import { Component, OnInit } from '@angular/core';
import { Clients } from '../../class/enterprise/clients'
import { Router } from '@angular/router'
import { ClientsService } from '../../service/clients.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Clients[] = []

  constructor(private router: Router, private csvc: ClientsService, private tostr: ToastrService) { }

  ngOnInit() {  
    this.init()
  }

  init(){
    this.csvc.get().subscribe(res => {
      this.clients = res
      this.renderTable()
    }, err => {
      this.tostr.error(err.error.message,'Error!')
    })
  }

  renderTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      $('.data-table').DataTable().destroy()
    }

    $('.data-table').dataTable({
      data: this.clients,
      columns: [
        {"data": "nombre"},
        {"data": "correo"},
        {"data": "statu_id", "render": function(statu_id){
          return statu_id == 1 ? "Activo" : "Desactivado"
        }},
        {"data": "statu_id", "render": function(statu_id){
          return statu_id == 1 ? "Online" : "Off-line"
        }},
        {"data": "id", "render": function(id){
          return `<button class="btn btn-link btn_editar" title="Editar" data-toggle="tooltip">
                      <img src="../../../../assets/images/editar.png" width="30px"
                      </button>
                      <button class="btn btn-link btn_destroy" title="Eliminar" data-toggle="tooltip">
                      <img src="../../../../assets/images/eliminar.png" width="30px"
                      </button>`;
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
    this.router.navigate(['/enterprise/clients/form/',data.id])
  }

  deleteRegister(data){
    if(confirm('Esta seguro que desea eliminar este registro?')){
      this.csvc.delete(data.id).subscribe(res => {
        this.tostr.success('Proceso Completado','Éxito!')
        this.init()
      }, err => {
        this.tostr.error(err.error.message,'Error!')
      })
    }
  }

}
