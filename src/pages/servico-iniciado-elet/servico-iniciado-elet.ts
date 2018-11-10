import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicoIniciadoEletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico-iniciado-elet',
  templateUrl: 'servico-iniciado-elet.html',
})
export class ServicoIniciadoEletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicoIniciadoPage');
  }
  status: boolean = false;
  DeixaTrue(){
      this.status = true;  
  }
  DeixaFalse(){
    this.status = false;
  }
}
