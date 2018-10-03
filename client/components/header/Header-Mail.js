import React from "react";
import mailStyles from '../../static/comp-styles/header/Header-Mail.scss'

import Link from 'next/link';
import {ICON_EMAIL} from '../static/Icons'; 

import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions';

export default class Mail extends React.Component {
    constructor(props) {
        super (props); 
        this.state = {
            isOpen:props.open
        } 
    } 

    componentDidMount(){
        let that = this; 
        headerReducer.subscribe(() => {
            let state = headerReducer.getState();  
            if(state.area && state.area !='mail'){
                that.openClose(null,state.area); 
            }
        }); 
    }
 
    openClose(event, area){
        console.log(" mail openClose area "+area+ " "+ this.state.isOpen); 

        if(area == 'mail' || area && !this.state.isOpen ){return; }

        this.setState({
            isOpen: !this.state.isOpen
        }); 

        if(event){
            headerReducer.dispatch( openCloseAction('mail') );     
        } 
    }

    render() {
    return  <div  className={"mail"+( this.state.isOpen ? ' open' :'')}>
                <span onClick={this.openClose.bind(this)}>{ICON_EMAIL}</span>
                <span className="mail-amount">1</span>
                <div className="mail-dropdown">
                    <div className="dropdown-triangle-up">▲</div>
                    <div className="mail-wrapper">
                        <div className="mail-dropdown__link">
                            <Link href="#"><a>View All Messages</a></Link>
                        </div>
                        <div className="mail-dropdown__message">
                            <div className="mail-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="mail-dropdown__interlocutor-message">
                                <div className="mail-dropdown__interlocutor-data">
                                    <span className="mail-dropdown__interlocutor-name">Christopher Owen</span>
                                    <span className="mail-dropdown__interlocutor-date date-time">Monday 15th, 10:40am</span>
                                </div>
                                <div className="mail-dropdown__message">
                                    Hi Bob, we have a great sale on at the moment, 50% off!! Get down to our store or visit us here http://hy18tol4gB whilst stocks last.
                                </div>
                            </div>
                        </div>
                        <div className="mail-dropdown__message">
                            <div className="mail-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="mail-dropdown__interlocutor-message">
                                <div className="mail-dropdown__interlocutor-data">
                                    <span className="mail-dropdown__interlocutor-name">Christopher Owen</span>
                                    <span className="mail-dropdown__interlocutor-date date-time">Monday 15th, 10:40am</span>
                                </div>
                                <div className="mail-dropdown__message">
                                    Hi Bob, we have a great sale on at the moment, 50% off!! Get down to our store or visit us here http://hy18tol4gB whilst stocks last.
                                </div>
                            </div>
                        </div>
                        <div className="mail-dropdown__message">
                            <div className="mail-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="mail-dropdown__interlocutor-message">
                                <div className="mail-dropdown__interlocutor-data">
                                    <span className="mail-dropdown__interlocutor-name">Christopher Owen</span>
                                    <span className="mail-dropdown__interlocutor-date date-time">Monday 15th, 10:40am</span>
                                </div>
                                <div className="mail-dropdown__message">
                                    Hi Bob, we have a great sale on at the moment, 50% off!! Get down to our store or visit us here http://hy18tol4gB whilst stocks last.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>{mailStyles}</style>
                <div className="header__popup-close" onClick={this.openClose.bind(this)}><span className="mobile-x-alignment">×</span></div>
            </div>;
        }
    };