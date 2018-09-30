import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicoIniciadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico-iniciado',
  templateUrl: 'servico-iniciado.html',
})
export class ServicoIniciadoPage {

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

