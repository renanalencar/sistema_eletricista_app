import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { PedirservicoPage } from '../pages/pedirservico/pedirservico';
import { MenuEletricistaPage } from '../pages/menu-eletricista/menu-eletricista';
import { ServicospassadosclientePage } from '../pages/servicospassadoscliente/servicospassadoscliente';

import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage,
    MenuEletricistaPage,
    PedirservicoPage,
    ServicospassadosclientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage,
    MenuEletricistaPage,
    PedirservicoPage,
    ServicospassadosclientePage
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
