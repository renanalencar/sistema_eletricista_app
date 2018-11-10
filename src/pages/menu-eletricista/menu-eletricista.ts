import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subject } from 'rxjs'
import { PedidoEletricistaPage } from '../../pages/pedido-eletricista/pedido-eletricista'
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http'


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
  private evento;
  private ws;
  private necessidade;
  private pedido_status;
  private pedido_enviado;
  private nome;
  private endereco;
  private user;
  private lat;
  private lng;
  private ip;
  items: any = [];
  //public nome
  //itemExpandHeight: number = 100;



  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient, private geolocation: Geolocation) {
    var watch = this.geolocation.watchPosition();
    var res = this.navParams.get('DadosLogin');
    var eletricista_segundo = this.navParams.get('user_eletricista');

    this.items = [
      {
        expanded: false,
        content: "expandir",
        text: "Meu perfil",
        expand_content : 
          "Nome:" ,
        icon: "contact"
      },
      {
        expanded: false,
        content: "expandir",
        text: "Serviços",
        expand_content : "Conteúdo Serviços",
        icon: "hammer"
      },
      {
        expanded: false,
        content: "expandir",
        text: "Faturamento",
        expand_content: "Conteúdo Faturamento",
        icon: "cash"
      },
      {
        expanded: false,
        content: "expandir",
        text: "Chamados",
        expand_content: "Conteúdo Chamados",
        icon: "call"
      },
    ];
    watch.subscribe((data) => {
      this.lat = data.coords.latitude
      this.lng = data.coords.longitude
      console.log(this.lat, this.lng)
    })
    setInterval(() => {var url = 'http://localhost:8000/api/coords/' + this.user + "/"
    let postData = new FormData()
    postData.append('lat', this.lat) 
    postData.append('lng', this.lng)
    console.log(postData)
    this._http.patch(url, postData)
    .subscribe((data) => {console.log(data)})}, 10000)
    var ip;
    var ws;
    
    var url = 'ws://localhost:8000/ws/user/index/'
    ws = new WebSocket(url)

    this.ws = ws;
    var that = this;
    let observador = Observable.create(observer => {
    	ws.onmessage = function(e) {
    		let dados = JSON.parse(e.data);
        console.log('dados', dados)
        that.necessidade = dados['necessidade'];
        that.pedido_enviado = dados['pedido_enviado'];
        that.pedido_status = dados['pedido_status'];
        that.nome = dados['nome'];
        that.endereco = dados['endereco'];
        that.user = dados['user']
        if(!that.pedido_status && that.pedido_enviado) {
          observer.next(dados);
        } else {
          dados = null;
          //console.log('dados null')
        }
      }
    });

    //setInterval(() => {var url = 'http://localhost:8000/api/coords/' + this.user + '/' //pegar o 'this.user' logado no app
    //let postData = new FormData()
    //postData.append('lat', this.lat) 
    //postData.append('lng', this.lng)
    //console.log(postData)
    //this._http.patch(url, postData)
    //.subscribe((data) => {console.log(data)})}, 10000)

    observador.subscribe((data) => {
      var context = {
        necessidade : data['necessidade'],
        pedido_enviado : data['pedido_enviado'],
        pedido_status : data['pedido_status'],
        nome : data['nome'],
        endereco : data['endereco'],
        user : data['user'],
        websocket : this.ws
      }
      if(data != null){
        that.navCtrl.push(PedidoEletricistaPage, context)
      }
    });

    ws.onclose = function(e) {
      console.log('ws fechado')
    }
    ws.onerror = function(e) {
      console.error('erro no ws')
    }
  	ws.onopen = function(e) {
      console.log('ws aberto')
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuEletricistaPage');
  }

  expandItem(item){
    this.items.map((listItem) => {
      if(item == listItem){
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

  /*teste(){
    console.log("uhul");
  }

  limpa(){
   document.querySelectorAll('.pedir').forEach(item => {
      item.classList.remove('expandir');
    })
    this.pedir_content = "expandir";
  }

  muda(nome){
    console.log('entrou muda');
    this.limpa();
    console.log('saio limpa');
    if (nome == "pedir"){
      console.log('entrou pedir');
      if(!this.pedir){
        console.log('entrou bool');
        document.querySelectorAll('.pedir').forEach(item => {
          item.classList.add('expandir');
          console.log('entrou document');
        })
        this.pedir_content = "ocultar";
        this.pedir = true;
      } else{
        this.pedir = false;
      }
    } else if (nome == "faturamento"){

    } else if (nome == "chamados"){

    } else if (nome == "servicos"){

    }
  }*/
}
