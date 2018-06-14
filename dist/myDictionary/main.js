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

module.exports = ".header{\n    background-color: #04192E;\n    display: block;\n    padding: 2%;\n    color:white;\n    font-size: 26px;\n    margin-bottom: 0%;\n    margin-top: 0%;\n}\n\n.myUL {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\n\n.myUL li a {\n    border: 1px solid #ddd;\n    margin-top: -1px; /* Prevent double borders */\n    background-color: #f6f6f6;\n    padding: 6px;\n    text-decoration: none;\n    font-size: 18px;\n    color: black;\n    display: block;\n    cursor: pointer;\n  }\n\n.header1{\n    margin-top: 2%;\n    margin-bottom: 0%;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n    <div class=\"container-fluid header\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <a style=\"color:white;\">My Dicitionary Application</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <form #searchForm=\"ngForm\" autocomplete=\"off\">\n                    <div >\n                        <input  type=\"text\" name=\"WordDescription\" (input)=\"showSuggestion()\"\n                         [(ngModel)]=\"WordDescription\" #title=\"ngModel\" class=\"form-control\"\n                            placeholder=\"Search word...\" required>\n\n                        <div *ngIf=\"suggestionArray.length>0\">\n                            <ul  class=\"myUL\">\n                                <li (click)=\"selectValue(items)\" *ngFor=\"let items of suggestionArray\">\n                                    <a>{{items}}</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n\n                </form>\n            </div>\n            <div class=\"col-md-2\">\n                <button type=\"submit\" class=\"btn btn-default\"  (click)=\"wordSearch()\">Search</button>\n            </div>\n        </div>\n\n       \n    </div>\n</div>\n\n\n\n    <div *ngIf=\"word\">\n        <app-search [Sentence]=\"result\" [word]=\"word\"  ></app-search>\n    </div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word.service */ "./src/app/word.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(wordsService, _route, router) {
        this.wordsService = wordsService;
        this._route = _route;
        this.router = router;
        this.currentWord = [];
        this.word = [];
        this.suggestionArray = [];
        this.currentWord1 = [];
        this.synonimsWord = [];
        this.antonimsWord = [];
    }
    AppComponent.prototype.ngOnit = function () {
    };
    AppComponent.prototype.wordSearch = function () {
        this.wordSearch1();
        this.wordSearch2();
        this.wordSearch3();
        this.wordSearch4();
        this.suggestionArray = [];
        this.result = {};
        this.word = [];
    };
    AppComponent.prototype.wordSearch1 = function () {
        var _this = this;
        var word_id = this.WordDescription;
        this.wordsService.searchWord1(word_id).subscribe(function (data) {
            _this.currentWord = data.results[0];
            _this.word = _this.currentWord.word;
            // console.log(this.word);
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.wordSearch2 = function () {
        var _this = this;
        var word_id = this.WordDescription;
        this.wordsService.searchWord2(word_id).subscribe(function (data) {
            _this.currentWord1 = data.results[0].lexicalEntries[0].sentences;
            _this.result['sentence'] = _this.currentWord1;
            //  console.log(this.currentWord1);
            setTimeout(function () {
                _this.router.navigate(['/search']);
            }, 1000);
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.wordSearch3 = function () {
        var _this = this;
        var word_id = this.WordDescription;
        this.wordsService.searchWord3(word_id).subscribe(function (data) {
            _this.synonimsWord = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;
            _this.result['synonym'] = _this.synonimsWord;
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.wordSearch4 = function () {
        var _this = this;
        var word_id = this.WordDescription;
        this.wordsService.searchWord4(word_id).subscribe(function (data) {
            _this.antonimsWord = data.results[0].lexicalEntries[0].entries[0].senses[0].antonyms;
            //  console.log(this.antonimsWord);
            _this.result['antonym'] = _this.antonimsWord;
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.showSuggestion = function () {
        var _this = this;
        if (this.WordDescription.length >= 3) {
            this.wordsService.searchWord1(this.WordDescription).subscribe(function (data) {
                _this.suggestionArray.length = 0;
                if (data.results) {
                    data.results.map(function (item) {
                        _this.suggestionArray.push(item.word);
                    });
                }
                // console.log(this.suggestionArray,123)
            }, function (error) {
                console.log(error);
            });
        }
        else
            this.suggestionArray.length = 0;
    };
    AppComponent.prototype.selectValue = function (value) {
        this.WordDescription = value;
        this.suggestionArray = [];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./word.service */ "./src/app/word.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
                    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
                ]),
            ],
            providers: [_word_service__WEBPACK_IMPORTED_MODULE_6__["WordService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n\n <div class=\"row\" *ngIf=\"word\">\n        <div class=\"col-lg-12 col-sm-12 col-md-12\">\n            <table class=\"table table-striped table-dark\" style=\"width: 100%\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Sentences</th>\n                        <th scope=\"col\">Synonyms</th>\n                        <th scope=\"col\">Antonyms</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr style=\"height: auto\">\n                        <td style=\"width: 50%\">\n                            <tr *ngFor=\"let sentence of result.sentence\">{{ sentence.text }}</tr>\n                        </td>\n                        <td style=\"width: 25%\">\n                            <tr *ngFor=\"let synonym of result.synonym\">{{ synonym.text }}</tr>\n                        </td>\n                        <td style=\"width: 25%\">\n                            <tr *ngFor=\"let antonym of result.antonym\">{{ antonym.text }}</tr>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.Sentence = [];
        this.word = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.result = this.Sentence;
    };
    SearchComponent.prototype.ngOnChanges = function () {
        this.result = this.Sentence;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "Sentence", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "word", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/word.service.ts":
/*!*********************************!*\
  !*** ./src/app/word.service.ts ***!
  \*********************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
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



// import {map} from 'rxjs/operators';
var WordService = /** @class */ (function () {
    function WordService(_http) {
        this._http = _http;
        this.app_id = '1e166b52';
        this.app_key = 'd9d6caa8dd39cadd9c001ed14e71a3a9';
        this.baseurl = 'https://od-api.oxforddictionaries.com:443';
    }
    WordService.prototype.searchWord1 = function (word_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json')
            .set('app_id', this.app_id)
            .set('app_key', this.app_key);
        var word = this._http.get(this.baseurl + '/api/v1/search/en/translations=es?q=' + word_id.toLowerCase() + '&prefix=false', { headers: headers });
        return word;
    };
    WordService.prototype.searchWord2 = function (word_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json')
            .set('app_id', this.app_id)
            .set('app_key', this.app_key);
        var sentences = this._http.get(this.baseurl + '/api/v1/entries/en/' + word_id.toLowerCase() + '/sentences', { headers: headers });
        return sentences;
    };
    WordService.prototype.searchWord3 = function (word_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json')
            .set('app_id', this.app_id)
            .set('app_key', this.app_key);
        var synonyms = this._http.get(this.baseurl + '/api/v1/entries/en/' + word_id.toLowerCase() + '/synonyms', { headers: headers });
        return synonyms;
    };
    WordService.prototype.searchWord4 = function (word_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json')
            .set('app_id', this.app_id)
            .set('app_key', this.app_key);
        var antonyms = this._http.get(this.baseurl + '/api/v1/entries/en/' + word_id.toLowerCase() + '/antonyms', { headers: headers });
        return antonyms;
    };
    WordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WordService);
    return WordService;
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

module.exports = __webpack_require__(/*! /home/mwf33/Documents/Prem_frontend/Project/project_1/myDictionary/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map