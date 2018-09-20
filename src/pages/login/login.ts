import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuClientePage } from '../menu-cliente/menu-cliente'
import { MenuEletricistaPage } from '../menu-eletricista/menu-eletricista';
//import { UsuarioService } from '../../domain/usuario/usuario-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string = '';
  public senha: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    //private _service: UsuarioService, 
    private _alertCtrl: AlertController) {}


  efetuaLogin(){
    
  }

}