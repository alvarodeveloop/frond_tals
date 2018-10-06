import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AdminEnterpriseService } from '../../service/admin-enterprise.service'
import { Router } from '@angular/router'

declare var $ : any

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit, AfterViewChecked {

  registers : any

  constructor(private esvc: AdminEnterpriseService, private router: Router) { }

  ngOnInit() {
    this.init()
  }

  init(){
    this.esvc.get().subscribe(res => {
      this.registers = res

      if($.fn.DataTable.isDataTable('.data-table')){
        $('.data-table').DataTable().destroy()
      }

      $('.data-table').dataTable({
        data: this.registers,
        columns: [
        {"data": 'nombre'},
        {"data": 'rut'},
        {"data": 'correo'},
        {"data": 'telefono'},
        {"data": 'ceo'},
        {"data": 'estatusUser', "render": function(status){
          return status.name
        }},
        {"data": 'id', "render": function(data){
          var html = `<button class="btn btn-link btn_editar" title="Editar" data-toggle="tooltip">
                      <img src="../../../../assets/images/editar.png" width="30px"
                      </button>
                      <button class="btn btn-link btn_destroy" title="Eliminar" data-toggle="tooltip">
                      <img src="../../../../assets/images/eliminar.png" width="30px"
                      </button>
                      <button class="btn btn-link btn_publicity" title="Ver Publicidad" data-toggle="tooltip">
                      <img src="../../../../assets/images/publicidad.png" width="30px"
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

          $('td > .btn_publicity', row).bind('click', () => {
            self.viewPublicity(data);
          });

          return row;
        }
      })  
    })
  }

  editRegister(data){
    this.router.navigate(['/admin/enterprise/form/',data.id])
  }

  viewPublicity(data){
   this.router.navigate(['/admin/enterprise/publicity/',data.id]) 
  }

  deleteRegister(data: any){
    if(confirm('Esta seguro de querer eleminar este registro')){
      this.esvc.delete(data.id).subscribe(res => {
        this.init()
      },err => {
        alert('Ha ocurrido un error')
      })
    }
  }

  ngAfterViewChecked(){
    
  }

}
