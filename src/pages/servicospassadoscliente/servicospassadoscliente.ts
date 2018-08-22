import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Alert } from 'ionic-angular';
import { ServicoAnterior } from '../../classes/servico_anterior';

/**
 * Generated class for the ServicospassadosclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicospassadoscliente',
  templateUrl: 'servicospassadoscliente.html',
})
export class ServicospassadosclientePage {

  teste = {
    nome_eletricista: 'Pedro', 
    telefone_eletricista: '(11)99136-2979'
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicospassadosclientePage');
  }


  contactarEletricista(servico){

    this._alertCtrl.create({
      title: 'Você deseja contactar esse Eletricista?',
      subTitle: 'Nome: ' + servico.nome_eletricista + ' Tel: ' + servico.telefone_eletricista,
      buttons: [{ text: 'Ligar'}, { text:'Voltar'}]
    }).present();
  }

}
