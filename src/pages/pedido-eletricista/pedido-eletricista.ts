import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuClientePage } from '../../pages/menu-cliente/menu-cliente';
import { MenuEletricistaPage } from '../../pages/menu-eletricista/menu-eletricista';

/**
 * Generated class for the PedidoEletricistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-eletricista',
  templateUrl: 'pedido-eletricista.html',
})
export class PedidoEletricistaPage {
	private pedido;
	private ws;
  private obj;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	var that = this;
  	this.ws = this.navParams.get('websocket')
    this.pedido = this.navParams.get('pedido_status')
    var context = {
      necessidade : this.navParams.get('necessidade'),
      pedido_enviado : this.navParams.get('pedido_enviado'),
      pedido_status : this.pedido,
      usuario : this.navParams.get('usuario'),
      endereco : this.navParams.get('endereco'),
      nome : this.navParams.get('nome'),
      user : this.navParams.get('user')
    }
    this.obj = context;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoEletricistaPage');
  }
  aceitar() {
  	console.log(this.ws)
  	this.obj['pedido_status'] = true
    console.log(this.obj)
  	this.ws.send(JSON.stringify(this.obj))
    var websocket = {
      ws : this.ws
    }
  	this.navCtrl.push(MenuClientePage, websocket)
  }
  recusar() {
    console.log('recusou');
    this.obj['pedido_enviado'] = false
    this.ws.send(JSON.stringify(this.obj))
    var websocket = {
      ws : this.ws
    }
    this.navCtrl.push(MenuEletricistaPage, websocket)
  }


}
