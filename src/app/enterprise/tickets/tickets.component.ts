import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Tickets } from '../../class/shared/tickets'
import { TicketsAdminService } from '../../service/tickets-admin.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets : Tickets[] = []

  constructor(private tsvc: TicketsAdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.init()
  }

  init(){
    this.tsvc.getClientTickets().subscribe(res => {
      this.tickets = res
      this.renderTable()
    }, err => {
      this.toastr.error(err.error.message,'Error!')
    })
  }

  renderTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      $('.data-table').DataTable().destroy()
    }

    $('.data-table').dataTable({
      data: this.tickets,
      columns: [
        {"data": "numero_ticket"},
        {"data": "motivo", "render": function(motivo){
          return motivo.name
        }},
        {"data": "motivoEstatus", "render": function(est){
          return "<span class='badge alert alert-warning'>"+est.name+"</span>"
        }},
        {"data": "visto", "render": function(v){
          return v ? "Visto" : "Aún no ha sido Visto"
        }},
        {"data": "id","render": function(id){
          var html = `<button class="btn btn-link btn_editar" title="Administrar Ticket" data-toggle="tooltip">
                      <img src="../../../../assets/images/editar.png" width="30px"
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

          return row;
      }
    })
  }

  editRegister(data){
    this.router.navigate(['/enterprise/tickets/manage/',data.id])
  }

}
