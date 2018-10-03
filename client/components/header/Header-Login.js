import React from "react";

import userStyles from '../../static/comp-styles/header/Header-Login.scss';
import SignInModal from '../general/SignInModal';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions'; 

export default class HeaderLogin extends React.Component {
	
	constructor(props){
		super(props); 
	}

    /*
        *   since we are using absolute position to make sure the user can scroll down. We also should pull the scroll up 
    */
    openModal = ( e, param )=> {
        window.scrollTo(0, 0);
        e.preventDefault();
        param === "1" ?
        ModalManager.open(<SignInModal  tabToOpen={0} onRequestClose={() => true}/>)
        :
        ModalManager.open(<SignInModal tabToOpen={1} onRequestClose={() => true}/>);

//      if we are opening , thell others to close  
        headerReducer.dispatch( openCloseAction('user') );   
    }


	render(){  
		return <span className='user'>
            <div className="sign in" onClick={(e)=>{this.openModal(e, '1')}}>Sign Up</div> | 
            <div className="sign up" onClick={(e)=>{this.openModal(e, '2')}}>Login</div>
            <style jsx>{userStyles}</style> 
        </span>;
	}
}