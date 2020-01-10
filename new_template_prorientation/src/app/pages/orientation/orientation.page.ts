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
  selector: 'orientation',
  templateUrl: './orientation.page.html',
  styleUrls: ['./orientation.page.scss'],
})
export class OrientationPage implements OnInit {

  constructor(
    private mapService : MapService,
    private route : ActivatedRoute,
    private storage: Storage
    ) {
      this.route.params.subscribe((params)=> {
        console.log(params);
      })
    }

    ngOnInit() {

      var object = new Geolocation();
      object.getCurrentPosition().then(async (resp) => {
        var lat=resp.coords.latitude
        var long=resp.coords.longitude

        console.log(lat,long)
        var mymap = L.map('mapid2').setView([lat, long], 13);
        var testMap = L.map('mapid12').setView([lat, long], 13);

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
            var marker = L.marker([coordConservedNodes[i][1], coordConservedNodes[i][0]]).addTo(mymap);
          }
        });

      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }


}
