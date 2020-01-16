import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'leaflet-routing-machine';
declare let L;
import { MapService } from '../../providers/map.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trail',
  templateUrl: './trail.page.html',
  styleUrls: ['./trail.page.scss'],
})

export class TrailPage implements OnInit {

  time = 0;
  ShowStartButton = true;
  ShowPause = false;
  ShowEnd = false;
  ShowResume = false;
  continue = true;
  prec_time = 0;
  paused = true;
  sub;

  constructor(
    private mapService : MapService,
    private route : ActivatedRoute,
    private storage: Storage,
    ) {}


  ngOnInit() {

    var object = new Geolocation();

    object.getCurrentPosition().then(async (resp) => {
      var lat=resp.coords.latitude
      var long=resp.coords.longitude

      console.log(lat,long)
      var mymap = L.map('mapid').setView([lat, long], 13);
      var testMap = L.map('mapid1').setView([lat, long], 13);

      var distance = 0;
      var test = 0;

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

      // async function onLocationFound(e) {
      //   var squareDistance = 0;
      //   test += 1;
      //   var radius = e.accuracy / 2;

      //   L.marker(e.latlng).addTo(mymap)
      //     .bindPopup("You are within " + radius + " meters from this point").openPopup();
      //   L.circle(e.latlng, radius).addTo(mymap);

      //   var current_lat = e.latlng.lat + test;
      //   var current_lng = e.latlng.lng + test;

      //   squareDistance = angularMath.powerOfNumber(2,(current_lat-lat))- angularMath.powerOfNumber(2,(current_lng-long))
      //   distance += angularMath.powerOfNumber(0.5,squareDistance); 

      //   console.log("current distance =",distance, "current_lat =", current_lat, "current long = ",current_lng,"square distance = ",squareDistance,"test = ",angularMath.powerOfNumber(0.5,squareDistance));

      //   lat = current_lat;
      //   long = current_lng;
      // }
      //mymap.on('locationfound', onLocationFound)
  


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

      await this.storage.get('distanceCoursePied').then((res) =>{
        target = res;

      });


      this.mapService.tsp(lat,long,target).then((res)=>{
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


  observableTimer = () => {
    const source = timer(1000, 1000);
    this.ShowStartButton = false;
    this.ShowEnd = true;
    this.ShowPause = true;

    if (this.paused == true) {
      this.sub = source.subscribe(val => {
        console.log(val, '-');
        if (this.continue == true) {
          this.time = val + this.prec_time;
        }
      })
    }
  }

  pauseTimer = () => {
    this.ShowPause = false;
    this.ShowResume = true;
    this.continue = false;
    this.prec_time = this.time;
    console.log('prec_time =',this.prec_time);
    this.sub.unsubscribe();
  }

  resumeTimer = () => {
    const source = timer(1000, 1000);
    this.continue = true;
    this.ShowPause = true;
    this.ShowResume = false;
    console.log('bitch');
    this.sub = source.subscribe(val => {
      console.log(val, '-',"prec_time",this.prec_time);
      if (this.continue == true) {
        this.time = val + this.prec_time;
      } 
    })
  }

}
