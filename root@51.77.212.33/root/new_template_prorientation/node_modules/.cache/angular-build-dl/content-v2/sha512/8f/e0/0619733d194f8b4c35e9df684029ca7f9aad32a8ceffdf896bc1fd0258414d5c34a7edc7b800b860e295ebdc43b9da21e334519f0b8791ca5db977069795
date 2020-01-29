(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orientation-orientation-module"],{

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
//# sourceMappingURL=pages-orientation-orientation-module-es2015.js.map