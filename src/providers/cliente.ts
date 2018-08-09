import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavParams, AlertController } from 'ionic-angular';
import 'rxjs/Rx';
import { Perfil } from '../classes/perfil';
import { ServicoAnterior } from '../classes/servico_anterior';

/*
  Provider para fazer conexão nossa API

  Todos os métodos devem retornar uma promessa e seguir o padrão de nomes.

*/
@Injectable()
export class ClienteProvider {

  private apiURL: string =  ''; //URL base da API
  private perfil: Perfil;

  constructor(public http: Http) {}

  public getPerfil(token: string){//pensei em identificar o usuário por um token, mas n sei se é uma boa ideia
    //pega as infos de perfil quando o usuário clica em "perfil"
    //infos serão mostradas na pagina de perfil
  }

  public getServicosAnteriores(token:string){
    //pega serviços anteriores do cliente quando usuário clica no botão respectivo
    //infos serão mostradas na pagina de serviços
  }

  public solicitarServico(endereco: string, descricao: string){
    //solicita o serviço com os dados passados pelo cliente
  }

  public editarPerfil(dados_novos: any){
    //so preciso dar PUT no objeto "dados_novos" passado com as infos novas
  }

}