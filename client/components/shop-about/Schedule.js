import React from 'react'
import Link from 'next/link'
import scheduleStyles from '../../static/comp-styles/shop-about/Schedule.scss'
import {ICON_CLOCK} from '../static/Icons'; 

import moment from 'moment-timezone'; 

import User from '../../models/MidddlyUser'; 

export default class Schedule extends React.Component {
    constructor(props) {
        super (props);
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 

        this.state = {
            isOpen : false, 
            user : null
        }

        this.today = moment().format("YYYY-MM-DD"); 
    } 

    componentDidMount(){
        let user = typeof(User.getUser()) != 'undefined' ? User.getUser() : null;
 

        this.setState({
            user ,
            isOpen : this.isOpen()
        });
    }

    isOpen(){
        if(this.props.hours.length == 0  ){
            console.log("no opening hours are set ",this.props.hours.length); 
            return; 
        }

        let dayOfTheWeek = moment().day();
        let time = this.props.hours[dayOfTheWeek];   

        let nowHour = moment().hour();

        let fromTime = moment.tz(this.today + " "+ time.from+":00",this.props.sellerTimezone);
        let toTime = moment.tz(this.today +" " +time.to +":00", this.props.sellerTimezone); 

    
        return nowHour > fromTime.hour() && nowHour < toTime.hour(); 
    }

    /*
        * If the user is not logged in show the local time , else Show the user the shop hours in his time 
    */
    getUserTime(shopTime){ 
        if( !this.state.user  || this.state.user.timezone == this.props.sellerTimezone ){
            return moment(shopTime); 
        }

        let sellerTime = moment.tz(shopTime,this.props.sellerTimezone);
        let userTime =  sellerTime.clone().tz(this.state.user.timezone); 
        return userTime;
    }

    /* https://momentjs.com/docs/#/displaying/ */ 
    render() {  
    	return <div className="schedule">
                    <h3>Working hours</h3>
                    <div className={"schedule-now" + (this.state.isOpen ? 'open' : '')}>
                        {ICON_CLOCK} {this.state.isOpen ? 'Open' : 'Closed'} now
                    </div>
                    <ul className="schedule-list">
                        {
                         this.props.hours.map( (hour,idx) => { 
                            return <li key={"shopTime"+idx} className="schedule-option">{this.days[idx]}: {this.getUserTime(this.today+" "+hour.from+":00").format("h a")} — {this.getUserTime(this.today+" "+hour.to+":00").format("h a")}</li>
                         })   
                        } 
                    </ul>
                    <style jsx global>{scheduleStyles}</style>
            </div>; 
    }
};

