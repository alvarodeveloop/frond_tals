(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-animations-animations-module"],{

/***/ "./src/app/admin/animations/animations.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/animations/animations.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/animations/animations.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/animations/animations.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-5 text-center offset-md-3\">\r\n      <h3>Animaciones Cargadas</h3> \r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4 pull-right\">\r\n      <a routerLink=\"/admin/animations/form\" routerLinkActive=\"active\" class=\"btn btn-primary\" style=\"border-radius: 100%\" title=\"nuevo registro\"><i class=\"fa fa-plus\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <table class=\"data-table stripe hover nowrap table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center\">Nombre</th>\r\n          <th class=\"text-center\">Nº Imagenes</th>\r\n          <th class=\"text-center\">Animación(3D)</th>\r\n          <th class=\"text-center\">Texto</th>\r\n          <th class=\"text-center\">Mp3</th>\r\n          <th class=\"text-center\">Activo</th>\r\n          <th class=\"text-center\">Acción</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/animations/animations.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/animations/animations.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsComponent", function() { return AnimationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/animations.service */ "./src/app/service/animations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var AnimationsComponent = /** @class */ (function () {
    function AnimationsComponent(router, asvc, toastr) {
        this.router = router;
        this.asvc = asvc;
        this.toastr = toastr;
    }
    AnimationsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AnimationsComponent.prototype.init = function () {
        var _this = this;
        this.asvc.get().subscribe(function (res) {
            _this.register = res;
            _this.renderTable();
        }, function (err) {
            _this.toastr.error(err.error.message, 'Éxito!');
        });
    };
    AnimationsComponent.prototype.renderTable = function () {
        var _this = this;
        if ($.fn.DataTable.isDataTable('.data-table')) {
            $('.data-table').DataTable().destroy();
        }
        $('.data-table').dataTable({
            data: this.register,
            columns: [
                { "data": "texto" },
                { "data": "animationImg", "render": function (img) {
                        return img.length;
                    } },
                { "data": "imagen", "render": function (img) {
                        var html = "";
                        if (img) {
                            html = "<img src=\"../../../../assets/images/check-mark-green.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        else {
                            html = "<img src=\"../../../../assets/images/cross.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        return html;
                    } },
                { "data": "texto", "render": function (text) {
                        var html = "";
                        if (text) {
                            html = "<img src=\"../../../../assets/images/check-mark-green.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        else {
                            html = "<img src=\"../../../../assets/images/cross.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        return html;
                    } },
                { "data": "audio", "render": function (audio) {
                        var html = "";
                        if (audio) {
                            html = "<img src=\"../../../../assets/images/check-mark-green.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        else {
                            html = "<img src=\"../../../../assets/images/cross.png\" width=\"30px alt=\"no hay imagen\"/>";
                        }
                        return html;
                    } },
                { "data": "activo", "render": function (act) {
                        return act ? "Activo" : "Desactivado";
                    } },
                { "data": "id", "render": function (id) {
                        var html = "<button class=\"btn btn-link btn_editar\" title=\"Administrar\">\n                      <img src=\"../../../../assets/images/editar.png\" width=\"30px />\"\n                      </button>\n                      <button class=\"btn btn-link btn_destroy\" title=\"Eliminar\">\n                      <img src=\"../../../../assets/images/eliminar.png\" width=\"30px\" />\n                      </button>";
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
                $('td > .btn_destroy', row).bind('click', function () {
                    self.deleteRegister(data);
                });
                return row;
            }
        });
    };
    AnimationsComponent.prototype.editRegister = function (data) {
        this.router.navigate(['/admin/animations/manage/', data.id]);
    };
    AnimationsComponent.prototype.deleteRegister = function (data) {
        var _this = this;
        if (confirm('Esta seguro de querer eleminar este registro')) {
            this.asvc.delete(data.id).subscribe(function (res) {
                _this.toastr.success('Registro eliminado', 'Éxito!');
                _this.init();
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    AnimationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animations',
            template: __webpack_require__(/*! ./animations.component.html */ "./src/app/admin/animations/animations.component.html"),
            styles: [__webpack_require__(/*! ./animations.component.css */ "./src/app/admin/animations/animations.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AnimationsComponent);
    return AnimationsComponent;
}());



/***/ }),

/***/ "./src/app/admin/animations/animations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/animations/animations.module.ts ***!
  \*******************************************************/
/*! exports provided: AnimationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsModule", function() { return AnimationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations.component */ "./src/app/admin/animations/animations.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/admin/animations/form/form.component.ts");
/* harmony import */ var _animations_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animations.route */ "./src/app/admin/animations/animations.route.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/admin/animations/manage/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AnimationsModule = /** @class */ (function () {
    function AnimationsModule() {
    }
    AnimationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_animations_route__WEBPACK_IMPORTED_MODULE_6__["AnimationsRoutes"])
            ],
            declarations: [_animations_component__WEBPACK_IMPORTED_MODULE_4__["AnimationsComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _manage_manage_component__WEBPACK_IMPORTED_MODULE_7__["ManageComponent"]]
        })
    ], AnimationsModule);
    return AnimationsModule;
}());



/***/ }),

/***/ "./src/app/admin/animations/animations.route.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/animations/animations.route.ts ***!
  \******************************************************/
/*! exports provided: AnimationsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsRoutes", function() { return AnimationsRoutes; });
/* harmony import */ var _animations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations.component */ "./src/app/admin/animations/animations.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ "./src/app/admin/animations/form/form.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/admin/animations/manage/manage.component.ts");



var AnimationsRoutes = [
    {
        path: '',
        component: _animations_component__WEBPACK_IMPORTED_MODULE_0__["AnimationsComponent"]
    },
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]
    },
    {
        path: 'manage/:id',
        component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_2__["ManageComponent"]
    }
];


/***/ }),

/***/ "./src/app/admin/animations/form/form.component.css":
/*!**********************************************************!*\
  !*** ./src/app/admin/animations/form/form.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/animations/form/form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/animations/form/form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInRight\">\r\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-12\">\r\n    <form [formGroup]=\"formAnimation\" action=\"\" (ngSubmit)=\"onSubmit(formAnimation)\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Sonido</label>\r\n          <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"open_file('audio')\">Mp3&nbsp;<i class=\"fa fa-play\"></i></button>\r\n          <input type=\"file\" name=\"audio\" id=\"audio\" accept=\".mp3\" style=\"display: none\">\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Animación</label>\r\n          <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"open_file('animacion')\">Animación&nbsp;<i class=\"fa fa-camera\"></i></button>\r\n          <input type=\"file\" name=\"animacion\" id=\"animacion\" style=\"display: none\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Texto</label>\r\n          <input type=\"text\" id=\"texto\" name=\"texto\" formControlName=\"texto\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.texto.errors }\">\r\n          <div *ngIf=\"f.texto.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.texto.errors.required\">El Texto es requerido</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-6\">\r\n          <label for=\"\" class=\"form-control-label\">Descripción Animación</label>\r\n          <input type=\"text\" id=\"texto\" name=\"name\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n          <div *ngIf=\"f.name.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.name.errors.required\">El Texto es requerido</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\" *ngIf=\"registerById\">\r\n        <div class=\"col-md-6 col-sm-6 col-6 offset-md-1 offset-sm-1 offset-1 custom-control custom-checkbox mb-5\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"activo\" id=\"activo\" id=\"changeStatu\" [checked]=\"registerById.activo\" (click)=\"changeStatus($event)\">\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">Estado</label>\r\n          <br>\r\n          <label for=\"changeStatu\" class=\"custom-control-label\">{{ nameStatus }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-md-12 col-sm-12 col-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-4 col-12 offset-md-2 offset-sm-2\">\r\n              <button class=\"btn btn-outline-success btn-block\">Enviar&nbsp;<i class=\"fa fa-send\"></i></button>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-4 col-12\">\r\n              <a routerLink=\"/admin/animations\"  class=\"btn btn-outline-danger btn-block\">Cancelar&nbsp;<i class=\"fa fa-remove\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/animations/form/form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/animations/form/form.component.ts ***!
  \*********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_animations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/animations.service */ "./src/app/service/animations.service.ts");
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
    function FormComponent(_fb, asvc, router, _route, toastr, _ele) {
        this._fb = _fb;
        this.asvc = asvc;
        this.router = router;
        this._route = _route;
        this.toastr = toastr;
        this._ele = _ele;
        this.submitted = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.asvc.findById(id).subscribe(function (res) {
                _this.registerById = res;
                _this.nameStatus = _this.registerById.activo ? "Activo" : "Desactivado";
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    FormComponent.prototype.initForm = function (datos) {
        this.formAnimation = this._fb.group({
            id: [datos ? datos.id : null],
            texto: [datos ? datos.texto : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: [datos ? datos.name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.formAnimation.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.open_file = function (field) {
        $('#' + field).click();
    };
    FormComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var datos = JSON.parse(JSON.stringify(data.value));
        var animacion = this._ele.nativeElement.querySelector('#animacion').files[0];
        var mp3 = this._ele.nativeElement.querySelector('#audio').files[0];
        console.log(mp3, animacion);
        this.submitted = true;
        if (this.formAnimation.invalid) {
            return false;
        }
        if (mp3 === undefined) {
            this.toastr.warning('Debe escoger un sonido de salida al usuario');
            $('#mp3').click();
            return false;
        }
        if (animacion === undefined) {
            this.toastr.warning('Debe escoger una animación 3D para la salida al usuario');
            $('#animacion').click();
            return false;
        }
        var formData = new FormData();
        var arreglo_files = [animacion, mp3];
        formData.append('animacion', animacion);
        formData.append('audio', mp3);
        formData.append('texto', datos.texto);
        formData.append('name', datos.name);
        if (datos.id) {
            this.asvc.update(formData, datos.id).subscribe(function (res) {
                _this.toastr.success("Proceso completado", 'Éxito!');
                _this.router.navigate(['/admin/animations']);
            }, function (err) {
                _this.submitted = false;
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
        else {
            this.asvc.stored(formData).subscribe(function (res) {
                _this.toastr.success("Proceso completado", 'Éxito!');
                _this.router.navigate(['/admin/animations']);
            }, function (err) {
                _this.submitted = false;
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/admin/animations/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/admin/animations/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_animations_service__WEBPACK_IMPORTED_MODULE_3__["AnimationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/admin/animations/manage/manage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/animations/manage/manage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/animations/manage/manage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/animations/manage/manage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"pre-loader\" *ngIf=\"loading\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <h3 class=\"text-center\">Administración de animaciones</h3>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <br/><br/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <h4>Respuestas de Salida</h4>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <br/><br/>\r\n      <div class=\"col-md-4 col-sm-4 text-center\">\r\n        <h5 class=\"\">Audio:</h5>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"add_img('edit_audio')\">Editar&nbsp;<i></i></button>\r\n        <input type=\"file\" id=\"edit_audio\" name=\"edit_audio\" (change)=\"editFileUpload($event,'AnimationsAudio/','audio')\" style=\"display: none\" accept=\".mp3, .mp4\">\r\n        <div id=\"tag_audio\">\r\n          <audio controls id=\"audio\" *ngIf=\"register\">\r\n            <source [src]=\"ruta_audio\" type=\"audio/mpeg\">\r\n            Your browser does not support the audio tag.\r\n          </audio>    \r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 text-center\">\r\n        <h5 class=\"\">Texto:</h5>\r\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_texto\" class=\"btn btn-link\">Editar&nbsp;<i></i></button>\r\n        <p class=\"text-center\">{{ register ? register.texto : \"\" }}</p>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 text-center\" *ngIf=\"register\">\r\n        <h5 class=\"\">Animación:</h5>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"add_img('edit_animation')\">Editar&nbsp;<i></i></button>\r\n        <input type=\"file\" id=\"edit_animation\" name=\"edit_animation\" (change)=\"editFileUpload($event,'AnimationsAnimacion/','animacion')\" style=\"display: none\" accept=\".JPG, .PNG,.JPEG\">\r\n        <br/>\r\n        <img [src]=\"ruta_animacion\" alt=\"\" width=\"60%\" height=\"70px\">\r\n      </div>\r\n    </div>\r\n    <br style=\"border: 1px solid lightgray;\">\r\n    \r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <h4 class=\"\" style=\"margin-left: 20px;\">Galeria de Imagenes</h4>  \r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-6 col-lg-6 text-center\">\r\n        <br>\r\n        <button class=\"btn btn-info\"  (click)=\"add_img('add_img')\">Agregar Imagenes</button>\r\n        <input type=\"file\" id=\"add_img\" name=\"images\" accept=\".PNG, .JPG, .JPEG\" style=\"display: none\" (change)=\"upload_img()\" multiple=\"\">\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-6 col-lg-6 text-center\">\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-danger\"  (click)=\"remove_all_img()\">Eliminar Imagenes&nbsp;<i class=\"fa fa-remove\"></i></button>\r\n      </div>\r\n    \r\n    <div class=\"clearfix\"></div>\r\n    <br/><br style=\"border: 1px solid lightgray;\">\r\n    \r\n    <div class=\"div_pictures\" id=\"div_pictures\">\r\n            \r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"modal_texto\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header login-header\" style=\"background-color: #138496;\">\r\n                <h4 class=\"modal-title\" style=\"color: white\">Edición de Salida (Texto)</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n            </div>\r\n            <form action=\"\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"form-group col-md-12 col-sm-12\">\r\n                  <label for=\"\" class=\"form-control-label\">Texto Nuevo</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"texto_nuevo\" name=\"texto_nuevo\"  [(ngModel)]=\"editTextoString\" #ctrl=\"ngModel\">\r\n                </div>\r\n              </div><!-- fin modal-body -->\r\n              <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"editTexto()\">Editar&nbsp;<i class=\"fa fa-edit\"></i></button>\r\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n              </div>\r\n            </form>\r\n        </div><!-- fin modal-content -->\r\n    </div><!-- fin modal-dialog -->\r\n</div> <!-- fin modal -->\r\n"

/***/ }),

/***/ "./src/app/admin/animations/manage/manage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/animations/manage/manage.component.ts ***!
  \*************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/animations.service */ "./src/app/service/animations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
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
    function ManageComponent(router, _router, toastr, asvc, _ele) {
        this.router = router;
        this._router = _router;
        this.toastr = toastr;
        this.asvc = asvc;
        this._ele = _ele;
        this.register = null;
        this.loading = true;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var id = this._router.snapshot.paramMap.get('id');
        if (id) {
            this.idRegister = id;
            this.init();
        }
        else {
            this.router.navigate(['/admin/animations']);
        }
    };
    ManageComponent.prototype.init = function () {
        var _this = this;
        this.asvc.findById(this.idRegister).subscribe(function (res) {
            _this.arregloImg = res.animationImg;
            _this.register = res;
            _this.ruta_audio = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animation/" + res.audio;
            _this.ruta_animacion = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animation/" + res.imagen;
            _this.renderGallery();
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent.prototype.renderGallery = function () {
        var html = "";
        var con = 0;
        this.arregloImg.forEach(function (i, e) {
            if (con === 0) {
                html += "<br/><div class='row'>";
            }
            html += "<div class=\"col-md-3 col-sm-3 text-center\">\n               <a href=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animationImagen/" + i.ruta_imagen + "\" target=\"_blank\" data-caption=\"Image caption\">\n                <img src=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animationImagen/" + i.ruta_imagen + "\" alt=\"sin imagen\" />\n               </a>\n               <button type=\"button\" class=\"btn btn-link btn_erase\" data-id=\"" + i.id + "\" data-toggle=\"tooltip\" title=\"eliminar imagen\"><i class=\"fa fa-remove\"></i></button>\n              </div>";
            con++;
            if (con === 4) {
                con = 0;
                html += "</div>";
            }
        });
        if (con > 0 && con < 4) {
            html += "</div>";
        }
        this._ele.nativeElement.querySelector('#div_pictures').innerHTML = html;
        var self = this;
        $('#div_pictures').on('click', 'div > .btn_erase', function (e) {
            self.asvc.deleteImageErase($(this).data('id')).subscribe(function (res) {
                self.toastr.success('Imagen eliminada', 'Éxito');
                self.init();
            }, function (err) {
                self.toastr.error(err.error.message, 'Error!');
            });
        });
        this.loading = false;
    };
    ManageComponent.prototype.add_img = function (input) {
        $('#' + input).click();
    };
    ManageComponent.prototype.remove_all_img = function () {
        var _this = this;
        if (confirm("Esta seguro de querer eliminar todas las imagenes?")) {
            this.loading = true;
            this.asvc.deleteImageEraseAll(this.idRegister).subscribe(function (res) {
                _this.toastr.success('Proceso completado', 'Éxito!');
                _this.init();
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
            });
        }
    };
    ManageComponent.prototype.editFileUpload = function (e, route, campo) {
        var _this = this;
        this.loading = true;
        route = route + this.idRegister;
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append(campo, file, file.name);
        this.asvc.editFileUpload(formData, route).subscribe(function (res) {
            _this.toastr.success('Proceso completado', 'Éxito!');
            _this.loading = false;
            if (route.indexOf('AnimationsAudio') !== -1) {
                _this.ruta_audio = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animation/" + res.audio;
                var html = "<audio controls id=\"audio\" *ngIf=\"register\">\n                      <source src=\"" + _this.ruta_audio + "\" type=\"audio/mpeg\">\n                      Your browser does not support the audio tag.\n                    </audio>";
                $('#tag_audio').empty();
                $('#tag_audio').html(html);
            }
            else if (route.indexOf('AnimationsAnimacion') !== -1) {
                _this.ruta_animacion = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "animation/" + res.aminacion;
            }
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent.prototype.editTexto = function () {
        var _this = this;
        var datos = { texto: this.editTextoString };
        var route = "AnimationsTexto/" + this.idRegister;
        this.loading = true;
        this.asvc.editFileUpload(datos, route).subscribe(function (res) {
            _this.toastr.success('Proceso completado', 'Éxito!');
            _this.register.texto = res.texto;
            $('#modal_texto').modal('hide');
            _this.loading = false;
        }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    ManageComponent.prototype.upload_img = function () {
        var _this = this;
        this.loading = true;
        var imgs = this._ele.nativeElement.querySelector('#add_img').files;
        var formData = new FormData();
        for (var i = imgs.length - 1; i >= 0; i--) {
            formData.append('imagenes', imgs[i], imgs[i].name);
        }
        formData.append('animation_id', this.idRegister);
        this.asvc.upload_img(formData).subscribe(function (res) {
            _this.toastr.success('Proceso Completado', 'Éxito');
            _this.init();
        }, function (err) {
            _this.toastr.error(err.error.messagee, 'Error!');
        });
    };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/admin/animations/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/admin/animations/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _service_animations_service__WEBPACK_IMPORTED_MODULE_2__["AnimationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-animations-animations-module.js.map