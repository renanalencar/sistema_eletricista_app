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
import { ServicoFinalizadoPage } from '../pages/servico-finalizado/servico-finalizado';
import { IniciarServicoPage } from '../pages/iniciar-servico/iniciar-servico';
import { ServicoIniciadoPage } from '../pages/servico-iniciado/servico-iniciado';
import { ServicospassadosclientePage } from '../pages/servicospassadoscliente/servicospassadoscliente';

import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';


import { Events } from 'ionic-angular';

//import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  selector: 'page-menu'
})
export class MyApp {

  rootPage:any = ServicoIniciadoPage;

  nome : string = "oi medeiros";
  foto : string = "tchau medeiros"

  public paginas = [
     {titulo: 'Perfil', componente: PerfilPage },
     {titulo: 'Histórico de serviços', componente: ServicospassadosclientePage }
  ];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              provider_login: LoginProvider,
              provider_eletricista: EletricistaProvider,
              provider_cliente: ClienteProvider,
              public events: Events,
            ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    events.subscribe('user:created', (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user);
      this.nome = user.cliente.usuario.first_name;
      //this.foto = user.cliente.foto;
    });
  }

  abrePagina(pagina): void {
    this.nav.push(pagina.componente);
  }
}

