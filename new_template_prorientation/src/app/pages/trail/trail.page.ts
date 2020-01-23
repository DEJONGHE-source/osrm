import { Component, OnInit} from '@angular/core';
import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'leaflet-routing-machine';
declare let L;
import { mapbox } from 'lrm-mapbox';
import { MapService } from '../../providers/map.service';
import { cpus } from 'os';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'trail',
  templateUrl: './trail.page.html',
  styleUrls: ['./trail.page.scss'],
})

export class TrailPage implements OnInit {
  constructor(
    private mapService : MapService,
    private route : ActivatedRoute,
    private storage: Storage
    ) {}


  ngOnInit() {

    var object = new Geolocation();
    object.getCurrentPosition().then(async (resp) => {
      var lat=resp.coords.latitude
      var long=resp.coords.longitude

      console.log(lat,long)
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
      var mymap = L.map('trail').setView([lat, long], 13);
      var testMap = L.map('trail1').setView([lat, long], 13);

      mymap.locate({
        watch:true,

      });

      testMap.locate({
        watch:true,

      });

      let watch = object.watchPosition();
      watch.subscribe((data) => {
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

      var target = 1;

      var tickedInterest = new Array();

      await this.storage.get('distanceCoursePied').then((res) =>{
        target = res;

      });

      await this.storage.get('tickedInterest').then((res) =>{
        tickedInterest = res;

      });

      this.mapService.tsp(lat,long,target,tickedInterest).then((res)=>{
        console.log("res");
        console.log(res);
        var order = res[0];
        var eliminatedNodes = res[1];
        var arrayCoords = res[2];


        let options = { profile: 'mapbox/walking' };

        var pointsWay = [];

        var coordConservedNodes = this.mapService.zeros([order.length,2]);

        var i;
        var j;
        var indexNodes = -1;
        for(i=0; i < arrayCoords.length ;i++){
          var bool = 0;
          for(j=0; j < eliminatedNodes.length ;j++){
            if(i == eliminatedNodes[j]){
              bool = 1;
            }
          }
          if(bool == 0){
            indexNodes = indexNodes + 1;
            coordConservedNodes[indexNodes][0] = arrayCoords[i][0]
            coordConservedNodes[indexNodes][1] = arrayCoords[i][1]
          }
        }

        console.log("coordConservedNodes");
        console.log(coordConservedNodes);

        for(i=0; i < coordConservedNodes.length ;i++){
          for(j=0; j < coordConservedNodes.length ;j++){
            if(j == order[i]){
              pointsWay.push(L.latLng(coordConservedNodes[j][1], coordConservedNodes[j][0]))
            }
          }
        }


        console.log("pointsWay")
        console.log(pointsWay)

        var routeControl = L.Routing.control({
          waypoints: pointsWay,

          router: new L.Routing.OSRMv1({serviceUrl: 'http://51.77.212.33:8080/route/v1'}),
          /*router: new L.Routing.mapbox('pk.eyJ1IjoiYWRlam9uZ2hlIiwiYSI6ImNrMzl3eTFmeDAydTYzY21nZ3RoY3MwdTEifQ.vnvS6h87mJWeRuwjiWglrg', options),*/

          routeWhileDragging: true
        }).addTo(mymap);
      });




    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
