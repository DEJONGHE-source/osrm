import { Component, OnInit } from '@angular/core';
import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'leaflet-routing-machine';
declare let L;
import { mapbox } from 'lrm-mapbox';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(
    private route : ActivatedRoute
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
      var mymap1 = L.map('mapid1').setView([lat, long], 13);
      var maptest1 = L.map('mapid11').setView([lat, long], 13);

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
