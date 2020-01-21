import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AuthenticateService } from './pages/services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule} from 'angularfire2';


import * as firebase from 'firebase';


firebase.initializeApp(environment.firebase);
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, AuthenticateService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
