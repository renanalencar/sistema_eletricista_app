
import { PedirservicoPage } from '../pedirservico/pedirservico';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps,
         GoogleMap,
         LatLng,
         GoogleMapsEvent } from '@ionic-native/google-maps';

/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-menu-cliente',
  templateUrl: 'menu-cliente.html',
})
export class MenuClientePage {
  @ViewChild('mapa') mapElement: ElementRef;
  map: any;
  latitude: any;
  longitude : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuClientePage');
    var eletricista = new google.maps.LatLng(-23.5793521, -46.641414);
    var cliente = new google.maps.LatLng(-23.5761596, -46.6464069);
    let mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(-23.5793521, -46.641414),
      mapTypeControl : false,
      clickableIcons: false,
      disableDefaultUI: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var dirdisplay = new google.maps.DirectionsRenderer();
    var dirservice = new google.maps.DirectionsService();
    dirdisplay.setMap(this.map)
    var request = {
      origin: eletricista, 
      destination: cliente,
      travelMode:'WALKING',
    };
    dirservice.route(request, function(response, status){
      console.log(status);
      if(status == 'OK'){
        console.log(response);
        dirdisplay.setDirections(response);
      }
    });
  }

  abrePagina(){
    this.navCtrl.push(PedirservicoPage);
  }
  
}
