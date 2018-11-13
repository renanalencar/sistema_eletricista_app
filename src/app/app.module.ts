import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
/*import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { PedirservicoPage } from '../pages/pedirservico/pedirservico';
import { MenuEletricistaPage } from '../pages/menu-eletricista/menu-eletricista';
import { ServicospassadosclientePage } from '../pages/servicospassadoscliente/servicospassadoscliente';
import { PerfilPage } from '../pages/perfil/perfil';
import { PedidoEletricistaPage } from '../pages/pedido-eletricista/pedido-eletricista';
import { ServicoFinalizadoPage } from '../pages/servico-finalizado/servico-finalizado';
import { IniciarServicoPage } from '../pages/iniciar-servico/iniciar-servico';
import { ServicoIniciadoPage } from '../pages/servico-iniciado/servico-iniciado';
import { IniciarServicoElePage } from '../pages/iniciar-servico-ele/iniciar-servico-ele';
*/
import { ServicoIniciadoEletPage } from '../pages/servico-iniciado-elet/servico-iniciado-elet';
import { ServicospassadoseletPage } from '../pages/servicospassadoselet/servicospassadoselet';
import { PerfilEletPage } from '../pages/perfil-elet/perfil-elet';
import { HistoricoEletPage } from '../pages/historico-elet/historico-elet';

import { ClienteProvider } from '../../src/providers/cliente';
import { LoginProvider } from '../../src/providers/login';
import { EletricistaProvider } from '../../src/providers/eletricista';
import { UsuarioService } from '../domain/usuario/usuario-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    /*HomePage,
    LoginPage,
    MenuClientePage,
    MenuEletricistaPage,
    PedirservicoPage,
    PerfilPage,
    PedidoEletricistaPage,
    ServicospassadosclientePage,
    ServicoFinalizadoPage,
    IniciarServicoPage,
    ServicoIniciadoPage,
    ExpandableComponent,
    IniciarServicoElePage,
    ServicoIniciadoEletPage,
    ServicospassadoseletPage,
    PerfilEletPage,
    HistoricoEletPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /*HomePage,
    LoginPage,
    MenuClientePage,
    MenuEletricistaPage,
    PedirservicoPage,
    PerfilPage,
    PedidoEletricistaPage,
    ServicospassadosclientePage,
    ServicoFinalizadoPage,
    IniciarServicoPage,
    ServicoIniciadoPage,
    IniciarServicoElePage,
    ServicoIniciadoEletPage,
    ServicospassadoseletPage,
    PerfilEletPage,
    HistoricoEletPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider,
    LoginProvider,
    EletricistaProvider,
    GoogleMaps
  ]
})
export class AppModule {}
