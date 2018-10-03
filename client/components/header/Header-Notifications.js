import React from "react";
import notificationsStyles from '../../static/comp-styles/header/Header-Notifications.scss'

import Link from 'next/link'; 
import {ICON_NOTIFICATION} from '../static/Icons';

import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions';

export default class Notifications extends React.Component {
    constructor(props) {
        super (props); 
        this.state = {
            isOpen:props.open
        }


        let that = this; 
        headerReducer.subscribe(() => {
            let state = headerReducer.getState();  
            console.log("subscribed Basket " , state); 

            if((state.area && state.area != 'notifications')  && that.state.isOpen){ //some other area was opened and we are open 
                that.openClose(null); 
            }
        }); 
    }

    openClose(event){  
        this.setState({
            isOpen: !this.state.isOpen
        }); 

//      if we are opening , thell others to close 
        if(event){
            headerReducer.dispatch( openCloseAction('notifications') );     
        } 

    }

    render() {
    return <div className={"notifications " + (this.state.isOpen?'open':'')}>
                <span onClick={this.openClose.bind(this)}> {ICON_NOTIFICATION}</span>
                <div className="notifications-dropdown">
                    <div className="dropdown-triangle-up">▲</div>
                    <div className="notifications-dropdown__wrapper">
                        <div className="notifications-dropdown__link">
                            <Link href="#"><a>View All Notifications</a></Link>
                        </div>
                        <div className="notifications-dropdown__message">
                            <div className="notifications-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="notifications-dropdown__message-text">
                                <span className="notifications-dropdown__user-name">Jackson Kim</span> commented on your post: “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                                <div className="notifications-dropdown__misc">
                                    <img src="../static/images/notification-img.jpg" alt=""/>
                                    <span className="notifications-dropdown__interlocutor-date date-time">10:40am</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="notifications-dropdown__message">
                            <div className="notifications-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="notifications-dropdown__message-text">
                                <span className="notifications-dropdown__user-name">Jackson Kim</span> commented on your post: “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                                <div className="notifications-dropdown__misc">
                                    <img src="../static/images/notification-img.jpg" alt=""/>
                                    <span className="notifications-dropdown__interlocutor-date date-time">10:40am</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="notifications-dropdown__message">
                            <div className="notifications-dropdown__interlocutor-avatar">
                                <img src="../static/images/messenger.jpg" alt={'user.name'}/>
                            </div>
                            <div className="notifications-dropdown__message-text">
                                <span className="notifications-dropdown__user-name">Jackson Kim</span> commented on your post: “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                                <div className="notifications-dropdown__misc">
                                    <img src="../static/images/notification-img.jpg" alt=""/>
                                    <span className="notifications-dropdown__interlocutor-date date-time">10:40am</span>
                                </div>
                            </div>
                        </div>
                        
                       

                    </div>
                </div>

                <div className="header__popup-close" onClick={this.openClose.bind(this)}><span className="mobile-x-alignment">×</span></div>
            <style jsx global>{notificationsStyles}</style>
        </div>;
    }
};