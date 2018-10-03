import React from 'react'
import Link from 'next/link'
import contactsStyles from '../../static/comp-styles/shop-about/Contacts.scss'
import {ICON_PHONE, ICON_GLOBE} from '../static/Icons'; 

export default class Contacts extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="contacts">
                    <h3>Contact info</h3>
                    <div className="contact-option link">
                        {ICON_GLOBE}
                        <Link href=""><a>madewell.com</a></Link>
                    </div>
                    <div className="contact-option">
                        {ICON_PHONE}
                        <Link href={this.props.phonelink}><a>{this.props.phone}</a></Link>
                    </div>
                <style jsx global>{contactsStyles}</style>
            </div>; 
    }
};

