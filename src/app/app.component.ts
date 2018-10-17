import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { ExpandableComponent} from '../components/expandable/expandable';

//Paginas Cliente
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { PedirservicoPage } from '../pages/pedirservico/pedirservico';
import { PerfilPage } from '../pages/perfil/perfil';
import { IniciarServicoPage } from '../pages/iniciar-servico/iniciar-servico';
import { ServicoIniciadoPage } from '../pages/servico-iniciado/servico-iniciado';
import { ServicoFinalizadoPage } from '../pages/servico-finalizado/servico-finalizado';
import { ServicospassadosclientePage } from '../pages/servicospassadoscliente/servicospassadoscliente';

//Paginas Eletricista
import { PedidoEletricistaPage } from '../pages/pedido-eletricista/pedido-eletricista';
import { MenuEletricistaPage } from '../pages/menu-eletricista/menu-eletricista';
import { IniciarServicoElePage } from '../pages/iniciar-servico-ele/iniciar-servico-ele';

//Providers
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

  rootPage:any = PedirservicoPage;

  nome : string = "oi medeiros";
  foto : string = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Deputados_cabo_Daciolo_%28PSOL-RJ%29_e_Marcos_Reategui_%28PSC-AP%29_participam_do_programa_Brasil_em_Debate_%28cropped%29.jpg/200px-Deputados_cabo_Daciolo_%28PSOL-RJ%29_e_Marcos_Reategui_%28PSC-AP%29_participam_do_programa_Brasil_em_Debate_%28cropped%29.jpg";
  email : string = "erro@erro.com";
  endereco : string = "R. Erro, 123";
  telefone : string = "000000000"

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
      this.endereco = user.cliente.endereco;
      this.telefone = user.cliente.telefone;
      this.email = user.cliente.usuario.email;
      //this.foto = user.cliente.foto;
    });
  }

  abrePagina(pagina): void {
    this.nav.push(pagina.componente,{
      nome: this.nome,
      foto: this.foto,
      endereco: this.endereco,
      telefone: this.telefone,
      email: this.email,
    });
  }
}

