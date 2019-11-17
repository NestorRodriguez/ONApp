import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports de Firebase para Angular
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC88QqO3nhYFlpiAphFzNmPCZWFwKLHH2Q',
  authDomain: 'onapp-9d358.firebaseapp.com',
  databaseURL: 'https://onapp-9d358.firebaseio.com',
  projectId: 'onapp-9d358',
  storageBucket: 'onapp-9d358.appspot.com',
  messagingSenderId: '606076429447',
  appId: '1:606076429447:web:ce551603fb861d496e0422',
  measurementId: 'G-MPYGKSM3KZ'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
