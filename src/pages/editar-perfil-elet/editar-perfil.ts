import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login';
import { EletricistaProvider } from '../../providers/eletricista';

/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  public endereco : string;
  public telefone : string;
  public email : string;
  public user;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private login_provider: LoginProvider,
    private eletricista_provider: EletricistaProvider) {
      this.user = login_provider.getUsuarioLogado();
      this.endereco = this.user.cliente.endereco;
      this.email = this.user.cliente.usuario.email;
      this.telefone = this.user.cliente.telefone;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }

  cancelar() {
    console.log('vai sair');
    this.navCtrl.pop();
  }

  editarInfo() {
    console.log(this.user.cliente.usuario.username, this.endereco, this.email, this.telefone);
    this.eletricista_provider.editPerfil(this.user.cliente.usuario.username, this.endereco, this.email, this.telefone);
    this.navCtrl.setRoot('MenuEletricista');
  }
}
