(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-interaction-interaction-module"],{

/***/ "./src/app/enterprise/interaction/interaction.component.css":
/*!******************************************************************!*\
  !*** ./src/app/enterprise/interaction/interaction.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_chat{\r\n  border: 1px solid lightgray;\r\n  height: 300px;\r\n  max-height: 300px; \r\n  overflow-y: scroll;\r\n}\r\n\r\n.sordo{\r\n  width: 50%;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.empresa{\r\n  margin-left: 50%;\r\n  color: white;\r\n  width: 50%;\r\n  text-align: center; \r\n}"

/***/ }),

/***/ "./src/app/enterprise/interaction/interaction.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/enterprise/interaction/interaction.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-20 bg-white border-radius-4 box-shadow mb-30 animated slideInUp\">\r\n  <div class=\"pre-loader\" *ngIf=\"loading\">Cargando Respuesta</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <h2 class=\"text-center\">Interacción Tals</h2>\r\n      <p class=\"text-center\">{{ estadoConexionCliente }}</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-md-11 col-sm-11 offset-sm-1 offset-md-1\">\r\n              <textarea name=\"entradaTexto\" id=\"entradaTexto\" rows=\"4\" class=\"form-control\"></textarea>\r\n              <br/>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-md-5 col-sm-5 offset-md-1 offset-sm-1\">\r\n              <button class=\"btn btn-danger btn-block recog\" (click)=\"initSpeakers()\">Reconocer Voz&nbsp;<i class=\"fa fa-comment\"></i></button>\r\n            </div>\r\n            <div class=\"col-md-5 col-sm-5 offset-md-1 offset-sm-1\">\r\n              <button class=\"btn btn-primary btn-block\" (click)=\"sendMessage()\">Enviar&nbsp;<i class=\"fa fa-send\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-md-6 col-sm-6 text-center\">\r\n              <h4 class=\"text-center\">Texto</h4>\r\n              <div id=\"tag_animacion\"></div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 text-center\">\r\n              <h4 class=\"text-center\">Audio</h4>\r\n              <div id=\"tag_audio\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <br>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-5 col-sm-5\">\r\n          <div class=\"text-center\">\r\n            <b>Instrucciones: </b> \r\n            <ul class=\"list-group text-center\">\r\n              <li class=\"list-group-item\">Debe escribir un texto o usar el microfono para comunicarse con el usuario en linea</li>\r\n              <li class=\"list-group-item\">Del lado derecho de la pantalla saldra la respuesta del cliente y podrar ver el historial de mensajes con el usuario</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 offset-md-1 offset-sm-1\">\r\n          <h4 class=\"text-center\">Historial de Mensajes</h4>\r\n          <div class=\"text-center div_chat\">\r\n            <div [ngClass]=\"item.tipo == 1 ? 'alert alert-info empresa' : 'alert alert-danger sordo'\" *ngFor=\"let item of historial; let index = index\">\r\n              {{ item.mensaje }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n          \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/enterprise/interaction/interaction.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/enterprise/interaction/interaction.component.ts ***!
  \*****************************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/animations.service */ "./src/app/service/animations.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/interaction.service */ "./src/app/service/interaction.service.ts");
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
    function InteractionComponent(asvc, toastr, _ele, isvc) {
        this.asvc = asvc;
        this.toastr = toastr;
        this._ele = _ele;
        this.isvc = isvc;
        this.stop = true;
        this.play = false;
        this.estadoConexionCliente = "";
        this.loading = false;
        this.historial = [];
        this.count_saliendo = 0;
        this.count_saludo = 0;
        this.rate = false;
        this.token = localStorage.getItem('token');
        this.escuchandoMicrofono = false;
        this.escuchando = false;
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        this.recognoze = new window.SpeechRecognition();
        this.recognoze.continuous = true;
        this.recognoze.lang = 'es-ES'; // idioma
        this.recognoze.interimResults = true; // nos da resultados aunque no sean finales
    }
    InteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.init();
        window.speechSynthesis.onvoiceschanged = function () {
            var voices = window.speechSynthesis.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i]['lang'] == 'es-CL') {
                    _this.h.voice = voices[i];
                }
            }
        };
    };
    InteractionComponent.prototype.init = function () {
        var _this = this;
        this.isvc.messages.subscribe(function (res) {
            if (res.type === "clientEnterprise") {
                _this.loading = true;
                setTimeout(function () {
                    _this.renderResponseClient(res.data);
                    _this.isvc.sendMsg({ message: "historial" });
                }, 2000);
            }
            if (res.type === "historial") {
                _this.historial = res.data.data;
                setTimeout(function () {
                    var objDiv = _this._ele.nativeElement.querySelector(".div_chat");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }, 500);
            }
            if (res.type === "saludo") {
                _this.count_saliendo = 0;
                if (_this.count_saludo === 0) {
                    _this.count_saludo++;
                    _this.toastr.success('Ya esta en sesión con un usuario cliente', 'Aviso!');
                }
            }
            if (res.type === "exit") {
                _this.count_saliendo++;
                if (_this.count_saliendo === 1) {
                    _this.count_saludo = 0;
                    _this.toastr.warning('El cliente se ha desconectado de la sesión', 'Información');
                }
            }
        });
        this.isvc.sendMsg({ type: 1, profile: this.session.profile, correo: this.session.correo, message: 'typeconnection' });
        this.isvc.rateGet(this.token).subscribe(function (res) {
            _this.rate = res.rate;
        }, function (err) {
            _this.toastr.error('Ha ocurrido un error', 'Error1');
        });
    };
    InteractionComponent.prototype.initSpeakers = function () {
        var _this = this;
        var btn = this._ele.nativeElement.querySelector('button.recog');
        // Funcion empezar / parar
        if (this.escuchando == false) {
            this.recognoze.start();
            this.escuchando = true;
            btn.innerHTML = 'Parar la escucha';
            this.escuchandoMicrofono = true;
        }
        else {
            this.escuchandoMicrofono = false;
            this.recognoze.stop();
            this.escuchando = false;
            btn.innerHTML = 'Reconocer Voz&nbsp;<i class="fa fa-comment"></i>';
        }
        // Eventos del Recognizer
        this.recognoze.onresult = function (event) {
            console.log(event, 'aqui el evento que frao');
            for (var i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    // Si considera que el usuario ya no va a hablar mas
                    // o que la frase ha terminado
                    $('#entradaTexto').text(event.results[i][0].transcript);
                    _this.initSpeakers.bind(_this);
                }
                else {
                    // Si considera que el usuario va a seguir hablando
                    $('#entradaTexto').text(event.results[i][0].transcript);
                }
            }
        };
    };
    InteractionComponent.prototype.sendMessage = function () {
        var _this = this;
        var message1 = this._ele.nativeElement.querySelector('#entradaTexto').value;
        console.log('entro para enviar el mesaje');
        this.isvc.sendMsg({ message: "enterpriseClient", msg: message1 });
        setTimeout(function () {
            _this.isvc.sendMsg({ message: "historial" });
        }, 500);
    };
    InteractionComponent.prototype.renderResponseClient = function (data) {
        var _this = this;
        this.h = new SpeechSynthesisUtterance();
        this.h.lang = "es-CL";
        this.h.text = data;
        speechSynthesis.speak(this.h);
        var html = "<button class=\"btn btn-primary speak\">Reproducir Audio&nbsp;<i class=\"fa fa-play\"></i></button>";
        var html_img = "<h4>" + data + "</h4>";
        $('#tag_audio').empty();
        $('#tag_audio').html(html);
        $('#tag_animacion').html();
        $('#tag_animacion').html(html_img);
        $('#tag_audio').on('click', '.speak', function () {
            _this.hablar(data);
        });
        this.loading = false;
    };
    InteractionComponent.prototype.hablar = function (data) {
        this.h = new SpeechSynthesisUtterance();
        this.h.lang = "es-CL";
        this.h.text = data;
        speechSynthesis.speak(this.h);
    };
    InteractionComponent.prototype.startRecord = function () {
        this.stop = false;
        this.play = true;
        this.audioChunks = [];
        this.rec.start();
    };
    InteractionComponent.prototype.stopRecord = function () {
        this.stop = true;
        this.play = false;
        this.rec.stop();
    };
    InteractionComponent.prototype.ngOnDestroy = function () {
        this.isvc.sendMsg({ message: "saliendo" });
        if (!this.rate) {
            localStorage.setItem('rate', JSON.stringify({ value: 1 }));
        }
    };
    InteractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/enterprise/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.css */ "./src/app/enterprise/interaction/interaction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _service_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"]])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/enterprise/interaction/interaction.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/enterprise/interaction/interaction.module.ts ***!
  \**************************************************************/
/*! exports provided: InteractionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModule", function() { return InteractionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interaction.component */ "./src/app/enterprise/interaction/interaction.component.ts");
/* harmony import */ var _interaction_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction.routes */ "./src/app/enterprise/interaction/interaction.routes.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_interaction_routes__WEBPACK_IMPORTED_MODULE_5__["InteractionRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_interaction_component__WEBPACK_IMPORTED_MODULE_4__["InteractionComponent"]]
        })
    ], InteractionModule);
    return InteractionModule;
}());



/***/ }),

/***/ "./src/app/enterprise/interaction/interaction.routes.ts":
/*!**************************************************************!*\
  !*** ./src/app/enterprise/interaction/interaction.routes.ts ***!
  \**************************************************************/
/*! exports provided: InteractionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionRoutes", function() { return InteractionRoutes; });
/* harmony import */ var _interaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction.component */ "./src/app/enterprise/interaction/interaction.component.ts");

var InteractionRoutes = [
    {
        path: '',
        component: _interaction_component__WEBPACK_IMPORTED_MODULE_0__["InteractionComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=enterprise-interaction-interaction-module.js.map