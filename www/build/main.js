webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_events_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var moment = __WEBPACK_IMPORTED_MODULE_3_moment__;
var EventsList = (function () {
    function EventsList(eventsService, navCtrl, navParams) {
        this.eventsService = eventsService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allEvents = [];
        this.filteredEvents = [];
        this.filteredEventsDic = {};
        this.searchText = null;
        this.loading = false;
        this.showErrorMsg = false;
        this.showNoDataMsg = false;
        this.categories = ["Today", "This Week", "Other"];
    }
    EventsList.prototype.ngOnInit = function () {
        this.getAllEvents();
    };
    EventsList.prototype.getAllEvents = function () {
        var _this = this;
        this.loading = true;
        this.eventsService.getAllEvents().subscribe(function (result) {
            result.forEach(function (event) {
                var members = event.members;
                var momentObj = moment(event.dateTime, 'dd-MM-yyyy HH:mm:SS');
                var eventDate = Date.parse(momentObj.toString());
                var category = _this.getEventCategory(momentObj);
                _this.allEvents.push({ Title: event.title, Date: eventDate, ImageURL: event.image,
                    ID: event.id, IsGoing: event.status == 'going', Description: event.description,
                    IsIgnored: event.status == 'ignore', Members: members, Category: category
                });
            });
            _this.filteredEvents = _this.deepCopy(_this.allEvents);
            _this.fillEventsDictionary();
            _this.loading = false;
        }, function (error) {
            _this.showErrorMsg = true;
        });
    };
    EventsList.prototype.getEventCategory = function (eventDateTime) {
        var eventDateObj = eventDateTime.toDate();
        var eventDateNum = Date.parse(eventDateTime.toString());
        var todayDate = new Date();
        var weekStartDate = Date.parse(moment(new Date()).add(-todayDate.getDay(), 'days').toString());
        var weekEndDate = Date.parse(moment(new Date()).add(7 - todayDate.getDay(), 'days').toString());
        if (eventDateObj.getDate() == todayDate.getDate() && eventDateObj.getMonth() == todayDate.getMonth() && eventDateObj.getFullYear() == todayDate.getFullYear())
            return 'Today';
        else if (eventDateNum < weekEndDate && eventDateNum > weekStartDate)
            return 'Week';
        else
            return 'Other';
    };
    EventsList.prototype.filter = function ($event) {
        var _this = this;
        this.showNoDataMsg = false;
        if (this.allEvents.length > 0) {
            if (this.searchText.length > 0) {
                this.filteredEvents = this.allEvents.filter(function (event) { return event.Title.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1; });
                this.showNoDataMsg = this.filteredEvents.length == 0;
            }
            else {
                this.filteredEvents = this.deepCopy(this.allEvents);
            }
        }
        else
            this.filteredEvents = [];
        this.fillEventsDictionary();
    };
    EventsList.prototype.fillEventsDictionary = function () {
        var _this = this;
        this.filteredEventsDic = {};
        this.categories.forEach(function (category) {
            _this.filteredEventsDic[category] = _this.filteredEvents.filter(function (e) { return e.Category == category; });
        });
    };
    EventsList.prototype.onCancel = function ($event) {
        this.filteredEvents = this.deepCopy(this.allEvents);
    };
    EventsList.prototype.deepCopy = function (oldObj) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    };
    EventsList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'events-list',template:/*ion-inline-start:"M:\eventApp\src\pages\events-list\events-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchText" [showCancelButton]="true" (ionInput)="filter($event)" placeholder="Search event"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n<div class="alert-warning" *ngIf="showNoDataMsg">No Events with this name</div>\n<div class="alert-error" *ngIf="showErrorMsg">Oops! Something went wrong</div>\n<div *ngIf="!showNoDataMsg && !loading && !showErrorMsg">\n  <ion-list *ngFor="let category of categories">\n    <h2>{{category}}</h2>\n    <div *ngIf="filteredEventsDic[category]?.length>0">\n      <ion-item *ngFor="let item of filteredEventsDic[category]">\n        <event-item [event]="item"></event-item>\n      </ion-item>\n    </div>\n    <span class="noEvents" *ngIf="filteredEventsDic[category]?.length==0">There is No Events on {{category}}</span>\n  </ion-list>\n</div> \n\n</ion-content>'/*ion-inline-end:"M:\eventApp\src\pages\events-list\events-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], EventsList);
    return EventsList;
    var _a, _b, _c;
}());

//# sourceMappingURL=events-list.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
    }
    EventsService.prototype.getAllEvents = function () {
        return this.http.get("https://tsh-app.firebaseio.com/events.json").map(function (response) {
            return response.json();
        });
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], EventsService);
    return EventsService;
}());

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventDetails = (function () {
    function EventDetails(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedEvent = navParams.get('eventItem');
        this.staticDetails = "Come and join us this summer, cycling by tree-lined canals and atop the the dykes, exploring the pretty villages of the Dutch countryside as we make our way to the bright lights of Amsterdam - and beyond! This hostel-based cycling holiday will introduce you to the beautiful and lesser-known landscapes of the Netherlands as we visit the beaches, the castles, the historic cities and the nature reserves of what is famously known as a paradise for cycling.";
        this.navCtrl.swipeBackEnabled = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], EventDetails.prototype, "navBar", void 0);
    EventDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'event-details',template:/*ion-inline-start:"M:\eventApp\src\pages\event-details\event-details.html"*/'\n<ion-header>\n    <ion-navbar hideBackButton="false"></ion-navbar>>\n</ion-header>\n<ion-content>\n  <ion-card>\n\n    <img [src]="selectedEvent?.ImageURL" />\n    <ion-card-content class="single">\n      <div class="eventTitle">\n        <ion-card-title>\n          <h1 class="eventTitle__Heading">{{selectedEvent.Title}}</h1>\n        </ion-card-title>\n        <p class="eventTitle__Description">\n          {{selectedEvent.Description}}\n        </p>\n      </div>\n      <div class="eventinfo">\n        <ion-icon name="time" class="EventInfo__Icons">\n          <span>{{selectedEvent.Date | date: \'EEEE MMM,d\'}} From {{selectedEvent.Date | date: \'h\'}} {{(selectedEvent.Date | date:\n            \'h\') >12 ?"PM":"AM"}} - 11 PM</span>\n        </ion-icon>\n        <ion-icon name="pin" class="EventInfo__Icons">\n          <span>The Pool. The Student Hotel Amsterdam City</span>\n        </ion-icon>\n        <ion-icon name="speedometer" class="EventInfo__Icons">\n          <span>{{selectedEvent.Members.length}} Going </span>\n        </ion-icon>\n\n\n      </div>\n      <div class="eventContent singleEventContent">\n        <ion-item>\n\n          <div class="eventContent__attendance">\n            <span *ngFor="let member of selectedEvent.Members;let i=index;">\n\n              <ion-avatar *ngIf="i<8" class="eventContent__attendance--images">\n                <img [src]="member.photo" />\n              </ion-avatar>\n            </span>\n            <ion-avatar class="eventContent__attendance--text" *ngIf="selectedEvent.Members.length>=8">\n              <span>8+</span>\n            </ion-avatar>\n          </div>\n        </ion-item>\n        <p>{{staticDetails}}</p>\n      </div>\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n    <div class="typePost">\n      <ion-textarea class="typePost__textBox" placeholder="Leave a message.." block></ion-textarea>\n    </div>\n  </ion-card>\n  <div class="post">\n    <ion-card>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img class="post__image" src="https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg">\n        </ion-avatar>\n        <h2 post__title>Lucien Van Geffen\n          <span>Shared a link</span>\n        </h2>\n\n        <ion-icon name="time" class="post__date">14 min ago</ion-icon>\n      </ion-item>\n      <ion-card-content>\n        <p class="post__content">How to ride like a real Dutchie!</p>\n      </ion-card-content>\n      <ion-col>\n        <div class="sharedContent">\n          <img class="sharedContent__image" src="../../assets/imgs/link-image.jpg">\n          <h5 class="sharedContent__heading">the bike instructor\'s guide to cycling</h5>\n          <p class="sharedContent__paragraph">Thankfully, Maxim Hartman aka The Bike Instructor is</p>\n          <a class="sharedContent__link" href="http://www.youtube.com">youtube.com</a>\n        </div>\n      </ion-col>\n      <ion-row>\n        <ion-icon name="thumbs-up" class="post__count--highFive">12</ion-icon>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="thumbs-up" class="post__interactive">High Five</ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="text" class="post__interactive">Comment</ion-icon>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img class="post__image" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg">\n        </ion-avatar>\n        <h2 class="post__title">Lucien Van Geffen</h2>\n        <ion-icon name="time" class="post__date"> 23 min ago</ion-icon>\n      </ion-item>\n      <ion-card-content>\n        <p class="post__content">Is it possible to leave after an hour?I would love to join,but I have another appointment later that evening..</p>\n      </ion-card-content>\n      <ion-row>\n        <ion-icon name="text" class="post__count--comment">1</ion-icon>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <ion-icon name="thumbs-up" class="post__interactive">High Five</ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="text" class="post__interactive">Comment</ion-icon>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"M:\eventApp\src\pages\event-details\event-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventDetails);
    return EventDetails;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_events_list_events_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_list_event_item_event_item_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_details_event_details__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_services_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_events_list_events_list__["a" /* EventsList */],
                __WEBPACK_IMPORTED_MODULE_6__pages_events_list_event_item_event_item_component__["a" /* EventItem */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_details_event_details__["a" /* EventDetails */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__services_services_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_events_list_events_list__["a" /* EventsList */],
                __WEBPACK_IMPORTED_MODULE_6__pages_events_list_event_item_event_item_component__["a" /* EventItem */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_details_event_details__["a" /* EventDetails */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_events_list_events_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_events_list_events_list__["a" /* EventsList */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_2__pages_events_list_events_list__["a" /* EventsList */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"M:\eventApp\src\app\app.html"*/'\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"M:\eventApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bm": 206,
	"./bm.js": 206,
	"./bn": 207,
	"./bn.js": 207,
	"./bo": 208,
	"./bo.js": 208,
	"./br": 209,
	"./br.js": 209,
	"./bs": 210,
	"./bs.js": 210,
	"./ca": 211,
	"./ca.js": 211,
	"./cs": 212,
	"./cs.js": 212,
	"./cv": 213,
	"./cv.js": 213,
	"./cy": 214,
	"./cy.js": 214,
	"./da": 215,
	"./da.js": 215,
	"./de": 216,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 216,
	"./dv": 219,
	"./dv.js": 219,
	"./el": 220,
	"./el.js": 220,
	"./en-au": 221,
	"./en-au.js": 221,
	"./en-ca": 222,
	"./en-ca.js": 222,
	"./en-gb": 223,
	"./en-gb.js": 223,
	"./en-ie": 224,
	"./en-ie.js": 224,
	"./en-il": 225,
	"./en-il.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 228,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es-us": 230,
	"./es-us.js": 230,
	"./es.js": 228,
	"./et": 231,
	"./et.js": 231,
	"./eu": 232,
	"./eu.js": 232,
	"./fa": 233,
	"./fa.js": 233,
	"./fi": 234,
	"./fi.js": 234,
	"./fo": 235,
	"./fo.js": 235,
	"./fr": 236,
	"./fr-ca": 237,
	"./fr-ca.js": 237,
	"./fr-ch": 238,
	"./fr-ch.js": 238,
	"./fr.js": 236,
	"./fy": 239,
	"./fy.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./gu": 243,
	"./gu.js": 243,
	"./he": 244,
	"./he.js": 244,
	"./hi": 245,
	"./hi.js": 245,
	"./hr": 246,
	"./hr.js": 246,
	"./hu": 247,
	"./hu.js": 247,
	"./hy-am": 248,
	"./hy-am.js": 248,
	"./id": 249,
	"./id.js": 249,
	"./is": 250,
	"./is.js": 250,
	"./it": 251,
	"./it.js": 251,
	"./ja": 252,
	"./ja.js": 252,
	"./jv": 253,
	"./jv.js": 253,
	"./ka": 254,
	"./ka.js": 254,
	"./kk": 255,
	"./kk.js": 255,
	"./km": 256,
	"./km.js": 256,
	"./kn": 257,
	"./kn.js": 257,
	"./ko": 258,
	"./ko.js": 258,
	"./ky": 259,
	"./ky.js": 259,
	"./lb": 260,
	"./lb.js": 260,
	"./lo": 261,
	"./lo.js": 261,
	"./lt": 262,
	"./lt.js": 262,
	"./lv": 263,
	"./lv.js": 263,
	"./me": 264,
	"./me.js": 264,
	"./mi": 265,
	"./mi.js": 265,
	"./mk": 266,
	"./mk.js": 266,
	"./ml": 267,
	"./ml.js": 267,
	"./mr": 268,
	"./mr.js": 268,
	"./ms": 269,
	"./ms-my": 270,
	"./ms-my.js": 270,
	"./ms.js": 269,
	"./mt": 271,
	"./mt.js": 271,
	"./my": 272,
	"./my.js": 272,
	"./nb": 273,
	"./nb.js": 273,
	"./ne": 274,
	"./ne.js": 274,
	"./nl": 275,
	"./nl-be": 276,
	"./nl-be.js": 276,
	"./nl.js": 275,
	"./nn": 277,
	"./nn.js": 277,
	"./pa-in": 278,
	"./pa-in.js": 278,
	"./pl": 279,
	"./pl.js": 279,
	"./pt": 280,
	"./pt-br": 281,
	"./pt-br.js": 281,
	"./pt.js": 280,
	"./ro": 282,
	"./ro.js": 282,
	"./ru": 283,
	"./ru.js": 283,
	"./sd": 284,
	"./sd.js": 284,
	"./se": 285,
	"./se.js": 285,
	"./si": 286,
	"./si.js": 286,
	"./sk": 287,
	"./sk.js": 287,
	"./sl": 288,
	"./sl.js": 288,
	"./sq": 289,
	"./sq.js": 289,
	"./sr": 290,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 290,
	"./ss": 292,
	"./ss.js": 292,
	"./sv": 293,
	"./sv.js": 293,
	"./sw": 294,
	"./sw.js": 294,
	"./ta": 295,
	"./ta.js": 295,
	"./te": 296,
	"./te.js": 296,
	"./tet": 297,
	"./tet.js": 297,
	"./tg": 298,
	"./tg.js": 298,
	"./th": 299,
	"./th.js": 299,
	"./tl-ph": 300,
	"./tl-ph.js": 300,
	"./tlh": 301,
	"./tlh.js": 301,
	"./tr": 302,
	"./tr.js": 302,
	"./tzl": 303,
	"./tzl.js": 303,
	"./tzm": 304,
	"./tzm-latn": 305,
	"./tzm-latn.js": 305,
	"./tzm.js": 304,
	"./ug-cn": 306,
	"./ug-cn.js": 306,
	"./uk": 307,
	"./uk.js": 307,
	"./ur": 308,
	"./ur.js": 308,
	"./uz": 309,
	"./uz-latn": 310,
	"./uz-latn.js": 310,
	"./uz.js": 309,
	"./vi": 311,
	"./vi.js": 311,
	"./x-pseudo": 312,
	"./x-pseudo.js": 312,
	"./yo": 313,
	"./yo.js": 313,
	"./zh-cn": 314,
	"./zh-cn.js": 314,
	"./zh-hk": 315,
	"./zh-hk.js": 315,
	"./zh-tw": 316,
	"./zh-tw.js": 316
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 391;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_event_model__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventItem = (function () {
    function EventItem(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.maxNumAvatars = 3;
    }
    EventItem.prototype.eventTapped = function ($event, eventItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_details_event_details__["a" /* EventDetails */], {
            eventItem: eventItem
        });
    };
    EventItem.prototype.toggleIsGoing = function (event) {
        event.IsGoing = !event.IsGoing;
    };
    EventItem.prototype.toggleIsIgnored = function (event) {
        event.IsIgnored = !event.IsIgnored;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_event_model__["a" /* Event */])
    ], EventItem.prototype, "event", void 0);
    EventItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'event-item',template:/*ion-inline-start:"M:\eventApp\src\pages\events-list\event-item\event-item.component.html"*/'<button class="EventImage" (click)="eventTapped($event, event)">\n\n\n\n    <img class="EventImage__image" [src]="event.ImageURL" />\n\n    <div class="EventImage__date">\n\n        <h3> {{event.Date | date: \'d\'}}</h3>\n\n        <h4> {{event.Date | date: \'MMM\'}}</h4>\n\n    </div>\n\n\n\n</button>\n\n\n\n<div class="eventContent">\n\n    <div (click)="eventTapped($event, event)">\n\n        <h5> {{event.Title}}</h5>\n\n        <span class="event-date">\n\n            {{event.Date | date: \'EEEE\'}} from {{event.Date | date: \'h\'}} {{(event.Date | date: \'h\') >12 ?"PM":"AM"}}\n\n        </span>\n\n        <div class="eventContent__attendance">\n\n            <span *ngFor="let member of event.Members;let i=index;">\n\n                <ion-avatar *ngIf="i<3" class="eventContent__attendance--images">\n\n                    <img  [src]="member.photo" />\n\n                </ion-avatar>\n\n            </span>\n\n            <ion-avatar class="eventContent__attendance--text" *ngIf="event.Members.length>=3">\n\n                <span>+{{event.Members.length - 3}} Others</span>\n\n            </ion-avatar>\n\n        </div>\n\n    </div>\n\n    <div class="eventactions">\n\n        <button [class]="event.IsGoing?\'eventactions__button going\':\'eventactions__button\'" (click)="toggleIsGoing(event)" *ngIf="!event.IsIgnored">Going</button>\n\n        <button [class]="event.IsIgnored?\'eventactions__button ignore\':\'eventactions__button\'" (click)="toggleIsIgnored(event)" *ngIf="!event.IsGoing">Ignore</button>\n\n    </div>\n\n\n\n</div>'/*ion-inline-end:"M:\eventApp\src\pages\events-list\event-item\event-item.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventItem);
    return EventItem;
}());

//# sourceMappingURL=event-item.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event.model.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]],
            exports: []
        })
    ], ServicesModule);
    return ServicesModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map