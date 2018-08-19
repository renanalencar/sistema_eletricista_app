import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { PedirservicoPage } from '../pages/pedirservico/pedirservico';
import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';
import { MenuEletricistaPage } from '../pages/menu-eletricista/menu-eletricista';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  rootPage:any = PedirservicoPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              provider_login: LoginProvider,
              provider_eletricista: EletricistaProvider,
              provider_cliente: ClienteProvider
            ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

