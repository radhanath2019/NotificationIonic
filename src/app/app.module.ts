import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

const config = {
  apiKey: 'AIzaSyAddujYI_LJKyXMhMeH3WgDPKxrZmRN8KQ',
  authDomain: 'ionicnotification-c0adf.firebaseapp.com',
  databaseURL: 'https://ionicnotification-c0adf.firebaseio.com',
  projectId: 'ionicnotification-c0adf',
  storageBucket: 'ionicnotification-c0adf.appspot.com',
  messagingSenderId: '1062122854671'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
