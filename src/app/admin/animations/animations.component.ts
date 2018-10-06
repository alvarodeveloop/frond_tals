import { Component, OnInit } from '@angular/core';
import { AnimationsService } from '../../service/animations.service'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { ToastrService } from 'ngx-toastr';

declare var $ : any

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

  register : any

  constructor(private router: Router, private asvc: AnimationsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.init()
  }

  init(){
    this.asvc.get().subscribe(res => {
      this.register = res
      this.renderTable()
    }, err => {
      this.toastr.error(err.error.message,'Éxito!')
    })
  }

  renderTable(){
    if($.fn.DataTable.isDataTable('.data-table')){
      $('.data-table').DataTable().destroy()
    }

    $('.data-table').dataTable({
      data: this.register,
      columns: [
        {"data": "texto"},
        {"data": "animationImg", "render": function(img){
          return img.length
        }},
        {"data": "imagen", "render": function(img){
          var html = ""
          if(img){
            html = `<img src="../../../../assets/images/check-mark-green.png" width="30px alt="no hay imagen"/>`
          }else{
            html = `<img src="../../../../assets/images/cross.png" width="30px alt="no hay imagen"/>`
            
          }

          return html
        }},
        {"data": "texto", "render": function(text){
          var html = ""
          if(text){
            html = `<img src="../../../../assets/images/check-mark-green.png" width="30px alt="no hay imagen"/>`
          }else{
            html = `<img src="../../../../assets/images/cross.png" width="30px alt="no hay imagen"/>`
          }
         
          return html
        }},
        {"data": "audio", "render": function(audio){
          
          var html = ""
          if(audio){
            html = `<img src="../../../../assets/images/check-mark-green.png" width="30px alt="no hay imagen"/>`
          }else{
            html = `<img src="../../../../assets/images/cross.png" width="30px alt="no hay imagen"/>`
          }
          
          return html
        }},
        {"data": "activo", "render": function(act){
          return act ? "Activo" : "Desactivado"
        }},
        {"data": "id", "render": function(id){
          var html = `<button class="btn btn-link btn_editar" title="Administrar">
                      <img src="../../../../assets/images/editar.png" width="30px />"
                      </button>
                      <button class="btn btn-link btn_destroy" title="Eliminar">
                      <img src="../../../../assets/images/eliminar.png" width="30px" />
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
    this.router.navigate(['/admin/animations/manage/',data.id])
  }

  deleteRegister(data){
    if(confirm('Esta seguro de querer eleminar este registro')){
      this.asvc.delete(data.id).subscribe(res => {
        this.toastr.success('Registro eliminado', 'Éxito!')
        this.init()
      },err => {
        this.toastr.error(err.error.message, 'Error!')
      })
    }
  }

}
