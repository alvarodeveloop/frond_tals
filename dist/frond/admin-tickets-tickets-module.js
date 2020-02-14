(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-tickets-tickets-module"],{

/***/ "./src/app/admin/tickets/manage/manage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/tickets/manage/manage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/tickets/manage/manage.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/tickets/manage/manage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4\">\r\n      <h3 class=\"text-center\">Detalles del Ticket</h3>\r\n      <br>\r\n      <ul class=\"list-group-flush\">\r\n        <li class=\"list-group-item-text\"><b>Número:</b>&nbsp;&nbsp;<span class=\"alert alert-warning\">{{ validate ? ticketManage.numero_ticket : '' }}</span></li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Motivo:</b> {{ validate ? ticketManage.motivo.name : '' }}</li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Descripción:</b> {{ validate ? ticketManage.description : '' }}</li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Usuario:</b> {{ validate ? ticketManage.userTicket.nombre : '' }}</li>\r\n        <br>\r\n        <li class=\"list-group-item-text\"><b>Fecha de Inicio:</b> {{ validate ? (ticketManage.createdAt | date: 'dd-MM-yyyy HH:MM:SS' ): '' }}</li>\r\n        <br>\r\n        <li class=\"list-group-item-text\"><b>Estatus:</b>&nbsp;&nbsp;\r\n          <select name=\"\" id=\"\" class=\"form-control\" (change)=\"changeStatus($event)\">\r\n            <option [value]=\"item.id\" [selected]=\"item.id == ticketManage.statu_id\" *ngFor=\"let item of arrayStatus\">{{ item.name }}</option>\r\n          </select>\r\n      </ul>\r\n      <br/>\r\n      <button class=\"btn btn-block btn-outline-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal_cuenta\">\r\n        Agregar Mensaje&nbsp;<i class=\"fa fa-plus\"></i>\r\n      </button>\r\n      <br/>\r\n      <p class=\"text-center\"><a routerLink=\"/admin/tickets\">Regresar&nbsp;<i class=\"fa fa-arrow-left\"></i></a></p>\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <h3 class=\"text-center\">Mensajes</h3>\r\n      <br/>\r\n      <div class=\"row\" *ngIf=\"visible\">\r\n        <div class=\"col-md-4 col-sm-4\">\r\n          <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-8 text-center\">\r\n          <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"!visible\">\r\n        <div class=\"col-md-12 col-sm-12 text-center\" id=\"div_not_visible\">\r\n          <p class=\"text-center\">No hay mensajes en este ticket</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"modal_cuenta\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header login-header\">\r\n              <h4 class=\"modal-title\">Escriba su mensaje&nbsp;<i class=\"fa fa-pencil\"></i></h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n          </div>\r\n          <form [formGroup]=\"formAnsswer\" action=\"\" (ngSubmit)=\"onSubmit(formAnsswer)\" id=\"form_register\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                  <textarea name=\"description\" id=\"description\" rows=\"2\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" class=\"form-control\"></textarea>\r\n                  <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.description.errors.required\">Debe introducir una respuesta</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-md-5 col-sm-5\">\r\n                  <input type=\"file\" name=\"file_answer\" id=\"file_answer\" accept=\"\" multiple=\"\">\r\n                </div>\r\n              </div>\r\n            </div><!-- fin modal-body -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-success\">Grabar</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n            </div>\r\n          </form>\r\n      </div><!-- fin modal-content -->\r\n  </div><!-- fin modal-dialog -->\r\n</div> <!-- fin modal -->"

/***/ }),

/***/ "./src/app/admin/tickets/manage/manage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/tickets/manage/manage.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/tickets-admin.service */ "./src/app/service/tickets-admin.service.ts");
/* harmony import */ var _service_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/master.service */ "./src/app/service/master.service.ts");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageComponent = /** @class */ (function () {
    function ManageComponent(tsvc, toastr, router, _router, _fb, _ele, msvc) {
        this.tsvc = tsvc;
        this.toastr = toastr;
        this.router = router;
        this._router = _router;
        this._fb = _fb;
        this._ele = _ele;
        this.msvc = msvc;
        this.validate = false;
        this.visible = true;
        this.submitted = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var id = this._router.snapshot.paramMap.get('id');
        this.idTicket = id;
        if (id) {
            this.initForm();
            this.init(id);
        }
        else {
            this.toastr.error('Petición incorrecta', 'Error!');
            this.router.navigate(['/admin/tickets']);
        }
    };
    ManageComponent.prototype.init = function (id) {
        var _this = this;
        var manage = this.tsvc.getManageTicket(id);
        var statusTicket = this.msvc.getStatus(2);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            manage,
            statusTicket
        ])
            .subscribe(function (res) {
            _this.ticketManage = res[0][0];
            if (_this.ticketManage) {
                _this.validate = true;
                _this.renderMessages();
            }
            _this.arrayStatus = res[1];
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
        this.tsvc.getManageTicket(id).subscribe(function (res) {
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent.prototype.renderMessages = function () {
        var _this = this;
        var html = "";
        var navs = "";
        var con = 0;
        var session = JSON.parse(localStorage.getItem('session'));
        this.ticketManage.ticketResticket.forEach(function (i, e) {
            var name = "";
            if (i.user_id == 1 && session.profile == 1) {
                name = "Usted <br/> " + moment_moment__WEBPACK_IMPORTED_MODULE_7__(i.createdAt).format('DD-MM-YYYY HH:MM:SS');
            }
            else if (i.user_id == 1 && session.profile != 1) {
                name = "Administrador <br/> " + moment_moment__WEBPACK_IMPORTED_MODULE_7__(i.createdAt).format('DD-MM-YYYY HH:MM:SS');
            }
            else if (i.user_id != 1 && session.profile != 1) {
                name = "Usted <br/> " + moment_moment__WEBPACK_IMPORTED_MODULE_7__(i.createdAt).format('DD-MM-YYYY HH:MM:SS');
            }
            else if (i.user_id != 1 && session.profile == 1) {
                name = _this.ticketManage.userTicket.nombre + " <br/> " + moment_moment__WEBPACK_IMPORTED_MODULE_7__(i.createdAt).format('DD-MM-YYYY HH:MM:SS');
            }
            var active = con === 0 ? "active" : "";
            var show_active = con === 0 ? "show active" : "";
            navs += "<a class=\"nav-link " + active + "\" id=\"" + con + "\" data-toggle=\"pill\" href=\"#div" + con + "\" role=\"tab\" aria-controls=\"v-pills-" + con + "\" aria-selected=\"true\">" + name + "</a>";
            html += "<div class=\"tab-pane fade " + show_active + "\" id=\"div" + con + "\" role=\"tabpanel\" aria-labelledby=\"\">" + i.description + "</div>";
            con++;
        });
        if (this.ticketManage.ticketResticket.length > 0) {
            this.visible = true;
            setTimeout(function () {
                $('#v-pills-tab').html(navs);
                $('#v-pills-tabContent').html(html);
            }, 500);
        }
        else {
            this.visible = false;
        }
    };
    ManageComponent.prototype.initForm = function () {
        this.formAnsswer = this._fb.group({
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idTicket: [this.idTicket]
        });
    };
    Object.defineProperty(ManageComponent.prototype, "f", {
        get: function () { return this.formAnsswer.controls; },
        enumerable: true,
        configurable: true
    });
    ManageComponent.prototype.changeStatus = function (e) {
        var _this = this;
        var update = { statu_id: e.target.value };
        this.tsvc.updateTicket(update, this.idTicket).subscribe(function (res) {
            _this.toastr.success('Status cambiado', 'Éxito!');
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var datos = JSON.parse(JSON.stringify(data.value));
        var formData;
        var file = this._ele.nativeElement.querySelector('#file_answer').files[0];
        this.submitted = true;
        if (this.formAnsswer.invalid) {
            return;
        }
        if (file !== undefined) {
            var formData1 = new FormData(this._ele.nativeElement.querySelector('#form_register'));
            formData1.append('description', datos.description);
            formData1.append('idTicket', this.idTicket);
            formData1.append('file_answer', file, 'file_answer');
            formData = formData1;
        }
        else {
            formData = datos;
        }
        this.tsvc.saveResponseTicket(formData).subscribe(function (res) {
            _this.toastr.success('Respuesta almacenada', 'Éxito');
            _this.init(_this.idTicket);
            _this.initForm();
            _this.submitted = false;
            $('#modal_cuenta').modal('hide');
        }, function (err) {
            $('#modal_cuenta').modal('hide');
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/admin/tickets/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/admin/tickets/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [_service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_5__["TicketsAdminService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _service_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/admin/tickets/tickets.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/tickets/tickets.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/tickets/tickets.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/tickets/tickets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-5 text-center offset-md-3\">\r\n      <h3>Tickets Registrados</h3> \r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4 pull-right\">\r\n      <button type=\"button\" class=\"btn btn-danger\" style=\"border-radius: 100%\" title=\"Vaciar Tabla\" (click)=\"truncateTickets()\" data-toggle=\"tooltip\"><i class=\"fa fa-remove\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <table class=\"data-table stripe hover nowrap table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center text-primary\">Nº Ticket</th>\r\n          <th class=\"text-center text-primary\">Empresa</th>\r\n          <th class=\"text-center text-primary\">Motivo</th>\r\n          <th class=\"text-center text-primary\">Estado</th>\r\n          <th class=\"text-center text-primary\">Visto</th>\r\n          <th class=\"text-center text-primary\">Acción</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/tickets/tickets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/tickets/tickets.component.ts ***!
  \****************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tickets-admin.service */ "./src/app/service/tickets-admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(tsvc, toastr, router) {
        this.tsvc = tsvc;
        this.toastr = toastr;
        this.router = router;
        this.registers = [];
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    TicketsComponent.prototype.init = function () {
        var _this = this;
        this.tsvc.get().subscribe(function (res) {
            _this.registers = res;
            console.log(res);
            if ($.fn.DataTable.isDataTable('.data-table')) {
                $('.data-table').DataTable().destroy();
            }
            $('.data-table').dataTable({
                data: _this.registers,
                columns: [
                    { "data": "numero_ticket" },
                    { "data": "userTicket", "render": function (empresa) {
                            return empresa.nombre;
                        } },
                    { "data": "motivo", "render": function (motivo) {
                            return motivo.name;
                        } },
                    { "data": "motivoEstatus", "render": function (estado) {
                            return '<span class="badge alert alert-warning">' + estado.name + '</span>';
                        } },
                    { "data": "visto", "render": function (visto) {
                            return visto ? "Revisado" : "Nuevo";
                        } },
                    { "data": "id", "render": function (id) {
                            var html = "<button class=\"btn btn-link btn_editar\" title=\"Administrar Ticket\" data-toggle=\"tooltip\">\n                      <img src=\"../../../../assets/images/editar.png\" width=\"30px\"\n                      </button>\n                      <button class=\"btn btn-link btn_destroy\" title=\"Eliminar\" data-toggle=\"tooltip\">\n                      <img src=\"../../../../assets/images/eliminar.png\" width=\"30px\"\n                      </button>";
                            return html;
                        } }
                ],
                rowCallback: function (row, data, index) {
                    var self = _this;
                    // Unbind first in order to avoid any duplicate handler
                    // (see https://github.com/l-lin/angular-datatables/issues/87)
                    $('td', row).unbind('click');
                    $('td > .btn_editar', row).bind('click', function () {
                        self.adminTicket(data);
                    });
                    $('td > .btn_destroy', row).bind('click', function () {
                        self.deleteTicket(data);
                    });
                    return row;
                }
            });
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    TicketsComponent.prototype.truncateTickets = function () {
        var _this = this;
        this.tsvc.truncateTickets().subscribe(function (res) {
            _this.toastr.success('Procesado completado', 'Éxito');
        }, function (err) {
            _this.toastr.error(err.error.message, 'Erro!');
        });
    };
    TicketsComponent.prototype.adminTicket = function (data) {
        this.router.navigate(['/admin/tickets/manage/', data.id]);
    };
    TicketsComponent.prototype.deleteTicket = function (data) {
        var _this = this;
        if (confirm('Esta seguro de querer eliminar este registro?')) {
            this.tsvc.deleteTicket(data.id).subscribe(function (res) {
                _this.toastr.success('Procesado completado', 'Éxito');
                _this.init();
            }, function (err) {
                _this.toastr.error(err.error.message, 'Erro!');
            });
        }
    };
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/admin/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.css */ "./src/app/admin/tickets/tickets.component.css")]
        }),
        __metadata("design:paramtypes", [_service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_3__["TicketsAdminService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/admin/tickets/tickets.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/tickets/tickets.module.ts ***!
  \*************************************************/
/*! exports provided: TicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModule", function() { return TicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tickets.component */ "./src/app/admin/tickets/tickets.component.ts");
/* harmony import */ var _tickets_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tickets.routes */ "./src/app/admin/tickets/tickets.routes.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/admin/tickets/manage/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TicketsModule = /** @class */ (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tickets_routes__WEBPACK_IMPORTED_MODULE_5__["TicketRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"], _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__["ManageComponent"]]
        })
    ], TicketsModule);
    return TicketsModule;
}());



/***/ }),

/***/ "./src/app/admin/tickets/tickets.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/tickets/tickets.routes.ts ***!
  \*************************************************/
/*! exports provided: TicketRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRoutes", function() { return TicketRoutes; });
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets.component */ "./src/app/admin/tickets/tickets.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/admin/tickets/manage/manage.component.ts");


var TicketRoutes = [
    {
        path: '',
        component: _tickets_component__WEBPACK_IMPORTED_MODULE_0__["TicketsComponent"]
    },
    {
        path: 'manage/:id',
        component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_1__["ManageComponent"]
    }
    /*{
      path: 'form',
      component: FormComponent
    },
    {
      path: 'form/:id',
      component: FormComponent
    }*/
];


/***/ })

}]);
//# sourceMappingURL=admin-tickets-tickets-module.js.map