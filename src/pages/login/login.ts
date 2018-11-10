import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MenuClientePage } from '../menu-cliente/menu-cliente'
import { MenuEletricistaPage } from '../menu-eletricista/menu-eletricista';
//import { UsuarioService } from '../../domain/usuario/usuario-service';
import { LoginProvider } from '../../providers/login';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string = '';
  public senha: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    //private _service: UsuarioService, 
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController,
    private provider: LoginProvider,
    public events: Events
  ) {}


  efetuaLogin(){
    if(!this.email || !this.senha) {            
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons: [{ text: 'Ok'}]
      }).present();

      return;
    }

    let loader = this._loadingCtrl.create({
      content: 'Carregando. Aguarde...'
    });
    loader.present();

    this.provider
      .efetuaLogin(this.email, this.senha)
      .then(res => {
        console.log("tipo", res.cliente.tipo);
        this.events.publish('user:created', res);
        if (res.cliente.tipo == "Cliente"){
          this.navCtrl.setRoot(MenuClientePage, {DadosLogin: res});
          loader.dismiss();
        } else if (res.cliente.tipo == "Eletricista"){
          this.navCtrl.setRoot(MenuEletricistaPage, {DadosLogin: res});
          loader.dismiss();
        } else {
          loader.dismiss();
          console.log("não fez login");
          this._alertCtrl.create({
            title: 'Problema no login',
            subTitle: 'Email ou senha inválidos. Verifique',
            buttons: [{ text: 'Ok'}]
          }).present();
        }
      })
      .catch(() => {
        loader.dismiss();
        console.log("não fez login");
        this._alertCtrl.create({
          title: 'Problema no login',
          subTitle: 'Email ou senha inválidos. Verifique',
          buttons: [{ text: 'Ok'}]
        }).present();
      });
  }
}