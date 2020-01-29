function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orientation-orientation-module~pages-orientation-orientation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orientation/orientation.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orientation/orientation.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrientationOrientationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.5.1/dist/leaflet.css\"\n    integrity=\"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==\"\n    crossorigin=\"\"/>\n   <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css\" />\n   <script src=\"https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js\"></script>\n   <script src=\"http://www.liedman.net/lrm-mapbox/dist/lrm-mapbox-1.0.4.js\"></script>\n\n\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"secondary\">Carte</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\" id=\"orientation\"></div>\n  <div id=\"orientation1\"></div>\n</ion-content>\n\n\n\n\n\n<div id=\"button-bottom\">\n  <ion-button class=\"button button-block button-energized\" (click)=\"transition()\">Infos</ion-button>\n</div>\n\n  <ion-row class=\"ion-align-items-stretch\" id=\"footer\">\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card id=\"chrono\">\n        <ion-card-header>\n          <ion-item detail=\"false\" lines=\"none\">\n            Chrono\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <h2>{{time}}</h2>\n            </ion-item>\n            <ion-item>\n              <ion-button (click)=\"observableTimer()\" *ngIf=\"ShowStartButton == true\">Start</ion-button>\n              <ion-button (click)=\"pauseTimer()\" *ngIf=\"ShowPause == true\">Pause</ion-button>\n              <ion-button (click)=\"resumeTimer()\" *ngIf=\"ShowResume == true\">Resume</ion-button>\n            </ion-item>\n\n            <ion-item>\n              <ion-button (click)=\"addOrientationToFirebase()\" *ngIf=\"ShowEnd == true\">Finish</ion-button>\n            </ion-item>\n\n          </ion-list>\n        </ion-card-content>\n\n\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card id=\"chrono\">\n        <ion-card-header>\n          <ion-item detail=\"false\" lines=\"none\">\n            distance\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <h2>{{total_distance}}</h2>\n            </ion-item>\n            <ion-item>\n              <h2>{{pourcentage}}</h2>\n            </ion-item>\n              <ion-button (click)=\"finishTimer()\" *ngIf=\"ShowEnd == true\">Finish</ion-button>\n            <ion-item>\n\n            </ion-item>\n\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col>\n      <ion-card *ngIf=\"received == true\">\n        <ion-card-header>\n          <ion-item detail=\"false\" lines=\"none\">\n            localisations\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item *ngFor=\"let c of coordsButtons;\">\n              <ion-button >{{c}}</ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n";
    /***/
  },

  /***/
  "./src/app/pages/orientation/orientation-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/orientation/orientation-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OrientationPageRoutingModule */

  /***/
  function srcAppPagesOrientationOrientationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrientationPageRoutingModule", function () {
      return OrientationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _orientation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orientation.page */
    "./src/app/pages/orientation/orientation.page.ts");

    var routes = [{
      path: '',
      component: _orientation_page__WEBPACK_IMPORTED_MODULE_3__["OrientationPage"]
    }];

    var OrientationPageRoutingModule = function OrientationPageRoutingModule() {
      _classCallCheck(this, OrientationPageRoutingModule);
    };

    OrientationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrientationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/orientation/orientation.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/orientation/orientation.module.ts ***!
    \*********************************************************/

  /*! exports provided: OrientationPageModule */

  /***/
  function srcAppPagesOrientationOrientationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrientationPageModule", function () {
      return OrientationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _orientation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orientation-routing.module */
    "./src/app/pages/orientation/orientation-routing.module.ts");
    /* harmony import */


    var _orientation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orientation.page */
    "./src/app/pages/orientation/orientation.page.ts");

    var OrientationPageModule = function OrientationPageModule() {
      _classCallCheck(this, OrientationPageModule);
    };

    OrientationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orientation_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrientationPageRoutingModule"]],
      declarations: [_orientation_page__WEBPACK_IMPORTED_MODULE_6__["OrientationPage"]]
    })], OrientationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/orientation/orientation.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/orientation/orientation.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrientationOrientationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 1;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n  z-index: 10;\n}\n\n.show-map {\n  opacity: 1;\n}\n\n.utils {\n  position: absolute;\n  right: 80%;\n  color: white;\n  z-index: 40;\n}\n\n.chrono {\n  position: absolute;\n  bottom: 10%;\n  opacity: 1;\n}\n\n.button {\n  position: absolute;\n}\n\n#footer {\n  position: absolute;\n  height: 0%;\n  width: 50%;\n  bottom: 0%;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: transparent;\n  opacity: 1;\n  z-index: 30;\n}\n\n#button-bottom {\n  position: absolute;\n  bottom: 10%;\n  right: 50%;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkZWpvbmdoZS9jbG9uZVN0YWJsZS9vc3JtL25ld190ZW1wbGF0ZV9wcm9yaWVudGF0aW9uL3NyYy9hcHAvcGFnZXMvb3JpZW50YXRpb24vb3JpZW50YXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmllbnRhdGlvbi9vcmllbnRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNFLFVBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0hKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDRCx5QkFBQTtVQUFBLG1CQUFBO0VBRUMsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yaWVudGF0aW9uL29yaWVudGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLnNob3ctbWFwIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLnV0aWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDgwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogNDA7XG5cbiAgfVxuXG4gIC5jaHJvbm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIH1cblxuICAjZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvdHRvbTowJTtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OjE7XG4gICAgei1pbmRleDogMzA7XG4gIH1cblxuICAjYnV0dG9uLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbToxMCU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB6LWluZGV4OiAyMDtcbiAgfVxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udXRpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNDA7XG59XG5cbi5jaHJvbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDAlO1xuICB3aWR0aDogNTAlO1xuICBib3R0b206IDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMzA7XG59XG5cbiNidXR0b24tYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgei1pbmRleDogMjA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/orientation/orientation.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/orientation/orientation.page.ts ***!
    \*******************************************************/

  /*! exports provided: OrientationPage */

  /***/
  function srcAppPagesOrientationOrientationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrientationPage", function () {
      return OrientationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet-routing-machine */
    "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _providers_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/map.service */
    "./src/app/providers/map.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/pages/services/authentication.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var OrientationPage =
    /*#__PURE__*/
    function () {
      function OrientationPage(mapService, route, connectedService, afs, router, storage) {
        var _this = this;

        _classCallCheck(this, OrientationPage);

        this.mapService = mapService;
        this.route = route;
        this.connectedService = connectedService;
        this.afs = afs;
        this.router = router;
        this.storage = storage;
        this.coordsValidated = new Array();
        this.coordsButtons = new Array();
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
        this.received = false;

        this.transition = function () {
          var run_info = document.getElementById('footer');
          var button_bottom = document.getElementById('button-bottom');

          if (_this.showInfos) {
            run_info.style.height = '30%';
            button_bottom.style.bottom = '35%';
            _this.showInfos = false;
          } else {
            run_info.style.height = '0%';
            button_bottom.style.bottom = '10%';
            _this.showInfos = true;
          }
        };

        this.onLocationFound = function (e) {
          var getdistance = _this.getDistance(e).then(function (res) {
            _this.total_distance = _this.total_distance + res[0];

            if (res[0] == 0) {} else {
              _this.lat = getdistance[1];
              _this.long = getdistance[2];
            }
          });
        };

        this.getDistance = function (e) {
          return new Promise(function (resolve, reject) {
            var lat = 0;
            var long = 0;
            var new_pos = e.latlng;
            var url = 'http://51.77.212.33:8080/route/v1/foot/' + new_pos.lng + ',' + new_pos.lat + ';' + _this.long + ',' + _this.lat;
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
                    } else {
                      lat = 0;
                      long = 0;
                    }

                    resolve([new_distance, lat, long]);
                  } else {
                    reject("echec");
                  }
                };
              }
            });
          });
        };

        this.observableTimer = function () {
          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1000, 1000);
          _this.ShowStartButton = false;
          _this.ShowEnd = true;
          _this.ShowPause = true;

          if (_this.paused == true) {
            _this.sub = source.subscribe(function (val) {
              console.log(val, '-');

              if (_this.continue == true) {
                _this.time = val + _this.prec_time;
              }
            });
          }
        };

        this.pauseTimer = function () {
          _this.ShowPause = false;
          _this.ShowResume = true;
          _this.continue = false;
          _this.prec_time = _this.time;

          _this.sub.unsubscribe();
        };

        this.resumeTimer = function () {
          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1000, 1000);
          _this.continue = true;
          _this.ShowPause = true;
          _this.ShowResume = false;
          _this.sub = source.subscribe(function (val) {
            if (_this.continue == true) {
              _this.time = val + _this.prec_time;
            }
          });
        };

        this.route.params.subscribe(function (params) {
          console.log(params);
        });
      }

      _createClass(OrientationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var object = new _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]();
          object.getCurrentPosition().then(function (resp) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var lat, long, mymap, testMap, watch, target, tickedInterest;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      lat = resp.coords.latitude;
                      long = resp.coords.longitude;
                      console.log(lat, long);
                      mymap = L.map('orientation').setView([lat, long], 13);
                      testMap = L.map('orientation1').setView([lat, long], 13);
                      mymap.locate({
                        watch: true
                      });
                      testMap.locate({
                        watch: true
                      });
                      watch = object.watchPosition();
                      watch.subscribe(function (data) {
                        var marker = L.marker([lat, long]).addTo(mymap);
                      });
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
                      target = 1;
                      _context.next = 14;
                      return this.storage.get('distanceCoursePied').then(function (res) {
                        target = res;
                      });

                    case 14:
                      tickedInterest = new Array();
                      _context.next = 17;
                      return this.storage.get('tickedInterest').then(function (res) {
                        tickedInterest = res;
                      });

                    case 17:
                      this.mapService.tsp(lat, long, target, tickedInterest).then(function (res) {
                        console.log("res");
                        console.log(res);
                        var order = res[0];
                        var eliminatedNodes = res[1];
                        var arrayCoords = res[2];
                        var options = {
                          profile: 'mapbox/walking'
                        };
                        var pointsWay = [];

                        var coordConservedNodes = _this3.mapService.zeros([order.length - 1, 2]);

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

                        console.log("coordConservedNodes");
                        console.log(coordConservedNodes);

                        for (i = 0; i < coordConservedNodes.length; i++) {
                          var local = new Array();
                          local.push(0);
                          local.push(0);

                          _this3.coordsValidated.push(local);

                          _this3.coordsButtons.push("localisation" + (i + 1).toString());

                          var marker = L.marker([coordConservedNodes[i][1], coordConservedNodes[i][0]]).addTo(mymap);
                          marker.bindPopup((i + 1).toString()).openPopup();
                        }

                        _this3.received = true;
                      });

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }).catch(function (error) {
            console.log('Error getting location', error);
          });
        }
      }, {
        key: "addOrientationToFirebase",
        value: function addOrientationToFirebase() {
          var new_date = new Date();
          var new_date_str = new_date.getFullYear() + '-' + new_date.getMonth() + '-' + new_date.getDate();
          this.connected = this.connectedService.userDetails();

          if (this.connected != null && this.connected != undefined) {
            this.afs.collection('/seances').add({
              distance: this.total_distance,
              id_user: this.connected.uid,
              time: this.time.toString(),
              type: "orientation",
              date: new_date_str
            });
          }

          this.router.navigateByUrl('/app/tabs/Personal');
        }
      }]);

      return OrientationPage;
    }();

    OrientationPage.ctorParameters = function () {
      return [{
        type: _providers_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticateService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }];
    };

    OrientationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'orientation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orientation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orientation/orientation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orientation.page.scss */
      "./src/app/pages/orientation/orientation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticateService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], OrientationPage);
    /***/
  }
}]);
//# sourceMappingURL=default~orientation-orientation-module~pages-orientation-orientation-module-es5.js.map