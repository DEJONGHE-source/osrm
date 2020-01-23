import { Component, OnInit } from '@angular/core';
import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'leaflet-routing-machine';
declare let L;
import { mapbox } from 'lrm-mapbox';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private storage: Storage
    ) {
      this.route.params.subscribe((params)=> {
        console.log(params);
      })
    }

  ngOnInit() {

    var object1 = new Geolocation();
    object1.getCurrentPosition().then(async (resp) => {
      var lat=resp.coords.latitude
      var long=resp.coords.longitude
      console.log(lat,long)

      // var container = L.DomUtil.get('mapid1');
      // if (container != null){
      //   console.log("rentre");
      //   container._leaflet_id = null;
      //
      // }
      //
      // var container2 = L.DomUtil.get('mapid11');
      // if (container2 != null){
      //   console.log("rentre1");
      //   container2._leaflet_id = null;
      // }

      var mymap1 = L.map('map').setView([lat, long], 13);
      var maptest1 = L.map('map1').setView([lat, long], 13);

      mymap1.locate({
        watch:true,

      });
 
      maptest1.locate({
        watch:true,

      });

      let watch = object1.watchPosition();
      watch.subscribe((data) => {
        var marker = L.marker([lat, long]).addTo(mymap1);
      });

      var jsonInterest = null;
      var tickedInterest = null;

      this.storage.get('jsonInterest').then((res) =>{
        jsonInterest = res;

      });

      this.storage.get('tickedInterest').then((res) =>{
        tickedInterest = res;
      });
      if(tickedInterest != null){
        console.log("ajajja")
        for (let pas = 0; pas < tickedInterest.length; pas++) {
          if(tickedInterest[pas]=="true"){
                var marker = L.marker([jsonInterest[pas][0], jsonInterest[pas][1]]).addTo(mymap1);
          }

        }
      }else{
        console.log("dommage")
      }



      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   	    maxZoom: 18,
   	    id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHVjYXNib3V2YXJlbCIsImEiOiJjazJycHIwbXQwZGs3M25udmltaGg3eTFlIn0.XGIAxbBH8QGE1ZnmHUztMQ'
      }).addTo(mymap1);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   	    maxZoom: 18,
   	    id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHVjYXNib3V2YXJlbCIsImEiOiJjazJycHIwbXQwZGs3M25udmltaGg3eTFlIn0.XGIAxbBH8QGE1ZnmHUztMQ'
      }).addTo(maptest1);

    });
  }
}
