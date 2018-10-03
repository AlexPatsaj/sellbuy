/*
	*	The cart is a singleton 
*/
class Cart {
	constructor(){  
		if(typeof(localStorage) =='undefined'){return; } //server side rendering shit.. investigate a way around this.  
		let localcopy =  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {total:0, products:[]}; 

		this.total =  localcopy.total; 
		this.products = localcopy.products; 

		this.listeners = []; 
	}	 

	/** 
		* @param a function to call when change happens 
		* Adds a cart listener , should we use HOCs for this? it's an observer model anyway 
	*/ 
	addListener(fCallback){
		console.log('adding a cart listener ', fCallback);
		this.listeners.push(fCallback); 
	}

	/*
		* notifies all the registered cart listeners that a changed as occurred 
	*/
	notifyCartListeners(){ 
		localStorage.setItem('cart',JSON.stringify(this));

		for(let idx=0; idx< this.listeners.length; ++idx){
			 this.listeners[idx](this); 
		} 
		console.log('notified cartlisterers' , this, this.listeners);
	}
  
	/**
		* @param a product object 
		* if not in cart add the product else, increase amount. 
	*/
	addProduct(product){
		let existingProduct = null; 
		for(let idx=0; idx<this.products.length && existingProduct == null; ++idx){
			if(this.products[idx].id == product.id){
				existingProduct = this.products[idx]; 
			}
		}

		if(existingProduct == null){
			product.qty=1;
			this.products.push(product); 	 
		}else {
			++existingProduct.qty;
		} 
	
		this.total += parseFloat(product.price); 
		this.notifyCartListeners(); 
	}

	/*
		* Remove the product at index idx 
	*/
	removeProduct(idx){
		let prod = this.products[idx]; 

		this.total -= parseFloat(prod.price) * prod.qty; 

		this.products.splice(idx,1);
		this.notifyCartListeners(); 
	}

	/** 
		* Increase the qty of product at index idx 
	*/
	productInc(idx){
		++this.products[idx].qty;
		this.total+= parseFloat(this.products[idx].price); 
		this.notifyCartListeners(); 
	}

	productDec(idx){
		--this.products[idx].qty;
		this.total-= parseFloat(this.products[idx].price); 
		if(this.products[idx].qty == 0 ){
			this.removeProduct(idx); 
		}

		this.notifyCartListeners(); 	
	}

}

 
let cart = new Cart(); 
export default cart; 
