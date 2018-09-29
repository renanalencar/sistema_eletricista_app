import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'

/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-menu-cliente',
  templateUrl: 'menu-cliente.html',
})
export class MenuClientePage {
  @ViewChild('mapa') mapElement: ElementRef;
  @ViewChild('iniciarservico') buttonElement: ElementRef;

  
  map: any;
  public lat;
  public lng;
  public ws;
  public resposta_cliente;
  public resposta_eletricista;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    this.ws = this.navParams.get('ws')
    console.log('eu sou ws', this.ws)
  }
  ionViewDidLoad() {
    
    let observador = Observable.create(observer => {
      this.ws.onmessage = function(e) {
        console.log(JSON.parse(e.data));
        var data = JSON.parse(e.data)
        this.resposta_cliente = data['pedido_resposta_cliente']
        this.resposta_eletricista = data['pedido_resposta_eletricista']

        observer.next(data)
        if(data['pedido_resposta_cliente'] == true && data['pedido_resposta_eletricista'] == true) {
          var i = 1;
          setInterval(function(){
            console.log(i++)
            let botao = document.getElementById('iniciarservico')
            botao.textContent = 'Tempo: ' + i;
          }, 2000)
        }
      }
    });

    observador.subscribe((data) => {
      this.resposta_cliente = data['pedido_resposta_cliente']
      this.resposta_eletricista = data['pedido_resposta_eletricista']
    });

    var eletricista = new google.maps.LatLng(-23.5793521, -46.641414);
    var cliente = new google.maps.LatLng(-23.5761596, -46.6464069);
    let mapOptions = {
     zoom: 15,
     center: new google.maps.LatLng(-23.5793521, -46.641414),
     mapTypeControl : false 
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    
    var botao = document.getElementById('iniciarservico')

    console.log(botao)
    console.log('ionViewDidLoad MenuClientePage', this.map);
    //var marker = new google.maps.Marker({position : mapOptions.center, map : this.map});
    var dirdisplay = new google.maps.DirectionsRenderer();
    var dirservice = new google.maps.DirectionsService();
    dirdisplay.setMap(this.map)
    //calculateRoute(dirservice, dirdisplay, eletricista, cliente);
    var request = {
      //origin: new google.maps.LatLng(-23.5782479, -46.6425898),
      origin: eletricista,
      //destination: new google.maps.LatLng(-23.6229423, -46.630948),
      destination: cliente,
      travelMode:'WALKING',
    };
    //var dir = new google.maps.DirectionsService();
    dirservice.route(request, function(response, status) {
      if(status == 'OK'){
        //var dis = new google.maps.DirectionsRenderer();
        dirdisplay.setDirections(response);
      }
    });
  }
  iniciar() {
    console.log('iniciado')
    let botao = document.getElementById('iniciarservico')
    botao.textContent = 'Aguardando Cliente'
    if(this.resposta_cliente == undefined) {
      this.resposta_cliente = false;
    }
    this.ws.send(JSON.stringify({
      pedido_status : true,
      pedido_resposta_eletricista : true,
      pedido_resposta_cliente : this.resposta_cliente
    }))
  }
  recusar() {
    console.log('recusado')
  }
}
