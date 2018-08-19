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

  public endereco: string = null;
  public descricao: string = null;
  public servico: Chamado;
  public nome_cliente: string;
  public nota: number; 
  //pegar infos acima na passagem de telas (navparams)

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
    loader.dismiss();
    //fiz isso acima do loader pra quando precisarmos usar o loader

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

    this.servico.descricao = this.descricao;
    this.servico.endereco = this.endereco;
    this.servico.nome_cliente = this.nome_cliente;
    this.servico.nota = this.nota

    this.providerCliente
      .solicitarServico(this.servico)
      .then(resposta => {
        loader.dismiss();
        //mudar para proxima pagina (navctrl)
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
