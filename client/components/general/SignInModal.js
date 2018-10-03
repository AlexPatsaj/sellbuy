import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import signInModalStyles from '../../static/comp-styles/general/SignInModal.scss'

import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import {ICON_CREATE_LIST, 
        ICON_ADD_IMAGE, 
        ICON_TAG, 
        ICON_SIGN_FACEBOOK,
        ICON_SIGN_GOOGLE} from '../static/Icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; 

import User from '../../models/MidddlyUser'; 

export default class SignInModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {
         signInTitle : "",
         tabIndex: 0,
         formErrors:{
            email:'',
            password:'',
            loading:false, 
            errors: ''
         }  
        };

        this.eOverlay = {}; 
        this.eContent = {}; 
    }

    appendClasses(modalnode){
        if(modalnode == null){
            console.log("append Classes.The component Already mounted so ref is not running "); 
            return; 
        }

        this.eContent = modalnode.refs.content; 
        this.eOverlay = modalnode.refs.overlay;

        this.eContent.className  = "modal-bodyClass"; 
        this.eOverlay.className = 'modal-overlayClass signInModal'; 
    }
    
    componentDidMount() {
        this.tabChanged( this.props.tabToOpen); //because we want to calculate the min height for the comp also 
        this.setState({ 
            'errors': ''
        });
    }


    checkPassword(pass) {
        if (!pass)
            return;

        let errors = ''; 

        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        let variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        } 

        if(variationCount < 4){
            errors = ' At least 1 digit , 1 upper , 1 lower case , 1 special char '; 
        } 
        else if(pass.length < 8){
            errors = ' At least 8 characters '; 
        }
 
        return errors; 
    }

    /**
        * When creating an account we require that the user writes the password twice    
    */ 
    confirmPassword(){
        let ePassword = document.getElementById("new-password"); 

        if(ePassword.value == ''){return; }
        
        this.state.formErrors.password = this.checkPassword(ePassword.value);

        if(!this.state.formErrors.password){
            let eConfirm = document.getElementById("password-confirm"); 
            console.log('confirmPassword', ePassword.value, eConfirm.value); 

            this.state.formErrors.password =  ePassword.value !== eConfirm.value ? 'passwords must match' : ""; 
        }

        this.setState({
            'formErrors' : this.state.formErrors
        });
    }

    /*
        * Check if this email is valid 
    */ 
    validEmail(){
        let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.state.formErrors.email = regexEmail.test(document.getElementById("email").value.toLowerCase()) ? '':'Invalid Email';

        this.setState({
            'formErrors' : this.state.formErrors
        }); 
    }   

    /** 
        * the height of the container will change and we want to make sure it fits 
    */
    tabChanged(tabIndex){ 
         this.setState({ tabIndex }); 
 
         let displayModal = window.innerWidth*0.05*2 + this.eContent.clientHeight; 
         let displayDocument = document.body.clientHeight; 
         this.eOverlay.style.minHeight = Math.max(displayDocument, displayModal) +"px";
         window.scrollTo(0,0);
    }

    signIn(event){
        event.stopPropagation(); 
        event.preventDefault(); 

        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value; 
        this.setState({
            'errors': '', 
        }); 

        User.login(username, password, (resp) => {
            console.log("login error ", resp); 

            this.setState({
                'errors': resp, 
                'loading':false
            });  
        }); 

        this.setState({
            'loading' : true 
        });
    }

    register(event){
        event.stopPropagation(); 
        event.preventDefault(); 

        if(this.state.formErrors.password){
            return; 
        }

        let data = {
            'email': document.getElementById("email").value, 
            'password' :  document.getElementById("new-password").value,
            'firstname' : document.getElementById("first-name").value,
            'lastname' : document.getElementById("last-name").value
        }; 

        User.register(data,(data)=>{
           /* if(data.error){
                let errors = ''; 
                for(var key in data.error){
                    errors += key+": " +data.error[key]; 
                }

                this.setState({
                    'errors': errors
                });
            }*/
            if(data.message){
                console.log("registerd ",data);
                this.setState({
                    'errors': data.message
                });
            }
            else{
                
                this.tabChanged(1);    
                this.setState({
                    'signInTitle': "Thank you for registering. You can now signIn",
                    'errors':''
                });
            }
            
        }); 
    }

    forgotPassword(event){
        event.stopPropagation(); 
        event.preventDefault(); 

        User.forgotPassword(document.getElementById("email").value, (data) => {
                if(data.error){
                    console.log(" Error while  sending email  ", data.errors); 
                }
               this.setState({
                    'message': data.error ? 'This email does not exist ' : data.message
                }); 
        }); 
    }    
    
   	render(){
	  const { header, onRequestClose } = this.props;
      let modalStyles = {
              overlay: {
                position        : 'absolute',
                'min-height'    : window.innerHeight,
                top             : 0,
                left            : 0,
                right           : 0,
                bottom          : 0,
                zIndex          : 99999999,
                overflow        : 'hidden',
                perspective     :  1300,
                backgroundColor : 'rgba(0, 0, 0, 0.3)'
              },
              content: {
                margin:"5% auto",
                'max-width':'445px', 
                transform:'translateY(-50%)'
              }
      };

      if(window.innerWidth <= 768){
        modalStyles.width = '100%'; 
      }

	  if (this.props.text) {
		  const { text } = this.props;
	  }
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Fall}
            ref={ (modal) => { this.appendClasses(modal) } }
            style = {modalStyles}
			>
            <div className="modal-wrapper add-form">
                <div className="modal-body">
                    <div className="modal-close" onClick={ModalManager.close}>
                        ×
                    </div>
                    
                    <div className="modal-form sign">
                        { this.props.title && <h1>{this.props.title}</h1> /*Sign In To Continue*/} 
                        {
                            this.props.sub_title  ?
                            <p>
                                {this.props.sub_title /*Already registered? 
                                <span className="underline">Click here to sign in.</span> */}
                            </p> 
                            : null
                        }
                        <Tabs selectedIndex={this.state.tabIndex} onSelect={ (tabIndex) => { this.tabChanged(tabIndex); } }>
                             {
                                this.state.tabIndex < 2 && <TabList >
                                    <Tab>Create Account</Tab>
                                    <Tab>Sign In</Tab>  
                                </TabList> 
                             }
                            <TabPanel>
                                <div className="sign-wrapper">
                                    <span className='sign-wrapper__social'>
                                        <div className="btn facebook">
                                            {ICON_SIGN_FACEBOOK}
                                            Facebook
                                        </div>
                                        <div className="btn google">
                                            {ICON_SIGN_GOOGLE}
                                            Google
                                        </div>
                                    </span>
                                    <div className="or">
                                        <hr/>
                                        <div className="text">Or via Email</div>
                                        <hr/>
                                    </div>
                                    <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form">
                                        <div className="form-input">
                                            <label htmlFor="first-name">First Name</label>
                                            <input type="text" name="fname" id="first-name" autoComplete="given-name" autoFocus tabIndex="0" required />
                                        </div>
                                        <div className="form-input">
                                            <label htmlFor="last-name">Last Name</label>
                                            <input type="text" name="lname" id="last-name" autoComplete="family-name" required />
                                        </div>
                                        <div className="form-input w100">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" autoComplete="email" required onKeyUp={this.validEmail.bind(this)} />
                                        </div>
                                        {
                                            this.state.formErrors.email && <div className='form-input w100'>
                                                <p class='error'>{this.state.formErrors.email}</p>
                                            </div>
                                        }
                                        <div className="form-input w100">
                                            <label htmlFor="new-password">Password</label>
                                            <input type="password" name="password" id="new-password" autoComplete="new-password" required onChange={this.confirmPassword.bind(this)}/>
                                        </div>
                                        <div className="form-input w100">
                                            <label htmlFor="new-password">Confirm Password</label>
                                            <input type="password" name="password-confirm" id="password-confirm" autoComplete="password" required onKeyUp={this.confirmPassword.bind(this)}/>
                                        </div>
                                        {
                                           (  this.state.formErrors.password || this.state.errors ) && <div className='form-input w100'>
                                                <p class='error'>{this.state.formErrors.password || this.state.errors}</p>
                                            </div>
                                        }


                                        <button className="btn" onClick={this.register.bind(this)}>Create Account</button>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="sign-wrapper">
                                    {
                                        this.state.signInTitle && <div className='signIn-title'>{this.state.signInTitle}</div>
                                    }
                                    <span className='sign-wrapper__social'>
                                        <div className="btn facebook">
                                            {ICON_SIGN_FACEBOOK}
                                            Facebook
                                        </div>
                                        <div className="btn google">
                                            {ICON_SIGN_GOOGLE}
                                            Google
                                        </div>
                                    </span>
                                    <div className="or">
                                        <hr/>
                                        <div className="text">Or via Email</div>
                                        <hr/>
                                    </div>
                                    <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form">
                                        <div className="form-input w100">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" autoComplete="email" required />
                                        </div>
                                        <div className="form-input w100">
                                            <label htmlFor="new-password">Password</label>
                                            <input type="password" name="password" id="password" autoComplete="current-password" required />
                                        </div>
                                        { this.state.errors  && 
                                            <div className='error'>
                                                { this.state.errors }
                                            </div>
                                        }
                                        <div className="signIn__submit w100">
                                            <button className={"btn"+ (this.state.loading ? ' loading' : '') } onClick={this.signIn.bind(this)}>
                                                <span class="preloader preloader3">
                                                    <span class="left"><span class="anim"></span></span>
                                                    <span class="right"><span class="anim"></span></span>
                                                </span>
                                                Sign In
                                            </button>
                                            <a href="#!" onClick={(event)=>{this.tabChanged(2); }}>Forgot Password</a>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel> 

                            <TabPanel>
                                <div className="sign-wrapper signIn__forgotPassword">
                                      <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form">
                                        <div className='signIn-title'>Input your email and we'll send you a link to reset your password </div>
                                        <div className="form-input w100">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" autoComplete="email" required />
                                        </div>
                                        { this.state.message && <div class='w100 error'>{this.state.message}</div>}
                                        <button className={"btn"+ (this.state.loading ? ' loading' : '') } 
                                        onClick={(event) =>{  this.forgotPassword(event); }}>Send Email</button>
                                       </form>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <style jsx global>{signInModalStyles}</style>
         </Modal>
      );
   }
}