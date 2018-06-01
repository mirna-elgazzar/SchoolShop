webpackJsonp(["stationary.module"],{

/***/ "./src/app/stationary/filter.pipe.ts":
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
    FilterPipe.prototype.transform = function (stationery, term, selected_locations) {
        var tempStationery = [];
        if (!stationery)
            return [];
        if ((!term) && (selected_locations.length < 1))
            return stationery;
        else if (selected_locations.length < 1) {
            console.log("filtering using text only");
            term = term.toLowerCase();
            return stationery.filter(function (it) {
                return it.name.toLowerCase().includes(term);
            });
        }
        else {
            //case 2: filter by selected_certificates only:
            console.log("selected locations: ");
            //loop through the input selected_certificates array and concatenate schools having this certficate
            for (var i = 0; i < selected_locations.length; i++) {
                console.log(selected_locations[i].name); //prints selected cerificates correctly
                tempStationery = tempStationery.concat(stationery.filter(function (it) { return it.location.city.includes(selected_locations[i].name); }));
            }
            console.log("Stationery: " + tempStationery.length);
            //case 3: filter by term and certifcates
            if (term) {
                console.log("filtering using text:" + term + " and locations: " + selected_locations);
                tempStationery = tempStationery.filter(function (it) {
                    return it.name.toLowerCase().includes(term);
                });
            }
            return tempStationery;
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

/***/ "./src/app/stationary/stationary-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationaryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationary_component__ = __webpack_require__("./src/app/stationary/stationary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stationaryPage_stationaryPage_component__ = __webpack_require__("./src/app/stationary/stationaryPage/stationaryPage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {StationaryLocationComponent} from './stationaryLocation/stationaryLocation.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__stationary_component__["a" /* StationaryComponent */], pathMatch: 'full' },
    { path: 'location/:location', component: __WEBPACK_IMPORTED_MODULE_2__stationary_component__["a" /* StationaryComponent */] },
    { path: 'stationaryPage/:stationaryId', component: __WEBPACK_IMPORTED_MODULE_3__stationaryPage_stationaryPage_component__["a" /* StationaryPageComponent */] } //stationary/stationaryPage/:stationaryId
    //{ path: 'location/:location', component: StationaryLocationComponent}
];
var StationaryRoutingModule = /** @class */ (function () {
    function StationaryRoutingModule() {
    }
    StationaryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], StationaryRoutingModule);
    return StationaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/stationary/stationary.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n/* SchoolsComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.schools {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.schools li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.schools li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.schools li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.schools .text {\n    position: relative;\n    top: -3px;\n}\n.schools .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n.column {\n    float: left;\n    padding: 10px;\n}\n.left {\n    width: 18%;\n    border-radius: 5px;\n}\n.right {\n    width: 82%;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.certificatesbox {\n    padding-top: 20px;\n}\n.schoolsort {\n    padding-left: 20px;\n    padding-bottom: 30 px;\n}\n.allschools {\n    padding-top: 20px;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 1rem;\n    color: #d3d3d3;\n}\n.starSmall {\n    position: relative;\n    display: inline-block;\n    font-size: 1.5rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}"

/***/ }),

/***/ "./src/app/stationary/stationary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"tim-title\">\n            <h3>{{title}}</h3>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"column left\" style=\"background-color:#BDEDFF;\">\n            <h3>Filters</h3>\n            <input type=\"text\" class=\"filterinput2\" placeholder=\"Enter a stationery name\" [(ngModel)]=\"term\" align=\"center\" width=\"10\">\n\n            <div class=\"certificatesbox\">\n\n\n                <h5 class=\"app-heading\">Locations:</h5>\n\n                <!-- Search Field -->\n                <div>\n                    <div class=\"filter-wrap\">\n                        <input [(ngModel)]=\"searchText\" placeholder=\"Filter locations\" class=\"filterinput\">\n                        <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\n                    </div>\n                </div>\n\n                <!-- Clear Link -->\n                <div class=\"text-danger\" title=\"Click to Clear Selections\" (click)=\"clearSelection()\" *ngIf=\"selected_count\">Clear Selection</div>\n\n                <!-- locations List -->\n\n                <div class=\"form-check\" *ngFor=\"let l of locations | filter : searchText\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" (change)=\"getSelected()\" type=\"checkbox\" name=\"locations\" value=\"{{l.id}}\" [(ngModel)]=\"l.selected\" />\n                        <span class=\"form-check-sign\">{{l.html}}</span>\n                    </label>\n                </div>\n\n\n                <!-- Selected certificates-->\n                <div class=\"selected-games-wrap\">\n                    <div class=\"selected-game\" *ngFor=\"let l of selected_locations\">\n                        <span>{{l.html}} <span class=\"delete-game\" (click)=\"deleteGame(l.id)\" title=\"Click to delete\">X</span></span>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n        <div class=\"column right\">\n            <div class=\"verticalLine\">\n                <div class=\"schoolsort\">\n                    <div class=\"row\">\n\n                        <div class=\"d-flex\">\n                            <select class=\"selectpicker show-tick form-control\" title=\"sort by\" #sorting>\n\t\t\t\t\t\t\t\t\t<option >Sort by:</option>\n                                    <option value=\"rating\">rating</option>\n                                    <option value=\"alphabet\">A-Z</option>\n\t\t\t\t\t\t\t\t</select>\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"updateSortQuery(sorting.value)\"> Go</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"allschools\">\n                    <div class=\"GridLex-grid-noGutter-equalHeight\">\n\n                        <div class=\"GridLex-col-3_sm-4_xs-6_xss-8\" *ngFor=\"let s of (stationary |filterPipe: term : selected_locations)\">\n\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 ml-auto mr-auto\">\n\n                                <div class=\"card\">\n                                    <!--to add the link later-->\n                                    <a href=\"/stationary/stationaryPage/{{s._id}}\">\n                                        <div class=\"card-image\">\n                                            <img src=\"../assets/img/stationery.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\" style=\"width:260px;height:200px;\">\n                                        </div>\n\n                                        <span class=\"label label-primary\" align=\"center\"><h4 align=\"center\">{{s.name}}</h4></span>\n                                        <div class=\"col\" align=\"left\">\n                                            <ng-template #t let-fill=\"fill\">\n                                                <span class=\"star pull-left\" [class.full]=\"fill === 100\">\n                                                    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                                </span>\n\n                                            </ng-template>\n\n                                            <ngb-rating [(rate)]=\"s.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                        </div>\n\n                                    </a>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/stationary/stationary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationary_service__ = __webpack_require__("./src/app/stationary/stationary.service.ts");
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




//import { FilterPipe } from './filter.pipe';
var StationaryComponent = /** @class */ (function () {
    function StationaryComponent(stationaryService, router, activatedRoute, http) {
        this.stationaryService = stationaryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.location = "";
        this.title = "";
        this.pagingIndex = [];
        this.sort = "alphabet";
        this.searchText = "";
        this.selected_count = 0;
        this.selected_locations = [];
        this.locations = [
            {
                html: 'Alexandria',
                name: 'Alexandria',
                id: 1,
                selected: false
            },
            {
                html: 'Dokki',
                name: 'Dokki',
                id: 2,
                selected: false
            },
            {
                html: 'Heliopolis',
                name: 'Heliopolis',
                id: 3,
                selected: false
            },
            {
                html: 'Helwan',
                name: 'Helwan',
                id: 4,
                selected: false
            },
            {
                html: 'Hurghada',
                name: 'Hurghada',
                id: 5,
                selected: false
            },
            {
                html: 'Maadi',
                name: 'Maadi',
                id: 6,
                selected: false
            },
            {
                html: 'Nasr City',
                name: 'Nasrcity',
                id: 7,
                selected: false
            },
            {
                html: 'New cairo',
                name: 'Newcairo',
                id: 8,
                selected: false
            },
            {
                html: 'Zamalek',
                name: 'Zamalek',
                id: 9,
                selected: false
            },
            {
                html: '6th October',
                name: 'October',
                id: 10,
                selected: false
            }
        ];
        this.name = "Angular! v" + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* VERSION */].full;
        this.getSelected();
    }
    StationaryComponent.prototype.ngOnInit = function () {
        this.initialize();
        //this.getStationary();
    };
    StationaryComponent.prototype.onSelect = function (stationary) {
        //this.selectedStationary = stationary;
    };
    StationaryComponent.prototype.initialize = function () {
        this.getQueryParams();
        this.search();
        /*console.log(this.activatedRoute);
        this.activatedRoute.params.subscribe((params: Params) => {
                this.location = params['location'];
                console.log(this.location);
                this.stationaryService.getStationaryLocation(this.location).subscribe(
                        (res: any) => {
                          this.stationary = res.data;
                          this.title = res.msg;
                          console.log(this.stationary);
                          console.log(this.title);
                        },
                        (err: HttpErrorResponse) => {
                          console.log(err);
                        }
                  );
        });*/
    };
    // Getting Selected Games and Count
    StationaryComponent.prototype.getSelected = function () {
        this.selected_locations = this.locations.filter(function (s) {
            return s.selected;
        });
        this.selected_count = this.selected_locations.length;
    };
    // Clearing All Selections
    StationaryComponent.prototype.clearSelection = function () {
        this.searchText = "";
        this.locations = this.locations.filter(function (c) {
            c.selected = false;
            return true;
        });
        this.getSelected();
    };
    StationaryComponent.prototype.deleteGame = function (id) {
        this.searchText = "";
        this.locations = this.locations.filter(function (c) {
            if (c.id == id)
                c.selected = false;
            return true;
        });
        this.getSelected();
    };
    StationaryComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    StationaryComponent.prototype.search = function () {
        var _this = this;
        this.stationaryService.getStationaryLocation(this.searchQuery).subscribe(function (res) {
            _this.stationary = res.data;
            _this.title = res.msg;
            console.log(_this.stationary);
            console.log(_this.title);
        }, function (err) {
            console.log(err);
        });
    };
    StationaryComponent.prototype.getQueryParams = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.location = params['location'];
            _this.searchQuery = "location=" + params['location'];
            _this.searchQuery = _this.searchQuery + "&&sort=" + _this.sort;
            console.log(_this.location);
            console.log(_this.searchQuery);
        });
    };
    StationaryComponent.prototype.updateSortQuery = function (sortValue) {
        this.sort = sortValue;
        this.getQueryParams();
        this.search();
    };
    StationaryComponent.prototype.nextPage = function () {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber + 1 || 1 } });
    };
    StationaryComponent.prototype.previousPage = function () {
        this.router.navigate(['search'], { queryParams: { result: this.searchQuery, page: this.pageNumber - 1 || 1 } });
    };
    StationaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stationary',
            template: __webpack_require__("./src/app/stationary/stationary.component.html"),
            styles: [__webpack_require__("./src/app/stationary/stationary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stationary_service__["a" /* StationaryService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], StationaryComponent);
    return StationaryComponent;
}());



/***/ }),

/***/ "./src/app/stationary/stationary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationaryModule", function() { return StationaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stationary_component__ = __webpack_require__("./src/app/stationary/stationary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stationaryPage_stationaryPage_component__ = __webpack_require__("./src/app/stationary/stationaryPage/stationaryPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stationary_routing_module__ = __webpack_require__("./src/app/stationary/stationary-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__("./src/app/stationary/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { StationaryLocationComponent } from './stationaryLocation/stationaryLocation.component';




var StationaryModule = /** @class */ (function () {
    function StationaryModule() {
    }
    StationaryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__["a" /* Ng2SearchPipeModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__stationary_routing_module__["a" /* StationaryRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_4__stationary_component__["a" /* StationaryComponent */], __WEBPACK_IMPORTED_MODULE_5__stationaryPage_stationaryPage_component__["a" /* StationaryPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */]]
        })
    ], StationaryModule);
    return StationaryModule;
}());



/***/ }),

/***/ "./src/app/stationary/stationaryPage/stationaryPage.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\nfieldset,\nlabel {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 20px;\n}\nh1 {\n    font-size: 1.5em;\n    margin: 10px;\n}\n.trip-guide-meta .rating-item {\n    margin-top: -5px;\n}\n.user-item-01 .rating-item .fa {\n    color: #FFF;\n}\n.detail-header .rating-item {\n    padding-right: 30px;\n    position: relative;\n}\n.detail-header .rating-item:before {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.detail-header .rating-item:after {\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: -60px;\n    width: 90px;\n    height: 1px;\n    background: #FFF;\n    display: block;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.detail-header .rating-text {\n    margin-top: 2px;\n}\n.detail-header .rating-item .rating-symbol {\n    margin-right: 0;\n    margin-left: 5px;\n}\n.detail-header-02 .rating-item {\n    margin-top: 7px;\n}\n.detail-header-02 .rating-item .rating-text {\n    display: inline-block;\n}\n.detail-header-02 .meta-list li .rating-item {\n    margin-top: 0;\n}\n/****** Style Star Rating Widget *****/\n.rating {\n    border: none;\n    float: left;\n}\n.rating>input {\n    display: none;\n}\n.rating>label:before {\n    margin: 5px;\n    font-size: 1.25em;\n    font-family: FontAwesome;\n    display: inline-block;\n    content: \"\\f005\";\n}\n.rating>.half:before {\n    content: \"\\f089\";\n    position: absolute;\n}\n.rating>label {\n    color: #ddd;\n    float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating>input:checked~label,\n\n/* show gold star when clicked */\n\n.rating:not(:checked)>label:hover,\n\n/* hover current star */\n\n.rating:not(:checked)>label:hover~label {\n    color: #FFD700;\n}\n/* hover previous stars in list */\n.rating>input:checked+label:hover,\n\n/* hover current star when changing rating */\n\n.rating>input:checked~label:hover,\n.rating>label:hover~input:checked~label,\n\n/* lighten current selection */\n\n.rating>input:checked~label:hover~label {\n    color: #FFED85;\n}\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nbody {\n    font-family: Arial;\n    margin: 0 auto;\n    /* Center website */\n    max-width: 800px;\n    /* Max width */\n    padding: 20px;\n}\n.heading {\n    font-size: 25px;\n    margin-right: 25px;\n}\n.fa {\n    font-size: 25px;\n}\n.checked {\n    color: orange;\n}\n/* Three column layout */\n.side {\n    float: left;\n    width: 15%;\n    margin-top: 10px;\n}\n.middle {\n    float: left;\n    width: 70%;\n    margin-top: 10px;\n}\n/* Place text to the right */\n.right {\n    text-align: right;\n}\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* The bar container */\n.bar-container {\n    width: 100%;\n    background-color: #f1f1f1;\n    text-align: center;\n    color: white;\n}\n/* Individual bars */\n.bar-5 {\n    height: 18px;\n    background-color: #32c9f6;\n}\n.bar-4 {\n    width: 30%;\n    height: 18px;\n    background-color: #4acff7;\n}\n.bar-3 {\n    width: 40%;\n    height: 18px;\n    background-color: #7bdcf9;\n}\n.bar-2 {\n    width: 10%;\n    height: 18px;\n    background-color: #93e2fa;\n}\n.bar-1 {\n    width: 20%;\n    height: 18px;\n    background-color: #c4effc;\n}\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n@media (max-width: 400px) {\n    .side,\n    .middle {\n        width: 100%;\n    }\n    /* Hide the right column on small screens */\n    .right {\n        display: none;\n    }\n}\n.star {\n    position: relative;\n    display: inline-block;\n    font-size: 2rem;\n    color: #d3d3d3;\n}\n.starSmall {\n    position: relative;\n    display: inline-block;\n    font-size: 1.5rem;\n    color: #d3d3d3;\n}\n.full {\n    color: #f9ad1b;\n}\n.half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #f9ad1b;\n}"

/***/ }),

/***/ "./src/app/stationary/stationaryPage/stationaryPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url(' ../assets/img/suppliesCover.png');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"../assets/img/stationery.jpg\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                </div>\n                <div class=\"name \">\n                    <h2 class=\"title \">{{name}}<br /></h2>\n                    <div *ngIf=\"twitterAvailable || fbAvailable\" class=\"social-line text-center\">\n                        <p>Check us out on social media</p>\n\n                        <a *ngIf=\"fbAvailable\" href=\"{{facebook}}\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n\n                        <a *ngIf=\"twitterAvailable\" href=\"{{twitter}}\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </div>\n                    <ng-template #t let-fill=\"fill\">\n                        <span class=\"star\" [class.full]=\"fill === 100\">\n                            <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                        </span>\n\n                    </ng-template>\n\n                    <ngb-rating [(rate)]=\"averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                    <span>({{numReviews}})</span>\n                </div>\n            </div>\n\n            <div class=\"row \">\n                <div class=\"col-md-6 ml-auto mr-auto text-center \">\n                    <p ng-if=\"aboutUsAvailable\">{{aboutUs}} </p>\n                    <br />\n\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation \">\n                <div class=\"nav-tabs-wrapper \">\n                    <ngb-tabset [justify]=\" 'left' \">\n\n                        <ngb-tab title=\"About us \">\n                            <ng-template ngbTabContent>\n                                <div class=\"row following \" id=\"aboutUs \">\n                                    <div class=\"col-md-6 ml-auto mr-auto \">\n                                        <ul class=\"list-unstyled follows \">\n\n                                            <li *ngIf=\"websiteAvailable\">\n                                                <div class=\"row \">\n                                                    <span class=\"label label-default\">Website</span>\n                                                    <a [ngStyle]=\"{'padding-left':'30px' }\" href=\"{{website}}\" class=\"btn btn-link btn-primary\">{{website}}</a>\n\n                                                </div>\n                                            </li>\n                                            <hr *ngIf=\"websiteAvailable\" />\n\n                                            <li>\n                                                <div class=\"row \">\n                                                    <span class=\"label label-primary\">address</span>\n                                                    <div [ngStyle]=\"{'padding-left':'20px' }\">\n                                                        <i class=\"fa fa-map-marker\"></i>{{address}}\n                                                    </div>\n                                                </div>\n\n                                            </li>\n                                            <div class=\"row\">\n                                                <a [ngStyle]=\"{'padding-left':'80px' }\" href=\"{{googleMapsUrl}}\" class=\"btn btn-link btn-primary\">{{googleMapsUrl}}</a>\n                                            </div>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row \">\n                                                    <span class=\"label label-info\">Phone numbers</span>\n                                                    <div [ngStyle]=\"{'padding-left':'20px' }\">\n                                                        <i *ngIf=\"phoneNumbersAvailable\" class=\"fa fa-phone\"></i> {{phoneNumbers}}\n                                                        <span class=\"mh-5 text-muted\">|</span> {{internationalPhoneNumbers}}\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n\n                                            <li>\n                                                <div class=\"row \" *ngIf=\"contactAvailable\">\n                                                    <span class=\"label label-success\">Contact Us</span>\n                                                </div>\n                                            </li>\n                                            <li ng-if=\"contactAvailable\">\n                                                {{contactUs}}\n                                            </li>\n                                            <hr *ngIf=\"contactAvailable\" />\n\n                                            <li>\n                                                <div class=\"row \">\n                                                    <span class=\"label label-warning\">Opening Hours</span>\n                                                    <div [ngStyle]=\"{'padding-left':'10px' }\">\n                                                        {{openingHours}}\n                                                    </div>\n                                                </div>\n\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\" row\" *ngIf=\"storesAvailable\">\n                                                    <span class=\"label label-danger \">Stores</span>\n                                                    <div [ngStyle]=\"{'padding-left':'30px' }\">\n                                                        {{stores}}\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr *ngIf=\"storesAvailable\" />\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n\n                        <ngb-tab title=\"Reviews \">\n                            <ng-template ngbTabContent>\n                                <div *ngIf=\"reviewsAvailable\" class=\"roww \">\n                                    <span class=\"heading \">User Rating</span>\n\n\n                                    <p>{{averageRating}} average based on {{numReviews}} reviews.</p>\n                                    <hr style=\"border:3px solid #f1f1f1 \">\n\n                                </div>\n\n                                <p *ngIf=\"! reviewsAvailable\">This stationery has no reviews yet</p>\n\n                                <div class=\"row following \" id=\"reviews \">\n                                    <div class=\"col-md-6 ml-auto mr-auto \">\n                                        <ul class=\"list-unstyled follows \" *ngFor=\"let review of reviews; let i=index \">\n                                            <li>\n\n                                                <blockquote class=\"blockquote \">\n                                                    <h6 class=\"pull-left\">{{review.user_name}}</h6>\n\n                                                    <div class=\"row\" [ngStyle]=\"{'padding-left':'30px' }\">\n                                                        <ng-template #t let-fill=\"fill\">\n                                                            <span class=\"starSmall\" [class.full]=\"fill === 100\">\n                                                                 <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n                                                            </span>\n                                                        </ng-template>\n                                                        <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                                                    </div>\n\n                                                    <p class=\"mb-0 \">{{review.comment}}</p>\n\n                                                    <footer>\n                                                        <p class=\"text-muted\"> <cite>{{review.time_string}}</cite></p>\n                                                    </footer>\n\n\n                                                </blockquote>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n\n                    </ngb-tabset>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/stationary/stationaryPage/stationaryPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationaryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationaryPage_service__ = __webpack_require__("./src/app/stationary/stationaryPage/stationaryPage.service.ts");
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





var StationaryPageComponent = /** @class */ (function () {
    function StationaryPageComponent(stationaryService, router, activatedRoute, http) {
        this.stationaryService = stationaryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.encodedStationeryName = "";
        this.name = "";
        this.website = "";
        this.websiteAvailable = false;
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
        this.aboutUs = "";
        this.aboutUsAvailable = false;
        this.stores = "";
        this.storesAvailable = false;
        this.contactUs = "";
        this.contactAvailable = false;
        this.openingHours = "";
        this.hoursAvailable = false;
        this.city = ""; //always available
        this.stationeryId = "";
        this.isFav = false;
        this.reviewsAvailable = false;
        //rating: Number = 0;
        this.averageRating = 0;
        this.numReviews = 0;
        this.loadDone = false;
        //adminLoggedIn = false;
        this.userLoggedIn = false;
        this.noLogIn = false;
    }
    StationaryPageComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    StationaryPageComponent.prototype.initialize = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.stationeryId = params['stationaryId'];
            _this.stationaryService.getStatioaryInfo(_this.stationeryId).subscribe(function (res) {
                console.log(res.data);
                _this.name = res.data.name;
                _this.encodedStationeryName = _this.name.replace(/\s+/g, '_');
                _this.address = res.data.address;
                _this.route = res.data.route;
                _this.city = res.data.city;
                _this.googleMapsUrl = res.data.google_maps_url;
                _this.averageRating = res.data.rating;
                if (res.data.website) {
                    _this.website = res.data.website;
                    _this.websiteAvailable = true;
                }
                if (res.data.email) {
                    _this.email = res.data.email;
                    _this.emailAvailable = true;
                }
                if (res.data.phone_number) {
                    _this.phoneNumbers = res.data.phone_number;
                    _this.phoneNumbersAvailable = true;
                }
                if (res.data.international_phone_number) {
                    _this.internationalPhoneNumbers = res.data.international_phone_number;
                    _this.internationalPhoneNumbersAvailable = true;
                }
                if (res.data.facebook_link) {
                    _this.facebook = res.data.facebook_link;
                    _this.fbAvailable = true;
                }
                if (res.data.twitter_link) {
                    _this.twitter = res.data.twitter_link;
                    _this.twitterAvailable = true;
                }
                if (res.data.instagram_link) {
                    _this.instagram = res.data.instagram_link;
                    _this.instagramAvailable = true;
                }
                if (res.data.about_us) {
                    _this.aboutUs = res.data.about_us;
                    _this.aboutUsAvailable = true;
                }
                if (res.data.opening_hours) {
                    _this.openingHours = res.data.opening_hours;
                    _this.hoursAvailable = true;
                }
                if (res.data.stores) {
                    _this.stores = res.data.stores;
                    _this.storesAvailable = true;
                }
                if (res.data.contact_us) {
                    _this.contactUs = res.data.contact_us;
                    _this.contactAvailable = true;
                }
                _this.stationaryService.getReviews(_this.encodedStationeryName).subscribe(function (res) {
                    _this.reviews = res.data;
                    console.log(res.data);
                    if (res.data.length > 0) {
                        _this.reviewsAvailable = true;
                        _this.stationaryService.getAverage(_this.encodedStationeryName).subscribe(function (res) {
                            _this.averageRating = _this.round(res.data.average, 1);
                            _this.numReviews = res.data.total;
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) {
                    console.log(err);
                });
                if (_this.isLoggedIn()) {
                    /*this.stationaryService.isFavorite(this.stationeryId).subscribe(
          
                    (res: any) => {
                         console.log(res.msg);
                         this.isFav = res.data;
                    },
                    (err: HttpErrorResponse) => {
                        console.log(err);
                    }
                );*/
                }
                _this.loadDone = true;
            }, function (err) {
                console.log(err);
            });
        });
    };
    StationaryPageComponent.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_4_moment__().isBefore(this.getExpiration());
    };
    StationaryPageComponent.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    StationaryPageComponent.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_4_moment__(expiresAt);
    };
    StationaryPageComponent.prototype.round = function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };
    StationaryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stationary-page',
            template: __webpack_require__("./src/app/stationary/stationaryPage/stationaryPage.component.html"),
            styles: [__webpack_require__("./src/app/stationary/stationaryPage/stationaryPage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stationaryPage_service__["a" /* StationaryPageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], StationaryPageComponent);
    return StationaryPageComponent;
}());



/***/ })

});
//# sourceMappingURL=stationary.module.chunk.js.map