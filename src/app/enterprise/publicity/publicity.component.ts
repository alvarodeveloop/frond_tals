import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Validator, FormBuilder, FormGroup } from '@angular/forms'
import { Publicity } from '../../class/admin/publicity'

import { PublicityService } from '../../service/publicity.service'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  publicitys : any
  session : any

  constructor(private psvc: PublicityService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.session = JSON.parse(localStorage.getItem('session'))
    this.init()
  }

  init(){
    this.psvc.getEnterprisePublicity().subscribe(res => {
      this.publicitys = res
      this.renderDataTable()
    },err => {
      this.toastr.error(err.error.message)
    })
  }

  renderDataTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      $('.data-table').DataTable().destroy()
    }

    let self1 = this

    $('.data-table').dataTable({
        data: this.publicitys.publicempresa,
        columns: [
        {"data": 'publicidades', "render" : function(publi){
          return `<img src="${environment.url}publicity/${publi.image}" width="80px" height="80px">`
        }},
        {"data": 'publicidades', "render" : function(publi){
          return publi.name
        }},
        {"data": 'type',"render": function(type){
          return type == 1 ? 'Impuesta' : 'Libre'
        }},
        {"data": "statu", "render": function(data){
          return data ? "Activa" : "Desactivada"       
        }}, 
        {"data": 'id', "render": function(data){

          var html = `<button class="btn btn-link btn_editar" title="Editar">
                      <img src="../../../../assets/images/editar.png" width="30px"
                      </button>
                      `
                      
          if(self1.session.tipo_profile_id != 1){
            return html
          }else{
            return ""
          }

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
    this.router.navigate(['/enterprise/publicity/form/',data.id])
  }

  deleteRegister(data){
    if(confirm('Esta seguro de querer eliminar este registro?')){
      this.psvc.delete(data.id).subscribe(res => {
        this.toastr.success("Proceso completado",'Éxito!')
      }, err => {
        this.toastr.error(err.error.message,'Error!')
      })
    }
  }

}
