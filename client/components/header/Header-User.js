import React from "react";
import userStyles from '../../static/comp-styles/header/Header-User.scss';
import Link from 'next/link';

import Avatar from 'components/general/Avatar';
import {ICON_USER_ARROW} from '../static/Icons';

import Midddly from '../../models/Midddly'; 
import User from '../../models/MidddlyUser'; 

import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions';


export default class HeaderUser extends React.Component {
    constructor(props) {
        super (props); 
        this.state={
            'isOpen' : props.open,
            'signed': false,
            'user' : {}
        };

        this.subscribeToHeader(); 
    }

    subscribeToHeader(){ 

        let that = this; 
        headerReducer.subscribe(() => {
            let state = headerReducer.getState();  
            console.log("subscribed Basket " , state); 

            if((state.area && state.area != 'user')  && that.state.isOpen){ //some other area was opened and we are open 
                that.openUser(null); 
            }
        }); 
    }
 
    componentDidMount(){
        this.setState({
            'signed' : User.isLoggedIn(),
            'user' : User.getUser()
        });
    }

    openUser(event){
        this.setState({
            'isOpen' : !this.state.isOpen
        });

//      if we are opening , thell others to close 
        if(event){
            headerReducer.dispatch( openCloseAction('user') );     
        } 
    }

    logout(){
        console.log("logout ");
        User.logout(); 
        location.reload(); 
    }

    render() {  
        console.log("User "+this.state.user); 
    
    return  <div className={"user "+ (this.state.isOpen ?' open':'')}> 
                 <div className="user__preview" onClick={this.openUser.bind(this)}>
                    <div className="user-avatar">
                        <Avatar src={this.state.user.avatar}
                                name={`${this.state.user.firstname} ${this.state.user.lastname}`} />
                    </div>
                    <div className="hello-username">
                        <div className="greet">Hello,</div>
                        <div className="username">{this.state.user.firstname}</div>
                    </div>
                    <div className="arrow">
                        {ICON_USER_ARROW}
                    </div>
                </div>
                <div className="user-dropdown">
                    <div className="dropdown-triangle-up">▲</div>
                    <div className="user-dropdown__wrapper">
                        <div className="user-dropdown__user-avatar">
                            <Avatar src={this.state.user.avatar}
                                    name={`${this.state.user.firstname} ${this.state.user.lastname}`} />
                        </div>
                        <div className="user-dropdown__name">
                            {this.state.user.firstname+" "+ this.state.user.lastname}
                        </div>
                        <div className="user-dropdown__follow">
                            <div className="user-dropdown__following">
                                <p>Following</p>
                                <p className="user-dropdown__following-amount" data-nfollowing={this.state.user.nFollowing}>
                                    {this.state.user.nFollowing}
                                </p>
                            </div>
                            <div className="user-dropdown__following">
                                <p>Followers</p>
                                <p className="user-dropdown__following-amount" data-nfollowers={this.state.user.nFollowers}>
                                    {this.state.user.nFollowers}
                                </p>
                            </div>
                        </div>
                        <ul className="user-dropdown__menu">
                            <li><Link href="#"><a>Summary</a></Link></li>
                            <li><Link href="#"><a>Recently Viewed</a></Link></li>
                            <li><Link href="#"><a>Bids/Offers</a></Link></li>
                            <li><Link href="#"><a>Watch List</a></Link></li>
                            <li><Link href="#"><a>Purchase History</a></Link></li>
                            <li><Link href="#"><a>Selling</a></Link></li>
                            <li><Link href="#"><a>Edit Profile</a></Link></li>
                            <li onClick={this.logout.bind(this)}><Link href="#"><a>Exit</a></Link></li>
                        </ul>
                    </div>
                    <div className="header__popup-close" onClick={this.openUser.bind(this)}><span className="mobile-x-alignment">×</span></div>
                </div> 
                <style jsx global>{userStyles}</style> 
                
            </div>;
        }
    };