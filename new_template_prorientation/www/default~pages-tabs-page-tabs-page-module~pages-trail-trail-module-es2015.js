(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-tabs-page-tabs-page-module~pages-trail-trail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trail/trail.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trail/trail.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.5.1/dist/leaflet.css\"\n    integrity=\"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==\"\n    crossorigin=\"\"/>\n   <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css\" />\n   <script src=\"https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js\"></script>\n   <script src=\"http://www.liedman.net/lrm-mapbox/dist/lrm-mapbox-1.0.4.js\"></script>\n\n\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"secondary\">Trail</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\" id=\"trail\"></div>\n  <div id=\"trail1\"></div>\n\n</ion-content>\n\n<div id=\"button-bottom\">\n  <ion-button class=\"button button-block button-energized\" (click)=\"transition()\">Infos</ion-button>\n</div>\n\n  <ion-row class=\"ion-align-items-stretch\" id=\"footer\">\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card id=\"chrono\">\n        <ion-card-header>\n          <ion-item detail=\"false\" lines=\"none\">\n            Chrono\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <h2>{{time}}</h2>\n            </ion-item>\n            <ion-item>\n              <ion-button (click)=\"observableTimer()\" *ngIf=\"ShowStartButton == true\">Start</ion-button>\n              <ion-button (click)=\"pauseTimer()\" *ngIf=\"ShowPause == true\">Pause</ion-button>\n              <ion-button (click)=\"resumeTimer()\" *ngIf=\"ShowResume == true\">Resume</ion-button>\n            </ion-item>\n\n            <ion-item>\n              <ion-button (click)=\"addTrailToFirebase()\" *ngIf=\"ShowEnd == true\">Finish</ion-button>\n            </ion-item>\n\n          </ion-list>\n        </ion-card-content>\n\n\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card id=\"chrono\">\n        <ion-card-header>\n          <ion-item detail=\"false\" lines=\"none\">\n            distance\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <h2>{{total_distance}}</h2>\n            </ion-item>\n            <ion-item>\n              <h2>{{pourcentage}}</h2>\n            </ion-item>\n\n          </ion-list>\n        </ion-card-content>\n\n\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n");

/***/ }),

/***/ "./src/app/pages/trail/trail-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/trail/trail-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailPageRoutingModule", function() { return TrailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trail.page */ "./src/app/pages/trail/trail.page.ts");




const routes = [
    {
        path: '',
        component: _trail_page__WEBPACK_IMPORTED_MODULE_3__["TrailPage"]
    }
];
let TrailPageRoutingModule = class TrailPageRoutingModule {
};
TrailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trail/trail.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/trail/trail.module.ts ***!
  \*********************************************/
/*! exports provided: TrailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailPageModule", function() { return TrailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trail-routing.module */ "./src/app/pages/trail/trail-routing.module.ts");
/* harmony import */ var _trail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trail.page */ "./src/app/pages/trail/trail.page.ts");







let TrailPageModule = class TrailPageModule {
};
TrailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrailPageRoutingModule"]
        ],
        declarations: [_trail_page__WEBPACK_IMPORTED_MODULE_6__["TrailPage"]]
    })
], TrailPageModule);



/***/ }),

/***/ "./src/app/pages/trail/trail.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/trail/trail.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 1;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n  z-index: 10;\n}\n\n.show-map {\n  opacity: 0;\n}\n\n.utils {\n  position: absolute;\n  right: 80%;\n  color: white;\n  z-index: 40;\n}\n\n.chrono {\n  position: absolute;\n  bottom: 10%;\n  opacity: 1;\n}\n\n.button {\n  position: absolute;\n}\n\n#footer {\n  position: absolute;\n  height: 0%;\n  width: 50%;\n  bottom: 0%;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: transparent;\n  opacity: 1;\n  z-index: 30;\n}\n\n#button-bottom {\n  position: absolute;\n  bottom: 10%;\n  right: 50%;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkZWpvbmdoZS9jbG9uZVN0YWJsZS9vc3JtL25ld190ZW1wbGF0ZV9wcm9yaWVudGF0aW9uL3NyYy9hcHAvcGFnZXMvdHJhaWwvdHJhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFpbC90cmFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNFLFVBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0hKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDRCx5QkFBQTtVQUFBLG1CQUFBO0VBRUMsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWlsL3RyYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLnNob3ctbWFwIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLnV0aWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDgwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogNDA7XG5cbiAgfVxuXG4gIC5jaHJvbm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIH1cblxuICAjZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvdHRvbTowJTtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OjE7XG4gICAgei1pbmRleDogMzA7XG4gIH1cblxuICAjYnV0dG9uLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbToxMCU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB6LWluZGV4OiAyMDtcbiAgfVxuXG5cbiAgXG4iLCIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi51dGlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA0MDtcbn1cblxuLmNocm9ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJvdHRvbTogMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAzMDtcbn1cblxuI2J1dHRvbi1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICByaWdodDogNTAlO1xuICB6LWluZGV4OiAyMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/trail/trail.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/trail/trail.page.ts ***!
  \*******************************************/
/*! exports provided: TrailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailPage", function() { return TrailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/map.service */ "./src/app/providers/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/pages/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");












let TrailPage = class TrailPage {
    constructor(mapService, route, storage, afs, connectedService, router) {
        this.mapService = mapService;
        this.route = route;
        this.storage = storage;
        this.afs = afs;
        this.connectedService = connectedService;
        this.router = router;
        this.connected = null;
        this.time = 0;
        this.ShowStartButton = true;
        this.ShowPause = false;
        this.ShowEnd = false;
        this.ShowResume = false;
        this.continue = true;
        this.prec_time = 0;
        this.paused = true;
        this.showInfos = true;
        this.total_distance = 0;
        this.lat = 0;
        this.long = 0;
        this.transition = () => {
            var run_info = document.getElementById('footer');
            var button_bottom = document.getElementById('button-bottom');
            if (this.showInfos) {
                run_info.style.height = '30%';
                button_bottom.style.bottom = '35%';
                this.showInfos = false;
            }
            else {
                run_info.style.height = '0%';
                button_bottom.style.bottom = '10%';
                this.showInfos = true;
            }
        };
        this.onLocationFound = (e) => {
            var getdistance = this.getDistance(e).then((res) => {
                this.total_distance = this.total_distance + res[0];
                if (res[0] == 0) {
                }
                else {
                    this.lat = getdistance[1];
                    this.long = getdistance[2];
                }
            });
        };
        this.getDistance = (e) => {
            return new Promise((resolve, reject) => {
                var lat = 0;
                var long = 0;
                var new_pos = e.latlng;
                var url = 'http://51.77.212.33:8080/route/v1/foot/' + new_pos.lng + ',' + new_pos.lat + ';' + this.long + ',' + this.lat;
                var req = new XMLHttpRequest();
                req.responseType = "json";
                req.open('GET', url, true);
                req.send();
                var get_distance = req.addEventListener('readystatechange', function () {
                    if (req.readyState === XMLHttpRequest.DONE) {
                        req.onload = function () {
                            var new_distance = req.response.routes[0].distance;
                            if (new_distance != null) {
                                if (new_distance != 0) {
                                    lat = new_pos.lat;
                                    long = new_pos.lng;
                                }
                                else {
                                    lat = 0;
                                    long = 0;
                                }
                                resolve([10, lat, long]);
                            }
                            else {
                                reject("echec");
                            }
                        };
                    }
                });
            });
        };
        this.observableTimer = () => {
            const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(1000, 1000);
            this.ShowStartButton = false;
            this.ShowEnd = true;
            this.ShowPause = true;
            if (this.paused == true) {
                this.sub = source.subscribe(val => {
                    console.log(val, '-');
                    if (this.continue == true) {
                        this.time = val + this.prec_time;
                    }
                });
            }
        };
        this.pauseTimer = () => {
            this.ShowPause = false;
            this.ShowResume = true;
            this.continue = false;
            this.prec_time = this.time;
            this.sub.unsubscribe();
        };
        this.resumeTimer = () => {
            const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(1000, 1000);
            this.continue = true;
            this.ShowPause = true;
            this.ShowResume = false;
            this.sub = source.subscribe(val => {
                if (this.continue == true) {
                    this.time = val + this.prec_time;
                }
            });
        };
    }
    ngOnInit() {
        var object = new _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]();
        object.getCurrentPosition().then((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            console.log(this.lat, this.long);
            /*var container = L.DomUtil.get('mapid');
            if (container != null){
              console.log("rentre");
              container._leaflet_id = null;
      
            }
      
            var container2 = L.DomUtil.get('mapid1');
            if (container2 != null){
              console.log("rentre1");
              container2._leaflet_id = null;
            }
      */
            var mymap = L.map('trail').setView([this.lat, this.long], 13);
            var testMap = L.map('trail1').setView([this.lat, this.long], 13);
            mymap.locate({
                watch: true,
            });
            testMap.locate({
                watch: true,
            });
            let watch = object.watchPosition();
            watch.subscribe((data) => {
                var marker = L.marker([this.lat, this.long]).addTo(mymap);
            });
            mymap.on('locationfound', this.onLocationFound);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoibHVjYXNib3V2YXJlbCIsImEiOiJjazJycHIwbXQwZGs3M25udmltaGg3eTFlIn0.XGIAxbBH8QGE1ZnmHUztMQ'
            }).addTo(mymap);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoibHVjYXNib3V2YXJlbCIsImEiOiJjazJycHIwbXQwZGs3M25udmltaGg3eTFlIn0.XGIAxbBH8QGE1ZnmHUztMQ'
            }).addTo(testMap);
            var target = 1;
            var tickedInterest = new Array();
            yield this.storage.get('distanceCoursePied').then((res) => {
                target = res;
            });
            yield this.storage.get('tickedInterest').then((res) => {
                tickedInterest = res;
            });
            this.mapService.tsp(this.lat, this.long, target, tickedInterest).then((res) => {
                console.log("res");
                console.log(res);
                var order = res[0];
                var eliminatedNodes = res[1];
                var arrayCoords = res[2];
                let options = { profile: 'mapbox/walking' };
                var pointsWay = [];
                var coordConservedNodes = this.mapService.zeros([order.length, 2]);
                var i;
                var j;
                var indexNodes = -1;
                for (i = 0; i < arrayCoords.length; i++) {
                    var bool = 0;
                    for (j = 0; j < eliminatedNodes.length; j++) {
                        if (i == eliminatedNodes[j]) {
                            bool = 1;
                        }
                    }
                    if (bool == 0) {
                        indexNodes = indexNodes + 1;
                        coordConservedNodes[indexNodes][0] = arrayCoords[i][0];
                        coordConservedNodes[indexNodes][1] = arrayCoords[i][1];
                    }
                }
                for (i = 0; i < coordConservedNodes.length; i++) {
                    for (j = 0; j < coordConservedNodes.length; j++) {
                        if (j == order[i]) {
                            pointsWay.push(L.latLng(coordConservedNodes[j][1], coordConservedNodes[j][0]));
                        }
                    }
                }
                var routeControl = L.Routing.control({
                    waypoints: pointsWay,
                    router: new L.Routing.OSRMv1({ serviceUrl: 'http://51.77.212.33:8080/route/v1' }),
                    /*router: new L.Routing.mapbox('pk.eyJ1IjoiYWRlam9uZ2hlIiwiYSI6ImNrMzl3eTFmeDAydTYzY21nZ3RoY3MwdTEifQ.vnvS6h87mJWeRuwjiWglrg', options),*/
                    routeWhileDragging: true
                }).addTo(mymap);
            });
        })).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addTrailToFirebase() {
        var new_date = new Date();
        var new_date_str = new_date.getFullYear() + '-' + new_date.getMonth() + '-' + new_date.getDate();
        this.connected = this.connectedService.userDetails();
        if (this.connected != null && this.connected != undefined) {
            this.afs.collection('/seances').add({
                distance: this.total_distance,
                id_user: this.connected.uid,
                time: this.time.toString(),
                type: "trail",
                date: new_date_str
            });
        }
        this.router.navigateByUrl('/app/tabs/Personal');
    }
};
TrailPage.ctorParameters = () => [
    { type: _providers_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TrailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trail/trail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trail.page.scss */ "./src/app/pages/trail/trail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], TrailPage);



/***/ }),

/***/ "./src/app/providers/map.service.ts":
/*!******************************************!*\
  !*** ./src/app/providers/map.service.ts ***!
  \******************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_3__);




let MapService = class MapService {
    constructor() {
        this.tsp = (lat, long, target, tickedInterest) => {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var urlDistances = 'http://51.91.111.135:8080/';
                var formData = new FormData();
                formData.append('long', long.toString());
                formData.append('lat', lat.toString());
                formData.append('distTarget', target.toString());
                formData.append('tickedInterest', tickedInterest.toString());
                var reqDistances = new XMLHttpRequest();
                reqDistances.responseType = "json";
                reqDistances.open('POST', urlDistances, true);
                reqDistances.send(formData);
                reqDistances.addEventListener('readystatechange', function () {
                    if (reqDistances.readyState === XMLHttpRequest.DONE) {
                        console.log("distances get ok");
                        reqDistances.onload = function () {
                            var distancesResponse = reqDistances.response.orders;
                            var eliminatedResponse = reqDistances.response.eliminated;
                            var coordsResponse = reqDistances.response.arrayCoords;
                            var intDistances = [];
                            var j;
                            for (j = 0; j < distancesResponse.length; j++) {
                                var integer = parseInt(distancesResponse[j], 10);
                                intDistances.push(integer);
                            }
                            var intEliminated = [];
                            for (j = 0; j < eliminatedResponse.length; j++) {
                                var integer = parseInt(eliminatedResponse[j], 10);
                                intEliminated.push(integer);
                            }
                            var arrayCoords = new Array();
                            j = 0;
                            while (j < coordsResponse.length) {
                                var tu = new Array();
                                tu.push(parseFloat(coordsResponse[j]));
                                j = j + 1;
                                tu.push(parseFloat(coordsResponse[j]));
                                arrayCoords.push(tu);
                                j = j + 1;
                            }
                            console.log("arrayCoords");
                            console.log(arrayCoords);
                            if (distancesResponse === undefined) {
                                reject("erreur");
                            }
                            else {
                                resolve([intDistances, intEliminated, arrayCoords]);
                            }
                        };
                    }
                });
            }));
        };
    }
    zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : this.zeros(dimensions.slice(1)));
        }
        return array;
    }
};
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapService);



/***/ })

}]);
//# sourceMappingURL=default~pages-tabs-page-tabs-page-module~pages-trail-trail-module-es2015.js.map