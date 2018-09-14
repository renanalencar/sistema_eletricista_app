import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuEletricistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-eletricista',
  templateUrl: 'menu-eletricista.html',
})
export class MenuEletricistaPage {
  public dados;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.navParams.get("DadosLogin")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuEletricistaPage');
  }

}
