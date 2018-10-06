import { Component, OnInit } from '@angular/core';

import { PublicityService } from '../../service/publicity.service'
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router'
import { Publicity } from '../../class/admin/publicity'
import { environment } from '../../../environments/environment'


declare var $ : any;

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  publicitys : Publicity[] = []

  constructor(private _router: Router, private psvc: PublicityService, private toastr: ToastrService) { }

  ngOnInit() {
    $('[tool="tooltip"]').tooltip()
    this.init()
  }

  init(){
    this.psvc.get().subscribe(res => {
      this.publicitys = res

      if($.fn.DataTable.isDataTable('.data-table')){
        $('.data-table').DataTable().destroy()
      }

      $('.data-table').dataTable({
        data: this.publicitys,
        columns: [
        {"data": 'image', "render" : function(image){
          return `<img src="${environment.url}publicity/${image}" width="80px" height="80px">`
        }},
        {"data": 'name'},
        {"data": 'type',"render": function(type){
          return type == 1 ? 'Impuesta' : 'Libre'
        }},
        {"data": "publicidades", "render": function(data){
          return data.length
        }},
        {"data": 'id', "render": function(data){
          var html = `<button class="btn btn-link btn_editar" title="Editar">
                      <img src="../../../../assets/images/editar.png" width="30px"
                      </button>
                      <button class="btn btn-link btn_destroy" title="Eliminar">
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

    },err => {
      alert(err.error.message)
    })
  }

  editRegister(data){
    this._router.navigate(['admin/publicity/form/',data.id])
  }

  deleteRegister(data){

    if(confirm('Esta seguro de querer eleminar este registro')){
      this.psvc.delete(data.id).subscribe(res => {
        this.toastr.success('Registro eliminado', 'Éxito!')
        this.init()
      },err => {
        this.toastr.error(err.error.message, 'Error!')
      })
    }
  }

}
