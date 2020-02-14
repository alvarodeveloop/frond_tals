(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-clients-clients-module"],{

/***/ "./src/app/enterprise/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/enterprise/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enterprise/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/enterprise/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-md-5 col-sm-5 text-center offset-md-3\">\r\n      <h3>Clientes Registrados</h3> \r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4 pull-right\">\r\n      <a routerLink=\"/enterprise/clients/form\" routerLinkActive=\"active\" class=\"btn btn-primary\" style=\"border-radius: 100%\" title=\"nuevo registro\" data-toggle=\"tooltip\"><i class=\"fa fa-plus\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <table class=\"data-table stripe hover nowrap table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center\">Usuario</th>\r\n          <th class=\"text-center\">Correo</th>\r\n          <th class=\"text-center\">Activo</th>\r\n          <th class=\"text-center\">Online</th>\r\n          <th class=\"text-center\">Acción</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/enterprise/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/enterprise/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/clients.service */ "./src/app/service/clients.service.ts");
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




var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(router, csvc, tostr) {
        this.router = router;
        this.csvc = csvc;
        this.tostr = tostr;
        this.clients = [];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ClientsComponent.prototype.init = function () {
        var _this = this;
        this.csvc.get().subscribe(function (res) {
            _this.clients = res;
            _this.renderTable();
        }, function (err) {
            _this.tostr.error(err.error.message, 'Error!');
        });
    };
    ClientsComponent.prototype.renderTable = function () {
        var _this = this;
        if ($.fn.DataTable.isDataTable('.data-table')) {
            $('.data-table').DataTable().destroy();
        }
        $('.data-table').dataTable({
            data: this.clients,
            columns: [
                { "data": "nombre" },
                { "data": "correo" },
                { "data": "statu_id", "render": function (statu_id) {
                        return statu_id == 1 ? "Activo" : "Desactivado";
                    } },
                { "data": "statu_id", "render": function (statu_id) {
                        return statu_id == 1 ? "Online" : "Off-line";
                    } },
                { "data": "id", "render": function (id) {
                        return "<button class=\"btn btn-link btn_editar\" title=\"Editar\" data-toggle=\"tooltip\">\n                      <img src=\"../../../../assets/images/editar.png\" width=\"30px\"\n                      </button>\n                      <button class=\"btn btn-link btn_destroy\" title=\"Eliminar\" data-toggle=\"tooltip\">\n                      <img src=\"../../../../assets/images/eliminar.png\" width=\"30px\"\n                      </button>";
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
                $('td > .btn_destroy', row).bind('click', function () {
                    self.deleteRegister(data);
                });
                return row;
            }
        });
    };
    ClientsComponent.prototype.editRegister = function (data) {
        this.router.navigate(['/enterprise/clients/form/', data.id]);
    };
    ClientsComponent.prototype.deleteRegister = function (data) {
        var _this = this;
        if (confirm('Esta seguro que desea eliminar este registro?')) {
            this.csvc.delete(data.id).subscribe(function (res) {
                _this.tostr.success('Proceso Completado', 'Éxito!');
                _this.init();
            }, function (err) {
                _this.tostr.error(err.error.message, 'Error!');
            });
        }
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/enterprise/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/enterprise/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/clients/clients.module.ts":
/*!******************************************************!*\
  !*** ./src/app/enterprise/clients/clients.module.ts ***!
  \******************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients.component */ "./src/app/enterprise/clients/clients.component.ts");
/* harmony import */ var _clients_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients.route */ "./src/app/enterprise/clients/clients.route.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/enterprise/clients/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_clients_route__WEBPACK_IMPORTED_MODULE_5__["ClientsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]]
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "./src/app/enterprise/clients/clients.route.ts":
/*!*****************************************************!*\
  !*** ./src/app/enterprise/clients/clients.route.ts ***!
  \*****************************************************/
/*! exports provided: ClientsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutes", function() { return ClientsRoutes; });
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients.component */ "./src/app/enterprise/clients/clients.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ "./src/app/enterprise/clients/form/form.component.ts");


var ClientsRoutes = [
    {
        path: '',
        component: _clients_component__WEBPACK_IMPORTED_MODULE_0__["ClientsComponent"]
    },
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]
    },
    {
        path: 'form/:id',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]
    }
];


/***/ }),

/***/ "./src/app/enterprise/clients/form/form.component.css":
/*!************************************************************!*\
  !*** ./src/app/enterprise/clients/form/form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enterprise/clients/form/form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/enterprise/clients/form/form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInRight\">\r\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-12\">\r\n    <form [formGroup]=\"formClient\" action=\"\" (ngSubmit)=\"onSubmit(formClient)\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Correo</label>\r\n          <input type=\"email\" class=\"form-control\" formControlName=\"correo\" [ngClass]=\"{ 'is-invalid': submitted && f.correo.errors }\">\r\n          <div *ngIf=\"f.correo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.correo.errors.required\">El Correo es requerido</div>\r\n          </div>\r\n          <div *ngIf=\"f.correo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.correo.errors.email\">El campo debe contener un correo valido</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-12\">\r\n          <label for=\"\" class=\"form-control-label\">Nombre Usuario</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"nombre\" [ngClass]=\"{ 'is-invalid': submitted && f.nombre.errors }\">\r\n          <div *ngIf=\"f.nombre.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.nombre.errors.required\">El Nombre de Usuario es requerido</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\">\r\n        </div>\r\n        <div class=\"col-md-5 col-sm-5 col-12 offset-md-1 offset-sm-1 custom-control custom-checkbox mb-5\" *ngIf=\"registerById\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"statu_id\" id=\"statu_id\" id=\"changeStatu\" [checked]=\"registerById.statu_id == 1\" (click)=\"changeStatus($event)\">\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">Estado</label>\r\n          <br>\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">{{ nameStatus }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-4 col-sm-4 col-12 offset-md-2 offset-sm-2\">\r\n          <button class=\"btn btn-outline-success btn-block\">Enviar&nbsp;<i class=\"fa fa-send\"></i></button>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-12\">\r\n          <a routerLink=\"/enterprise/clients\"  class=\"btn btn-outline-primary btn-block\">Cancelar&nbsp;<i class=\"fa fa-remove\"></i></a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/enterprise/clients/form/form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/enterprise/clients/form/form.component.ts ***!
  \***********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/clients.service */ "./src/app/service/clients.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function FormComponent(_fb, csvc, router, _route, toastr) {
        this._fb = _fb;
        this.csvc = csvc;
        this.router = router;
        this._route = _route;
        this.toastr = toastr;
        this.submitted = false;
        this.edit = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.csvc.findById(id).subscribe(function (res) {
                _this.registerById = res;
                if (res.tipo_profile_id) {
                    _this.edit = true;
                }
                _this.nameStatus = res.statu_id == 1 ? "Activo" : "Desactivado";
                _this.initForm(_this.registerById);
            });
        }
    };
    FormComponent.prototype.initForm = function (clients) {
        this.formClient = this._fb.group({
            id: [clients ? clients.id : null],
            correo: [clients ? clients.correo : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            nombre: [clients ? clients.nombre : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statu_id: [clients ? clients.statu_id : null]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.formClient.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onlyNubers = function (value) {
        var val = value.target.value, elem = value.target.getAttribute("formControlName");
        if (isNaN(val)) {
            var val = val.substring(0, val.length - 1);
            $('#' + elem).val(val);
        }
    };
    FormComponent.prototype.changeStatus = function (e) {
        if (e.target.checked) {
            this.nameStatus = "Activo";
        }
        else {
            this.nameStatus = "Desactivado";
        }
    };
    FormComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.submitted = true;
        data = JSON.parse(JSON.stringify(data.value));
        if (this.formClient.invalid) {
            if ($('#password').val() === "" && !this.edit) {
                this.toastr.warning('La contraseña no puede estar vacia', 'Información!');
            }
            return;
        }
        if (data.id) {
            if ($('#password').val() !== "") {
                data.password = $('#password').val();
            }
            this.csvc.update(data).subscribe(function (res) {
                _this.toastr.success('El cliente ha sido modificado con éxito', 'Éxito!');
                _this.router.navigate(['/enterprise/clients']);
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
        else {
            if ($('#password').val() === "") {
                this.toastr.warning('La contraseña no puede estar vacia', 'Información!');
                return false;
            }
            data.password = $('#password').val();
            this.csvc.stored(data).subscribe(function (res) {
                _this.toastr.success('El cliente ha sido registrado con éxito', 'Éxito!');
                _this.router.navigate(['/enterprise/clients']);
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/enterprise/clients/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/enterprise/clients/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=enterprise-clients-clients-module.js.map