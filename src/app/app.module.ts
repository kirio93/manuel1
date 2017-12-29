import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RandomPage} from "../pages/random/random";
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";
import { ProvaProvider } from '../providers/prova/prova';
import {HttpClientModule} from "@angular/common/http";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {InfoPage} from "../pages/info/info";

@NgModule({
  declarations: [
    RandomPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RandomPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage
  ],
  providers: [
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvaProvider,

  ]
})
export class AppModule {}
