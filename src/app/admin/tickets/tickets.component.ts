import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ToastrService } from 'ngx-toastr';
import { TicketsAdminService } from '../../service/tickets-admin.service'

import { Tickets } from '../../class/shared/tickets'

declare var $ : any

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  registers: Tickets[] = []

  constructor(private tsvc: TicketsAdminService, private toastr: ToastrService, private router: Router){ }

  ngOnInit() {
    this.init()
  }

  init(){
    this.tsvc.get().subscribe(res => {
      this.registers = res
      console.log(res)
      if($.fn.DataTable.isDataTable('.data-table')){
        $('.data-table').DataTable().destroy()
      }

      $('.data-table').dataTable({
        data: this.registers,
        columns: [
          {"data": "numero_ticket"},
          {"data": "userTicket","render": function(empresa){
            return empresa.nombre
          }},
          {"data": "motivo", "render": function(motivo){
            return motivo.name
          }},
          {"data": "motivoEstatus", "render": function(estado){
             return '<span class="badge alert alert-warning">'+estado.name+'</span>'
          }},
          {"data": "visto", "render": function(visto){
            return visto ? "Revisado" : "Nuevo"
          }},
          {"data": "id", "render": function(id){
            var html = `<button class="btn btn-link btn_editar" title="Administrar Ticket" data-toggle="tooltip">
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
            self.adminTicket(data);
          });

          $('td > .btn_destroy', row).bind('click', () => {
            self.deleteTicket(data);
          });

          return row;
        }
      })
    },err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  truncateTickets(){
    this.tsvc.truncateTickets().subscribe(res => {
      this.toastr.success('Procesado completado','Éxito')
    },err => {
      this.toastr.error(err.error.message,'Erro!')
    })
  }

  adminTicket(data){
    this.router.navigate(['/admin/tickets/manage/',data.id])
  }

  deleteTicket(data){
    if(confirm('Esta seguro de querer eliminar este registro?')){
      this.tsvc.deleteTicket(data.id).subscribe(res => {
        this.toastr.success('Procesado completado','Éxito')
        this.init()
      },err => {
        this.toastr.error(err.error.message,'Erro!')
      })
    }
  }
}
