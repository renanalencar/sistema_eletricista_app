import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedirservicoPage } from '../pedirservico/pedirservico';

/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-cliente',
  templateUrl: 'menu-cliente.html',
})
export class MenuClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuClientePage');
  }

  abrePagina(){
    this.navCtrl.push(PedirservicoPage);
  }
  
}
