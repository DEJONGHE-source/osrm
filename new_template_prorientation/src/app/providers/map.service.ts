import { Injectable } from '@angular/core';
import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'leaflet-routing-machine';
declare let L;
import { mapbox } from 'lrm-mapbox';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
  }

  zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
      array.push(dimensions.length == 1 ? 0 : this.zeros(dimensions.slice(1)));
    }

    return array;
  }

  public tsp = (lat,long,target) => {

    return new Promise(async (resolve,reject) => {

      var urlDistances = 'http://51.91.111.135:8080/';
      var formData = new FormData();
      formData.append('long', long.toString());
      formData.append('lat', lat.toString());
      formData.append('distTarget', target.toString());
      var reqDistances = new XMLHttpRequest();
      reqDistances.responseType = "json";
      reqDistances.open('POST', urlDistances, true);
      reqDistances.send(formData);

      reqDistances.addEventListener('readystatechange', function() {
        if(reqDistances.readyState === XMLHttpRequest.DONE) {
          console.log("distances get ok")
          reqDistances.onload = function () {
            var distancesResponse = reqDistances.response.orders;
            var eliminatedResponse = reqDistances.response.eliminated;
            var coordsResponse = reqDistances.response.arrayCoords;

            var intDistances = []
            var j;
            for(j=0;j < distancesResponse.length ; j++){
              var integer = parseInt(distancesResponse[j], 10);
              intDistances.push(integer)
            }

            var intEliminated = []
            for(j=0;j < eliminatedResponse.length ; j++){
              var integer = parseInt(eliminatedResponse[j], 10);
              intEliminated.push(integer)
            }

            var arrayCoords = new Array();

            j = 0;
            while(j < coordsResponse.length){
              var tu = new Array()
              tu.push(parseFloat(coordsResponse[j]));
              j = j + 1
              tu.push(parseFloat(coordsResponse[j]));
              arrayCoords.push(tu)
              j = j + 1

            }

            console.log("arrayCoords")
            console.log(arrayCoords)

            if(distancesResponse === undefined){
              reject("erreur");
            }else{
              resolve([intDistances,intEliminated,arrayCoords]);
            }
          }
        }
     });
    });
  }
}
