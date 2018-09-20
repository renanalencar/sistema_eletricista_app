import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
  map: any;
  public lat;
  public lng;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    
  }
  ionViewDidLoad() {
    var eletricista = new google.maps.LatLng(-23.5793521, -46.641414);
    var cliente = new google.maps.LatLng(-23.5761596, -46.6464069);
    let mapOptions = {
     zoom: 15,
     center: new google.maps.LatLng(-23.5793521, -46.641414),
     mapTypeControl : false 
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
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
      console.log(status);
      if(status == 'OK'){
        //var dis = new google.maps.DirectionsRenderer();
        console.log(response);
        dirdisplay.setDirections(response);
      }
    });
  }
}
