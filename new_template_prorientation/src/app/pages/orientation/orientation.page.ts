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
import { timer } from 'rxjs';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';

@Component({
  selector: 'orientation',
  templateUrl: './orientation.page.html',
  styleUrls: ['./orientation.page.scss'],
})
export class OrientationPage implements OnInit {

  coordsValidated = new Array()
  coordsButtons = new Array()

  connected=null
  time = 0;
  ShowStartButton = true;
  ShowPause = false;
  ShowEnd = false;
  ShowResume = false;
  continue = true;
  prec_time = 0;
  paused = true;
  sub;
  showInfos = true;
  infos;
  total_distance = 0;
  lat=0;
  long=0;

  constructor(
    private mapService : MapService,
    private route : ActivatedRoute,
    public connectedService : AuthenticateService,
    public afs: AngularFirestore,
    private router: Router,
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
        var mymap = L.map('orientation').setView([lat, long], 13);
        var testMap = L.map('orientation1').setView([lat, long], 13);

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
        var tickedInterest = new Array();
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

          var coordConservedNodes = this.mapService.zeros([order.length - 1,2]);

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

          for(i=0; i < coordConservedNodes.length;i++){
            var local = new Array();
            local.push(0);
            local.push(0);
            this.coordsValidated.push(local);
            this.coordsButtons.push("localisation"+ (i+1).toString())
            var marker = L.marker([coordConservedNodes[i][1], coordConservedNodes[i][0]]).addTo(mymap);
            marker.bindPopup((i+1).toString()).openPopup();
          }
        });

      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

    addOrientationToFirebase(){
      var date = new Date();

      this.connected=this.connectedService.userDetails();

      if(this.connected != null && this.connected!=undefined){

        this.afs.collection('/seances').add({
          distance:this.total_distance,
          id_user:this.connected.uid,
          time:this.time.toString(),
          type:"orientation",
          date:date_form

        })
      }
      this.router.navigateByUrl('/app/tabs/Personal');

    }

    transition = () => {

      var run_info = document.getElementById('footer');
      var button_bottom = document.getElementById('button-bottom');

      if ( this.showInfos ) {
        run_info.style.height='30%';
        button_bottom.style.bottom='35%';

        this.showInfos = false;

      } else {

        run_info.style.height='0%';
        button_bottom.style.bottom='10%';

        this.showInfos = true;

      }

    }

    onLocationFound = (e) => {

      var getdistance = this.getDistance(e);
      this.total_distance = this.total_distance + getdistance[0];
      if (getdistance[1] == undefined || getdistance[2]== undefined) {

      } else {
        this.lat = getdistance[1];
        this.long = getdistance[2];
      }



    }

    getDistance = (e) =>{
      return new Promise((resolve,reject) => {

        var lat = 0;
        var long = 0;

        var new_pos = e.latlng;

        var url = 'http://51.77.212.33:8080/route/v1/foot/'+new_pos.lng+','+new_pos.lat+';'+this.long+','+this.lat

        var req = new XMLHttpRequest();
        req.responseType = "json";
        req.open('GET', url, true);
        req.send();

        var get_distance = req.addEventListener('readystatechange', function() {
          if(req.readyState === XMLHttpRequest.DONE) {
            req.onload = function () {

              var new_distance = req.response.routes[0].distance;


              if(new_distance!= null){
                if (new_distance != 0) {
                  lat = new_pos.lat;
                  long = new_pos.lng;
                } else {
                  lat = 0;
                  long = 0;
                }
                resolve([new_distance,lat,long]);
              }else{
                reject("echec");
              }
            }
          }
        });
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

        this.sub.unsubscribe();
      }

      resumeTimer = () => {
        const source = timer(1000, 1000);
        this.continue = true;
        this.ShowPause = true;
        this.ShowResume = false;

        this.sub = source.subscribe(val => {

          if (this.continue == true) {
            this.time = val + this.prec_time;
          }
        })
      }
}
