import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider,
    LoginProvider,
    EletricistaProvider
  ]
})
export class AppModule {}
