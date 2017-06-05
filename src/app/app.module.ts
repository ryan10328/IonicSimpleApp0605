import { BarcodePage } from './../pages/barcode/barcode';
import { StudentPage } from './../pages/student/student';
import { CheckPage } from './../pages/check/check';
import { LoginPage } from './../pages/login/login';
import { MasterPage } from './../pages/master/master';
import { HelloPage } from './../pages/hello/hello';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage,
    StudentPage,
    BarcodePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home123' },
        { component: MasterPage, name: 'Master', segment: 'master/:name/:age' }
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage,
    StudentPage,
    BarcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
