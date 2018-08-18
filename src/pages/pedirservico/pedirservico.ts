import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Alert } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente';
import { Chamado } from '../../classes/chamado';


/**
 * Generated class for the PedirservicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedirservico',
  templateUrl: 'pedirservico.html',
})
export class PedirservicoPage {

  public enderecopassado: String;
  public endereco: String = null;
  public descricao: String = null;
  public servico: Chamado;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private providerCliente: ClienteProvider,
              private loadingCtrl: LoadingController,
              private _alertCtrl: AlertController
            ) {
    
    let loader = this.loadingCtrl.create({
      content: 'Carregando. Aguarde...'
    });
    loader.present();
    loader.dismiss();//fiz isso pra quando precisarmos usar o loader

  }


  enviarServico(){
    if(!this.endereco || !this.descricao) {            
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons: [{ text: 'Ok'}]
      }).present();
      return;
    }

    let loader = this.loadingCtrl.create({
      content: 'Carregando. Aguarde...'
    });
    loader.present();

    this.providerCliente
      .solicitarServico(this.servico)
      .then(resposta => {
        loader.dismiss();
        //mudar para proxima pagina
      })
      .catch(()=> {
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Problema no envio do servico',
          subTitle: 'Tente novamente em alguns minutos',
          buttons: [{ text: 'Ok'}]
        }).present();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirservicoPage');
  }

}
