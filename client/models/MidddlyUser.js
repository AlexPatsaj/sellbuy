import cookie from 'react-cookies';
import Midddly from './Midddly';  
import {SIGN_IN,ENDPOINT_ME, ENDPOINT_LOGOUT,ENDPOINT_REGISTER,ENDPOINT_RECOVER_PASSWORD} from './Endpoints'; 

/**
	* User Operations 
	* Login / logout 
	* what kind of user are we ? 
*/ 
class MidddlyUser {
	
	constructor(){
		if(typeof(localStorage) =='undefined'){return; } //server side rendering shit.. investigate a way around this.  
	 	this.user = localStorage.getItem('user')  ?  JSON.parse(localStorage.getItem('user')) :  null; 
	}

	/**
		* @return the current user if logged in, null if not   
	*/
	getUser(){		
		return this.user; 
	}

	/* 
		* @return true if the user is a seller 
	*/
	isSeller(){
		return this.user.isSeller; 
	}

	me(){   		
		console.log("will get ME ", ENDPOINT_ME);

		Midddly.fetch('GET',ENDPOINT_ME,{},(resp) => {
			if(!resp.data){
				return
			} 
			localStorage.setItem('user', JSON.stringify(resp.data)); 
		
			this.user = resp.data; 	
			location.reload(); 
		}); 
	} 

	/**
		* @return true if the user is loggedin 
	*/ 
	isLoggedIn(){
		return cookie.load('midddly_token'); 
	}

	/**
		* @param string username 
		* @param string password 
		log the user in 	
	*/
	login(username, password,callback){ 

		Midddly.fetch('POST', SIGN_IN, {
			'email':  username, 'password': password
		},(data) => {
			console.log("Login data ",data.access_token);
     		if (data.access_token ) {
	        	cookie.save('midddly_token', data.access_token , { path: '/' });
	        	this.me();
        	} else{  
        		callback(data.message);
        		console.log(data.error); 
        	} 
		});
	}

	logout(){
		Midddly.fetch('GET',ENDPOINT_LOGOUT,null,() => {}); 
		cookie.remove('midddly_token', { path: '/' }); 
		localStorage.clear();
		location.reload();
	}

	/*
	*	@param data {firstName, lastName, email, password }
	*/ 
	register(data,callback){
		Midddly.fetch('POST',ENDPOINT_REGISTER,data,callback);
	}

	/*
		* @param email - if there is a user with this email we send them an email to recover the password else we notify we don't know this email 
	*/ 
	forgotPassword(email,callback){
		Midddly.fetch('POST',ENDPOINT_RECOVER_PASSWORD,{'email':email},callback);
	}
}

let user = new MidddlyUser(); 
export default user; 


