webpackJsonp(["users.module"],{

/***/ "./src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\" align=\"middle\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                    <div class=\"card card-register\">\n                        <h3 class=\"title\">Login</h3>\n                        <div class=\"social-line text-center\">\n                            <div *ngIf=\"success\" class=\"alert alert-success\">{{ message }}</div>\n                            <div *ngIf=\"failure\" class=\"alert alert-danger\">{{ message }}</div>\n\n                        </div>\n                        <form class=\"register-form\">\n\n                            <label>Email</label>\n                            <input class=\"form-control\" placeholder=\"Enter your email address\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" id=\"blablabla\" required>\n\n                            <label>Password</label>\n                            <input class=\"form-control\" placeholder=\"Minimum 8 characters\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n\n\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"login()\">Login!</button>\n\n                            <p *ngIf=\"!success\">don't have an account?</p>\n\n                            <a *ngIf=\"!success\" href=\"/users/register\"><button type=\"button\" class=\"btn btn-primary\">Create an account!</button></a>\n\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_update_service__ = __webpack_require__("./src/app/layout/update.service.ts");
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





//import { NavbarComponent } from '../../layout/navbar/navbar.component';
//import 'rxjs/add/operator/map';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, router, route, updateService) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.updateService = updateService;
        this.success = false;
        this.failure = false;
        //private successReset: String;
        //private failedReset: String;
        //warning Flags
        this.PasswordWarning = false;
        this.emailWarning = false;
        this.resetUserEmailWarning = false;
        this.resetSuccessWarning = false;
        this.resetFailureWarning = false;
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = "email";
        this.password = "";
        this.route.queryParams.subscribe(function (params) {
            _this.success = true;
            _this.message = params['successMsg'];
            if (!_this.message) {
                _this.success = false;
            }
            console.log("message: " + _this.message);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.email || this.email.length == 0) {
            this.emailWarning = true;
        }
        else {
            this.emailWarning = false;
        }
        if (!this.password || this.password.length == 0) {
            this.PasswordWarning = true;
        }
        else {
            this.PasswordWarning = false;
        }
        if (!this.emailWarning && !this.PasswordWarning) {
            this.usersService.login(this.email, this.password)
                .subscribe(function (res) {
                _this.failure = false;
                _this.loggedIn = true;
                //this.message = res.msg;
                console.log(res.data);
                /*We are taking the current instant and the expiresInproperty,
                    and using it to calculate the expiration timestamp*/
                var expiresAt = __WEBPACK_IMPORTED_MODULE_4_moment__().add(12, 'hours');
                console.log("the current time is: " + __WEBPACK_IMPORTED_MODULE_4_moment__());
                console.log("expires in: " + res.expiresIn);
                console.log("expires at: " + expiresAt);
                // console.log(res.data)
                localStorage.setItem('id_token', res.data);
                //console.log(localStorage.getItem('id_token'))
                localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
                _this.updateService.updateAuthStatus(true);
                _this.router.navigate(['/']);
                // console.log(localStorage);
            }, function (error) {
                _this.success = false;
                _this.failure = true;
                _this.message = error.error.msg;
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/users/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__layout_update_service__["a" /* UpdateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\nfieldset,\nlabel {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 20px;\n}\nh1 {\n    font-size: 1.5em;\n    margin: 10px;\n}\n.trip-guide-meta .rating-item {\n    margin-top: -5px;\n}\n.user-item-01 .rating-item .fa {\n    color: #FFF;\n}\n.detail-header .rating-item {\n    padding-right: 30px;\n    position: relative;\n}\n.detail-header .rating-item:before {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.detail-header .rating-item:after {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.detail-header .rating-text {\n    margin-top: 2px;\n}\n.detail-header .rating-item .rating-symbol {\n    margin-right: 0;\n    margin-left: 5px;\n}\n.detail-header-02 .rating-item {\n    margin-top: 7px;\n}\n.detail-header-02 .rating-item .rating-text {\n    display: inline-block;\n}\n.detail-header-02 .meta-list li .rating-item {\n    margin-top: 0;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 1.7rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}\n.starsContainer {\n    padding-left: 20px;\n}"

/***/ }),

/***/ "./src/app/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">{{firstName}} {{lastName}}<br /></h4>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"myProfile\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <br />\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"About\">\n                            <ng-template ngbTabContent>\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n\n\n                                        <div class=\"row\">\n                                            <span class=\"label label-default\">Email</span>\n                                            <p [ngStyle]=\"{'padding-left':'30px' }\">{{email}}</p>\n\n                                        </div>\n                                        <hr/>\n\n                                        <div *ngIf=\"bdAvailable\" class=\"row\">\n                                            <span class=\"label label-primary\">Birthdate</span>\n                                            <p [ngStyle]=\"{'padding-left':'30px' }\">{{birthDate| date:' MMM d, y'}}</p>\n                                        </div>\n                                        <hr *ngIf=\"bdAvailable\" />\n                                        <div class=\"row\">\n                                            <span class=\"label label-info\">Joined </span>\n                                            <p [ngStyle]=\"{'padding-left':'30px' }\">{{joined |date:' MMM d, y'}}</p>\n\n                                        </div>\n                                        <hr />\n\n\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n\n                        <ngb-tab title=\"Favorites\">\n                            <ng-template ngbTabContent>\n                                <ul *ngFor=\"let fav of favSchools; let i=i ndex \">\n                                    <div class=\"row\">\n                                        <span>\n                                            <a href=\"/schools/school/{{fav._id}}\" class=\"btn btn-link btn-primary\">{{fav.name}}</a>\n                                            \n                                            </span>\n\n                                        <div *ngIf=\"myProfile\" class=\"col-md-6\">\n                                            <button *ngIf=\"myProfile\" type=\"button\" class=\"pull-right btn btn-danger btn-sm\" (click)=\"removeFavorite(fav._id)\">Unfavorite</button>\n                                        </div>\n                                    </div>\n\n                                    <hr/>\n                                </ul>\n                            </ng-template>\n                        </ngb-tab>\n\n                        <ngb-tab title=\"Reviews and ratings\">\n                            <ng-template ngbTabContent>\n                                <div class=\"row\" id=\"reviews \">\n                                    <div class=\"col\">\n                                        <p *ngIf=\"!reviewsAvailable\"> You have not rated or reviewd any schools</p>\n                                        <ul *ngFor=\"let review of reviews; let i=i ndex \">\n                                            <div class=\"row\">\n                                                <span><a  class=\"btn btn-link btn-primary\">{{review.school_name}}</a></span>\n\n                                                <ng-template #t let-fill=\"fill\">\n                                                    <span class=\"star\" [class.full]=\"fill === 100\">\n                                                    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                                    </span>\n\n                                                </ng-template>\n\n                                                <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                                <div *ngIf=\"myProfile\" class=\"col-md-6\">\n                                                    <span class=\"pull-right label label-danger\"><a (click)=\"onDelete(review._id)\">Delete</a></span>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <p class=\"mb-0 \">{{review.comment}}</p>\n                                            </div>\n                                            <footer class=\"blockquote-footer \">\n                                                <cite title=\"source Title \">{{review.time | date :  \"dd/MM/y  HH:mm \"}}</cite>\n\n                                            </footer>\n\n\n                                            <hr/>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(UsersService, router, activatedRoute, http) {
        this.UsersService = UsersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.emailAvailable = false;
        this.bdAvailable = false;
        this.userId = "";
        this.loggedIn = false;
        this.myProfile = false;
        //////------Reviews variables-----///////
        this.count = 0;
        this.reviewsAvailable = false;
        this.editing = [];
        this.editIndex = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.UsersService.isLoggedIn();
        this.initialize();
    };
    ProfileComponent.prototype.initialize = function () {
        var _this = this;
        //get the user id in the url of the visited profile
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId']; //the visited userId
            //is there a logged in user?
            if (_this.isLoggedIn()) {
                //get the id of the currently logged in user
                _this.UsersService.getCurrentUser().subscribe(function (res) {
                    ////if the logged in user has the same id as the id in the route -> logged in user visiting profile
                    if (res.data && res.data._id == _this.userId) {
                        _this.myProfile = true;
                        _this.user = res.data;
                        _this.firstName = res.data.firstName;
                        _this.lastName = res.data.lastName;
                        _this.email = res.data.email;
                        _this.joined = res.data.createdAt;
                        if (res.data.birthDate) {
                            _this.birthDate = res.data.birthDate;
                            _this.bdAvailable = true;
                        }
                        _this.favorites = res.data.favorites;
                        var schools = [];
                        console.log("number of favorites: " + _this.favorites.length);
                        for (var i = 0; i < _this.favorites.length; i++) {
                            _this.UsersService.getSchoolInfo(_this.favorites[i]).subscribe(function (res) {
                                console.log("fav school: " + res.data.name);
                                schools.push(res.data);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        _this.favSchools = schools;
                        _this.UsersService.getReviews(_this.userId).subscribe(function (res) {
                            _this.reviews = res.data;
                            if (_this.reviews.length > 0) {
                                _this.reviewsAvailable = true;
                            }
                            console.log("reviews: " + res.data);
                        }, function (err) {
                            console.log(err);
                        });
                        console.log(_this.user);
                    }
                    else {
                        _this.myProfile = false;
                        _this.UsersService.getOneUser(_this.userId).subscribe(function (res) {
                            _this.user = res.data;
                            _this.firstName = res.data.firstName;
                            _this.lastName = res.data.lastName;
                            _this.email = res.data.email;
                            _this.joined = res.data.createdAt;
                            if (res.data.birthDate) {
                                _this.birthDate = res.data.birthDate;
                                _this.bdAvailable = true;
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.myProfile = false;
                _this.UsersService.getOneUser(_this.userId).subscribe(function (res) {
                    _this.user = res.data;
                    _this.firstName = res.data.firstName;
                    _this.lastName = res.data.lastName;
                    _this.email = res.data.email;
                    _this.joined = res.data.createdAt;
                    if (res.data.birthDate) {
                        _this.birthDate = res.data.birthDate;
                        _this.bdAvailable = true;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    ProfileComponent.prototype.onDelete = function (reviewId) {
        this.UsersService.deleteReview(reviewId).subscribe(function (res) {
            console.log(res.msg);
        }, function (err) {
            console.log(err);
        });
        location.reload();
    };
    ProfileComponent.prototype.removeFavorite = function (schoolId) {
        this.UsersService.removeFavorite(schoolId).subscribe(function (res) {
            console.log(res.msg);
        }, function (err) {
            console.log(err);
        });
        location.reload();
    };
    ProfileComponent.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_4_moment__().isBefore(this.getExpiration());
    };
    ProfileComponent.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    ProfileComponent.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_4_moment__(expiresAt);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\" align=\"middle\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                    <div class=\"card card-register\">\n                        <h3 class=\"title\">Creat your account</h3>\n                        <div class=\"social-line text-center\">\n                            <div *ngIf=\"success\" class=\"alert alert-success\">{{ message }}</div>\n\n                            <div *ngIf=\"failure\" class=\"alert alert-danger\">{{ message }}</div>\n\n\n                        </div>\n                        <form class=\"register-form\">\n                            <label for=\"firstName\">First Name</label>\n                            <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"Enter your First Name\">\n\n                            <label>Last Name</label>\n                            <input class=\"form-control\" placeholder=\"Enter your Last Name\" type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" required>\n\n                            <label>Email</label>\n                            <input class=\"form-control\" placeholder=\"Enter your email address\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\n\n                            <label>Password</label>\n                            <input class=\"form-control\" placeholder=\"Minimum 8 characters\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n\n                            <label>Confirm Password</label>\n                            <input class=\"form-control\" placeholder=\"Re-type password again\" type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required>\n\n\n                            <label>Birth Date</label>\n                            <input class=\"form-control\" placeholder=\"\" type=\"date\" [(ngModel)]=\"birthDate\" name=\"birthDate\">\n\n\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Register</button>\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./src/app/users/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.success = false;
        this.failure = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        //Construct a new user of user.model.ts with the values entered on pressing submit
        var user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */](this.firstName, this.lastName, this.email, this.password, this.confirmPassword, this.birthDate);
        /*
        Calling the signUp function from the service to handle the register operation
        Gets back data and error messages then handling them by bootstrap alerts
        Setting the success and failure booleans to check on them in the html file
        */
        this.usersService.signUp(user)
            .subscribe(function (res) {
            _this.failure = false;
            _this.success = true;
            _this.message = res.msg;
            console.log(res.data);
            _this.router.navigate(['/users/login'], { queryParams: { successMsg: "account created successfully." } });
        }, function (error) {
            _this.success = false;
            _this.failure = true;
            _this.message = error.error.msg;
        });
    };
    ;
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/users/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
//Create a Class for the user created in the Component to be passed back to the backend
var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, confirmPassword, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.birthDate = birthDate;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("./src/app/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/users/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */], pathMatch: 'full' }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"Users\">\n    <li *ngFor=\"let user of users\">\n        <span class=\"badge\">{{user._id}}</span> {{user.email}}\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.showFavorites = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (res) {
            _this.users = res;
        }, function (err) {
            console.log(err);
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_routing_module__ = __webpack_require__("./src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_8__users_routing_module__["a" /* UsersRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__users_service__["a" /* UsersService */]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map