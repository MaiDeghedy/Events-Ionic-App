import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EventsList } from '../pages/events-list/events-list';
import { EventItem } from '../pages/events-list/event-item/event-item.component';


import { EventDetails } from '../pages/event-details/event-details';
import{ServicesModule} from '../services/services.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 

@NgModule({
  declarations: [
    MyApp,
    EventsList,
    EventItem,
    EventDetails
    ],
  imports: [
    BrowserModule,
    HttpModule,
    ServicesModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsList,
    EventItem,
    EventDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
