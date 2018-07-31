(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-auth></app-auth> -->\n <!-- <app-component-form>Loading...</app-component-form> -->\n\n <router-outlet>\n    </router-outlet>\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_head_component_head_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-head/component-head.component */ "./src/app/component-head/component-head.component.ts");
/* harmony import */ var _component_form_component_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-form/component-form.component */ "./src/app/component-form/component-form.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _challan_challan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./challan/challan.component */ "./src/app/challan/challan.component.ts");
/* harmony import */ var _challan1_challan1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./challan1/challan1.component */ "./src/app/challan1/challan1.component.ts");
/* harmony import */ var _signal_signal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signal/signal.component */ "./src/app/signal/signal.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _challan1_tabset_basic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./challan1/tabset-basic */ "./src/app/challan1/tabset-basic.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    {
        path: '',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]
    },
    {
        path: 'register',
        component: _component_form_component_form_component__WEBPACK_IMPORTED_MODULE_6__["ComponentFormComponent"]
    },
    {
        path: 'home',
        component: _component_head_component_head_component__WEBPACK_IMPORTED_MODULE_5__["ComponentHeadComponent"],
        children: [
            {
                path: '',
                component: _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"]
            },
            {
                path: 'report',
                component: _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"]
            },
            {
                path: 'update',
                component: _update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"]
            },
            {
                path: 'signal',
                component: _signal_signal_component__WEBPACK_IMPORTED_MODULE_15__["SignalComponent"]
            },
            {
                path: 'challan',
                component: _challan1_challan1_component__WEBPACK_IMPORTED_MODULE_14__["Challan1Component"],
            },
            {
                path: "**",
                component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
            }
        ]
    },
    {
        path: "**",
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_head_component_head_component__WEBPACK_IMPORTED_MODULE_5__["ComponentHeadComponent"],
                _component_form_component_form_component__WEBPACK_IMPORTED_MODULE_6__["ComponentFormComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"],
                _challan_challan_component__WEBPACK_IMPORTED_MODULE_13__["ChallanComponent"],
                _signal_signal_component__WEBPACK_IMPORTED_MODULE_15__["SignalComponent"],
                _challan1_challan1_component__WEBPACK_IMPORTED_MODULE_14__["Challan1Component"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_16__["ViewComponent"],
                _challan1_tabset_basic__WEBPACK_IMPORTED_MODULE_17__["NgbdTabsetBasic"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform{\n    border: 7px inset rgb(156, 7, 7);\n    padding: 20px;\n    background-blend-mode: hue;\n    padding-bottom: 70px;\n}\n\n.body{\n    background-image: './assets/cs1.jpg';\npadding-top: 60px;\n -webkit-backface-visibility: visible;\n         backface-visibility: visible;\n \n  \n\t\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: 100%;\n\t\n  /* Set up positioning */\n  background-position: center;\n    background-repeat: no-repeat;\n     background-size: 100% 100%; \n}"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top navbar-expand-sm\" style=\"min-height: 80px;\">\n    <div class = \"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">\n        <div id=\"trafficlight\" >\n            <span id=\"light1\"></span>\n            <span id=\"light2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signal_Voilation_System</span>\n            <span id=\"light3\"></span>\n          </div></a>\n    </div>\n    <button type = \"button\" (click)=\"goto();\" class = \"button navbar-btn btn btn-lg active navbar-right\" style=\"margin-right: 10px;\">Register</button>\n</nav>\n\n<div class=\"body\">\n    <div *ngIf=\"this.err\"\n    class=\"alert-danger\">Invalid UserName or Password! Please Try Again ;)\n</div>\n    <div class=\"container backCol\">\n      <div class=\"row1 row\">\n        <h2 align=\"center\" class=\"vehicle\" ><font color=\"black\">Login Form</font></h2>\n        <div class=\"col-sm-8\">\n          <div class=\"col-lg-12 col-lg-offset-3\">\n            <div class=\"myform\">\n              \n              <form #log=\"ngForm\" (ngSubmit)=\"Authenticate(log)\">\n                <fieldset>\n                  <legend>Login Here</legend>\n                  <div class=\"form-group\">\n                    <label for=\"uname\" style=\"color:rgb(231, 154, 154);\">USER NAME</label>\n                    \n                    <input type=\"text\" id=\"uname\" class=\"form-control\"  placeholder=\"enter user name\"\n                    name=\"uname\" \n                    ngModel\n                    #uname=\"ngModel\" required\n                    minlength=\"4\"\n                    maxlength=\"20\"\n                    pattern=\"^[a-zA-Z0-9]{4,12}$\"/>\n                    \n                    <div *ngIf=\"!uname.valid && uname.touched\"\n                                  class=\"alert-danger\">Invalid Username: It must contain 4-20 alphanuberic characters \n                          </div>\n                  </div>\n\n\n\n                  <div class=\"form-group\">\n                    <label for=\"pass\" style=\"color:rgb(231, 154, 154);\">PASSWORD</label>\n                    \n                    <input type=\"password\" id=\"pass\" class=\"form-control\" placeholder=\"enter password\" \n                    name=\"pass\"\n                    ngModel\n                    #pass=\"ngModel\" required\n                    pattern=\"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$\"/>\n                    \n                    <div *ngIf=\"!pass.valid && pass.touched\"\n                                  class=\"alert-danger\">Invalid Password:It must contain at least 8 characters ,at least 1 uppercase letter, 1 lowercase letter, and 1 number Can contain special characters\n\n                              </div>\n                  \n                  </div>\n                </fieldset>\n                <input type=\"submit\" [attr.disabled]=\"!(uname.valid && pass.valid) ? true : null \" class=\"btn btn-md active button\" value=\"Login\"/>\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>  \n    </div> \n  </div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservices/dataservice.service */ "./src/app/myservices/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(ds, router) {
        this.ds = ds;
        this.router = router;
        this.err = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.goto = function () {
        this.router.navigate(['register']);
    };
    AuthComponent.prototype.Authenticate = function (log) {
        var _this = this;
        console.log(log.value);
        this.ds.login(log).subscribe(function (response) {
            console.log(response);
            if (response === 'abc') {
                _this.err = false;
                _this.router.navigate(['home']);
            }
            else {
                _this.err = true;
            }
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["dataservice"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());

// onAddEmployee(empForm){
//   this.ds.addEmployee(empForm).subscribe((response)=>{
//       this.ds.loggingService(response);
//   });
// }


/***/ }),

/***/ "./src/app/challan/challan.component.css":
/*!***********************************************!*\
  !*** ./src/app/challan/challan.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/challan/challan.component.html":
/*!************************************************!*\
  !*** ./src/app/challan/challan.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container backCol\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <div class=\"col-lg-22 col-lg-offset-6\">\n\n\n                <div class=\"myform\">\n                    <form>\n                      <fieldset>\n                        <legend>Issue E-Challan</legend>\n                        <div class=\"form-group\">\n                            <label for=\"vno\"><font color=\"brown\">VEHICLE NUMBER</font></label>\n                            <input type=\"text\" id=\"vno\" class=\"form-control\"  placeholder=\"enter vehicle number\">\n                          </div>\n                       \n                 <div class=\"form-group\">\n                              <label for=\"offence\"><font color=\"brown\">OFFENCE</font></label>\n                              <select class=\"form-control\" id=\"offence\" default=\"none\">\n                                  <option value=\"\" selected disabled hidden>Choose here</option>\n\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                              </select>\n                            </div>\n                  \n                  \n                        \n                  <div class=\"form-group\">\n                                <label for=\"junction\"><font color=\"brown\">JUNCTION</font></label>\n                                <input type=\"text\" id=\"junction\" class=\"form-control\"  placeholder=\"enter junction location\">\n                              </div><br>\n\n                                         \n                  <button type=\"submit\" class=\"btn btn-success navbar-btn-lg form-control\">Register</button>\n                  <br/>\n                  <input type=\"reset\" class=\"btn btn-danger navbar-btn-lg form-control\" style=\"margin-top: 10px;\"/>\n\n                      </fieldset>\n                    </form>\n                </div>\n                &nbsp; &nbsp; \n\n\n\n            </div>\n        </div>\n      </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/challan/challan.component.ts":
/*!**********************************************!*\
  !*** ./src/app/challan/challan.component.ts ***!
  \**********************************************/
/*! exports provided: ChallanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallanComponent", function() { return ChallanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChallanComponent = /** @class */ (function () {
    function ChallanComponent() {
    }
    ChallanComponent.prototype.ngOnInit = function () {
    };
    ChallanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challan',
            template: __webpack_require__(/*! ./challan.component.html */ "./src/app/challan/challan.component.html"),
            styles: [__webpack_require__(/*! ./challan.component.css */ "./src/app/challan/challan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallanComponent);
    return ChallanComponent;
}());



/***/ }),

/***/ "./src/app/challan1/challan1.component.css":
/*!*************************************************!*\
  !*** ./src/app/challan1/challan1.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/challan1/challan1.component.html":
/*!**************************************************!*\
  !*** ./src/app/challan1/challan1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container\" style=\"padding-top: 80px;\">\n  <ngbd-tabset-basic></ngbd-tabset-basic>\n</div>\n"

/***/ }),

/***/ "./src/app/challan1/challan1.component.ts":
/*!************************************************!*\
  !*** ./src/app/challan1/challan1.component.ts ***!
  \************************************************/
/*! exports provided: Challan1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Challan1Component", function() { return Challan1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Challan1Component = /** @class */ (function () {
    function Challan1Component() {
    }
    Challan1Component.prototype.ngOnInit = function () {
    };
    Challan1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challan1',
            template: __webpack_require__(/*! ./challan1.component.html */ "./src/app/challan1/challan1.component.html"),
            styles: [__webpack_require__(/*! ./challan1.component.css */ "./src/app/challan1/challan1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Challan1Component);
    return Challan1Component;
}());



/***/ }),

/***/ "./src/app/challan1/tabset-basic.html":
/*!********************************************!*\
  !*** ./src/app/challan1/tabset-basic.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset class=\"tabset1\">\n\t<ngb-tab title=\"Issue E-Challan\">\n\t\t<ng-template ngbTabContent>\n\t\t\t<app-challan>Loading...</app-challan>\n\t\t</ng-template>\n\t</ngb-tab>\n\t<ngb-tab title=\"View E-Challan\">\n\t\t<ng-template ngbTabContent><br/>\n            <form class=\"container\" style=\"width: 50%;\">\n                    <div class=\"form-group\">\n                            <label for=\"junction\"><font color=\"brown\">Vehicle Number</font></label>\n                            <input type=\"text\" id=\"junction\" class=\"form-control\"  placeholder=\"enter junction location\" >\n                          </div>\n\n                                     \n              <button type=\"submit\" class=\"btn btn-success navbar-btn-lg form-control\" >Submit</button>\n              <br/>\n               </form>\n            <div *ngIf='false'>\n            <app-view>Loading...</app-view></div>\n\t\t\t</ng-template>\n\t</ngb-tab>\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/challan1/tabset-basic.ts":
/*!******************************************!*\
  !*** ./src/app/challan1/tabset-basic.ts ***!
  \******************************************/
/*! exports provided: NgbdTabsetBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetBasic", function() { return NgbdTabsetBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetBasic = /** @class */ (function () {
    function NgbdTabsetBasic() {
    }
    NgbdTabsetBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-basic',
            template: __webpack_require__(/*! ./tabset-basic.html */ "./src/app/challan1/tabset-basic.html"),
            styles: [
                "\n    :host { color: gray;}\n\n    :host ::ng-deep .tabset1 a.nav-link {\n      color: red;\n    }\n    \n    :host ::ng-deep .tabset1 a.nav-link.active {\n        color: green;\n    }\n"
            ]
        })
    ], NgbdTabsetBasic);
    return NgbdTabsetBasic;
}());



/***/ }),

/***/ "./src/app/component-form/component-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component-form/component-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-form/component-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component-form/component-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<nav class=\"navbar navbar-inverse navbar-fixed-top navbar-expand-sm\" style=\"min-height: 80px;\">\n  <div class = \"navbar-header\">\n    <a href=\"#\" class=\"navbar-brand\">\n      <div id=\"trafficlight\" >\n          <span id=\"light1\"></span>\n          <span id=\"light2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signal_Voilation_System</span>\n          <span id=\"light3\"></span>\n        </div></a>\n  </div>\n  <button (click)=\"goto();\" type = \"button\" class = \"button navbar-btn btn btn-lg active navbar-right\" style=\"margin-right: 10px;\">Login</button>\n  </nav> \n\n<div class=\"vehicle\" style=\"padding-top: 80px\">Vehicle Registration form</div>\n\n<!-- Form Begins here -->\n\n<div class=\"container\">\n  <form #VehRegiForm=\"ngForm\" (ngSubmit)=\"RegisterVeh(VehRegiForm)\" >\n\n    <div class=\"row1 row\">\n        <span>\n\n          <div class=\"form-group\">\n            <input id=\"vehicle_number\" type=\"text\" placeholder=\"Mentioned on Vehicle's Number Plate\"class=\" gate form-control\"\n            name=\"vehicle_number\"\n            ngModel\n            #vehicle_number=\"ngModel\" \n            required\n            pattern=\"^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$\">\n            <label for=\"vehicle_number\">Vehicle Number:</label>\n          </div>\n\n          <div *ngIf=\"!vehicle_number.valid && vehicle_number.touched\"\n                                  class=\"alert-danger\">Invalid Vehicle Number!!\n                          </div>\n        </span>\n\n\n        <span>\n          <div class=\"form-group\">\n            <input id=\"YOR\" type=\"date\" class=\" gate form-control\"\n            name=\"YOR\"\n            ngModel\n            #YOR=\"ngModel\" \n            \n            required>\n            <label for=\"YOR\">YearOfRegistration:</label>\n          </div>\n          <div *ngIf=\"!YOR.valid && YOR.touched\"\n                                  class=\"alert-danger\">Select Date!!\n                          </div>\n          \n        </span>\n\n\n        <span>\n          <div class=\"form-group\">\n            <input id=\"Vmodel\" type=\"text\" placeholder=\"Model Of Vehicle\"class=\" gate form-control\"\n            name=\"Vmodel\"\n            ngModel\n            #Vmodel=\"ngModel\" \n            minlength=1\n            required>\n            <label for=\"Vmodel\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n          </div>\n\n          <div *ngIf=\"!Vmodel.valid && Vmodel.touched\"\n                                  class=\"alert-danger\">Model-name must be NonEmpty!!\n                          </div>\n        </span>\n        <span>\n          <div class=\"form-group\">\n              <select class=\"gate form-control\" id=\"Category\">\n                  <option class=\"gate\" value=\"0\" [selected]=\"true\" [disabled]=\"true\">---------Select---------</option>\n                  <option value=\"2\">2 Wheeler</option>\n                  <option value=\"3\">3 Wheeler</option>\n                  <option value=\"4\">4 Wheeler</option>\n                  <option value=\"6\">6 Wheeler</option>\n              </select>\n              <label for=\"Category\">Select Category:</label>\n          </div>\n          <!-- <div *ngIf=\"Category.value === 0 && Category.touched\"\n                class=\"alert-danger\">Model-name must be NonEmpty!!\n            </div> -->\n\n        </span>\n        \n        <span>\n            <div class=\"form-group\">\n                <select class=\"gate form-control \" id=\"fuel\">\n                    <option>---------Select---------</option>\n                    <option value=\"petrol\">Petrol</option>\n                    <option value=\"diesel\">Diesel</option>\n                    <option value=\"electric\">Electric</option>\n                </select>\n                <label for=\"fuel\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fuel:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"color\" type=\"text\" placeholder=\"Color of Vehicle\" class=\" gate form-control\"\n              name=\"color\"\n              ngModel\n              #color=\"ngModel\"\n              required>\n              <label for=\"color\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n\n            <div *ngIf=\"!color.valid && color.touched\"\n                class=\"alert-danger\">Enter a valid Color!!\n            </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"ownername\" type=\"text\" placeholder=\"OwnerName\" class=\" gate form-control\"\n              name=\"ownername\"\n              ngModel\n              #ownername=\"ngModel\"\n              minlength=\"3\" required>\n              <label for=\"ownername\">&nbsp;&nbsp;&nbsp;OwnerName:&nbsp;&nbsp;&nbsp;</label>\n            </div>\n\n            <div *ngIf=\"!ownername.valid && ownername.touched\"\n                class=\"alert-danger\"> Enter a valid name!!\n            </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"address\" type=\"text\" placeholder=\"Owner Resident Address\" class=\" gate form-control\"\n              name=\"address\"\n              ngModel\n              #address=\"ngModel\" required>\n              <label for=\"address\">&nbsp;OwnerAddress:&nbsp;</label>\n            </div>\n            <div *ngIf=\"!address.valid && address.touched\"\n                class=\"alert-danger\"> Address Not detected!!\n            </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"dob\" type=\"date\"class=\" gate form-control\"\n              name=\"dob\"\n              ngModel\n              #dob=\"ngModel\" required>\n              <label for=\"dob\">&nbsp;Owner D.O.B. :&nbsp;&nbsp;</label>\n            </div>\n            <div *ngIf=\"!dob.valid && dob.touched\"\n                                  class=\"alert-danger\">Select Date!!\n                          </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"city\" type=\"text\" placeholder=\"City Of Residence\" class=\" gate form-control\"\n              name=\"city\"\n              ngModel\n              #city=\"ngModel\" required>\n              <label for=\"city\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OwnerCity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n            <div *ngIf=\"!city.valid && city.touched\"\n                                  class=\"alert-danger\">Enter a valid city name!!\n                          </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"mobile\" type=\"text\" placeholder=\"Your Contact Number!\" class=\" gate form-control\"\n              name=\"mobile\"\n              ngModel\n              #mobile=\"ngModel\" required\n              minlength=\"10\">\n              <label for=\"mobile\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n            <div *ngIf=\"!mobile.valid && mobile.touched\"\n                                  class=\"alert-danger\">Invalid Mobile Number!!\n                          </div>\n        </span>\n        <span>\n            <div class=\"form-group\">\n              <input id=\"mail\" type=\"email\" placeholder=\"Email Address\" class=\" gate form-control\"\n              name=\"mail\"\n              ngModel\n              #mail=\"ngModel\" required>\n              <label for=\"mail\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n            <div *ngIf=\"!mail.valid && mail.touched\"\n                                  class=\"alert-danger\">Invalid Email Address!!\n                          </div>\n        </span>\n        \n        <span>\n            <div class=\"form-group\">\n                <select class=\"gate form-control \" id=\"proof\">\n                    <option>---------Select---------</option>\n                    <option value=\"Aadhar\">Aadhar</option>\n                    <option value=\"Driving Licence\">Driving Licence</option>\n                    <option value=\"PanCard\">PanCard</option>\n                    <option value=\"PassPort\">PassPort</option>\n                </select>\n                <label for=\"proof\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identity Proof:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            </div>\n        </span>\n        <span>\n            <div class=\"upload-boton-wrapper\">\n                <button class=\"boton\">Upload Document file<span class=\"glyphicon glyphicon-cloud-upload\"></span></button>\n                <input id=\"file\" type=\"file\" name=\"file\"\n                ngModel\n                #file=\"ngModel\"\n                required>\n              </div>\n              <div *ngIf=\"!file.valid && file.touched\"\n                                  class=\"alert-danger\">Select Document!!\n                          </div>\n        </span>\n        <br/>\n        <span>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-lg active button\" value=\"Register\" style=\"margin-bottom: 20px;\">\n          </div>\n        </span> \n    </div>\n\n  </form>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component-form/component-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component-form/component-form.component.ts ***!
  \************************************************************/
/*! exports provided: ComponentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFormComponent", function() { return ComponentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservices/dataservice.service */ "./src/app/myservices/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentFormComponent = /** @class */ (function () {
    function ComponentFormComponent(router, ds) {
        this.router = router;
        this.ds = ds;
        this.err = false;
    }
    ComponentFormComponent.prototype.ngOnInit = function () {
    };
    ComponentFormComponent.prototype.goto = function () {
        this.router.navigate(['/']);
    };
    ComponentFormComponent.prototype.RegisterVeh = function (log) {
        var _this = this;
        console.log(log.value);
        this.ds.register(log).subscribe(function (response) {
            console.log(response);
            if (response === 'Done') {
                _this.router.navigate(['/']);
            }
            else {
                _this.err = true;
            }
        });
    };
    ComponentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-form',
            template: __webpack_require__(/*! ./component-form.component.html */ "./src/app/component-form/component-form.component.html"),
            styles: [__webpack_require__(/*! ./component-form.component.css */ "./src/app/component-form/component-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _myservices_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["dataservice"]])
    ], ComponentFormComponent);
    return ComponentFormComponent;
}());



/***/ }),

/***/ "./src/app/component-head/component-head.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component-head/component-head.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-head/component-head.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component-head/component-head.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" style=\"min-height: 80px;\">\n  <div class=\"container-fluid\">\n    <div class = \"navbar-header\">\n        <button (click)=\"isCollapsed = !isCollapsed\" style=\"margin-top: 30px;\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a href=\"#\" class=\"navbar-brand\">\n        <div id=\"trafficlight\" >\n            <span id=\"light1\"></span>\n            <span id=\"light2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signal_Voilation_System</span>\n            <span id=\"light3\"></span>\n          </div></a>\n    </div>\n\n    <div class=\"navbar-collapse navbar-right\" [ngClass]=\"{'collapse':!isCollapsed}\">\n      <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n        <li class=\"active\"><a routerLink=\"/home\">Home<span class=\"sr-only\">(current)</span></a></li>\n        <li><a routerLink=\"update\">Update</a></li>\n        <li><a routerLink=\"challan\">E-challan</a></li>\n        <li><a routerLink=\"signal\">Signal</a></li>\n      </ul>\n    </div>\n    \n  </div>\n</nav> \n\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component-head/component-head.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component-head/component-head.component.ts ***!
  \************************************************************/
/*! exports provided: ComponentHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHeadComponent", function() { return ComponentHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentHeadComponent = /** @class */ (function () {
    function ComponentHeadComponent() {
        var isCollapsed = false;
    }
    ComponentHeadComponent.prototype.ngOnInit = function () {
    };
    ComponentHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-head',
            template: __webpack_require__(/*! ./component-head.component.html */ "./src/app/component-head/component-head.component.html"),
            styles: [__webpack_require__(/*! ./component-head.component.css */ "./src/app/component-head/component-head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentHeadComponent);
    return ComponentHeadComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom navbar-expand-sm\" style=\"min-height: 40px;\">\n  <a class=\"navbar-brand\" style=\" position: relative; width: 100%;text-align: center;\" href=\"#\"> <h5>CopyRight 2018 &copy; SVS </h5></a>\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/myservices/dataservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/myservices/dataservice.service.ts ***!
  \***************************************************/
/*! exports provided: dataservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataservice", function() { return dataservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//a sservice is  a TS class it is used to contain business logic centrally
//we can inject service into the components
var dataservice = /** @class */ (function () {
    function dataservice(http) {
        this.http = http;
    }
    // public addEmployee(emp){
    //     return this.http.post("http://localhost:8282/MockProject/DemoServlet",JSON.stringify(emp.value));              //returns observable
    // }
    // public update(emp){
    //     return this.http.put("http://localhost:8282/MockProject/DemoServlet",{});
    // }
    // public newGet(){
    //     return this.http.get("");
    // }
    // public loggingService(Messsage){
    //     console.log(Messsage);
    // }
    dataservice.prototype.login = function (log) {
        return this.http.post("login", JSON.stringify(log.value));
    };
    dataservice.prototype.register = function (reg) {
        return this.http.post("vehicleinsert", JSON.stringify(reg.value));
    };
    dataservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], dataservice);
    return dataservice;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color:darkgreen;padding-top: 100px;\">404 Page Not Found</h1>"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container backCol\">\n    <div class=\"row\">\n      <div class=\"col-sm-32\">\n          <div class=\"col-lg-40 col-lg-offset-3\">\n            \n            <h2 align=\"center\"><font color=\"black\"></font></h2><br>\n            \n            <form class=\"form-inline\" action=\"\">\n              <fieldset>\n\n              <legend>Report Generator</legend><br>\n              <div class=\"form-group\">\n                  <!--<label for=\"sdate\"><font color=\"\">STARTING DATE</font></label>-->\n\n                  <label for=\"sdate\"><font color=\"brown\">STARTING DATE: </font></label>\n                  <input type=\"date\" id=\"sdate\" class=\"form-control\"  placeholder=\"enter starting date\">\n              </div>\n              &nbsp; &nbsp; \n\n              <div class=\"form-group\">\n                  <label for=\"edate\"><font color=\"brown\">ENDING DATE: </font></label>\n                  <input type=\"date\" id=\"edate\" class=\"form-control\"  placeholder=\"enter ending date\">\n              </div><br><br>\n\n              \n              <button type=\"submit\" class=\"btn btn-primary form-control\">Submit</button>\n              </fieldset>\n            </form>\n            </div>\n            </div>\n            </div>\n            </div>\n            \n\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/signal/signal.component.css":
/*!*********************************************!*\
  !*** ./src/app/signal/signal.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signal/signal.component.html":
/*!**********************************************!*\
  !*** ./src/app/signal/signal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\">\n        <div class=\"row\" style=\"margin-bottom: 20px;\">\n          <div class=\"col-sm-9\">\n              <div class=\"col-lg-32 col-lg-offset-4\"><br><br>\n                  <div class=\"myform\">\n                      <form>\n                        <fieldset>\n                          <legend>Signal Registration</legend><br>\n                          <div class=\"form-group\">\n                              <label for=\"junction\"><font color=\"brown\">JUNCTION</font></label>\n                              <input type=\"text\" id=\"junction\" class=\"form-control\"  placeholder=\"enter junction\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"PS\"><font color=\"brown\">PS CIRCLE</font></label>\n                              <input type=\"text\" id=\"PS\" class=\"form-control\"  placeholder=\"enter PS cirlce\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"city\"><font color=\"brown\">CITY</font></label>\n                              <input type=\"text\" id=\"city\" class=\"form-control\"  placeholder=\"enter city\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"type\"><font color=\"brown\">SIGNAL TYPE</font></label>\n                              <input type=\"text\" id=\"type\" class=\"form-control\"  placeholder=\"enter type of signal\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"oid\"><font color=\"brown\">OFFICER ID</font></label>\n                              <input type=\"text\" id=\"oid\" class=\"form-control\"  placeholder=\"enter ID of officer\">\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-success navbar-btn-lg form-control\">Register</button><br><br>\n                          <button type=\"reset\" class=\"btn btn-danger navbar-btn-lg form-control\">Reset</button>\n\n                        </fieldset>\n                      </form>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./src/app/signal/signal.component.ts":
/*!********************************************!*\
  !*** ./src/app/signal/signal.component.ts ***!
  \********************************************/
/*! exports provided: SignalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalComponent", function() { return SignalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignalComponent = /** @class */ (function () {
    function SignalComponent() {
    }
    SignalComponent.prototype.ngOnInit = function () {
    };
    SignalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signal',
            template: __webpack_require__(/*! ./signal.component.html */ "./src/app/signal/signal.component.html"),
            styles: [__webpack_require__(/*! ./signal.component.css */ "./src/app/signal/signal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignalComponent);
    return SignalComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vehicle\" style=\"padding-top: 80px\">Update Vehicle</div>\n\n\n<div class=\"container\">\n    <form #VehRegiForm=\"ngForm\" (ngSubmit)=\"RegisterVeh(VehRegiForm)\" >\n  \n      <div class=\"row1 row\">\n        \n        <span>\n  \n            <div class=\"form-group\">\n              <input id=\"vehicle_number\" type=\"text\" placeholder=\"Mentioned on Vehicle's Number Plate\"class=\" gate form-control\"\n              name=\"vehicle_number\"\n              ngModel\n              #vehicle_number=\"ngModel\" required>\n              <label for=\"vehicle_number\">Vehicle Number:</label>\n            </div>\n\n            <div *ngIf=\"!vehicle_number.valid && vehicle_number.touched\"\n                                  class=\"alert-danger\">Invalid Vehicle Number!!\n                          </div>\n        </span>\n            \n        \n        <span>\n          <div class=\"form-group\">\n            <input id=\"ownername\" type=\"text\" placeholder=\"OwnerName\" class=\" gate form-control\"\n            name=\"ownername\"\n            ngModel\n            #ownername=\"ngModel\"\n            minlength=\"3\" required>\n            <label for=\"ownername\">&nbsp;&nbsp;&nbsp;OwnerName:&nbsp;&nbsp;&nbsp;</label>\n          </div>\n\n          <div *ngIf=\"!ownername.valid && ownername.touched\"\n              class=\"alert-danger\"> Enter a valid name!!\n          </div>\n      </span>\n        \n      <span>\n        <div class=\"form-group\">\n          <input id=\"address\" type=\"text\" placeholder=\"Owner Resident Address\" class=\" gate form-control\"\n          name=\"address\"\n          ngModel\n          #address=\"ngModel\" required>\n          <label for=\"address\">&nbsp;OwnerAddress:&nbsp;</label>\n        </div>\n        <div *ngIf=\"!address.valid && address.touched\"\n            class=\"alert-danger\"> Address Not detected!!\n        </div>\n    </span>\n        \n    <span>\n      <div class=\"form-group\">\n        <input id=\"dob\" type=\"date\"class=\" gate form-control\"\n        name=\"dob\"\n        ngModel\n        #dob=\"ngModel\" required>\n        <label for=\"dob\">&nbsp;Owner D.O.B. :&nbsp;&nbsp;</label>\n      </div>\n      <div *ngIf=\"!dob.valid && dob.touched\"\n                            class=\"alert-danger\">Select Date!!\n                    </div>\n     </span>\n\n     <span>\n      <div class=\"form-group\">\n        <input id=\"city\" type=\"text\" placeholder=\"City Of Residence\" class=\" gate form-control\"\n        name=\"city\"\n        ngModel\n        #city=\"ngModel\" required>\n        <label for=\"city\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OwnerCity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n      </div>\n      <div *ngIf=\"!city.valid && city.touched\"\n                            class=\"alert-danger\">Enter a valid city name!!\n                    </div>\n      </span>\n      <span>\n        <div class=\"form-group\">\n          <input id=\"mobile\" type=\"text\" placeholder=\"Your Contact Number!\" class=\" gate form-control\"\n          name=\"mobile\"\n          ngModel\n          #mobile=\"ngModel\" required\n          minlength=\"10\">\n          <label for=\"mobile\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n        </div>\n        <div *ngIf=\"!mobile.valid && mobile.touched\"\n                              class=\"alert-danger\">Invalid Mobile Number!!\n                      </div>\n    </span>\n    <span>\n      <div class=\"form-group\">\n        <input id=\"mail\" type=\"email\" placeholder=\"Email Address\" class=\" gate form-control\"\n        name=\"mail\"\n        ngModel\n        #mail=\"ngModel\" required>\n        <label for=\"mail\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n      </div>\n      <div *ngIf=\"!mail.valid && mail.touched\"\n                            class=\"alert-danger\">Invalid Email Address!!\n                    </div>\n  </span>\n  \n          \n        <span>\n              <div class=\"form-group\">\n                  <select class=\"gate form-control \" id=\"proof\">\n                      <option>---------Select---------</option>\n                      <option value=\"Aadhar\">Aadhar</option>\n                      <option value=\"Driving Licence\">Driving Licence</option>\n                      <option value=\"PanCard\">PanCard</option>\n                      <option value=\"PassPort\">PassPort</option>\n                  </select>\n                  <label for=\"proof\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identity Proof:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n              </div>\n          </span>\n          <span>\n            <div class=\"upload-boton-wrapper\">\n                <button class=\"boton\">Upload Document file<span class=\"glyphicon glyphicon-cloud-upload\"></span></button>\n                <input id=\"file\" type=\"file\" name=\"file\"\n                ngModel\n                #file=\"ngModel\"\n                required>\n              </div>\n              <div *ngIf=\"!file.valid && file.touched\"\n                                  class=\"alert-danger\">Select Document!!\n                          </div>\n        </span>\n          <br/>\n          <span>\n            <div class=\"form-group\">\n              <input type=\"submit\" class=\"btn btn-lg active button\" value=\"Register\" style=\"margin-bottom: 20px;\">\n            </div>\n          </span> \n      </div>\n  \n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform{\r\n    border: 7px inset rgb(12, 199, 99);\r\n    padding: 10px;\r\n    background-blend-mode: blue;\r\n   \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container back\">\n        <div class=\"row\">\n          <div class=\"col-sm-10\">\n              <div class=\"col-lg-20 col-lg-offset-2\">\n                  \n                  <div class=\"myform\">\n                      <form>\n                        <fieldset>\n                          <legend>E-Challan</legend>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">\n                            Vehicle Number: <span style=\"color: black; font-style: bold\"> {{ veh_no }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Owner Name: <span style=\"color: black; font-style: bold\">{{ owner_name }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Serial Number: <span style=\"color: black; font-style: bold\"> {{ Sno }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Challan ID: <span style=\"color: black; font-style: bold\"> {{ Challan_id }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Date of offence: <span style=\"color: black; font-style: bold\">{{ OffenceDate }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Place: <span style=\"color: black; font-style: bold\">{{ Place }}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Traffic PS limits: <span style=\"color: black; font-style: bold\"> {{trafficPSlimits}}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Offence Description: <span style=\"color: black; font-style: bold\">{{Offence_Desc}}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Fine amount: <span style=\"color: black; font-style: bold\">{{Fine_amt}}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">User Charges: <span style=\"color: black; font-style: bold\">{{User_charges}}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Total: <span style=\"color: black; font-style: bold\">{{Total}}</span></p>\n                          <p style=\"font-size:20px; color:#538b01; font-weight:bold; font-style:italic;\">Officer Name: <span style=\"color: black; font-style: bold\"> {{Officer_name}} </span></p>\n                        </fieldset>\n                      </form>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </div>\n</body>  "

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
        this.veh_no = "123";
        this.owner_name = "";
        this.Sno = "";
        this.Challan_id = "";
        this.OffenceDate = "";
        this.Place = "";
        this.trafficPSlimits = "";
        this.Offence_Desc = "";
        this.Fine_amt = "";
        this.User_charges = "";
        this.Total = "";
        this.Officer_name = "";
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/debian/Node-projects/Angular/SVS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map