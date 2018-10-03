
import Stickyfill from './vendor/Stickyfill'; 
/*   
	* Let's use this singleton object to centralize any interface methods we need to share 
*/
class MidddlyInterface {
	
	construtor(){
		this.isMobile = false; //set on header componentDidMount www < 768

		if(typeof(window) != 'undefined'){
			window.onload = this.pageLoad;
		}  
		console.log("Construct MidddlyInterface ");
	}

	pageLoad(){
		document.addEventListener('resize', this.resize);
		this.resize();
	} 

	/* the window was resized **/ 
	resize(){
		this.isMobile =  window.innerWidth < 768;
	}

 	/*
		* @param isMobile 
	*/
	setMobile(isMobile) { this.isMobile = isMobile; }

	/** 
	*	@param []  of DOM elements such as document.querySelectorAll('.sticky') 
	*/ 
	stickElements(elements) { 
		Stickyfill.add(elements);
	}

  unstickElements(elements) {
    Stickyfill.remove(elements);
  }
}


let midddlyInterface =  new MidddlyInterface(); 
export default midddlyInterface;
