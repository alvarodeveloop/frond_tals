(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-interaction-interaction-module"],{

/***/ "./src/app/client/interaction/enterprise-free/enterprise-free.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/client/interaction/enterprise-free/enterprise-free.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/interaction/enterprise-free/enterprise-free.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/client/interaction/enterprise-free/enterprise-free.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 col-sm-8\">\r\n    <div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 col-sm-7\">\r\n          <h3 class=\"text-center\">Datos de la Empresa</h3> \r\n          <br>\r\n          <div class=\"col-md-12 col-sm-12\">\r\n            <p><b>Nombre Empresa</b>: <br/>{{ enterprise ? enterprise.nombre : \"\" }}</p>\r\n            <p><b>Correo Empresa</b>: <br/>{{ enterprise ? enterprise.correo : \"\" }}</p>\r\n            <p><b>Dirección Empresa</b>: <br/>{{ enterprise ? enterprise.direccion : \"\" }}</p>\r\n            <p><b>Teléfono Empresa</b>: <br/>{{ enterprise ? enterprise.telefono : \"\" }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5 col-sm-5 text-center\">\r\n          <img [src]=\"route_btn\" alt=\"\" style=\"height: 200px;\">\r\n          <br/><br/>\r\n          <a *ngIf=\"btn_disabled\" [routerLink]=\"['/client/interaction/initialize/',enterpriseId]\" class=\"btn btn-success btn-block\">Establecer conexión&nbsp;<i class=\"fa fa-power-off\"></i></a>\r\n          <button type=\"button\" *ngIf=\"!btn_disabled\" class=\"btn btn-danger btn-block\">Conexión Ocupada&nbsp;<i class=\"fa fa-remove\"></i></button>\r\n        </div>\r\n        <br/><br/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 col-sm-4\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-11 col-sm-11 offset-md-1 offset-sm-1\" id=\"div_carrousel\">\r\n          \r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/client/interaction/enterprise-free/enterprise-free.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/client/interaction/enterprise-free/enterprise-free.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EnterpriseFreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseFreeComponent", function() { return EnterpriseFreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/interaction.service */ "./src/app/service/interaction.service.ts");
/* harmony import */ var _service_publicity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/publicity.service */ "./src/app/service/publicity.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnterpriseFreeComponent = /** @class */ (function () {
    function EnterpriseFreeComponent(router, _router, toastr, isvc, psvc) {
        this.router = router;
        this._router = _router;
        this.toastr = toastr;
        this.isvc = isvc;
        this.psvc = psvc;
        this.enterpriseId = "";
        this.btn_disabled = false;
        this.route_btn = "../../../../../assets/images/conecctionbtn.png";
        this.token = localStorage.getItem('token');
        this.enterpriseId = this._router.snapshot.paramMap.get('id');
    }
    EnterpriseFreeComponent.prototype.ngOnInit = function () {
        this.init();
    };
    EnterpriseFreeComponent.prototype.init = function () {
        var _this = this;
        if (this.enterpriseId) {
            var enterpriseObservable = this.isvc.getEnterpriseById(this.enterpriseId, this.token);
            var publicity = this.psvc.getEnterprisePublicityActive(this.enterpriseId);
            //const publicityObservable  = this.psvc.getEnterprisePublicity(this.enterpriseId)
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
                enterpriseObservable,
                publicity
            ])
                .subscribe(function (res) {
                _this.enterprise = res[0][0];
                _this.publicity = res[1];
                _this.btn_disabled = _this.enterprise.enterpriseonline[0].sordo_id ? false : true;
                _this.renderPublicity();
            }, function (err) {
                _this.toastr.error(err.error.message, 'Error!');
                _this.router.navigate(['/client/interaction']);
            });
        }
        else {
            this.router.navigate(['/client/interaction']);
        }
    };
    EnterpriseFreeComponent.prototype.renderPublicity = function () {
        var html = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <div class=\"carousel-inner\">";
        var con = 0;
        var active = "";
        console.log(this.publicity, 'aqui');
        this.publicity.publicempresa.forEach(function (i, e) {
            if (con === 0) {
                active = "active";
            }
            else {
                active = "";
            }
            html += "<div class=\"carousel-item " + active + "\">\n                  <img class=\"d-block w-100\" src=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "publicity/" + i.publicidades.image + "\" alt=\"First slide\" style=\"height: 250px\">\n               </div>";
            con++;
        });
        html += "</div>\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </div>";
        $('#div_carrousel').html(html);
    };
    EnterpriseFreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-free',
            template: __webpack_require__(/*! ./enterprise-free.component.html */ "./src/app/client/interaction/enterprise-free/enterprise-free.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-free.component.css */ "./src/app/client/interaction/enterprise-free/enterprise-free.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"],
            _service_publicity_service__WEBPACK_IMPORTED_MODULE_4__["PublicityService"]])
    ], EnterpriseFreeComponent);
    return EnterpriseFreeComponent;
}());



/***/ }),

/***/ "./src/app/client/interaction/initialize/initialize.component.css":
/*!************************************************************************!*\
  !*** ./src/app/client/interaction/initialize/initialize.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_chat{\r\n  border: 1px solid lightgray;\r\n  height: 400px;\r\n  max-height: 400px; \r\n  overflow-y: scroll;\r\n}\r\n\r\n.sordo{\r\n  width: 50%;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.empresa{\r\n  margin-left: 50%;\r\n  color: white;\r\n  width: 50%;\r\n  text-align: center; \r\n}\r\n\r\n.btn-circle.btn-xl {\r\n    width: 70px;\r\n    height: 70px;\r\n    padding: 10px 16px;\r\n    border-radius: 35px;\r\n    font-size: 24px;\r\n    line-height: 1.33;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n}"

/***/ }),

/***/ "./src/app/client/interaction/initialize/initialize.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/client/interaction/initialize/initialize.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"pre-loader\" *ngIf=\"loading\">Enviando y Esperando Respuesta</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-3\">\r\n      <div id=\"div_camera\" class=\"text-center\">\r\n        <video id=\"webcam\" width=\"227\" height=\"227\" style=\"display:none;\"></video>\r\n        <!-- \r\n        <canvas id=\"canvas\" width=\"227\" height=\"227\"></canvas>\r\n         -->\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-12 col-sm-12 text-center\">\r\n          <button class=\"btn btn-secondary btn-circle\" [disabled]=\"btn_disabled\" (click)=\"start()\"><i class=\"fa fa-play\"></i></button>  \r\n          <button class=\"btn btn-secondary btn-circle\" [disabled]=\"btn_disabled1\" (click)=\"stop()\"><i class=\"fa fa-stop\"></i></button>  \r\n          <button type=\"button\" class=\"btn btn-danger btn-circle\" (click)=\"erase_character()\"><i class=\"fa fa-remove\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-circle\" (click)=\"clean_string()\"><i class=\"fa fa-trash\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-success btn-circle\" (click)=\"send()\"><i class=\"fa fa-send\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <br/>\r\n      <div class=\"col-md-12 col-sm-12\">Texto a Enviar: {{ string_output }}</div>\r\n      <div class=\"clearfix\"></div>\r\n      <br>\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_cuenta\" class=\"btn btn-primary btn-block\">Instrucciones</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9 col-sm-9\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-6 col-sm-6 text-center\">\r\n          <h4 class=\"text-center\">Animación</h4>\r\n          <div id=\"tag_animacion\"></div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 text-center\">\r\n          <h4 class=\"text-center\">Historial de Mensajes</h4>\r\n          <div class=\"text-center div_chat\">\r\n            <div [ngClass]=\"item.tipo == 1 ? 'alert alert-info sordo' : 'alert alert-danger empresa'\" *ngFor=\"let item of historial; let index = index\" style=\"opacity: 1;\">\r\n              {{ item.mensaje }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"modal_cuenta\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header login-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n                <h4 class=\"modal-title\"></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                  <ul class=\"list-group\">\r\n                      <li class=\"list-group-flush\">\r\n                        <button class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-play\"></i></button>&nbsp;&nbsp;Empezar uso de la Cámara\r\n                      </li>\r\n                      <li class=\"list-group-flush\">\r\n                        <button class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-stop\"></i></button>&nbsp;&nbsp;Parar uso de la Cámara\r\n                      </li>\r\n                      <li class=\"list-group-flush\">\r\n                        <button class=\"btn btn-danger btn-circle\"><i class=\"fa fa-remove\"></i></button>&nbsp;&nbsp;Remover 1 Caracter del texto\r\n                      </li>\r\n                      <li class=\"list-group-flush\">\r\n                        <button class=\"btn btn-danger btn-circle\"><i class=\"fa fa-trash\"></i></button>&nbsp;&nbsp;Limpiar la cadena de texto\r\n                      </li>\r\n                      <li class=\"list-group-flush\">\r\n                        <button class=\"btn btn-success btn-circle\"><i class=\"fa fa-send\"></i></button>&nbsp;&nbsp;Mandar mensaje a la empresa\r\n                      </li>\r\n                    </ul>\r\n                </div>\r\n              </div>\r\n            </div><!-- fin modal-body -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cerrar</button>\r\n            </div>\r\n        </div><!-- fin modal-content -->\r\n    </div><!-- fin modal-dialog -->\r\n</div> <!-- fin modal -->\r\n"

/***/ }),

/***/ "./src/app/client/interaction/initialize/initialize.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/client/interaction/initialize/initialize.component.ts ***!
  \***********************************************************************/
/*! exports provided: InitializeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeComponent", function() { return InitializeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/animations.service */ "./src/app/service/animations.service.ts");
/* harmony import */ var _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/interaction.service */ "./src/app/service/interaction.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var InitializeComponent = /** @class */ (function () {
    function InitializeComponent(asvc, toastr, isvc, router, _router, _eleRef) {
        this.asvc = asvc;
        this.toastr = toastr;
        this.isvc = isvc;
        this.router = router;
        this._router = _router;
        this._eleRef = _eleRef;
        /*route1 : string = "../../../../assets/images/cat.jpg"
        route2 : string = "../../../../assets/images/dog1.jpg"
        route3 : string = "../../../../assets/images/dog2.jpg"
        route4 : string = "../../../../assets/images/ejemplo1.jpg"
        route5 : string = "../../../../assets/images/ejemplo2.jpg"*/
        this.videoPlaying = false;
        this.registers = [];
        this.arreglo_elements = [];
        this.idEnterprise = "";
        this.loading = false;
        this.classPredilect = 0;
        this.btn_disabled = false;
        this.btn_disabled1 = true;
        this.count = 0;
        this.backup = "";
        this.historial = [];
        this.count_saliendo = 0;
        this.string_output = "";
        this.rate = false;
        this.token = localStorage.getItem('token');
        this.attempts = 0;
        this.stat = new profiler();
        this.session = JSON.parse(localStorage.getItem('session'));
        this.idEnterprise = this._router.snapshot.paramMap.get('id');
        this.count_saliendo = 0;
    }
    InitializeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appendVideo();
        this.init();
        //this.initFrame()
        // socket 
        var obj = { type: 2, profile: this.session.profile, correo: this.session.correo, enterprise_id: this.idEnterprise, message: 'typeconnection' };
        this.sendWsMsg(obj);
        this.isvc.messages.subscribe(function (res) {
            if (res.type === "enterpriseClient") {
                setTimeout(function () {
                    _this.renderResponseClient(res.data.data);
                    _this.sendWsMsg({ 'message': "historial" });
                }, 2500);
            }
            if (res.type === "historial") {
                _this.historial = res.data.mensj;
                setTimeout(function () {
                    var objDiv = _this._eleRef.nativeElement.querySelector(".div_chat");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }, 500);
            }
            if (res.type === "exit") {
                _this.count_saliendo++;
                if (_this.count_saliendo === 1) {
                    _this.toastr.warning('La empresa se ha desconectado de la sesión', 'Información');
                    _this.router.navigate(['/client/interaction']);
                }
            }
        });
    };
    InitializeComponent.prototype.initFrame = function () {
        var _this = this;
        this.canvas = this._eleRef.nativeElement.querySelector('#canvas');
        this.webcam = this._eleRef.nativeElement.querySelector('#webcam');
        this.readyListener();
        this.webcam.addEventListener('loadeddata', this.readyListener.bind(this));
        compatibility.getUserMedia({ video: true, audio: false }, function (stream) {
            try {
                _this.webcam.src = compatibility.URL.createObjectURL(stream);
                _this.webcam.addEventListener('playing', function () { return _this.videoPlaying = true; });
                _this.webcam.addEventListener('paused', function () { return _this.videoPlaying = false; });
            }
            catch (error) {
                _this.webcam.src = stream;
                _this.webcam.addEventListener('playing', function () { return _this.videoPlaying = true; });
                _this.webcam.addEventListener('paused', function () { return _this.videoPlaying = false; });
            }
            setTimeout(function () {
                _this.webcam.play();
            }, 500);
        }, function (error) {
            $('#canvas').hide();
            $('#log').hide();
            $('#no_rtc').html('<h4>WebRTC not available.</h4>');
            $('#no_rtc').show();
        });
    };
    InitializeComponent.prototype.readyListener = function () {
        this.findVideoSize();
    };
    InitializeComponent.prototype.findVideoSize = function () {
        if (this.webcam.videoWidth > 0 && this.webcam.videoHeight > 0) {
            this.webcam.removeEventListener('loadeddata', this.readyListener);
            this.onDimensionsReady(this.webcam.videoWidth, this.webcam.videoHeight);
        }
        else {
            if (this.attempts < 10) {
                this.attempts++;
                setTimeout(this.findVideoSize.bind(this), 200);
            }
            else {
                this.onDimensionsReady(227, 227);
            }
        }
    };
    InitializeComponent.prototype.onDimensionsReady = function (width, height) {
        var canvasWidth = this.canvas.width;
        var canvasHeight = this.canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = "rgb(0,255,0)";
        this.ctx.strokeStyle = "rgb(0,255,0)";
        this.img_u8 = new jsfeat.matrix_t(227, 227, jsfeat.U8C1_t);
        //var gui = new dat.GUI();
        var demo_opt = function () {
            this.blur_radius = 2;
            this.low_threshold = 20;
            this.high_threshold = 50;
        };
        this.options = new demo_opt();
        //gui.add(this.options, 'blur_radius', 0, 4).step(1);
        //gui.add(this.options, 'low_threshold', 1, 127).step(1);
        //gui.add(this.options, 'high_threshold', 1, 127).step(1);
        this.stat.add("grayscale");
        this.stat.add("gauss blur");
        this.stat.add("canny edge");
        compatibility.requestAnimationFrame(this.tick.bind(this));
    };
    InitializeComponent.prototype.tick = function () {
        var _this = this;
        compatibility.requestAnimationFrame(this.tick.bind(this));
        this.stat.new_frame();
        if (this.webcam.readyState === this.webcam.HAVE_ENOUGH_DATA) {
            this.ctx.drawImage(this.webcam, 0, 0, 227, 227);
            var imageData = this.ctx.getImageData(0, 0, 227, 227);
            this.stat.start("grayscale");
            jsfeat.imgproc.grayscale(imageData.data, 227, 227, this.img_u8);
            this.stat.stop("grayscale");
            var r = this.options.blur_radius | 0;
            var kernel_size = (r + 1) << 1;
            this.stat.start("gauss blur");
            jsfeat.imgproc.gaussian_blur(this.img_u8, this.img_u8, kernel_size, 0);
            this.stat.stop("gauss blur");
            this.stat.start("canny edge");
            jsfeat.imgproc.canny(this.img_u8, this.img_u8, this.options.low_threshold | 0, this.options.high_threshold | 0);
            this.stat.stop("canny edge");
            // render result back to canvas
            var data_u32 = new Uint32Array(imageData.data.buffer);
            var alpha = (0xff << 24);
            var i = this.img_u8.cols * this.img_u8.rows, pix = 0;
            while (--i >= 0) {
                pix = this.img_u8.data[i];
                data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
            }
            this.ctx.putImageData(imageData, 0, 0);
            var image = document.createElement('img');
            image.crossOrigin = "Anonymous";
            image.width = 227;
            image.height = 227;
            image.src = this.ctx.canvas.toDataURL("image/png");
            image.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            }); };
        }
    };
    InitializeComponent.prototype.sendWsMsg = function (data) {
        this.isvc.sendMsg(data);
    };
    InitializeComponent.prototype.renderResponseClient = function (data) {
        console.log(data);
        var ruta_audio = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "animation/" + data.audio;
        var html = "<h3>" + data.texto + "</h3>";
        var html_img = "<img src=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "animation/" + data.imagen + "\" width=\"50%\" />";
        $('#tag_audio').empty();
        $('#tag_audio').html(html);
        $('#tag_animacion').html();
        $('#tag_animacion').html(html_img);
        this.loading = false;
        this.btn_disabled = false;
    };
    InitializeComponent.prototype.erase_character = function () {
        this.string_output = this.string_output.substring(0, this.string_output.length - 1);
    };
    InitializeComponent.prototype.clean_string = function () {
        this.string_output = "";
    };
    InitializeComponent.prototype.send = function () {
        var _this = this;
        if (this.string_output.length > 0) {
            this.sendWsMsg({ message: "clientEnterprise", data: this.string_output });
            setTimeout(function () {
                _this.sendWsMsg({ 'message': "historial" });
            }, 500);
            this.stop();
        }
        else {
            this.toastr.error('Debe crear una oración mediante la cámara');
        }
    };
    InitializeComponent.prototype.init = function () {
        var _this = this;
        var self = this;
        var imagesInteraction = this.asvc.getImagesInteraction();
        var validateRate = this.isvc.rateGet(this.token);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
            imagesInteraction,
            validateRate
        ]).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var con, con1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.registers = res[0];
                        this.rate = res[1].rate;
                        if (!(this.registers.length > 0)) return [3 /*break*/, 4];
                        if (!(dl == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.knn = new knn_image_classifier.KNNImageClassifier(self.registers.length, 10);
                        return [4 /*yield*/, this.knn.load()];
                    case 3:
                        _a.sent();
                        con = 0;
                        con1 = 0;
                        this.registers.forEach(function (i, e) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    i.animationImg.forEach(function (i2, e2) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _this = this;
                                            var imageUrl, image;
                                            return __generator(this, function (_a) {
                                                imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "animationImagen/" + i2.ruta_imagen;
                                                image = document.createElement('img');
                                                image.crossOrigin = "Anonymous";
                                                image.width = 227;
                                                image.height = 227;
                                                image.id = "image_" + con1;
                                                image.dataset.id_animacion = "" + con;
                                                image.src = imageUrl;
                                                image.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var image_pixel;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                image_pixel = dl.fromPixels(image);
                                                                return [4 /*yield*/, self.knn.addImage(image_pixel, e)];
                                                            case 1:
                                                                _a.sent();
                                                                if (e2 + 1 == i.animationImg.length) {
                                                                    self.arreglo_elements.push(self.registers[e]);
                                                                }
                                                                if (e + 1 == self.registers.length) {
                                                                    if (e2 + 1 == i.animationImg.length) {
                                                                        /*var image_pixel2;
                                                                        
                                                                        image_pixel2 = dl.fromPixels(dog2)
                                                    
                                                                        const prediction = await self.knn.predictClass(image_pixel2);
                                                                        const indexClass = prediction.classIndex
                                                                        console.log(prediction)
                                                                        console.log(self.registers[indexClass])
                                                    
                                                                        alert(prediction.classIndex+1) */
                                                                        //self.initFrame()
                                                                        self.start();
                                                                    }
                                                                }
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); };
                                                return [2 /*return*/];
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');
        });
    };
    InitializeComponent.prototype.appendVideo = function () {
        var _this = this;
        this.video = document.createElement('video');
        this.video.setAttribute('autoplay', '');
        this.video.setAttribute('playsinline', '');
        $('#div_camera').append(this.video);
        //document.body.appendChild(this.video);
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.width = 227;
            _this.video.height = 227;
            _this.video.addEventListener('playing', function () { return _this.videoPlaying = true; });
            _this.video.addEventListener('paused', function () { return _this.videoPlaying = false; });
        });
    };
    InitializeComponent.prototype.start = function () {
        this.video.play();
        this.videoPlaying = true;
        this.btn_disabled = true;
        this.btn_disabled1 = false;
        this.timer = requestAnimationFrame(this.animate.bind(this));
        //this.tick()
    };
    InitializeComponent.prototype.stop = function () {
        this.video.pause();
        this.videoPlaying = false;
        this.btn_disabled1 = true;
        this.btn_disabled = false;
        cancelAnimationFrame(this.timer);
        //compatibility.cancelAnimationFrame(this.tick)
    };
    InitializeComponent.prototype.animate = function () {
        var _this = this;
        if (this.videoPlaying) {
            // Get image data from video element
            var image_1 = dl.fromPixels(this.video);
            // If any examples have been added, run predict
            var exampleCount = this.knn.getClassExampleCount();
            if (Math.max.apply(Math, exampleCount) > 0) {
                this.knn.predictClass(image_1)
                    .then(function (res) {
                    _this.count++;
                    var indexClass = res.classIndex;
                    _this.classPredilect = indexClass;
                    if (_this.count === 1 && _this.classPredilect !== _this.backup) {
                        if (_this.arreglo_elements[indexClass].texto === "_vacio") {
                            if (_this.string_output !== "") {
                                _this.string_output += " ";
                            }
                        }
                        else if (_this.arreglo_elements[indexClass].texto === "_nada") {
                        }
                        else {
                            var last_letter = _this.string_output.substring(_this.string_output.length - 1);
                            if (last_letter !== _this.arreglo_elements[indexClass].texto) {
                                _this.string_output += _this.arreglo_elements[indexClass].texto;
                            }
                        }
                        _this.count = 0;
                    }
                    else if (_this.count === 2) {
                        _this.count = 0;
                    }
                    _this.backup = indexClass;
                })
                    .then(function () { return image_1.dispose(); });
            }
            else {
                image_1.dispose();
            }
        }
        this.timer = requestAnimationFrame(this.animate.bind(this));
    };
    InitializeComponent.prototype.ngOnDestroy = function () {
        this.stop();
        this.sendWsMsg({ message: "saliendo" });
        if (!this.rate) {
            localStorage.setItem('rate', JSON.stringify({ value: 1 }));
        }
    };
    InitializeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initialize',
            template: __webpack_require__(/*! ./initialize.component.html */ "./src/app/client/interaction/initialize/initialize.component.html"),
            styles: [__webpack_require__(/*! ./initialize.component.css */ "./src/app/client/interaction/initialize/initialize.component.css")]
        }),
        __metadata("design:paramtypes", [_service_animations_service__WEBPACK_IMPORTED_MODULE_2__["AnimationsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InitializeComponent);
    return InitializeComponent;
}());



/***/ }),

/***/ "./src/app/client/interaction/interaction.component.css":
/*!**************************************************************!*\
  !*** ./src/app/client/interaction/interaction.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/interaction/interaction.component.html":
/*!***************************************************************!*\
  !*** ./src/app/client/interaction/interaction.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <table class=\"table table-hover\" id=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\">Nombre</th>\r\n            <th class=\"text-center\">Correo</th>\r\n            <th class=\"text-center\">Teléfono</th>\r\n            <th class=\"text-center\">Disponibilidad</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"text-center\">\r\n          \r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/client/interaction/interaction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/client/interaction/interaction.component.ts ***!
  \*************************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/interaction.service */ "./src/app/service/interaction.service.ts");
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




var InteractionComponent = /** @class */ (function () {
    function InteractionComponent(isvc, tostr, router) {
        this.isvc = isvc;
        this.tostr = tostr;
        this.router = router;
        this.token = localStorage.getItem('token');
    }
    InteractionComponent.prototype.ngOnInit = function () {
        this.init();
        this.intervalVarible = this.getEnterpriseOnline();
    };
    InteractionComponent.prototype.init = function () {
        var _this = this;
        this.isvc.getEnterprise(this.token).subscribe(function (res) {
            _this.EnterpriseOnline = res;
            _this.renderTableEnterprise();
        }, function (err) {
            _this.tostr.error(err.error.message, 'Error!');
        });
    };
    InteractionComponent.prototype.renderTableEnterprise = function () {
        var _this = this;
        if ($.fn.DataTable.isDataTable('#table')) {
            $('#table').DataTable().destroy();
        }
        $('#table').dataTable({
            data: this.EnterpriseOnline,
            columns: [
                { "data": 'nombre' },
                { "data": 'correo' },
                { "data": 'telefono' },
                { "data": 'enterpriseonline', "render": function (data) {
                        var html = "";
                        var datos = data[0];
                        if (!datos.sordo_id) {
                            html = "<button class=\"btn btn-success btn_editar\" title=\"Click para ver datos de la empresa\" data-toggle=\"tooltip\">\n                      Conexi\u00F3n disponible&nbsp;&nbsp;\n                      <i class=\"fa fa-check\"></i>\n                    </button>";
                        }
                        else {
                            html = "<button class=\"btn btn-danger btn_editar\" title=\"Click para ver datos de la empresa\" data-toggle=\"tooltip\">\n                      Conexi\u00F3n Ocupada&nbsp;&nbsp;\n                      <i class=\"fa fa-remove\"></i>\n                    </button>";
                        }
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
    InteractionComponent.prototype.editRegister = function (data) {
        this.router.navigate(['/client/interaction/enterprise', data.id]);
    };
    InteractionComponent.prototype.getEnterpriseOnline = function () {
        var _this = this;
        return window.setInterval(function () {
            _this.init();
        }, 15000);
    };
    InteractionComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalVarible);
    };
    InteractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/client/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.css */ "./src/app/client/interaction/interaction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/client/interaction/interaction.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/client/interaction/interaction.module.ts ***!
  \**********************************************************/
/*! exports provided: InteractionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModule", function() { return InteractionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interaction.component */ "./src/app/client/interaction/interaction.component.ts");
/* harmony import */ var _interaction_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction.routes */ "./src/app/client/interaction/interaction.routes.ts");
/* harmony import */ var _enterprise_free_enterprise_free_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enterprise-free/enterprise-free.component */ "./src/app/client/interaction/enterprise-free/enterprise-free.component.ts");
/* harmony import */ var _initialize_initialize_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initialize/initialize.component */ "./src/app/client/interaction/initialize/initialize.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InteractionModule = /** @class */ (function () {
    function InteractionModule() {
    }
    InteractionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_interaction_routes__WEBPACK_IMPORTED_MODULE_5__["InteractionRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"], _enterprise_free_enterprise_free_component__WEBPACK_IMPORTED_MODULE_6__["EnterpriseFreeComponent"], _initialize_initialize_component__WEBPACK_IMPORTED_MODULE_7__["InitializeComponent"]]
        })
    ], InteractionModule);
    return InteractionModule;
}());



/***/ }),

/***/ "./src/app/client/interaction/interaction.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/client/interaction/interaction.routes.ts ***!
  \**********************************************************/
/*! exports provided: InteractionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionRoutes", function() { return InteractionRoutes; });
/* harmony import */ var _interaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction.component */ "./src/app/client/interaction/interaction.component.ts");
/* harmony import */ var _enterprise_free_enterprise_free_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-free/enterprise-free.component */ "./src/app/client/interaction/enterprise-free/enterprise-free.component.ts");
/* harmony import */ var _initialize_initialize_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize/initialize.component */ "./src/app/client/interaction/initialize/initialize.component.ts");



var InteractionRoutes = [
    {
        path: '',
        component: _interaction_component__WEBPACK_IMPORTED_MODULE_0__["InteractionComponent"]
    },
    {
        path: 'enterprise/:id',
        component: _enterprise_free_enterprise_free_component__WEBPACK_IMPORTED_MODULE_1__["EnterpriseFreeComponent"]
    },
    {
        path: 'initialize/:id',
        component: _initialize_initialize_component__WEBPACK_IMPORTED_MODULE_2__["InitializeComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=client-interaction-interaction-module.js.map