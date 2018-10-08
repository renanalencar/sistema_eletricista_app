import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Events } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public nome : string;
  public foto : string;
  public endereco : string;
  public telefone : string;
  public email : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    /*events.subscribe('user:created', (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log("opa", user);
      this.nome = user.cliente.usuario.first_name;
      this.foto = user.cliente.foto;
      this.endereco = user.cliente.endereco;
      this.telefone = user.cliente.telefone;
      this.email = user.cliente.usuario.email;
      //this.foto = user.cliente.foto;
    });*/
    this.nome = this.navParams.get('nome');
    this.foto = this.navParams.get('foto');
    this.endereco = this.navParams.get('endereco');
    this.email = this.navParams.get('email');
    this.telefone = this.navParams.get('telefone');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
