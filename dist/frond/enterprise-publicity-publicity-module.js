(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-publicity-publicity-module"],{

/***/ "./src/app/enterprise/publicity/form/form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/enterprise/publicity/form/form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enterprise/publicity/form/form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/enterprise/publicity/form/form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInRight\">\r\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-12\">\r\n    <form [formGroup]=\"formPublicity\" action=\"\" (ngSubmit)=\"onSubmit(formPublicity)\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Nombre</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n          <div *ngIf=\"f.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.name.errors.required\">El nombre es requerido</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Tipo</label>\r\n          <select name=\"type\" id=\"type\" class=\"form-control\" formControlName=\"type\" [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n            <option value=\"\">Seleccione...</option>\r\n            <option value=\"1\">Impositiva</option>\r\n            <option value=\"2\">Libre</option>\r\n          </select>\r\n          <div *ngIf=\"f.type.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.type.errors.required\">El tipo es requerido</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Imagen</label>\r\n          <input type=\"file\" class=\"\" id=\"publicity\" name=\"publicity\">\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-6 text-center\" *ngIf=\"registerById\">\r\n          <img [src]=\"url+'publicity/'+registerById.image\" alt=\"\" width=\"120px\" height=\"120px\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\" *ngIf=\"registerById\">\r\n        <div class=\"col-md-6 col-sm-6 col-6 offset-md-1 offset-sm-1 offset-1 custom-control custom-checkbox mb-5\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"statu\" id=\"statu\" id=\"changeStatu\" [checked]=\"registerById.statu\" (click)=\"changeStatus($event)\">\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">Estado</label>\r\n          <br>\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">{{ nameStatus }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-12 col-sm-12 col-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-4 col-12 offset-md-2 offset-sm-2\">\r\n              <button class=\"btn btn-outline-success btn-block\">Enviar&nbsp;<i class=\"fa fa-send\"></i></button>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-4 col-12\">\r\n              <a routerLink=\"/enterprise/publicity\"  class=\"btn btn-outline-primary btn-block\">Cancelar&nbsp;<i class=\"fa fa-remove\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterprise/publicity/form/form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/enterprise/publicity/form/form.component.ts ***!
  \*************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_publicity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/publicity.service */ "./src/app/service/publicity.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function FormComponent(psvc, _fb, router, _router, _ele, toastr) {
        this.psvc = psvc;
        this._fb = _fb;
        this.router = router;
        this._router = _router;
        this._ele = _ele;
        this.toastr = toastr;
        this.submitted = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var id = this._router.snapshot.paramMap.get('id');
        if (id) {
            this.psvc.findById(id).subscribe(function (res) {
                _this.registerById = res;
                _this.nameStatus = _this.registerById.statu ? "Activa" : "Desactivada";
                _this.initForm(_this.registerById);
            });
        }
    };
    FormComponent.prototype.initForm = function (row) {
        this.formPublicity = this._fb.group({
            id: [row ? row.id : null],
            name: [row ? row.name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: [row ? row.type : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statu: [row ? row.statu : true]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () {
            return this.formPublicity.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.changeStatus = function (e) {
        if (e.target.checked) {
            this.nameStatus = "Activa";
        }
        else {
            this.nameStatus = "Desactivada";
        }
    };
    FormComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var datos = JSON.parse(JSON.stringify(data.value));
        this.submitted = true;
        if (this.formPublicity.invalid) {
            return;
        }
        var image = this._ele.nativeElement.querySelector('#publicity').files[0];
        var formData = new FormData();
        formData.append('name', datos.name);
        formData.append('statu', datos.statu);
        formData.append('type', datos.type);
        formData.append('id', datos.id);
        if (datos.id) {
            if (image !== undefined && image !== null) {
                formData.append('publicity', image, image.name);
            }
            this.psvc.update(formData, datos.id).subscribe(function (res) {
                _this.toastr.success('Registro modificado', 'Éxito');
                _this.router.navigate(['/enterprise/publicity']);
            }, function (err) {
                _this.toastr.success(err.error.message, 'Error!');
            });
        }
        else {
            if (image === undefined) {
                this.toastr.warning('Debe escoger una imagen', 'Información!');
                return false;
            }
            formData.append('publicity', image, image.name);
            this.psvc.stored(formData).subscribe(function (res) {
                _this.toastr.success('Registro Agregado', 'Éxito');
                _this.router.navigate(['/enterprise/publicity']);
            }, function (err) {
                _this.toastr.success(err.error.message, 'Error!');
            });
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/enterprise/publicity/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/enterprise/publicity/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_service_publicity_service__WEBPACK_IMPORTED_MODULE_4__["PublicityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/publicity/publicity.component.css":
/*!**************************************************************!*\
  !*** ./src/app/enterprise/publicity/publicity.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enterprise/publicity/publicity.component.html":
/*!***************************************************************!*\
  !*** ./src/app/enterprise/publicity/publicity.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-5 text-center offset-md-3\">\r\n      <h3>Publicidades de la Empresa</h3> \r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4 pull-right\">\r\n\r\n      <a routerLink=\"/enterprise/publicity/form\" routerLinkActive=\"active\" class=\"btn btn-primary\" style=\"border-radius: 100%\" title=\"nuevo registro\" *ngIf=\"session.tipo_profile_id != 1\" ><i class=\"fa fa-plus\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <table class=\"data-table stripe hover nowrap table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center text-primary\">Imagen</th>\r\n          <th class=\"text-center text-primary\">Nombre</th>\r\n          <th class=\"text-center text-primary\">Tipo</th>\r\n          <th class=\"text-center text-primary\">Estado</th>\r\n          <th class=\"text-center text-primary\">Acción</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/enterprise/publicity/publicity.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/enterprise/publicity/publicity.component.ts ***!
  \*************************************************************/
/*! exports provided: PublicityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicityComponent", function() { return PublicityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_publicity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/publicity.service */ "./src/app/service/publicity.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicityComponent = /** @class */ (function () {
    function PublicityComponent(psvc, toastr, router) {
        this.psvc = psvc;
        this.toastr = toastr;
        this.router = router;
    }
    PublicityComponent.prototype.ngOnInit = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.init();
    };
    PublicityComponent.prototype.init = function () {
        var _this = this;
        this.psvc.getEnterprisePublicity().subscribe(function (res) {
            _this.publicitys = res;
            _this.renderDataTable();
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    };
    PublicityComponent.prototype.renderDataTable = function () {
        var _this = this;
        if ($.fn.DataTable.isDataTable('.data-table')) {
            $('.data-table').DataTable().destroy();
        }
        var self1 = this;
        $('.data-table').dataTable({
            data: this.publicitys.publicempresa,
            columns: [
                { "data": 'publicidades', "render": function (publi) {
                        return "<img src=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "publicity/" + publi.image + "\" width=\"80px\" height=\"80px\">";
                    } },
                { "data": 'publicidades', "render": function (publi) {
                        return publi.name;
                    } },
                { "data": 'type', "render": function (type) {
                        return type == 1 ? 'Impuesta' : 'Libre';
                    } },
                { "data": "statu", "render": function (data) {
                        return data ? "Activa" : "Desactivada";
                    } },
                { "data": 'id', "render": function (data) {
                        var html = "<button class=\"btn btn-link btn_editar\" title=\"Editar\">\n                      <img src=\"../../../../assets/images/editar.png\" width=\"30px\"\n                      </button>\n                      ";
                        if (self1.session.tipo_profile_id != 1) {
                            return html;
                        }
                        else {
                            return "";
                        }
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
    PublicityComponent.prototype.editRegister = function (data) {
        this.router.navigate(['/enterprise/publicity/form/', data.id]);
    };
    PublicityComponent.prototype.deleteRegister = function (data) {
        var _this = this;
        if (confirm('Esta seguro de querer eliminar este registro?')) {
            this.psvc.delete(data.id).subscribe(function (res) {
                _this.toastr.success("Proceso completado", 'Éxito!');
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    PublicityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publicity',
            template: __webpack_require__(/*! ./publicity.component.html */ "./src/app/enterprise/publicity/publicity.component.html"),
            styles: [__webpack_require__(/*! ./publicity.component.css */ "./src/app/enterprise/publicity/publicity.component.css")]
        }),
        __metadata("design:paramtypes", [_service_publicity_service__WEBPACK_IMPORTED_MODULE_2__["PublicityService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PublicityComponent);
    return PublicityComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/publicity/publicity.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/enterprise/publicity/publicity.module.ts ***!
  \**********************************************************/
/*! exports provided: PublicityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicityModule", function() { return PublicityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _publicity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publicity.component */ "./src/app/enterprise/publicity/publicity.component.ts");
/* harmony import */ var _publicity_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicity.routes */ "./src/app/enterprise/publicity/publicity.routes.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/enterprise/publicity/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PublicityModule = /** @class */ (function () {
    function PublicityModule() {
    }
    PublicityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_publicity_routes__WEBPACK_IMPORTED_MODULE_5__["PublicityRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_publicity_component__WEBPACK_IMPORTED_MODULE_4__["PublicityComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]]
        })
    ], PublicityModule);
    return PublicityModule;
}());



/***/ }),

/***/ "./src/app/enterprise/publicity/publicity.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/enterprise/publicity/publicity.routes.ts ***!
  \**********************************************************/
/*! exports provided: PublicityRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicityRoutes", function() { return PublicityRoutes; });
/* harmony import */ var _publicity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicity.component */ "./src/app/enterprise/publicity/publicity.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ "./src/app/enterprise/publicity/form/form.component.ts");


var PublicityRoutes = [
    { path: '', component: _publicity_component__WEBPACK_IMPORTED_MODULE_0__["PublicityComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"] },
    { path: 'form/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=enterprise-publicity-publicity-module.js.map