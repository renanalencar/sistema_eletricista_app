import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavParams, AlertController } from 'ionic-angular';
import { RespostaLogin } from '../classes/resposta_login'
import { Dados } from '../classes/dados'
import { Usuario} from '../classes/usuario'
import 'rxjs/Rx';

/*
  Provider para fazer conexão com a API da plataforma da EC Cursos

  Todos os métodos devem retornar uma promessa e seguir o padrão de nomes.

*/
@Injectable()
export class LoginProvider {

  private apiURL: string =  'http://localhost:8000/api/login/'; //URL base da API, falta inserir o URL quando tivermos
  private usuarioLogado: RespostaLogin; //objeto do usuario atual
  private token: string = null; //token unico do usuario
  private dados: Dados; //objeto do usuario atual
  private usuario: Usuario; //objeto do usuario atual
  private resposta;
  private cliente;

  constructor(public http: Http,private storage: Storage) {}

  /** Método que faz login e salva token de usuário caso tenha sucesso  **/
  public efetuaLogin(user: string, senha: string){
  	/*return new Promise<any>((resolve, reject) => {
      this.http.post(this.apiURL, {
        "username": user,
        "password": senha
        }
      )
      .subscribe(
        res => {
          //@todo Pega resposta do servidor. Se não teve erro, resolve(res), cria novo usuário, e salva token 
          //Se teve erro, reject(res.mensagem)
          console.log("resposta", res);
          //dados enviados validos
          //this.usuarioLogado = new RespostaLogin(res.token, res.cliente);
          this.token = res.token;
          this.dados = res.cliente;
          //this.usuario = res.cliente.usuario;
          console.log("token", this.token, "dados", this.dados, "usuario", this.usuario)
          this.storage.set("user", user);
          this.storage.set("senha", senha);
          resolve(res);
        },
        err => {
          //@todo Nesse caso, a requisição deu erro, e deve-se dar reject("Erro na requisição"); 
          console.log("erro no login", err);
          reject("Erro na requisição");
        }
      );
    });*/
    return this.http
    .post(this.apiURL, {
      "username": user,
      "password": senha
      }
    )
    .map(res => res.json())
    .toPromise()
    .then(res => {
        //let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone);
        //this._usuarioLogado = usuario;
        //return usuario;
        console.log("resposta", res);
        //dados enviados validos
        //this.usuarioLogado = new RespostaLogin(res.token, res.cliente);
        //this.token = res.token;
        this.dados = res.cliente;
        //this.usuario = res.cliente.usuario;
        //console.log("token", this.token, "dados", this.dados)//, "usuario", this.usuario)
        this.storage.set("user", user);
        this.storage.set("senha", senha);
        this.resposta = {
          token: res.token,
          cliente: this.dados,
        }
        console.log(this.resposta)
        return this.resposta;
    })
    .catch(err => {
      console.log("erro no login", err);
      return err;
    });
  }

  /** 
  	Método que retorna um objeto do tipo Usuario, do usuario logado 
	Caso não tenha logado, retorna null
  **/
  public getUsuarioLogado(){
  	return this.usuarioLogado;
  }

  /** 
  	Método que retorna o token do usuario logado atualmente ou null 
  **/
  public getTokenUsuario(){ //não sei se trabalharemos com token nesse app, mas ja deixei aqui a funcao que usamos no EC Cursos
  	return this.token;
  }

  /**
  	Método que retorna promise com email e senha num objeto caso haja usuario salvo no dispositivo e null caso não
  **/
  public getUsuarioSalvo(){//esse é o metodo que pega um usuario salvo para fazermos login automatico no app, ainda não ta 100% pronto mas ja ta bem encaimnhado
    let user = {
      email: "",
      senha: ""
    };
  	return new Promise<any>((resolve, reject) => {
      this.storage.get('email').then(email => {
        if(email != "") user.email = email;
        else reject("Usuario não salvo");
        this.storage.get('senha').then(senha => {                    
          if(senha != "") user.senha = senha;
          else reject("Usuario não salvo");
          resolve(user);
        }).catch(err => {
          console.error("senha nao salva");
          reject("Usuario não salvo");
        });
      }).catch(err => {
        console.error("email nao salvo");
        reject("Usuario não salvo");
      });
    });

    
  }

  
  /** 
  	Método que desautentica o usuario logado
  **/
  public efetuaLogout(){
    //this.token = "";
    //this.usuarioLogado = null;
    this.storage.set("email", "");
    this.storage.set("senha", "");
  }


}