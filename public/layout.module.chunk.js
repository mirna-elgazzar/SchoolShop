webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © 2018, made with\n                    <i class=\"fa fa-heart\"></i> by Mirna and Fatma\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layout/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            {
                path: 'home',
                loadChildren: '../homepage/homepage.module#HomepageModule'
            },
            {
                path: 'users',
                loadChildren: '../users/users.module#UsersModule'
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'schools',
                loadChildren: '../schools/schools.module#SchoolsModule'
            },
            {
                path: 'stationary',
                loadChildren: '../stationary/stationary.module#StationaryModule'
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html")
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_service__ = __webpack_require__("./src/app/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { FooterComponent } from './footer/footer.component';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__["a" /* LayoutRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__users_users_service__["a" /* UsersService */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"/<home></home>\">School Shop</a>\n        <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n            <ul class=\"navbar-nav ml-auto\">\n\n\n                <li class=\"nav-item \">\n                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                        <a class=\"nav-link\" id=\"dropdown1\" ngbDropdownToggle>Schools</a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                            <a href=\"/schools\" class=\"dropdown-item\">All Schools</a>\n                            <a href=\"/schools/location/nearby\" class=\"dropdown-item\">Nearby</a>\n                            <a href=\"/schools/location/Alexandria\" class=\"dropdown-item\">Alexandria</a>\n                            <a href=\"/schools/location/Dokki\" class=\"dropdown-item\">Dokki</a>\n                            <a href=\"/schools/location/Heliopolis\" class=\"dropdown-item\">Heiopolis</a>\n                            <a href=\"/schools/location/Helwan\" class=\"dropdown-item\">Helwan</a>\n                            <a href=\"/schools/location/Hurghada\" class=\"dropdown-item\">Hurghada</a>\n                            <a href=\"/schools/location/Maadi\" class=\"dropdown-item\">Maadi</a>\n                            <a href=\"/schools/location/Nasrcity\" class=\"dropdown-item\">Nas city</a>\n                            <a href=\"/schools/location/Newcairo\" class=\"dropdown-item\">New Cairo</a>\n                            <a href=\"/schools/location/Zamalek\" class=\"dropdown-item\">Zamalek</a>\n                            <a href=\"/schools/location/October\" class=\"dropdown-item\">6th October</a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"nav-item \">\n                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                        <a class=\"nav-link\" id=\"dropdown1\" ngbDropdownToggle>Stationery</a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                            <a href=\"/stationary/location/all\" class=\"dropdown-item\">All Stationery Stores</a>\n                            <a href=\"/stationary/location/nearby\" class=\"dropdown-item\">Nearby</a>\n                            <a href=\"/stationary/location/Alexandria\" class=\"dropdown-item\">Alexandria</a>\n                            <a href=\"/stationary/location/Dokki\" class=\"dropdown-item\">Dokki</a>\n                            <a href=\"/stationary/location/Heliopolis\" class=\"dropdown-item\">Heiopolis</a>\n                            <a href=\"/stationary/location/Helwan\" class=\"dropdown-item\">Helwan</a>\n                            <a href=\"/stationary/location/Hurghada\" class=\"dropdown-item\">Hurghada</a>\n                            <a href=\"/stationary/location/Maadi\" class=\"dropdown-item\">Maadi</a>\n                            <a href=\"/stationary/location/Nasrcity\" class=\"dropdown-item\">Nas city</a>\n                            <a href=\"/stationary/location/Newcairo\" class=\"dropdown-item\">New Cairo</a>\n                            <a href=\"/stationary/location/Zamalek\" class=\"dropdown-item\">Zamalek</a>\n                            <a href=\"/stationary/location/October\" class=\"dropdown-item\">6th October</a>\n\n\n                        </div>\n                    </div>\n                </li>\n\n\n\n                <li class=\"nav-item\">\n\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>Home</a>\n                </li>\n\n                <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/users/profile/{{userId}}\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>{{userName}}</a>\n                </li>\n\n                <li *ngIf=\"isLoggedOut()\" class=\"nav-item\">\n                    <a href=\"/users/login\"><button type=\"button\" class=\"btn btn-warning\">Login / Register</button></a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <button *ngIf=\"isLoggedIn()\" type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\">logout</button>\n                </li>\n\n\n\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_service__ = __webpack_require__("./src/app/layout/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(element, usersService, router, updateService) {
        this.element = element;
        this.usersService = usersService;
        this.router = router;
        this.updateService = updateService;
        this.loggedIn = false;
        this.userId = "";
        this.userName = "";
        this.updateResult = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.loggedIn = this.isLoggedIn();
        //SUBSCRIPTION:
        this.updateSubscrition = this.updateService.getAuthUpdates().subscribe(function (value) {
            _this.updateResult = value;
            //if value passed from login/logout is true (user logged in)
            if (value) {
                console.log("hey!");
                _this.userItem = localStorage.getItem;
                //console.log("it"this.userItem);
                _this.usersService.getCurrentUser().subscribe(function (res) {
                    _this.user = res.data;
                    _this.userId = res.data._id;
                    _this.userName = res.data.firstName;
                    console.log(res.data);
                    console.log("name: " + _this.userName);
                    //console.log(this.userId);
                }, function (err) {
                    console.log(err);
                });
            }
        });
        if (this.isLoggedIn()) {
            this.usersService.getCurrentUser().subscribe(function (res) {
                _this.user = res.data;
                _this.userId = res.data._id;
                _this.userName = res.data.firstName;
                console.log(res.data);
                console.log("name: " + _this.userName);
                //console.log(this.userId);
            }, function (err) {
                console.log(err);
            });
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.updateSubscrition.unsubscribe();
    };
    /*sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
  
      setTimeout(function() {
        toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');
  
      this.sidebarVisible = true;
    }*/
    /*sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
    }
  
    sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  */
    NavbarComponent.prototype.login = function () {
        this.loggedIn = true;
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_4_moment__().isBefore(this.getExpiration()); //is the current time before expiration time?
    };
    NavbarComponent.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    NavbarComponent.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_4_moment__(expiresAt);
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.router.navigate(['/']);
        this.updateService.updateAuthStatus(false);
        console.log("you are loggd out");
    };
    NavbarComponent.prototype.locationClicked = function (location) {
        this.router.navigate(['/home/search'], { queryParams: { location: location, page: "1" } });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/layout/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__users_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__update_service__["a" /* UpdateService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map