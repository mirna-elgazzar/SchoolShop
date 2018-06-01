webpackJsonp(["schools.module"],{

/***/ "./src/app/schools/filter.pipe.ts":
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

/***/ "./src/app/schools/schoolLocation/schoolLocation.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/schoolLocation/schoolLocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schools_service__ = __webpack_require__("./src/app/schools/schools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolLocationComponent = /** @class */ (function () {
    function SchoolLocationComponent(schoolsService, router, activatedRoute, http) {
        this.schoolsService = schoolsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        //initialize a demo SchoolsComponent
        this.location = "";
        this.decodedLocation = "";
    }
    SchoolLocationComponent.prototype.ngOnInit = function () {
        this.getSchools();
    };
    SchoolLocationComponent.prototype.getSchools = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.location = params['location'];
            _this.decodedLocation = params['location'].replace(/-/g, ' '); //replace "-" with space
            _this.router.navigate(['/home/search'], { queryParams: { location: _this.decodedLocation, page: "1" } });
        });
    };
    SchoolLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-school-location',
            template: __webpack_require__("./src/app/schools/schoolLocation/schoolLocation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__schools_service__["a" /* SchoolsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SchoolLocationComponent);
    return SchoolLocationComponent;
}());



/***/ }),

/***/ "./src/app/schools/schoolPage/schoolPage.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\nfieldset,\nlabel {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 20px;\n}\nh1 {\n    font-size: 1.5em;\n    margin: 10px;\n}\n.trip-guide-meta .rating-item {\n    margin-top: -5px;\n}\n.user-item-01 .rating-item .fa {\n    color: #FFF;\n}\n.detail-header .rating-item {\n    padding-right: 30px;\n    position: relative;\n}\n.detail-header .rating-item:before {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.detail-header .rating-item:after {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.detail-header .rating-text {\n    margin-top: 2px;\n}\n.detail-header .rating-item .rating-symbol {\n    margin-right: 0;\n    margin-left: 5px;\n}\n.detail-header-02 .rating-item {\n    margin-top: 7px;\n}\n.detail-header-02 .rating-item .rating-text {\n    display: inline-block;\n}\n.detail-header-02 .meta-list li .rating-item {\n    margin-top: 0;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 2rem;\n    color: #d3d3d3;\n}\n.starSmall {\n    position: relative;\n    display: inline-block;\n    font-size: 1.5rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}\nulGallery {\n    padding: 0;\n    width: 780px;\n    margin: 20px auto\n}\nliGallery {\n    display: inline;\n}\n.tn {\n    margin: 2px 0px;\n    -webkit-box-shadow: #999 1px 1px 3px 1px;\n            box-shadow: #999 1px 1px 3px 1px;\n    cursor: pointer\n}\n.modal-content {\n    width: 670px !important;\n}"

/***/ }),

/***/ "./src/app/schools/schoolPage/schoolPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url(' ../assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\" #start>\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img *ngIf=\"!profilePicture\" src=\"../assets/img/schoolLogo.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                    <img *ngIf=\"profilePicture\" src=\"../assets/img/gallery/{{name}}/0.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                </div>\n                <div class=\"name \">\n                    <h2 class=\"title \">{{name}}<br /></h2>\n\n                    <div *ngIf=\"twitAvailable() || faceAvailable() ||youtubeAvailable||instagramAvailable\" class=\"social-line text-center\">\n                        <p>Check us out on social media</p>\n\n                        <a *ngIf=\"faceAvailable()\" href=\"{{facebook}}\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n\n                        <a *ngIf=\"twitAvailable()\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n\n\n                    </div>\n\n\n                    <ng-template #t let-fill=\"fill\">\n                        <span class=\"star\" [class.full]=\"fill === 100\">\n                            <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                        </span>\n\n                    </ng-template>\n\n                    <ngb-rating [(rate)]=\"averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                    <span>({{numReviews}})</span>\n\n\n                </div>\n            </div>\n            <div class=\"row \">\n                <div class=\"col-md-6 ml-auto mr-auto text-center \">\n                    <p ng-if=\"aboutUsAvailable\">{{aboutUs}} </p>\n                    <br />\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n\n                            <button *ngIf=\"isLoggedIn() && !(isFav)\" type=\"button\" class=\"btn btn-success\" (click)=\"addFavorite()\">Favorite this!</button>\n                            <button *ngIf=\"isLoggedIn() && isFav\" type=\"button\" class=\"btn btn-danger\" (click)=\"removeFavorite()\">Unfavorite</button>\n                            <button *ngIf=\"!isRev\" type=\"button\" class=\"btn btn-warning \" (click)=\"scroll(target)\">Rate and Review</button>\n                            <button *ngIf=\"isLoggedIn() && isRev\" type=\"button\" class=\"btn btn-warning \" (click)=\"scroll(target)\">Edit your review and rating</button>\n\n\n\n\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"success\" class=\"alert alert-success \">{{ message }}</div>\n\n\n                </div>\n            </div>\n\n            <br/>\n            <div class=\"nav-tabs-navigation \">\n                <div class=\"nav-tabs-wrapper \">\n                    <ngb-tabset [justify]=\" 'left' \">\n\n                        <ngb-tab title=\"About us \">\n                            <ng-template ngbTabContent>\n                                <div class=\"row following \" id=\"aboutUs \">\n                                    <div class=\"col-md-6 ml-auto mr-auto \">\n                                        <ul class=\"list-unstyled follows \">\n\n                                            <li *ngIf=\"websiteAvailable\">\n                                                <div class=\"row \">\n                                                    <span class=\"label label-default\">Website</span>\n                                                    <div>\n                                                        <a [ngStyle]=\"{'padding-left':'30px' }\" href=\"{{website}}\" class=\"btn btn-link btn-primary\">{{website}}</a>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr *ngIf=\"websiteAvailable\" />\n\n                                            <li>\n                                                <div class=\"row \" *ngIf=\"emailAvailable\">\n                                                    <span class=\"label label-danger \">Email</span>\n                                                    <a [ngStyle]=\"{'padding-left':'30px' }\" class=\"btn btn-link btn-primary\">{{email}}</a>\n\n                                                </div>\n                                            </li>\n                                            <hr *ngIf=\"emailAvailable\" />\n\n                                            <li>\n                                                <div class=\"row \">\n                                                    <span class=\"label label-primary\">address</span>\n                                                    <div [ngStyle]=\"{'padding-left':'20px' }\">\n                                                        <i class=\"fa fa-map-marker\"></i>{{address}}\n                                                    </div>\n                                                </div>\n\n                                            </li>\n                                            <div class=\"row\">\n                                                <a [ngStyle]=\"{'padding-left':'80px' }\" href=\"{{googleMapsUrl}}\" class=\"btn btn-link btn-primary\">{{googleMapsUrl}}</a>\n                                            </div>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row \">\n                                                    <span class=\"label label-info\">Phone numbers</span>\n                                                    <div [ngStyle]=\"{'padding-left':'20px' }\">\n                                                        <i *ngIf=\"phoneNumbersAvailable\" class=\"fa fa-phone\"></i> {{phoneNumbers}}\n                                                        <span class=\"mh-5 text-muted\">|</span> {{internationalPhoneNumbers}}\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n\n                                            <li>\n                                                <div class=\"row \" *ngIf=\"visionMissionAvailable\">\n                                                    <span class=\"label label-success\">Vision and Mission</span>\n                                                </div>\n                                            </li>\n                                            <li>\n                                                {{visionMission}}\n                                            </li>\n                                            <hr *ngIf=\"visionMissionAvailable\" />\n\n                                            <li>\n                                                <div class=\"row \" *ngIf=\"certificatesAvailable\">\n                                                    <span class=\"label label-warning\">Certificates</span>\n                                                    <div [ngStyle]=\"{'padding-left':'30px' }\">\n                                                        {{certificates}}\n                                                    </div>\n                                                </div>\n\n                                            </li>\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n\n                        <ngb-tab title=\"Reviews \">\n                            <ng-template ngbTabContent #target2>\n                                <div *ngIf=\"reviewsAvailable\" class=\"roww \">\n                                    <span class=\"heading \">User Rating</span>\n\n\n                                    <p>{{averageRating}} average based on {{numReviews}} reviews.</p>\n                                    <hr style=\"border:3px solid #f1f1f1 \">\n\n                                    <div class=\"row \">\n                                        <div class=\"side \">\n                                            <div>5 star</div>\n                                        </div>\n                                        <div class=\"middle \">\n                                            <div class=\"bar-container \">\n                                                <div class=\"bar-5\" [ngStyle]=\"{'width':rating5Perc}\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"side right \">\n                                            <div>{{rating5Num}}</div>\n                                        </div>\n                                        <div class=\"side \">\n                                            <div>4 star</div>\n                                        </div>\n                                        <div class=\"middle \">\n                                            <div class=\"bar-container \">\n                                                <div class=\"bar-4 \" [ngStyle]=\" { 'width':rating4Perc} \"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"side right \">\n                                            <div>{{rating4Num}}</div>\n                                        </div>\n                                        <div class=\"side \">\n                                            <div>3 star</div>\n                                        </div>\n                                        <div class=\"middle \">\n                                            <div class=\"bar-container \">\n                                                <div class=\"bar-3 \" [ngStyle]=\"{'width':rating3Perc}\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"side right \">\n                                            <div>{{rating3Num}}</div>\n                                        </div>\n                                        <div class=\"side \">\n                                            <div>2 star</div>\n                                        </div>\n                                        <div class=\"middle \">\n                                            <div class=\"bar-container \">\n                                                <div class=\"bar-2\" [ngStyle]=\"{'width':rating2Perc}\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"side right \">\n                                            <div>{{rating2Num}}</div>\n                                        </div>\n                                        <div class=\"side \">\n                                            <div>1 star</div>\n                                        </div>\n                                        <div class=\"middle \">\n                                            <div class=\"bar-container \">\n                                                <div class=\"bar-1 \" [ngStyle]=\"{'width':rating1Perc}\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"side right \">\n                                            <div>{{rating1Num}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr style=\"border:3px solid #f1f1f1\" />\n                                <p *ngIf=\"! reviewsAvailable\">This school has no reviews yet</p>\n                                <div class=\"row following \" id=\"reviews \">\n                                    <div class=\"col-md-6 ml-auto mr-auto \">\n                                        <ul class=\"list-unstyled follows \" *ngFor=\"let review of reviews; let i=index \">\n\n                                            <li *ngIf=\"review.commentAvailable\">\n\n                                                <blockquote class=\"blockquote \">\n                                                    <h6 *ngIf=\"!review.userReview\" class=\"pull-left\">{{review.user_name}}</h6>\n                                                    <a *ngIf=\"review.userReview\" href=\"/users/profile/{{review.user}}\">\n                                                        <h6 class=\"pull-left\">{{review.user_name}}</h6>\n                                                    </a>\n                                                    <div class=\"row\" [ngStyle]=\"{'padding-left':'30px' }\">\n                                                        <ng-template #t let-fill=\"fill\">\n                                                            <span class=\"starSmall\" [class.full]=\"fill === 100\">\n                                                                 <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                                            </span>\n                                                        </ng-template>\n                                                        <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                                    </div>\n                                                    <p class=\"mb-0 \">{{review.comment}}</p>\n\n                                                    <footer>\n                                                        <p class=\"text-muted\"> <cite>{{review.time_string}}</cite></p>\n                                                    </footer>\n                                                    <footer>\n                                                        <p class=\"text-muted\"><cite>{{review.time |date : \"dd/MM/y HH:mm \"}}</cite></p>\n                                                    </footer>\n\n                                                </blockquote>\n                                            </li>\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n\n\n                        <ngb-tab title=\"Gallery\">\n                            <ng-template ngbTabContent>\n                                <div class=\"section\" id=\"carousel\">\n                                    <div class=\"container\">\n                                        <div class=\"tim-title\">\n                                            <h3>Photo gallery</h3>\n                                        </div>\n                                        <p *ngIf=\"!photosAvail\">This school has no photos yet</p>\n\n\n                                        <div *ngIf=\"photosAvail\" class=\"GridLex-grid-noGutter-equalHeight\">\n\n                                            <div class=\"GridLex-col-1_sm-4_xs-6_xss-8\" *ngFor=\"let photo of photos\">\n                                                <img src={{photo}} class=\"tn\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:100px;\" (click)=setSelectedImage(photo)>\n\n                                            </div>\n                                        </div>\n                                        <div class=\"row\" *ngIf=\"photosAvail\">\n                                            <div class=\"col-md-8 mr-auto ml-auto\">\n                                                <div class=\"card page-carousel\">\n                                                    <ngb-carousel>\n\n                                                        <ng-template ngbSlide>\n                                                            <img src={{selectedImage}} alt=\"photo\">\n                                                            <div class=\"carousel-caption\">\n                                                                <p>{{name}}</p>\n                                                            </div>\n                                                        </ng-template>\n                                                    </ngb-carousel>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n\n\n                            </ng-template>\n                        </ngb-tab>\n\n                    </ngb-tabset>\n                </div>\n            </div>\n\n            <br/>\n\n\n            <div #target>\n                <div class=\"container \">\n                    <div class=\"row \">\n                        <div class=\"col-md-8 mr-auto ml-auto \">\n                            <h2 class=\"text-center \">Rate and review this school!</h2>\n                            <h5>Your opinion matters.</h5>\n                            <p *ngIf=\"isRev\"> You have reviewed and rated this school before, you can now edit your review and rating</p>\n                            <div *ngIf=\"success \" class=\"alert alert-success \">{{ message }}</div>\n\n                            <div *ngIf=\"failure \" class=\"alert alert-danger \">{{ message }}</div>\n                            <form class=\"contact-form \">\n                                <div class=\"row \">\n\n                                    <div *ngIf=\"isLoggedOut() \">\n                                        <label>Name</label>\n                                        <input type=\"text \" class=\"form-control \" [(ngModel)]=\"user_name \" name=\"user_name \" placeholder=\"please enter your name \">\n                                    </div>\n\n                                </div>\n                                <div class=\"row \">\n                                    <label>Your Comment</label>\n                                    <textarea *ngIf=\"isLoggedIn() &&!isRev\" class=\"form-control \" rows=\"4 \" [(ngModel)]=\"comment \" name=\"comment \" placeholder=\"Tell us what your think about this school... \"></textarea>\n                                    <textarea *ngIf=\"isLoggedIn() && isRev\" class=\"form-control \" rows=\"4 \" [(ngModel)]=\"comment \" name=\"comment \" placeholder={{oldComment}}></textarea>\n\n                                </div>\n                                <div class=\"row \">\n                                    <h4>your rating:</h4>\n                                </div>\n\n                                <div class=\"row\">\n\n                                    <fieldset class=\"rating\">\n                                        <input type=\"radio\" id=\"star5\" name=\"rating\" [(ngModel)]=\"reviewRating \" value=\"5\" /><label class=\"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n                                        <input type=\"radio\" id=\"star4\" name=\"rating\" [(ngModel)]=\"reviewRating \" value=\"4\" /><label class=\"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n                                        <input type=\"radio\" id=\"star3\" name=\"rating\" [(ngModel)]=\"reviewRating \" value=\"3\" /><label class=\"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n                                        <input type=\"radio\" id=\"star2\" name=\"rating\" [(ngModel)]=\"reviewRating \" value=\"2\" /><label class=\"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n                                        <input type=\"radio\" id=\"star1\" name=\"rating\" [(ngModel)]=\"reviewRating \" value=\"1\" /><label class=\"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n                                    </fieldset>\n                                </div>\n\n                            </form>\n                            <div class=\"row \" align=\"text-center \">\n                                <div class=\"col-md-4 mr-auto ml-auto \">\n                                    <button *ngIf=\"!isRev\" class=\"btn btn-danger btn-lg btn-fill \" (click)=\"submitClicked(start) \">Submit</button>\n                                    <button *ngIf=\"isLoggedIn() &&isRev\" class=\"btn btn-danger btn-lg btn-fill \" (click)=\"editClicked(start) \">Edit</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/schools/schoolPage/schoolPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schoolPage_service__ = __webpack_require__("./src/app/schools/schoolPage/schoolPage.service.ts");
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





var SchoolPageComponent = /** @class */ (function () {
    function SchoolPageComponent(schoolPageService, router, activatedRoute, http) {
        this.schoolPageService = schoolPageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.encodedSchoolName = "";
        this.name = "";
        this.profilePicturePath = "../assets/img/ProfilePictures/";
        this.website = "";
        this.websiteAvailable = false;
        this.rating = 0;
        this.averageRating = 0;
        this.numReviews = 0;
        this.email = "";
        this.emailAvailable = false;
        this.phoneNumbers = [];
        this.phoneNumbersAvailable = false;
        this.internationalPhoneNumbers = [];
        this.internationalPhoneNumbersAvailable = false;
        this.address = ""; //always available
        this.route = ""; //always available
        this.googleMapsUrl = ""; //always available
        this.facebook = "";
        this.fbAvailable = false;
        this.twitter = "";
        this.twitterAvailable = false;
        this.instagram = "";
        this.instagramAvailable = false;
        this.youtube = "";
        this.youtubeAvailable = false;
        this.admission = "";
        this.admissionAvailable = false;
        this.aboutUs = "";
        this.aboutUsAvailable = false;
        this.visionMission = "";
        this.visionMissionAvailable = false;
        this.facilities = "";
        this.facilitiesAvailable = false;
        this.fees = "";
        this.feesAvailable = false;
        this.supplies = "";
        this.suppliesAvailable = false;
        this.city = ""; //always available
        this.ratingNumber = 0;
        //schoolInfo: Object[] = new Array<Object>();
        this.schoolId = "";
        this.firstPhoto = "";
        this.certificates = [];
        this.certificatesAvailable = false;
        //logo: String = "";
        this.loadDone = false;
        this.adminLoggedIn = false;
        this.userLoggedIn = false;
        this.noLogIn = false;
        this.reviewsAvailable = false;
        this.user_name = "";
        this.user_email = "";
        this.comment = "";
        this.reviewRating = 0;
        this.rating_string = "";
        this.language = "english";
        this.rating5Num = 0;
        this.rating5Perc = "";
        this.rating4Num = 0;
        this.rating4Perc = "";
        this.rating3Num = 0;
        this.rating3Perc = "";
        this.rating2Num = 0;
        this.rating2Perc = "";
        this.rating1Num = 0;
        this.rating1Perc = "";
        ///------------old Reveiw Attributes---------///
        this.oldReviewId = "";
        this.oldComment = "";
        /////------------Edit Reveiw Attributes---------///
        this.success = false;
        this.failure = false;
        ////------------favorite attributes---------------///
        this.isFav = false;
        this.isRev = false;
        this.photos = [];
        this.numPhotos = 0;
        this.photosAvail = false;
    }
    SchoolPageComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn()) {
            this.userLoggedIn = true;
            console.log("user logged in");
        }
        else {
            this.userLoggedIn = false;
            console.log("no user logged in");
        }
        this.initialize();
    };
    SchoolPageComponent.prototype.initialize = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.schoolId = params['schoolId'];
            console.log("schoolId: " + _this.schoolId);
            _this.schoolPageService.getSchoolInfo(_this.schoolId).subscribe(function (res) {
                console.log(res.data);
                _this.name = res.data.name;
                _this.encodedSchoolName = _this.name.replace(/\s+/g, '_');
                _this.address = res.data.address;
                _this.route = res.data.route;
                _this.city = res.data.city;
                _this.googleMapsUrl = res.data.googleMapsUrl;
                _this.profilePicture = res.data.profilePicture;
                _this.numPhotos = res.data.numPhotos;
                if (res.data.numPhotos > 0) {
                    _this.photosAvail = true;
                }
                _this.IGCSE = res.data.IGCSE;
                _this.IB = res.data.IB;
                _this.ABITUR = res.data.ABITUR;
                _this.AMERICAN = res.data.AMERICAN;
                _this.BAC = res.data.BAC;
                //this.certificates = res.data.certificates;
                //getting the paths of the photos:
                for (var i = 0; i < _this.numPhotos; i++) {
                    _this.photos[i] = "../assets/img/gallery/" + _this.name + "/" + i + ".jpg";
                }
                _this.selectedImage = _this.photos[0];
                console.log(_this.photos);
                console.log("certificates: " + _this.certificates); //they are pushed in te array but not displayed
                if (res.data.website) {
                    _this.website = res.data.website;
                    _this.websiteAvailable = true;
                }
                if (res.data.average) {
                    console.log("average rating: " + res.data.average);
                    _this.averageRating = res.data.average;
                }
                if (res.data.email != "[]") {
                    _this.email = res.data.email;
                    _this.emailAvailable = true;
                }
                if (res.data.phoneNumbers) {
                    _this.phoneNumbers = res.data.phoneNumbers;
                    _this.phoneNumbersAvailable = true;
                }
                if (res.data.internationalPhoneNumbers) {
                    _this.internationalPhoneNumbers = res.data.internationalPhoneNumbers;
                    _this.internationalPhoneNumbersAvailable = true;
                }
                if (res.data.facebook) {
                    _this.facebook = res.data.facebook;
                    _this.fbAvailable = true;
                }
                if (res.data.twitter) {
                    _this.twitter = res.data.twitter;
                    _this.twitterAvailable = true;
                }
                if (res.data.instagram) {
                    _this.instagram = res.data.instagram;
                    _this.instagramAvailable = true;
                }
                if (res.data.youtube) {
                    _this.youtube = res.data.youtube;
                    _this.youtubeAvailable = true;
                }
                if (res.data.aboutUs) {
                    _this.aboutUs = res.data.aboutUs;
                    _this.aboutUsAvailable = true;
                }
                if (res.data.visionMission) {
                    _this.visionMission = res.data.visionMission;
                    _this.visionMissionAvailable = true;
                }
                if (res.data.admission) {
                    _this.admission = res.data.admission;
                    _this.admissionAvailable = true;
                }
                if (res.data.facilities) {
                    _this.facilities = res.data.facilities;
                    _this.facilitiesAvailable = true;
                }
                if (res.data.fees) {
                    _this.fees = res.data.fees;
                    _this.feesAvailable = true;
                }
                if (res.data.supplies) {
                    _this.supplies = res.data.supplies;
                    _this.suppliesAvailable = true;
                }
                if (res.data.certificates.length > 0) {
                    _this.certificates = res.data.certificates;
                    _this.certificatesAvailable = true;
                }
                console.log("encodedschool: " + _this.encodedSchoolName);
                _this.schoolPageService.getReviews(_this.encodedSchoolName).subscribe(function (res) {
                    _this.reviews = res.data;
                    console.log("reviews: " + res.data);
                    if (res.data.length > 0) {
                        _this.reviewsAvailable = true;
                        _this.schoolPageService.getAverage(_this.encodedSchoolName).subscribe(function (res) {
                            _this.averageRating = _this.round(res.data.average, 1);
                            console.log("average rating: " + _this.averageRating);
                            _this.numReviews = res.data.total;
                            _this.schoolPageService.analyzeRating(_this.encodedSchoolName).subscribe(function (res) {
                                _this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating5Num = res.data.rating5Num;
                                _this.rating4Num = res.data.rating4Num;
                                _this.rating3Num = res.data.rating3Num;
                                _this.rating2Num = res.data.rating2Num;
                                _this.rating1Num = res.data.rating1Num;
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) {
                    console.log(err);
                });
                if (_this.userLoggedIn) {
                    _this.schoolPageService.isFavorite(_this.schoolId).subscribe(function (res) {
                        console.log(res.msg);
                        _this.isFav = res.data;
                    }, function (err) {
                        console.log(err);
                    });
                    _this.schoolPageService.isReviewed(_this.schoolId).subscribe(function (res) {
                        _this.isRev = res.data;
                        console.log("reviewd? " + res.msg + ", " + res.data); //tamam
                        //if the user already reviewed this school before, get the comment of te old review 
                        if (_this.isRev) {
                            console.log("reviewed");
                            _this.schoolPageService.getUserReview(_this.schoolId).subscribe(function (res) {
                                _this.oldComment = res.data.comment;
                                _this.oldReviewId = res.data._id;
                                console.log("Old review comment: " + _this.oldComment);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                _this.loadDone = true;
            }, function (err) {
                console.log(err);
            });
        });
    };
    SchoolPageComponent.prototype.addFavorite = function () {
        this.isFav = true;
        this.schoolPageService.addFavorite(this.schoolId).subscribe(function (res) {
            console.log(res.msg);
        }, function (err) {
            console.log(err);
        });
    };
    SchoolPageComponent.prototype.removeFavorite = function () {
        this.isFav = false;
        this.schoolPageService.removeFavorite(this.schoolId).subscribe(function (res) {
            console.log(res.msg);
        }, function (err) {
            console.log(err);
        });
    };
    SchoolPageComponent.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_4_moment__().isBefore(this.getExpiration());
    };
    SchoolPageComponent.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    SchoolPageComponent.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_4_moment__(expiresAt);
    };
    SchoolPageComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    SchoolPageComponent.prototype.twitAvailable = function () {
        return this.twitterAvailable;
    };
    SchoolPageComponent.prototype.faceAvailable = function () {
        return this.fbAvailable;
    };
    SchoolPageComponent.prototype.demo = function () {
        console.log("demo");
    };
    SchoolPageComponent.prototype.submitClicked = function (element) {
        var _this = this;
        if (this.isLoggedOut()) {
            this.schoolPageService.addReview(this.schoolId, this.name, this.reviewRating.toString(), this.comment, this.language, this.user_name)
                .subscribe(function (res) {
                _this.failure = false;
                _this.success = true;
                _this.message = res.msg;
                //this.isRev = true;
                _this.schoolPageService.getReviews(_this.encodedSchoolName).subscribe(function (res) {
                    _this.reviews = res.data;
                    console.log("reviews: " + res.data);
                    if (res.data.length > 0) {
                        _this.reviewsAvailable = true;
                        _this.schoolPageService.getAverage(_this.encodedSchoolName).subscribe(function (res) {
                            _this.averageRating = _this.round(res.data.average, 1);
                            _this.numReviews = res.data.total;
                            _this.schoolPageService.analyzeRating(_this.encodedSchoolName).subscribe(function (res) {
                                _this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating5Num = res.data.rating5Num;
                                _this.rating4Num = res.data.rating4Num;
                                _this.rating3Num = res.data.rating3Num;
                                _this.rating2Num = res.data.rating2Num;
                                _this.rating1Num = res.data.rating1Num;
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.scroll(element);
            }, function (error) {
                _this.success = false;
                _this.failure = true;
                _this.message = error.error.msg;
            });
        }
        else {
            this.schoolPageService.addUserReview(this.schoolId, this.name, this.reviewRating.toString(), this.comment, this.language)
                .subscribe(function (res) {
                _this.failure = false;
                _this.success = true;
                _this.message = res.msg;
                _this.isRev = true;
                _this.schoolPageService.getReviews(_this.encodedSchoolName).subscribe(function (res) {
                    _this.reviews = res.data;
                    console.log("reviews: " + res.data);
                    if (res.data.length > 0) {
                        _this.reviewsAvailable = true;
                        _this.schoolPageService.getAverage(_this.encodedSchoolName).subscribe(function (res) {
                            _this.averageRating = _this.round(res.data.average, 1);
                            _this.numReviews = res.data.total;
                            _this.schoolPageService.analyzeRating(_this.encodedSchoolName).subscribe(function (res) {
                                _this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                                _this.rating5Num = res.data.rating5Num;
                                _this.rating4Num = res.data.rating4Num;
                                _this.rating3Num = res.data.rating3Num;
                                _this.rating2Num = res.data.rating2Num;
                                _this.rating1Num = res.data.rating1Num;
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.scroll(element);
                console.log(res.data);
            }, function (error) {
                _this.success = false;
                _this.failure = true;
                _this.message = error.error.msg;
            });
        }
    };
    SchoolPageComponent.prototype.editClicked = function (element) {
        var _this = this;
        this.schoolPageService.editReview(this.schoolId, this.reviewRating.toString(), this.comment)
            .subscribe(function (res) {
            _this.failure = false;
            _this.success = true;
            _this.message = res.msg;
            _this.schoolPageService.getReviews(_this.encodedSchoolName).subscribe(function (res) {
                _this.reviews = res.data;
                console.log("reviews: " + res.data);
                _this.schoolPageService.getAverage(_this.encodedSchoolName).subscribe(function (res) {
                    _this.averageRating = _this.round(res.data.average, 1);
                    _this.numReviews = res.data.total;
                    _this.schoolPageService.analyzeRating(_this.encodedSchoolName).subscribe(function (res) {
                        _this.rating5Perc = (parseInt(((res.data.rating5Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                        _this.rating4Perc = (parseInt(((res.data.rating4Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                        _this.rating3Perc = (parseInt(((res.data.rating3Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                        _this.rating2Perc = (parseInt(((res.data.rating2Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                        _this.rating1Perc = (parseInt(((res.data.rating1Num / parseFloat((_this.numReviews).toString())) * 100).toString())).toString() + "%";
                        _this.rating5Num = res.data.rating5Num;
                        _this.rating4Num = res.data.rating4Num;
                        _this.rating3Num = res.data.rating3Num;
                        _this.rating2Num = res.data.rating2Num;
                        _this.rating1Num = res.data.rating1Num;
                    }, function (err) {
                        console.log(err);
                    });
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
            _this.scroll(element);
        }, function (error) {
            _this.success = false;
            _this.failure = true;
            _this.message = error.error.msg;
        });
    };
    SchoolPageComponent.prototype.round = function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };
    SchoolPageComponent.prototype.setSelectedImage = function (photo) {
        this.selectedImage = photo;
        console.log("selected image: " + this.selectedImage);
    };
    SchoolPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-school-page',
            template: __webpack_require__("./src/app/schools/schoolPage/schoolPage.component.html"),
            styles: [__webpack_require__("./src/app/schools/schoolPage/schoolPage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__schoolPage_service__["a" /* SchoolPageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], SchoolPageComponent);
    return SchoolPageComponent;
}());



/***/ }),

/***/ "./src/app/schools/schools-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schools_component__ = __webpack_require__("./src/app/schools/schools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schoolPage_schoolPage_component__ = __webpack_require__("./src/app/schools/schoolPage/schoolPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schoolLocation_schoolLocation_component__ = __webpack_require__("./src/app/schools/schoolLocation/schoolLocation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__schools_component__["a" /* SchoolsComponent */], pathMatch: 'full' },
    { path: 'school/:schoolId', component: __WEBPACK_IMPORTED_MODULE_3__schoolPage_schoolPage_component__["a" /* SchoolPageComponent */] },
    { path: 'location/:location', component: __WEBPACK_IMPORTED_MODULE_4__schoolLocation_schoolLocation_component__["a" /* SchoolLocationComponent */] }
];
var SchoolsRoutingModule = /** @class */ (function () {
    function SchoolsRoutingModule() {
    }
    SchoolsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SchoolsRoutingModule);
    return SchoolsRoutingModule;
}());



/***/ }),

/***/ "./src/app/schools/schools.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n/* SchoolsComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.schools {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.schools li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.schools li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.schools li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.schools .text {\n    position: relative;\n    top: -3px;\n}\n.schools .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n.column {\n    float: left;\n    padding: 10px;\n}\n.left {\n    width: 15%;\n    border-radius: 5px;\n}\n.right {\n    width: 85%;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.certificatesbox {\n    padding-top: 20px;\n}\n.schoolsort {\n    padding-left: 20px;\n    padding-bottom: 30 px;\n}\n.allschools {\n    padding-top: 20px;\n}\na:link {\n    text-decoration: none;\n    color: darkslategrey;\n}\na:visited {\n    text-decoration: none;\n}\na:hover {\n    text-decoration: underline;\n    color: dodgerblue;\n}\na:active {\n    text-decoration: underline;\n}\nfieldset,\nlabel {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 20px;\n}\nh1 {\n    font-size: 1.5em;\n    margin: 10px;\n}\n.trip-guide-meta .rating-item {\n    margin-top: -5px;\n}\n.user-item-01 .rating-item .fa {\n    color: #FFF;\n}\n.detail-header .rating-item {\n    padding-right: 30px;\n    position: relative;\n}\n.detail-header .rating-item:before {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.detail-header .rating-item:after {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.detail-header .rating-text {\n    margin-top: 2px;\n}\n.detail-header .rating-item .rating-symbol {\n    margin-right: 0;\n    margin-left: 5px;\n}\n.detail-header-02 .rating-item {\n    margin-top: 7px;\n}\n.detail-header-02 .rating-item .rating-text {\n    display: inline-block;\n}\n.detail-header-02 .meta-list li .rating-item {\n    margin-top: 0;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 1rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}\n.starsContainer {\n    padding-left: 20px;\n}"

/***/ }),

/***/ "./src/app/schools/schools.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"tim-title\">\n            <h3>ALL SCHOOLS</h3>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"column left\" style=\"background-color:#BDEDFF;\">\n            <h3>Filters</h3>\n            <input type=\"text\" class=\"filterinput\" placeholder=\"Enter a school name\" [(ngModel)]=\"term\" align=\"center\" width=\"10\">\n\n\n\n            <div class=\"certificatesbox\">\n\n                <!-- Heading Title -->\n                <h5 class=\"app-heading\">certificates:</h5>\n\n                <!-- Search Field -->\n                <div>\n                    <div class=\"filter-wrap\">\n                        <input [(ngModel)]=\"searchText\" placeholder=\"Filter certificates\" class=\"filterinput\">\n                        <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\n                    </div>\n                </div>\n\n                <!-- Clear Link -->\n                <div class=\"text-danger\" title=\"Click to Clear Selections\" (click)=\"clearSelection()\" *ngIf=\"selected_count\">Clear Selection</div>\n\n                <!-- certificates List -->\n\n                <div class=\"form-check\" *ngFor=\"let c of certificates | filter : searchText\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" (change)=\"getSelected()\" type=\"checkbox\" name=\"certificates\" value=\"{{c.id}}\" [(ngModel)]=\"c.selected\" />\n                        <span class=\"form-check-sign\">{{c.name}}</span>\n                    </label>\n                </div>\n\n\n                <!-- Selected certificates-->\n                <div class=\"selected-games-wrap\">\n                    <div class=\"selected-game\" *ngFor=\"let s of selected_certificates\">\n                        <span>{{s.name}} <span class=\"delete-game\" (click)=\"deleteGame(s.id)\" title=\"Click to delete\">X</span></span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"certificatesbox\">\n                <h5 class=\"app-heading\">Locations:</h5>\n                <ul>\n                    <li><a href=\"/schools/location/nearby\">Nearby</a></li>\n                    <li><b><a href=\"/schools/location/Alexandria\" >Alexandria</a></b></li>\n                    <li><b><a href=\"/schools/location/Dokki\" >Dokki</a></b></li>\n                    <li><b><a href=\"/schools/location/Heliopolis\" >Heliopolis</a></b></li>\n                    <li><b><a href=\"/schools/location/Helwan\" >Helwan</a></b></li>\n                    <li><b><a href=\"/schools/location/Hurghada\" >Hurghada</a></b></li>\n                    <li><b><a href=\"/schools/location/Maadi\" >Maadi</a></b></li>\n                    <li><b><a href=\"/schools/location/Nasrcity\" >Nasr City</a></b></li>\n                    <li><b><a href=\"/schools/location/Newcairo\" >New Cairo</a></b></li>\n                    <li><b><a href=\"/schools/location/Zamalek\" >Zamalek</a></b></li>\n                    <li><b><a href=\"/schools/location/October\" >6th October</a></b></li>\n                </ul>\n            </div>\n\n        </div>\n\n        <div class=\"column right\">\n            <div class=\"verticalLine\">\n                <div class=\"schoolsort\">\n                    <div class=\"row\">\n\n                        <div class=\"d-flex\">\n                            <select class=\"selectpicker show-tick form-control\" title=\"sort by\" #sorting>\n\t\t\t\t\t\t\t\t\t<option >Sort by:</option>\n                                    <option value=\"rating\">rating</option>\n                                    <option value=\"alphabet\">A-Z</option>\n\t\t\t\t\t\t\t\t</select>\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"sortingClicked(sorting.value)\"> Go</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"allschools\">\n                    <div class=\"GridLex-grid-noGutter-equalHeight\">\n\n                        <div class=\"GridLex-col-3_sm-4_xs-6_xss-8\" *ngFor=\"let school of (schools |filterPipe: term : selected_certificates)\">\n\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 ml-auto mr-auto\">\n\n                                <div class=\"card\">\n                                    <!--to add the link later-->\n                                    <a href=\"/schools/school/{{school._id}}\">\n                                        <div class=\"card-image\">\n                                            <img *ngIf=\"school.profilePicture\" src=\"../assets/img/gallery/{{school.name}}/0.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:200px;\">\n                                            <img *ngIf=\"!school.profilePicture\" src=\"../assets/img/schoolLogo.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:200px;\">\n\n                                        </div>\n\n                                        <span class=\"label label-primary\" align=\"center\"><h4 align=\"center\">{{school.name}}</h4></span>\n                                        <div class=\"col\" align=\"left\">\n                                            <ng-template #t let-fill=\"fill\">\n                                                <span class=\"star pull-left\" [class.full]=\"fill === 100\">\n                                                    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                                </span>\n\n                                            </ng-template>\n\n                                            <ngb-rating [(rate)]=\"school.average\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/schools/schools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schools_service__ = __webpack_require__("./src/app/schools/schools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolsComponent = /** @class */ (function () {
    function SchoolsComponent(schoolsService, router, activatedRoute, http) {
        this.schoolsService = schoolsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
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
    SchoolsComponent.prototype.ngOnInit = function () {
        this.getSchools();
    };
    SchoolsComponent.prototype.onSelect = function (school) {
        this.selectedSchool = school;
    };
    SchoolsComponent.prototype.getSchools = function () {
        var _this = this;
        this.schoolsService.getSchools(this.sort).subscribe(function (res) {
            _this.schools = res.data;
            console.log(_this.schools);
        }, function (err) {
            console.log(err);
        });
    };
    // Getting Selected Games and Count
    SchoolsComponent.prototype.getSelected = function () {
        this.selected_certificates = this.certificates.filter(function (s) {
            return s.selected;
        });
        this.selected_count = this.selected_certificates.length;
    };
    // Clearing All Selections
    SchoolsComponent.prototype.clearSelection = function () {
        this.searchText = "";
        this.certificates = this.certificates.filter(function (c) {
            c.selected = false;
            return true;
        });
        this.getSelected();
    };
    //Delete Single Listed Game Tag
    SchoolsComponent.prototype.deleteGame = function (id) {
        this.searchText = "";
        this.certificates = this.certificates.filter(function (c) {
            if (c.id == id)
                c.selected = false;
            return true;
        });
        this.getSelected();
    };
    SchoolsComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    SchoolsComponent.prototype.sortingClicked = function (sort) {
        this.sort = sort;
        this.getSchools();
    };
    SchoolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-schools',
            template: __webpack_require__("./src/app/schools/schools.component.html"),
            styles: [__webpack_require__("./src/app/schools/schools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__schools_service__["a" /* SchoolsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SchoolsComponent);
    return SchoolsComponent;
}());



/***/ }),

/***/ "./src/app/schools/schools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsModule", function() { return SchoolsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schools_component__ = __webpack_require__("./src/app/schools/schools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schoolPage_schoolPage_component__ = __webpack_require__("./src/app/schools/schoolPage/schoolPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schoolLocation_schoolLocation_component__ = __webpack_require__("./src/app/schools/schoolLocation/schoolLocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schools_routing_module__ = __webpack_require__("./src/app/schools/schools-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_pipe__ = __webpack_require__("./src/app/schools/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SchoolsModule = /** @class */ (function () {
    function SchoolsModule() {
    }
    SchoolsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__["a" /* Ng2SearchPipeModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_7__schools_routing_module__["a" /* SchoolsRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__schools_component__["a" /* SchoolsComponent */], __WEBPACK_IMPORTED_MODULE_5__schoolPage_schoolPage_component__["a" /* SchoolPageComponent */], __WEBPACK_IMPORTED_MODULE_6__schoolLocation_schoolLocation_component__["a" /* SchoolLocationComponent */], __WEBPACK_IMPORTED_MODULE_10__filter_pipe__["a" /* FilterPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__filter_pipe__["a" /* FilterPipe */]]
            //providers: [UsersService]
        })
    ], SchoolsModule);
    return SchoolsModule;
}());



/***/ })

});
//# sourceMappingURL=schools.module.chunk.js.map