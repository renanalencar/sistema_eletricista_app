import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { PedirservicoPage } from '../pages/pedirservico/pedirservico';
import { MenuEletricistaPage } from '../pages/menu-eletricista/menu-eletricista';
import { PerfilPage } from '../pages/perfil/perfil';
import { PedidoEletricistaPage } from '../pages/pedido-eletricista/pedido-eletricista';

import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';
import { ServicospassadosclientePage } from '../pages/servicospassadoscliente/servicospassadoscliente';


@Component({
  templateUrl: 'app.html',
  selector: 'page-menu'
})
export class MyApp {

  rootPage:any = MenuClientePage;

  public paginas = [
     {titulo: 'Perfil', componente: PerfilPage },
     {titulo: 'Histórico de serviços', componente: MenuClientePage }
  ];

  @ViewChild(Nav) public nav: Nav;

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

  abrePagina(pagina): void {

    this.nav.push(pagina.componente);
  }
}

