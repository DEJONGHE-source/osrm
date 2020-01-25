import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from './pages/services/authentication.service';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  loggedIn = false;
  dark = false;
  hideFormTrail = true;
  hideFormOrientation = true;
  distanceSubmit = false;
  target = '5000';
  dataForm : string;
  distance  = new FormControl();
  jsonInterest = null;
  tickedInterest = new Array();
  connected=null

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private activatedRoute : ActivatedRoute,
    public connectedService : AuthenticateService
  ) {
    this.initializeApp();
  }


  async ngOnInit() {

    this.checkLoginStatus();
    this.listenForLoginEvents();

    /*this.connected=this.connectedService.userDetails();
    console.log("connected ou pas");
    if(this.connected != null && this.connected!=undefined){
      console.log("connecté")
    }else{
      console.log('non connecté')
    }*/

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  ionViewWillEnter(){
    this.checkLoginStatus();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isConnected(){
      var connected = this.connectedService.userDetails();
      if(connected != null && connected!=undefined){
        return true;
      }else{
        return false;
      }
  }

  checkLoginStatus() {
    this.loggedIn = this.isConnected();
    return this.updateLoggedInStatus(this.loggedIn);
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('login', () => {
      console.log("update true")
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('logout', () => {
      console.log("update false")
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.connectedService.logoutUser().then(() => {
      this.loggedIn = false;
      return window.location.replace("http://localhost:8100");
    });
  }

  show(){
    return new Promise((resolve,reject)=>{
      var url = 'http://51.91.111.135:8080/';
      var req = new XMLHttpRequest();
      req.responseType = "json";
      req.open('GET', url, true);
      req.send();
      console.log("ok get")

      req.addEventListener('readystatechange', function() {
        if(req.readyState === XMLHttpRequest.DONE) {
          req.onload = function () {
            console.log(req.response);
            var jsonInterest = req.response;
            if(jsonInterest != null){
              resolve(jsonInterest);
            }else{
              reject("echec");
            }
          }
        }
      });
    });
  }

  async selectItem(item){
    var id = 0;
    for(var i=0; i < this.jsonInterest.length; i++){
      if(item[2] == this.jsonInterest[i][2]){
        id = i;
      }
    }
    console.log(id)
    if(this.tickedInterest[id] == "false"){
      this.tickedInterest[id] = "true"
      console.log("true")
    }else{
      this.tickedInterest[id] = "false"
      console.log("false")
    }
    await this.storage.set(`tickedInterest`,this.tickedInterest);
  }

  enableShowFormTrail= () => {
    this.show().then( async (res)=>{
      this.jsonInterest = res

      console.log("async")
      for (var i = 0; i < this.jsonInterest.length; i++) {
        this.tickedInterest.push("false");
        console.log("ajouté")
      }
    });
    this.hideFormTrail = false;
    this.hideFormOrientation = true;
  }

  enableShowFormOrientation = () => {
      this.show().then( async (res)=>{
        this.jsonInterest = res
        await this.storage.set(`jsonInterest`,this.jsonInterest);
        console.log("async")
        for (var i = 0; i < this.jsonInterest.length; i++) {
          this.tickedInterest.push("false");
          console.log("ajouté")
        }
      });
      this.hideFormOrientation = false;
      this.hideFormTrail = true;
  }

  disableShowForms = () => {
    this.hideFormOrientation = true;
    this.hideFormTrail = true;
    this.router.navigateByUrl('/app/tabs/Personal');

  }

  async onClickSubmitTrail(form : NgForm) {
    console.log("ahahahahha")
    this.distanceSubmit= true;

    await this.storage.set(`distanceCoursePied`,form.value.distanceTrail);
    await this.storage.set(`tickedInterest`,this.tickedInterest);
    await window.location.replace("http://localhost:8100/app/tabs/Trail");
    console.log('aaaaaaassasawasasasas')
  }

  async refreshSession(){
    await this.show();
    await window.location.replace("http://localhost:8100");
    console.log("apres")
  }

  async onClickSubmitOrientation(form : NgForm) {
    this.distanceSubmit= true;
    await this.storage.set(`distanceOrientation`,form.value.distance);
    await this.storage.set(`tickedInterest`,this.tickedInterest);
    await window.location.replace("http://localhost:8100/app/tabs/Orientation");
  }





  route = ['/app/tabs/map'];
  routePerso = ['/app/tabs/Personal']

  appPages = [
    {
      title: 'Carte',
      url: ['/app/tabs/map'],
      icon: 'map'
    },
  ];
}
