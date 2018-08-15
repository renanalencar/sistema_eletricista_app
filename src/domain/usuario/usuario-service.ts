import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

	public apiURL: string = "https://aluracar.herokuapp.com/";
	public httpOptions: any = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

	private token: string = null;

	private profile: any = null; 

	constructor(public http: HttpClient, private storage: Storage, public events: Events) {
	}

	/**
		Returns the logged user's token
	*/
	getToken(){
		if(true)
			return this.token;
	}

	/**
		Sets the logged user's token
	*/
	setToken(token: string){
		this.token = token;
	}


	/**
		Returns true if user is logged
	*/
	isLogged(){
		return new Promise((resolve, reject) => {
	    this.storage.get('token').then((token) => {
	      if(token != null){
	        this.setToken(token);
	        this.getMyProfile().then(profile => {
	        	resolve(true);
	        }, err => {
	        	resolve(false);
	        });
	      }else{
	        this.setToken(null); 
	        resolve(false);   
	      }
	    }, (error) => {
	      this.setToken(null);
	      resolve(false);
	    });
	  });		
	}

	/**
		Login user
	*/
	login(email: string, password: string){

		let body = {
			data: {
				email: email,
				password: password
			}
		};

		return new Promise<any>((resolve, reject) => {
	    this.http.post<any>(this.apiURL+'/login', JSON.stringify(body), this.httpOptions).subscribe(res => {
	      this.token = (<any>res).token;
	      //Save token in local storage
	      this.storage.set('token', (<any>res).token);
	      resolve(res);
	    }, err => {
	      reject(err);
	    });
	  });
	}

	/**
		Logout user
	*/
	logout(){
		this.token = null;

	 	this.storage.set('token', null);
	}

	/* Returns information of user from server */
	getMyProfile(){
		console.log(this.getToken());
		let body = {
			token: this.getToken()
		};

		return new Promise<any>((resolve, reject) => {
	    this.http.post<any>(this.apiURL+'/users/myProfile', JSON.stringify(body), this.httpOptions).subscribe(
	    	res => {
		      this.profile = (<any>res).user;
		      this.events.publish('user:info');
		      resolve(res);
	    	}, err => {
	      	reject(err);
	    	});
	  });
	}

	/* Returns information of user  */
	getLoggedUser(){
		if(this.profile != null)
			return this.profile;
		else
			return null;
	}

	/* Update user */
	updateUser(id: number, newUser: any){
		let body = {
			token: this.getToken(),
			data: newUser
		};

		return new Promise<any>((resolve, reject) => {
	    this.http.post<any>(this.apiURL+'/users/'+id+'/update', JSON.stringify(body), this.httpOptions).subscribe(res => {
	      resolve(res);
	    }, err => {
	      reject(err);
	    });
	  });
	}



}
