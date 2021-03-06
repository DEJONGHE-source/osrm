import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

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

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private activatedRoute : ActivatedRoute
  ) {
    this.initializeApp();
  }

  async ngOnInit() {


    this.checkLoginStatus();
    this.listenForLoginEvents();

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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }



  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  enableShowFormTrail = () => {
    this.hideFormTrail = false;
    this.hideFormOrientation = true;
  }

  enableShowFormOrientation = () => {
      this.hideFormOrientation = false;
      this.hideFormTrail = true;
  }

  disableShowForms = () => {
    this.hideFormOrientation = true;
    this.hideFormTrail = true;
    this.router.navigateByUrl('/app/tabs/Personal');

  }

  async onClickSubmitTrail(form : NgForm) {
    this.distanceSubmit= true;
    await this.storage.set(`distanceCoursePied`,form.value.distanceTrail);
    this.router.navigateByUrl('/app/tabs/Trail');
  }

  async onClickSubmitOrientation(form : NgForm) {
    this.distanceSubmit= true;
    await this.storage.set(`distanceOrientation`,form.value.distance);
    this.router.navigateByUrl('/app/tabs/Orientation');
  }



  route = ['/app/tabs/map'];
  routePerso = ['/app/tabs/Personal']

  appPages = [
    {
      title: 'Carte',
      url: ['/app/tabs/map'],
      icon: 'map'
    },
    /*{
      title: 'Espace Personnel',
      url: '/app/tabs/UserSpace',
      icon: 'body'
    },*/
    /*{
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'information-circle'
    }*/
  ];
}
