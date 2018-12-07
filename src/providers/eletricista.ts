import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavParams, AlertController } from 'ionic-angular';
import 'rxjs/Rx';

/*
  Provider para fazer conexão com a API

  Todos os métodos devem retornar uma promessa e seguir o padrão de nomes.

*/
@Injectable()
export class EletricistaProvider {

  private editURL: string =  'http://localhost:8000/api/eletricistas/'; //falta incluir o nome do usuario

  constructor(public http: Http,private storage: Storage) {}

  public getPerfil(token: string){//pensei em identificar o usuário por um token, mas n sei se é uma boa ideia
    //pega as infos de perfil quando o usuário clica em "perfil"
    //infos serão mostradas na pagina de perfil
  }

  public editPerfil(username, endereco, email, telefone) {
    return this.http.patch(this.editURL+username+'/', {
      endereco: endereco,
      email: email,
      telefone: telefone
    }).map(res => res.json())
    .toPromise()
    .then(res => {console.log('resposta patch editar perfil', res)})
    .catch(err => {console.log('resposta patch editar perfil', err)});
  }

  public getServicosAnteriores(token: string){
    //pega serviços anteriores do cliente quando usuário clica no botão respectivo
    //infos serão mostradas na pagina de serviços
  }

  public getFaturamentoSemana(token: string){
    //recebe faturamento dos ultimos 7 dias
  }

  public getFaturamentoTotal(token: string){
    //
  }

  public getChamados(){

  }

  public aceitaChamdo(){

  }

  public rejeitaChamado(){
    
  }

}