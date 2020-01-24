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
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from '../services/authentication.service';
import { timer } from 'rxjs';
import { Router} from '@angular/router';



@Component({
  selector: 'trail',
  templateUrl: './trail.page.html',
  styleUrls: ['./trail.page.scss'],
})

export class TrailPage implements OnInit {
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
    private storage: Storage,
    public afs: AngularFirestore,
    public connectedService : AuthenticateService,
    private router: Router
    ) {}


  ngOnInit() {

    var object = new Geolocation();
    object.getCurrentPosition().then(async (resp) => {
      this.lat=resp.coords.latitude
      this.long=resp.coords.longitude

      console.log(this.lat,this.long)
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
        watch:true,

      });

      testMap.locate({
        watch:true,

      });

      let watch = object.watchPosition();
      watch.subscribe((data) => {
        var marker = L.marker([this.lat, this.long]).addTo(mymap);
      });





      mymap.on('locationfound',this.onLocationFound);


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

      this.mapService.tsp(this.lat,this.long,target,tickedInterest).then((res)=>{
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



        for(i=0; i < coordConservedNodes.length ;i++){
          for(j=0; j < coordConservedNodes.length ;j++){
            if(j == order[i]){
              pointsWay.push(L.latLng(coordConservedNodes[j][1], coordConservedNodes[j][0]))
            }
          }
        }




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
  addTrailToFirebase(){
    var new_date = new Date();

    var new_date_str = new_date.getFullYear()+'-'+new_date.getMonth() +'-'+new_date.getDate();

    this.connected=this.connectedService.userDetails();

    if(this.connected != null && this.connected!=undefined){

      this.afs.collection('/seances').add({
        distance:this.total_distance,
        id_user:this.connected.uid,
        time:this.time.toString(),
        type:"trail",
        date:new_date_str

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

    var getdistance = this.getDistance(e).then((res) => {

      this.total_distance = this.total_distance + res[0];


      if (res[0] == 0) {

      } else {
        this.lat = getdistance[1];
        this.long = getdistance[2];
      }

    });
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
              resolve([10,lat,long]);
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
