webpackJsonp(["homepage.module"],{

/***/ "./src/app/homepage/homepage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_searchResult_searchResult_component__ = __webpack_require__("./src/app/homepage/search/searchResult/searchResult.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */], pathMatch: 'full' },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_searchResult_searchResult_component__["a" /* SearchResultComponent */] }
];
var HomepageRoutingModule = /** @class */ (function () {
    function HomepageRoutingModule() {
    }
    HomepageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HomepageRoutingModule);
    return HomepageRoutingModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/background.jpg')\">\n\n        <div class=\"filter\"></div>\n        <div class=\"container\">\n            <div class=\"motto text-center\">\n                <h1>Looking for a school?</h1>\n                <br />\n                <div class=\"d-flex\">\n                    <input type=\"text\" placeholder=\"Search by name\" class=\"form-control mr-1\" data-min-length=\"1\" name=\"results\" #result>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchClicked(result.value)\"> Search</button>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"main\">\n        <div class=\"section text-center\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 mr-auto ml-auto\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\"><g transform=\"translate(0, 0)\"><circle cx=\"8\" cy=\"5\" r=\"4.5\" fill=\"none\" stroke=\"#444444\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></circle> <polyline points=\"6.88 11.512 4.799 15.5 3.575 12.605 0.5 13.257 2.813 8.824\" fill=\"none\" stroke=\"#444444\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-color=\"color-2\"></polyline> <polyline points=\"13.187 8.824 15.5 13.257 12.425 12.605 11.201 15.5 9.12 11.512\" fill=\"none\" stroke=\"#444444\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-color=\"color-2\"></polyline></g></svg>\n                        <h2 class=\"title\">Want to join the School Shop community?</h2>\n                        <h5 class=\"description\">If you are a parent or a student, you can register and become a member the School Shop community. You will be able to review schools and teachers, provide extra information about them and add schools to your favorites!\n                        </h5>\n                        <br>\n                        <a href=\"/users/register\" class=\"btn btn-danger btn-round\">Register Now!</a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        <div class=\"section landing-section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 mr-auto ml-auto\">\n                        <h2 class=\"text-center\">Keep in touch?</h2>\n                        <div *ngIf=\"success\" class=\"alert alert-success \">{{ successMessage }}</div>\n                        <div *ngIf=\"failure\" class=\"alert alert-danger \">{{ successMessage }}</div>\n\n                        <a class=\"text-center\" href=\"mailto:schoolshop.guc@gmail.com\">Contact us</a>\n                        <form class=\"contact-form\">\n\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6\">\n                                    <label>Name</label>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" name=\"name\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Email (Please provide a valid email so we can get back to you.)</label>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Enter your email address\" [(ngModel)]=\"email\" name=\"email\" required>\n\n                                    </div>\n                                </div>\n\n                            </div>\n                            <label>Message</label>\n                            <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"message\" name=\"message\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                            <div class=\"row\">\n                                <div class=\"col-md-4 mr-auto ml-auto\">\n                                    <button class=\"btn btn-danger btn-lg btn-fill\" (click)=\"send()\">Send Message</button>\n\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_service__ = __webpack_require__("./src/app/homepage/homepage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(homepageService, router) {
        this.homepageService = homepageService;
        this.router = router;
        ////------------message attributes--------------////
        this.email = "";
        this.name = "";
        this.message = "";
        this.success = false;
        this.failure = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        //location.reload();
    };
    HomepageComponent.prototype.searchClicked = function (result) {
        this.router.navigate(['/home/search'], { queryParams: { result: result, page: "1" } });
    }; //SE
    HomepageComponent.prototype.locationClicked = function (location) {
        this.router.navigate(['/home/search'], { queryParams: { location: location, page: "1" } });
    };
    HomepageComponent.prototype.send = function () {
        var _this = this;
        this.homepageService.sendMessage(this.email, this.name, this.message).subscribe(function (res) {
            _this.failure = false;
            _this.success = true;
            _this.successMessage = res.msg;
            console.log(_this.successMessage);
            console.log("message sent. Name: " + _this.name + ". Email: " + _this.email);
        }, function (err) {
            _this.success = false;
            _this.failure = true;
            _this.successMessage = err.error.msg;
        });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__homepage_service__["a" /* HomepageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("./src/app/homepage/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_searchResult_searchResult_component__ = __webpack_require__("./src/app/homepage/search/searchResult/searchResult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_service__ = __webpack_require__("./src/app/homepage/homepage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_routing_module__ = __webpack_require__("./src/app/homepage/homepage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_searchResult_filter_pipe__ = __webpack_require__("./src/app/homepage/search/searchResult/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__["a" /* Ng2SearchPipeModule */], __WEBPACK_IMPORTED_MODULE_9__homepage_routing_module__["a" /* HomepageRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__homepage_component__["a" /* HomepageComponent */], __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_7__search_searchResult_searchResult_component__["a" /* SearchResultComponent */], __WEBPACK_IMPORTED_MODULE_10__search_searchResult_filter_pipe__["a" /* FilterPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__search_searchResult_filter_pipe__["a" /* FilterPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__homepage_service__["a" /* HomepageService */]]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageService = /** @class */ (function () {
    function HomepageService(httpClient) {
        this.httpClient = httpClient;
    }
    HomepageService.prototype.sendMessage = function (email, name, message) {
        var body = {
            name: name,
            email: email,
            message: message
        };
        return this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/user/sendEmail", body);
    };
    HomepageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HomepageService);
    return HomepageService;
}());



/***/ }),

/***/ "./src/app/homepage/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"motto text-center\">\n        <h1>Looking for a school?</h1>\n\n        <br />\n\n        <div class=\"d-flex\">\n            <input type=\"text\" placeholder=\"Search by name\" class=\"form-control mr-1\" data-min-length=\"1\" name=\"results\" #result>\n\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"log(result.value)\"> Log</button>\n\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"demo()\"> Demo</button>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6 mb-20-xs\">\n\n                <div class=\"form-group\">\n                    <label>Where are you?</label>\n                    <select class=\"selectpicker show-tick form-control\" title=\"Choose Location\" #location>\n\t\t\t\t\t\t\t\t\t<option value=\"All\"></option>\n\t\t\t\t\t\t\t\t\t<option value=\"nearby\">Nearby</option>\n\t\t\t\t\t\t\t\t\t<option value=\"mansora\">Mansora</option>\n\t\t\t\t\t\t\t\t\t<option value=\"alexandria\">Alexandria</option>\n\t\t\t\t\t\t\t\t\t<option value=\"cairo\">Cairo</option>\n\t\t\t\t\t\t\t\t</select>\n\n                </div>\n            </div>\n\n            <div class=\"col-xs-6 col-sm-6 mb-20-xs\">\n\n                <div class=\"form-group\">\n                    <label>What do you feel like doing</label>\n                    <select class=\"selectpicker show-tick form-control\" title=\"Choose Category\" #category>\n\t\t\t\t\t\t\t\t\t<option value=\"All\"></option>\n\t\t\t\t\t\t\t\t\t<option value=\"categorya\">A</option>\n\t\t\t\t\t\t\t\t\t<option value=\"categoryb\">B</option>\n\t\t\t\t\t\t\t\t\t<option value=\"categoryc\">C</option>\n\t\t\t\t\t\t\t\t\t<option value=\"categoryd\">D</option>\n\t\t\t\t\t\t\t\t</select>\n                </div>\n\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\n\n                <div class=\"fearured-join-item mb-0\">\n                    <a (click)=\"exploreClicked(location.value,category.value)\" class=\"btn btn-primary btn-lg\">Explore</a>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(router) {
        this.router = router;
    }
    SearchComponent.prototype.searchClicked = function (result) {
        this.router.navigate(['search'], { queryParams: { result: result, page: "1" } });
    }; //SE
    SearchComponent.prototype.log = function (result) {
        console.log(result);
    };
    SearchComponent.prototype.demo = function () {
        this.router.navigate(['/demo']);
        console.log("demo");
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'homepage-search',
            template: __webpack_require__("./src/app/homepage/search/search.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/homepage/search/searchResult/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (schools, term, selected_certificates) {
        var tempSchools = [];
        if (!schools)
            return [];
        if ((!term) && (selected_certificates.length < 1))
            return schools;
        else if (selected_certificates.length < 1) {
            console.log("filtering using text only");
            term = term.toLowerCase();
            return schools.filter(function (it) {
                return it.name.toLowerCase().includes(term);
            });
        }
        else {
            //case 2: filter by selected_certificates only:
            console.log("selected certificates: ");
            //loop through the input selected_certificates array and concatenate schools having this certficate
            for (var i = 0; i < selected_certificates.length; i++) {
                console.log(selected_certificates[i].name); //prints selected cerificates correctly
                tempSchools = tempSchools.concat(schools.filter(function (it) { return it.certificates.includes(selected_certificates[i].name); }));
            }
            console.log("schools" + tempSchools.length);
            //case 3: filter by term and certifcates
            if (term) {
                console.log("filtering using text:" + term + " and certificates: " + selected_certificates);
                tempSchools = tempSchools.filter(function (it) {
                    return it.name.toLowerCase().includes(term);
                });
            }
            console.log("schools" + tempSchools.length);
            return tempSchools;
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'filterPipe'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/homepage/search/searchResult/searchResult.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n/* SchoolsComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.schools {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.schools li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.schools li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.schools li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.schools .text {\n    position: relative;\n    top: -3px;\n}\n.schools .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n.column {\n    float: left;\n    padding: 10px;\n}\n.left {\n    width: 15%;\n    border-radius: 5px;\n}\n.right {\n    width: 85%;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.certificatesbox {\n    padding-top: 20px;\n}\n.schoolsort {\n    padding-left: 20px;\n    padding-right: 30px;\n    padding-bottom: 30 px;\n}\n.allschools {\n    padding-top: 20px;\n}\na:link {\n    text-decoration: none;\n    color: darkslategrey;\n}\na:visited {\n    text-decoration: none;\n}\na:hover {\n    text-decoration: underline;\n    color: dodgerblue;\n}\na:active {\n    text-decoration: underline;\n}\nfieldset,\nlabel {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 20px;\n}\nh1 {\n    font-size: 1.5em;\n    margin: 10px;\n}\n.trip-guide-meta .rating-item {\n    margin-top: -5px;\n}\n.user-item-01 .rating-item .fa {\n    color: #FFF;\n}\n.detail-header .rating-item {\n    padding-right: 30px;\n    position: relative;\n}\n.detail-header .rating-item:before {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.detail-header .rating-item:after {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.detail-header .rating-text {\n    margin-top: 2px;\n}\n.detail-header .rating-item .rating-symbol {\n    margin-right: 0;\n    margin-left: 5px;\n}\n.detail-header-02 .rating-item {\n    margin-top: 7px;\n}\n.detail-header-02 .rating-item .rating-text {\n    display: inline-block;\n}\n.detail-header-02 .meta-list li .rating-item {\n    margin-top: 0;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 1rem;\n    color: #d3d3d3;\n}\n.starSmall {\n    position: relative;\n    display: inline-block;\n    font-size: 1.5rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}"

/***/ }),

/***/ "./src/app/homepage/search/searchResult/searchResult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"tim-title\">\n            <div class=\"col\">\n                <div class=\"schoolsort\">\n                    <div class=\"row\">\n                        <div class=\"d-flex\">\n\n                            <input type=\"text\" placeholder=\"Search by name\" class=\"form-control mr-1\" data-min-length=\"1\" name=\"results\" #result>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSearch(result.value)\"> Search</button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <h3>{{pageTitle}}</h3>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"column left\" style=\"background-color:#BDEDFF;\">\n            <h3>Filters</h3>\n            <input type=\"text\" class=\"filterinput\" placeholder=\"Enter a school name\" [(ngModel)]=\"term\" align=\"center\" width=\"10\">\n\n            <div class=\"certificatesbox\">\n\n                <!-- Heading Title -->\n                <h5 class=\"app-heading\">certificates:</h5>\n\n                <!-- Search Field -->\n                <div>\n                    <div class=\"filter-wrap\">\n                        <input [(ngModel)]=\"searchText\" placeholder=\"Filter certificates\" class=\"filterinput\">\n                        <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\n                    </div>\n                </div>\n\n                <!-- Clear Link -->\n                <div class=\"text-danger\" title=\"Click to Clear Selections\" (click)=\"clearSelection()\" *ngIf=\"selected_count\">Clear Selection</div>\n\n                <!-- certificates List -->\n\n                <div class=\"form-check\" *ngFor=\"let c of certificates | filter : searchText\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" (change)=\"getSelected()\" type=\"checkbox\" name=\"certificates\" value=\"{{c.id}}\" [(ngModel)]=\"c.selected\" />\n                        <span class=\"form-check-sign\">{{c.name}}</span>\n                    </label>\n                </div>\n\n\n\n\n\n                <!-- Selected certificates-->\n                <div class=\"selected-games-wrap\">\n                    <div class=\"selected-game\" *ngFor=\"let s of selected_games\">\n                        <span>{{s.name}} <span class=\"delete-game\" (click)=\"deleteGame(s.id)\" title=\"Click to delete\">X</span></span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"column right\">\n            <div class=\"row\">\n\n                <div class=\"col\">\n                    <div class=\"schoolsort pull-right\">\n                        <div class=\"row\">\n                            <div class=\"d-flex\">\n                                <select class=\"selectpicker show-tick form-control\" title=\"sort by\" #sort>\n\t\t\t\t\t\t\t\t\t<option >Sort by:</option>\n                                    <option value=\"rating\">rating</option>\n                                    <option value=\"alphabet\">A-Z</option>\n\t\t\t\t\t\t\t\t</select>\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"updateSortQuery(sort.value)\"> Go</button>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"allschools\">\n                <div class=\"GridLex-grid-noGutter-equalHeight\">\n\n                    <div class=\"GridLex-col-3_sm-4_xs-6_xss-8\" *ngFor=\"let school of (schools |filterPipe: term : selected_certificates)\">\n\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 ml-auto mr-auto\">\n\n                            <div class=\"card\">\n                                <!--to add the link later-->\n                                <a href=\"/schools/school/{{school._id}}\">\n                                    <div class=\"card-image\">\n                                        <img *ngIf=\"school.profilePicture\" src=\"../assets/img/gallery/{{school.name}}/0.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:200px;\">\n                                        <img *ngIf=\"!school.profilePicture\" src=\"../assets/img/schoolLogo.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:200px;\">\n                                    </div>\n\n                                    <span class=\"label label-primary\" align=\"center\"><h4 align=\"center\">{{school.name}}</h4></span>\n                                    <div class=\"col\" align=\"left\">\n                                        <ng-template #t let-fill=\"fill\">\n                                            <span class=\"star pull-left\" [class.full]=\"fill === 100\">\n                                                    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                            </span>\n\n                                        </ng-template>\n\n                                        <ngb-rating [(rate)]=\"school.average\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/search/searchResult/searchResult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("./src/app/homepage/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(searchService, route, router) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.pageTitle = "";
        this.schools = [];
        this.sliced = [];
        this.pagingIndex = [];
        this.sort = "alphabet";
        this.searchText = "";
        this.selected_count = 0;
        this.selected_certificates = [];
        this.certificates = [
            {
                name: 'IGCSE',
                id: 1,
                selected: false
            },
            {
                name: 'IB',
                id: 2,
                selected: false
            },
            {
                name: 'BAC',
                id: 3,
                selected: false
            },
            {
                name: 'AMERICAN',
                id: 4,
                selected: false
            },
            {
                name: 'ABITUR',
                id: 5,
                selected: false
            }
        ];
        this.name = "Angular! v" + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* VERSION */].full;
        this.getSelected();
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        //console.log("here");
        this.getQueryParams();
        this.search();
    };
    SearchResultComponent.prototype.search = function () {
        var _this = this;
        this.searchService.getSchools(this.searchQuery).subscribe(function (res) {
            _this.schools = res.data;
            _this.pageTitle = res.msg;
            _this.sliced = _this.schools.slice(_this.pageNumber - 1, _this.pageNumber * 16 + 15);
            _this.pagingIndex = new Array(Math.ceil(_this.schools.length / 16));
            console.log(_this.schools);
        }, function (err) {
            console.log(err);
        });
    };
    SearchResultComponent.prototype.getQueryParams = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.pageNumber = +params['page'];
            _this.searchResult = params['result'];
            if (!_this.searchResult) {
                _this.searchResult = "location=" + params['location'];
            }
            else
                _this.searchResult = "result=" + _this.searchResult;
            _this.searchQuery = _this.searchResult + "&&sort=" + _this.sort;
            console.log(_this.searchQuery);
        });
    };
    SearchResultComponent.prototype.updateSortQuery = function (sortValue) {
        console.log("SORRTT!!");
        this.sort = sortValue;
        console.log(this.searchResult);
        this.searchQuery = this.searchResult + "&&sort=" + this.sort;
        console.log(this.searchQuery);
        this.search();
    };
    SearchResultComponent.prototype.nextPage = function () {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber + 1 || 1 } });
    };
    SearchResultComponent.prototype.previousPage = function () {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber - 1 || 1 } });
    };
    SearchResultComponent.prototype.getSelected = function () {
        this.selected_certificates = this.certificates.filter(function (s) {
            return s.selected;
        });
        this.selected_count = this.selected_certificates.length;
    };
    SearchResultComponent.prototype.updateSearch = function (searchValue) {
        this.pageTitle = "Search Results";
        this.searchResult = searchValue;
        if (this.searchResult) {
            this.searchResult = "result=" + this.searchResult;
            this.searchQuery = this.searchResult + "&&sort=" + this.sort;
            this.search();
        }
    };
    // Clearing All Selections
    SearchResultComponent.prototype.clearSelection = function () {
        this.searchText = "";
        this.certificates = this.certificates.filter(function (c) {
            c.selected = false;
            return true;
        });
        this.getSelected();
    };
    //Delete Single Listed Game Tag
    SearchResultComponent.prototype.deleteGame = function (id) {
        this.searchText = "";
        this.certificates = this.certificates.filter(function (c) {
            if (c.id == id)
                c.selected = false;
            return true;
        });
        this.getSelected();
    };
    SearchResultComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'homepage-search-result',
            template: __webpack_require__("./src/app/homepage/search/searchResult/searchResult.component.html"),
            styles: [__webpack_require__("./src/app/homepage/search/searchResult/searchResult.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ })

});
//# sourceMappingURL=homepage.module.chunk.js.map