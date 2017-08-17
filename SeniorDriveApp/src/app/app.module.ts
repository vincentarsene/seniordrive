import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
// page principale liste des delplacements
import { HomePage } from '../pages/home/home';
// page modale details d'un deplacement
import { Modale1pagePage } from '../pages/modale1page/modale1page';
// ajout pour communiquer avec l'API de SeniorDrive
import { Seniordriveservice } from '../providers/seniordriveservice';
// ajout du modeule pour envoyer des emails
import { EmailComposer } from '@ionic-native/email-composer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	Modale1pagePage
  ],
  imports: [
    HttpModule,
	BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	Modale1pagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Seniordriveservice
  ]
})
export class AppModule {}
