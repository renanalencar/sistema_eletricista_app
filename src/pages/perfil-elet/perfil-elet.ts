import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login';

/**
 * Generated class for the PerfilEletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-elet',
  templateUrl: 'perfil-elet.html',
})
export class PerfilEletPage {

  // public nome : string;
  // public foto : string;
  // public endereco : string;
  // public telefone : string;
  // public email : string;
  // public user;

  // constructor(public navCtrl: NavController, public navParams: NavParams,
  //   private login_provider: LoginProvider,) {
  //     this.user = login_provider.getUsuarioLogado();
  //     this.nome = this.user.cliente.usuario.first_name;
  //     this.foto = this.user.cliente.foto;
  //     this.endereco = this.user.cliente.endereco;
  //     this.email = this.user.cliente.usuario.email;
  //     this.telefone = this.user.cliente.telefone;
  //}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEletPage');
  }

}
