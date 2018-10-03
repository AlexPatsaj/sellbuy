import cookie from 'react-cookies';
import axios from 'axios'; 

import {SIGN_IN,ENDPOINT_ME, ENDPOINT_LOGOUT,ENDPOINT_COUNTRIES_LIST,ENDPOINT_CITIES_LIST,ENDPOINT_SCRAPE_URL,ENDPOINT_POST_ADD,ENDPOINT_POST_LIST,
ENDPOINT_STATIC_PAGE,ENDPOINT_POST_DELETE} from './Endpoints'; 
/**
*	Lets try to encapsulate logic that is not view related here. 
*	There will be other  classes for sure. spaghetti is great with tomato :P not that much in code. 
*/ 
class Midddly {
	
	constructor(){ 
		if(typeof(localStorage) =='undefined'){return; } //server side rendering shit.. investigate a way around this.  
	
		fakeInit(); 

		this.myLists =  localStorage.getItem('myLists') ? JSON.parse(localStorage.getItem('myLists'))  : []; 
		this.products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []; 
		this.sellers = localStorage.getItem('sellers') ? JSON.parse(localStorage.getItem('sellers')) : []; 

//		An array of callback functions we will use to inform whenever a product is added , removed or qty is altered. 
		this.cartListeners=[];  
	}

	getMidddlyTimezone(){
		return 'Asia/Bahrain'; 
	}

	/*
		* Get the meta associated with this url so we can generate a preview 
		* @param String $url 
		* @param function callback 
	*/
	scrapeUrl(url, callback){
		console.log("will scrape "+ url); 
		this.fetch('POST',ENDPOINT_SCRAPE_URL,{'link':url},callback);
	}

	/*
		*	@param object postData 
	*/
	postAdd(postData,callback){
		this.submitMedia(ENDPOINT_POST_ADD,postData,callback);
	}
 
 	postDelete(id,callback){
 		this.fetch('POST',ENDPOINT_POST_DELETE,{'id':id},callback); 
 	}

 	/*
 		* 	@param int page 
 		*	@param function callback 
 	*/
 	getPosts(page,callback){
 		this.fetch('GET',ENDPOINT_POST_LIST+'?page='+page,{},callback);
 	}

 	/*
	*
	*/
	updateLocalStorage(){
		localStorage.setItem('myLists', JSON.stringify( this.myLists )); 
	}

	/*
	*	@return returns an array of generic list objects 
	*	toDo: if doesnot exist on local storage fectch from server and store it there 
	*/
	getMyLists( ){  
		return this.myLists || [];
	}

	getCountries(callback){
		this.fetch('GET', ENDPOINT_COUNTRIES_LIST,{}, callback);
	}

	/*
		* @param String country 
		* @param function callback 
	*/ 
	getCities(country,callback){
		this.fetch('GET',ENDPOINT_CITIES_LIST, {}, callback); 
	}

	/*
		*	@return [] of list object and for each one, a boolean "checked" indicating if it contains the product_id  
	*/ 
	getMyListsForProduct(product_id){ 
		const lists = this.getMyLists(); 
		for(let x=0; x<this.myLists.length; ++x){
			this.myLists[x].checked = this.myLists[x].product_ids.includes(product_id); 
			this.myLists[x].product_id = product_id;
		}

		console.log('get My lists for product '+product_id, lists);
		return this.myLists;
	}

	/*
		*	@param String listName 
		*	@param String privacy 
		*	toDo: send this to the server if success append to localStorage 
	*/
	addList(listName, privacy){
		const newList =  {'id':this.myLists.length, 'name':listName,isPrivate: privacy == 'private', checked:false, product_ids:[] } ;
		this.myLists.push(newList); 
		localStorage.setItem('myLists',JSON.stringify(this.myLists)); 

		this.popupMessage("Created list with name "+  listName + "with privacy: "+ privacy +" you have "+ this.myLists.length+" lists");
		return newList; 
	}  
 
	/*
		*	@param int list_id 
		*	@param int product_id 
		*	toDo: send to server. Adds a product to the list if the product does not exist in the list, ignore otherwhise 
	*/
	addProductToList(list_id, product_id){
		const list = this.myLists.filter( item => item.id == list_id )[0]; 
		console.log('add product '+ product_id +' to list ', list);

		if(list && !list.product_ids.includes(product_id)){
			list.product_ids.push(product_id); 
		}

		this.updateLocalStorage(); 
	}

	/*
		*	Return a list of dummy products this will be a lot more complex in the future and probably specific for each section 
	*/
	getProducts(){
		return this.products; 
	}

	/*
		* @param id int 
		* @return the product of id: id if exists, else return null 
	*/
	getProductById(id){
		for(let x=0; x< this.products.length; ++x){
			if(this.products[x].id == id){
				return this.products[x]; 
			}
		}

		return null;
	}

	/*
		* @param int list_id 
		* @param int product_id 
		* toDo: refactor to send to server we implemented it here in a super ineficient way, but this should be done server side not here
		* here we just update the local storage 
	*/
	removeProductFromList(list_id, product_id){ 
	 	for(let x=0; x< this.myLists.length; ++x){
	 		let curr = this.myLists[x]; 
	 		if(curr.id === list_id){
	 			curr.product_ids = curr.product_ids.filter( id =>  id !== product_id );
	 		}
	 	}
	 	this.updateLocalStorage();
	}

	/*
		* @param string message 
		* @oaram string status {normal,error}
	*/
	popupMessage(message, status){
		alert("Implement a pretty popup to show this \n\n\n"+message); 
	}

	/*
		* Returns an array of categories to be displayed on the menu 
	*/
	getMenuCategories(){
		let menu = JSON.parse(localStorage.getItem('menu'));
		return menu.categories; 
	}

	getPage(slug, callback){
		this.fetch('get',ENDPOINT_STATIC_PAGE,{
			'slug':slug
		},callback); 
	}

	/**
		*	@param id the product id 
		*	Like or dislike a product 
	*/ 
	likeProduct(id){
		for(let x=0; x < this.products.length; ++x){
			if(this.products[x].id == id ){
				this.products[x].isLiked = !this.products[x].isLiked;
			}
		}
		localStorage.setItem('products',JSON.stringify(this.products)); 
	}

	/*
		* @param id int - the seller id 
	*/
	getSeller(id){
		for(let x=0; x<this.sellers.length; ++x){
			if(this.sellers[x].id == id){
				return this.sellers[x]; 
			}
		}

		return {'name':'seller not found'};
	} 

	getAuthToken(){
		return cookie.load('midddly_token'); 
	}

	fetch(method, url, data, callback){ 
		let headers=  {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
	  	};

	   if(typeof(this.getAuthToken()) != 'undefined'){
	   		headers['Authorization'] = 'Bearer ' + this.getAuthToken();
	   }

	   let request = {
		  method:  method.toLowerCase(),  
		  url:url,
		 // mode: "cors", 
		  "headers" : headers
	    }; 

	   if(method == 'POST') {
	   	request.data = JSON.stringify(data);   
	   }
	   else {
	   	request.params = data; 
	   }
  	
  		axios(request)
  		.then((data) => { 
	    	callback(data.data); 
		}).catch(function(error) { //anything http != 200 will fall here 
			if(error.response){
				callback( error.response.data);	
		    	console.log("Error geting : ",error.response); 
			} 
    	}); 
	   /*
	   fetch(url, request)
	    .then(response => response.json())
	    .then((data) => { 
	    	callback(data); 
		}).catch(function(error) {
       		 console.log("Error geting : ",error);
    	}); */ 
	}

	/*
		*	@param String url 
		*	@param FormData data 
		* 	@param function callback 
	*/
	submitMedia(url,data,callback){
		console.log('posting media ', data); 

		axios.post(url, data, {
		  headers: {
		    'accept': 'application/json', 
		    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
		   	'Authorization': 'Bearer ' + this.getAuthToken() 
		  }
		})
		.then( (resp) => { callback(resp.data); })
		.catch((err) => {console.log(err)}); 
	}
}


const midddly = new Midddly(); 
export default  midddly; 
 

/**
*	When we start implementing this.. delete this dummy data . 
*/ 
function fakeInit(){
	if(typeof(localStorage) == 'undefined'){return; }

 	console.log('populate fake data');
 	localStorage.setItem('fakeInitVersion',3);

	if(!localStorage.getItem('myLists')){
	   localStorage.setItem('myLists',JSON.stringify([
	   {
	        id: 1,
	        name: 'Travel',
	        isPrivate: false,
	        checked: true,
	        product_ids: [] // this is a bad idea  
	        
	    },
	    {
	        id: 2,
	        name: 'Electronics',
	        isPrivate: true,
	        checked: false,
	        product_ids: [] // this is a bad idea  
	    },
	    {
	        id: 3,
	        name: 'Dresses',
	        isPrivate: false,
	        checked: false,
	        product_ids: [] // this is a bad idea  
	    },
	    {
	        id: 4,
	        name: 'Default',
	        isPrivate: true,
	        checked: true,
	        product_ids: [] // this is a bad idea  
	    },
	    {
	        id: 5,
	        name: 'I want this!',
	        isPrivate: false,
	        checked: true,
	        product_ids: [] // this is a bad idea  
	        
	    },
	    {
	        id: 6,
	        name: 'Hot stuff',
	        isPrivate: true,
	        checked: false,
	        product_ids: [] // this is a bad idea  
	    },
	    {
	        id: 7,
	        name: 'Hakuna Matata',
	        isPrivate: false,
	        checked: false,
	        product_ids: [] // this is a bad idea  
	    },
	    {
	        id: 8,
	        name: 'Gift Ideas',
	        isPrivate: true,
	        checked: true,
	        product_ids: [] // this is a bad idea  
	    },
	  ]));
	}

	if(!localStorage.getItem('menu')){
		let menuItems = {
			'categories':[{
				'name':'Fashion',
				'children':[
					{'name':'Dresses','href':'/shop/by-category/dresses'},
					{'name':'Pants', 'href':'/shop/by-category/pants'},
					{'name':'Jumpsuits', 'href':'/shop/by-category/jumpsuits'},
					{'name':'Tops', 'href':'/shop/by-category/tops'},
					{'name':'T-shirts', 'href':'/shop/by-category/t-shirts'},
					{'name':'Jeans', 'href':'/shop/by-category/jeans'},
					{'name':'Pants', 'href':'/shop/by-category/pants'},
					{'name':'Sportswear', 'href':'/shop/by-category/sportswear'},
					{'name':'Dresses1','href':'/shop/by-category/dres1ses'},
					{'name':'Pants2', 'href':'/shop/by-category/1pants'},
					{'name':'Jumpsuits3', 'href':'/shop/by-category/jum1psuits'},
					{'name':'Tops4', 'href':'/shop/by-category/tops1'},
					{'name':'T-shirts5', 'href':'/shop/by-category/t-s1hirts'},
					{'name':'Jeans6', 'href':'/shop/by-category/jea1ns'},
					{'name':'Pants7', 'href':'/shop/by-category/pan1ts'},
					{'name':'Sportswear8', 'href':'/shop/by-category/spo1rtswear'},
					{'name':'Swimwear9', 'href':'/shop/by-category/swi1mwear'}
				]
			},
			{
				'name':'Shoes',
				'children': [
					{'name':'Athletic','href':'/shop/by-category/athletic-shoes'},
					{'name':'Casual & Sneakers ','href':'/shop/by-category/casual-and-sneakers'},
					{'name':'Heels','href':'/shop/by-category/shoes-heels'},
				]
			}
		]};
		localStorage.setItem('menu',JSON.stringify(menuItems));
	}
 
	let products= [
		{
		'id':'1','nRatings':5,'rating':3,'discount':0, 'price_old':399, 'price': '399', 'isLiked': false,
		'cartAttr':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], //only what the user selected 
		'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'},{'name':'Condition','value':'new'}], 
		'img':'http://138.68.255.94:3001/square/images/electronics-main.png', 
		'gallery':[
			{'thumb':'http://138.68.255.94:3001/square/images/electronics-main.png', 'full':'/static/images/electronics-main.png'},
			{'thumb':'http://138.68.255.94:3001/square/images/post-1.png', 'full':'/static/images/post-1.png'},
			{'thumb':'http://138.68.255.94:3001/square/images/hot-deal-half.png','full': '/static/images/hot-deal-half.png'},
			{'thumb':'http://138.68.255.94:3001/square/images/most-popular-2.png', 'full': '/static/images/most-popular-2.png'},
			{'thumb':'http://138.68.255.94:3001/square/images/product-large.png','full':'/static/images/product-large.png'},
		], 'name':'Short Flounced dress. Must have for summer.','n_likes':0, 
		'seller': {'name':'Honor, Mobile Phones', 'link':'/shop'}
		},
        {'id':'2','nRatings':0,'rating':0,'discount':0, 'price_old':520.99, 'price': '520.99','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/post-1.png' , 'name':'Red Sweater','n_likes':0, 'seller': {'name':'Zara', 'link':'/shop'},'gallery':[{'thumb':'http://138.68.255.94:3001/square/images/electronics-main.png', 'full':'/static/images/electronics-main.png'}]},
        {'id':'3','nRatings':10,'rating':4,'discount':0, 'price_old':520.99, 'price': '520.99','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/shop-product-1.png' , 'name':'Leather city bag with knotted details','n_likes':0, 'seller': {'name':'Valentino', 'link':'/shop'}},
        {'id':'4','nRatings':20,'rating':5,'discount':20, 'price_old':300.99, 'price': '500','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/laptop.jpg' , 'name':'Laptop','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}},
        {'id':'6','nRatings':20,'rating':5,'discount':20, 'price_old':300.99, 'price': '150','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/most-popular-2.png' , 'name':'Shirt','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}},
        {'id':'7','nRatings':20,'rating':5,'discount':0, 'price_old':300.99, 'price': '300.99', 'isLiked': false,'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/most-popular-3.png' , 'name':'Dress','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}},
        {'id':'8','nRatings':20,'rating':5,'discount':20, 'price_old':300.99, 'price': '150','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/most-popular-4.png' , 'name':'Short Blue Dress. Must have for Summer','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}},
        {'id':'9','nRatings':20,'rating':5,'discount':20, 'price_old':300.99, 'price': '150','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/most-popular-5.png' , 'name':'Sweater','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}},                  
        {'id':'10','nRatings':20,'rating':5,'discount':20, 'price_old':300.99, 'price': '150','isLiked': false, 'attributes':[ {'name':'Color', 'value':'blue'}, {'name':'Size', 'value':'M'}], 'img':'http://138.68.255.94:3001/square/images/new-arrivals-1.png' , 'name':'Hat','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}}                  
    ];

    if(!localStorage.getItem('products')){
    	localStorage.setItem('products',JSON.stringify(products));      	
    }  

    let reviews = [
			{'title':'Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate soluta ipsa vel eius vitae voluptas ipsam in, totam maiores consequatur similique aspernatur dicta accusamus officiis. Porro illo nisi eius repellat.\
			<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora iusto sit alias? Reprehenderit, laborum rerum doloremque deserunt itaque pariatur amet, voluptatibus ratione aliquam vitae, labore dolor perspiciatis. Quibusdam, molestiae!',
			gallery:[ {'thumb':'http://138.68.255.94:3001/square/static/images/cart.jpg', 'full':'/static/images/cart.jpg'}],
			reply:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.'
			},
			{'title':'Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate soluta ipsa vel eius vitae voluptas ipsam in, totam maiores consequatur similique aspernatur dicta accusamus officiis. Porro illo nisi eius repellat.\
			<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora iusto sit alias? Reprehenderit, laborum rerum doloremque deserunt itaque pariatur amet, voluptatibus ratione aliquam vitae, labore dolor perspiciatis. Quibusdam, molestiae!',
			gallery:[ {'thumb':'http://138.68.255.94:3001/square/static/images/cart.jpg', 'full':'/static/images/cart.jpg'}],
			reply:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.'
			},
			{'title':'Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate soluta ipsa vel eius vitae voluptas ipsam in, totam maiores consequatur similique aspernatur dicta accusamus officiis. Porro illo nisi eius repellat.\
			<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora iusto sit alias? Reprehenderit, laborum rerum doloremque deserunt itaque pariatur amet, voluptatibus ratione aliquam vitae, labore dolor perspiciatis. Quibusdam, molestiae!',
			gallery:[ {'thumb':'http://138.68.255.94:3001/square/static/images/cart.jpg', 'full':'/static/images/cart.jpg'}],
			reply:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.'
			},
			{'title':'Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate soluta ipsa vel eius vitae voluptas ipsam in, totam maiores consequatur similique aspernatur dicta accusamus officiis. Porro illo nisi eius repellat.\
			<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora iusto sit alias? Reprehenderit, laborum rerum doloremque deserunt itaque pariatur amet, voluptatibus ratione aliquam vitae, labore dolor perspiciatis. Quibusdam, molestiae!',
			gallery:[ {'thumb':'http://138.68.255.94:3001/square/static/images/cart.jpg', 'full':'/static/images/cart.jpg'}],
			reply:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.'
			},
			{'title':'Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate soluta ipsa vel eius vitae voluptas ipsam in, totam maiores consequatur similique aspernatur dicta accusamus officiis. Porro illo nisi eius repellat.\
			<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora iusto sit alias? Reprehenderit, laborum rerum doloremque deserunt itaque pariatur amet, voluptatibus ratione aliquam vitae, labore dolor perspiciatis. Quibusdam, molestiae!',
			gallery:[ {'thumb':'http://138.68.255.94:3001/square/static/images/cart.jpg', 'full':'/static/images/cart.jpg'}],
			reply:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.'
			}
    ]; 

    let sellers = [
    	{
    		'id':1,
    		'timezone':'Asia/Bahrain',
    		'name':'Madewell',
    		'about': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor eius, quae ut illo laboriosam, nam temporibus esse eveniet, corrupti odit sed error perferendis nulla placeat quod? Consequuntur, cum inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laborum atque ab pariatur nulla nihil eos similique repellat libero debitis repudiandae, explicabo quia doloremque nesciunt, adipisci non ipsa, cum dolorem?',
    		'tags':['zara','mystyle','mylifemyway'], 
    		'nFollowers':'8.6K',
    		'rating':4.5,
    		'profileImg':'/static/images/shop-logo.jpg',
    		'isUserFollowing':true, 
    		'social':[{'network':'facebook','link':'http://facebook.com'},{'network':'pinterest','link':'http://pinterest.com'},{'network':'linkedin','link':'http://linkedin.com'},{'network':'instagram','link':'http://instagram.com'},{'network':'twitter','link':'http://twitter.com'}],
    		'addresses': ["Some Road, Some City","Some Road, Some City","Some Road, Some City"],
    		'url':'madewell.com',
    		'phone':'+0 (123) 456-78-90',
    		'businessInfo':'<p>Shop since 2010</p><p>One Person Company</p>',
    		'openHours':[{'from':'09','to':18},{'from':'09','to':18},{'from':'09','to':18},{'from':'09','to':18},{'from':'09','to':18},{'from':'09','to':20},{'from':'09','to':20}],
     	}
    ]; 

    localStorage.setItem('sellers',JSON.stringify(sellers));
    /*
    let user = {
    	'id':1, 
    	'name' : 'John Doe',
    	'lang' :'en',
    	'currency': 'usd',
    	'timezone':'Asia/Bahrain'
    };  

    localStorage.setItem('user',JSON.stringify(user)); */ 
}