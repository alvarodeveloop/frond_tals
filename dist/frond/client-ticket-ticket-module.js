(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-ticket-ticket-module"],{

/***/ "./src/app/client/ticket/form/form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/client/ticket/form/form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/ticket/form/form.component.html":
/*!********************************************************!*\
  !*** ./src/app/client/ticket/form/form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInRight\">\r\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-12\">\r\n    <form [formGroup]=\"formTicket\" action=\"\" (ngSubmit)=\"onSubmit(formTicket)\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Motivo</label>\r\n          <select name=\"motivo_id\" id=\"motivo_id\" formControlName=\"motivo_id\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.motivo_id.errors }\">\r\n            <option [ngValue]=\"item.id\" *ngFor=\"let item of motivos\">{{ item.name }}</option>\r\n          </select>\r\n          <div *ngIf=\"f.motivo_id.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.motivo_id.errors.required\">El motivo es requerido</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Descripción</label>\r\n          <textarea name=\"description\" id=\"description\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" style=\"height: 100px;\"></textarea>\r\n          <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.description.errors.required\">La descripción es requerida</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-4 col-sm-4 col-12 offset-md-2 offset-sm-2\">\r\n          <button class=\"btn btn-outline-success btn-block\">Enviar&nbsp;<i class=\"fa fa-send\"></i></button>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-12\">\r\n          <a routerLink=\"/client/ticketsClient\"  class=\"btn btn-outline-primary btn-block\">Cancelar&nbsp;<i class=\"fa fa-remove\"></i></a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/client/ticket/form/form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/client/ticket/form/form.component.ts ***!
  \******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/tickets-admin.service */ "./src/app/service/tickets-admin.service.ts");
/* harmony import */ var _service_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/master.service */ "./src/app/service/master.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormComponent = /** @class */ (function () {
    function FormComponent(router, _fb, toastr, tsvc, msvc) {
        this.router = router;
        this._fb = _fb;
        this.toastr = toastr;
        this.tsvc = tsvc;
        this.msvc = msvc;
        this.submitted = false;
        this.motivos = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.msvc.getMotivoTickets().subscribe(function (res) {
            _this.motivos = res;
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
            _this.router.navigate(['/client/ticketsClient']);
        });
    };
    FormComponent.prototype.initForm = function () {
        this.formTicket = this._fb.group({
            motivo_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.formTicket.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var datos = JSON.parse(JSON.stringify(data.value));
        this.submitted = true;
        if (this.formTicket.invalid) {
            return false;
        }
        this.tsvc.storedTicketsClient(datos).subscribe(function (res) {
            _this.toastr.success('Proceso Completado', 'Éxito!');
            _this.router.navigate(['/client/ticketsClient']);
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/client/ticket/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/client/ticket/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_4__["TicketsAdminService"],
            _service_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/client/ticket/manage/manage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/client/ticket/manage/manage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/ticket/manage/manage.component.html":
/*!************************************************************!*\
  !*** ./src/app/client/ticket/manage/manage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4\">\r\n      <h3 class=\"text-center\">Detalles del Ticket</h3>\r\n      <br>\r\n      <ul class=\"list-group-flush\">\r\n        <li class=\"list-group-item-text\"><b>Número:</b>&nbsp;&nbsp;<span class=\"alert alert-warning\">{{ validate ? ticketManage.numero_ticket : '' }}</span></li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Motivo:</b> {{ validate ? ticketManage.motivo.name : '' }}</li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Descripción:</b> {{ validate ? ticketManage.description : '' }}</li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Usuario:</b> {{ validate ? ticketManage.userTicket.nombre : '' }}</li>\r\n        <br>\r\n        <li class=\"list-group-item-text\"><b>Fecha de Inicio:</b> {{ validate ? (ticketManage.createdAt | date: 'dd-MM-yyyy HH:MM:SS' ): '' }}</li>\r\n        <br>\r\n        <li class=\"list-group-item-text\"><b>Estatus:</b> {{ validate ? ticketManage.motivoEstatus.name : ''}}</li>\r\n        <br/>\r\n        <li class=\"list-group-item-text\"><b>Cambiar Estatus:</b>&nbsp;&nbsp;\r\n          <select name=\"\" id=\"\" class=\"form-control\" (change)=\"changeStatus($event)\">\r\n            <option value=\"\"></option>\r\n            <option [value]=\"item.id\" [selected]=\"item.id == ticketManage.statu_id\" *ngFor=\"let item of arrayStatus\">{{ item.name }}</option>\r\n          </select>\r\n      </ul>\r\n      <br/>\r\n      <button class=\"btn btn-block btn-outline-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal_cuenta\"  *ngIf=\"statusTicket !== 5 && statusTicket !== 6\">\r\n        Agregar Mensaje&nbsp;<i class=\"fa fa-plus\"></i>\r\n      </button>\r\n      <br/>\r\n      <p class=\"text-center\"><a routerLink=\"/client/ticketsClient\">Regresar&nbsp;<i class=\"fa fa-arrow-left\"></i></a></p>\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <h3 class=\"text-center\">Mensajes</h3>\r\n      <br/>\r\n      <div class=\"row\" *ngIf=\"visible\">\r\n        <div class=\"col-md-4 col-sm-4\">\r\n          <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-8 text-center\">\r\n          <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"!visible\">\r\n        <div class=\"col-md-12 col-sm-12 text-center\" id=\"div_not_visible\">\r\n          <p class=\"text-center\">No hay mensajes en este ticket</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"modal_cuenta\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header login-header\">\r\n              <h4 class=\"modal-title\">Escriba su mensaje&nbsp;<i class=\"fa fa-pencil\"></i></h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n          </div>\r\n          <form [formGroup]=\"formAnsswer\" action=\"\" (ngSubmit)=\"onSubmit(formAnsswer)\" id=\"form_register\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                  <textarea name=\"description\" id=\"description\" rows=\"2\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" class=\"form-control\"></textarea>\r\n                  <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.description.errors.required\">Debe introducir una respuesta</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-md-5 col-sm-5\">\r\n                  <input type=\"file\" name=\"file_answer\" id=\"file_answer\" accept=\"\" multiple=\"\">\r\n                </div>\r\n              </div>\r\n            </div><!-- fin modal-body -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-success\">Grabar</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n            </div>\r\n          </form>\r\n      </div><!-- fin modal-content -->\r\n  </div><!-- fin modal-dialog -->\r\n</div> <!-- fin modal -->"

/***/ }),

/***/ "./src/app/client/ticket/manage/manage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/client/ticket/manage/manage.component.ts ***!
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
            this.router.navigate(['/client/ticketsClient']);
        }
    };
    ManageComponent.prototype.init = function (id) {
        var _this = this;
        var manage = this.tsvc.getManageTicket(id);
        var statusTicket = this.msvc.getStatusForClients(2);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            manage,
            statusTicket
        ])
            .subscribe(function (res) {
            _this.ticketManage = res[0][0];
            _this.statusTicket = parseInt(_this.ticketManage.statu_id);
            console.log(_this.ticketManage, 'aquiii');
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
            _this.statusTicket = e.target.value;
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
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/client/ticket/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/client/ticket/manage/manage.component.css")]
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

/***/ "./src/app/client/ticket/ticket.component.css":
/*!****************************************************!*\
  !*** ./src/app/client/ticket/ticket.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/ticket/ticket.component.html":
/*!*****************************************************!*\
  !*** ./src/app/client/ticket/ticket.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-5 text-center offset-md-3\">\r\n      <h3>Tickets Registrados</h3> \r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4 pull-right\">\r\n\r\n      <a routerLink=\"/client/tickets/form\" routerLinkActive=\"active\" class=\"btn btn-primary\" style=\"border-radius: 100%\" title=\"nuevo registro\"><i class=\"fa fa-plus\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <table class=\"data-table stripe hover nowrap table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center text-primary\">Nº Ticket</th>\r\n          <th class=\"text-center text-primary\">Motivo</th>\r\n          <th class=\"text-center text-primary\">Estatus</th>\r\n          <th class=\"text-center text-primary\">Visto</th>\r\n          <th class=\"text-center text-primary\">Acción</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/client/ticket/ticket.component.ts":
/*!***************************************************!*\
  !*** ./src/app/client/ticket/ticket.component.ts ***!
  \***************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/tickets-admin.service */ "./src/app/service/tickets-admin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketComponent = /** @class */ (function () {
    function TicketComponent(tsvc, router, toastr) {
        this.tsvc = tsvc;
        this.router = router;
        this.toastr = toastr;
        this.tickets = [];
    }
    TicketComponent.prototype.ngOnInit = function () {
        this.init();
    };
    TicketComponent.prototype.init = function () {
        var _this = this;
        this.tsvc.getClientTickets().subscribe(function (res) {
            _this.tickets = res;
            _this.renderTable();
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    TicketComponent.prototype.renderTable = function () {
        var _this = this;
        if ($.fn.DataTable.isDataTable('.data-table')) {
            $('.data-table').DataTable().destroy();
        }
        $('.data-table').dataTable({
            data: this.tickets,
            columns: [
                { "data": "numero_ticket" },
                { "data": "motivo", "render": function (motivo) {
                        return motivo.name;
                    } },
                { "data": "motivoEstatus", "render": function (est) {
                        return "<span class='badge alert alert-warning'>" + est.name + "</span>";
                    } },
                { "data": "visto", "render": function (v) {
                        return v ? "Visto" : "Aún no ha sido Visto";
                    } },
                { "data": "id", "render": function (id) {
                        var html = "<button class=\"btn btn-link btn_editar\" title=\"Administrar Ticket\" data-toggle=\"tooltip\">\n                      <img src=\"../../../../assets/images/editar.png\" width=\"30px\"\n                      </button>";
                        return html;
                    } }
            ],
            rowCallback: function (row, data, index) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td > .btn_editar', row).bind('click', function () {
                    self.editRegister(data);
                });
                return row;
            }
        });
    };
    TicketComponent.prototype.editRegister = function (data) {
        this.router.navigate(['/client/tickets/manage/', data.id]);
    };
    TicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticket',
            template: __webpack_require__(/*! ./ticket.component.html */ "./src/app/client/ticket/ticket.component.html"),
            styles: [__webpack_require__(/*! ./ticket.component.css */ "./src/app/client/ticket/ticket.component.css")]
        }),
        __metadata("design:paramtypes", [_service_tickets_admin_service__WEBPACK_IMPORTED_MODULE_2__["TicketsAdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "./src/app/client/ticket/ticket.module.ts":
/*!************************************************!*\
  !*** ./src/app/client/ticket/ticket.module.ts ***!
  \************************************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket.component */ "./src/app/client/ticket/ticket.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/client/ticket/form/form.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/client/ticket/manage/manage.component.ts");
/* harmony import */ var _ticket_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket.routes */ "./src/app/client/ticket/ticket.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ticket_routes__WEBPACK_IMPORTED_MODULE_7__["TicketRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_ticket_component__WEBPACK_IMPORTED_MODULE_4__["TicketComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__["ManageComponent"]]
        })
    ], TicketModule);
    return TicketModule;
}());



/***/ }),

/***/ "./src/app/client/ticket/ticket.routes.ts":
/*!************************************************!*\
  !*** ./src/app/client/ticket/ticket.routes.ts ***!
  \************************************************/
/*! exports provided: TicketRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRoutes", function() { return TicketRoutes; });
/* harmony import */ var _ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.component */ "./src/app/client/ticket/ticket.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ "./src/app/client/ticket/form/form.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/client/ticket/manage/manage.component.ts");



var TicketRoutes = [
    {
        path: '',
        component: _ticket_component__WEBPACK_IMPORTED_MODULE_0__["TicketComponent"]
    },
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]
    },
    {
        path: 'manage/:id',
        component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_2__["ManageComponent"]
    },
];


/***/ })

}]);
//# sourceMappingURL=client-ticket-ticket-module.js.map