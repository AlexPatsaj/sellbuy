import React from "react";
import Link from 'next/link'
import shareStyles from '../../static/comp-styles/general/Share.scss'
import {ICON_SHARE, 
        ICON_SOCIAL_FACEBOOK, 
        ICON_SOCIAL_INSTAGRAM,
        ICON_SOCIAL_LINKEDIN,
        ICON_SOCIAL_PINTEREST,
        ICON_SOCIAL_TWITTER,
        ICON_SOCIAL_LINK} from '../static/Icons'; 

export default class Share extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            'opened' : false //because mobile does not have a hover event 
        }
    } 
    render() {
    return  <div className={"share-widget" + (this.state.opened ? ' opened ':'')}>
                <div className={ (this.props.horisontal ? "share-dropdown horisontal" : "share-dropdown") } >
                    <div className="share-icon-drop facebook">
                        {ICON_SOCIAL_FACEBOOK}
                    </div>
                    <div className="share-icon-drop instagram">
                        {ICON_SOCIAL_INSTAGRAM}
                    </div>
                    <div className="share-icon-drop LinkedIn">
                        {ICON_SOCIAL_LINKEDIN}
                    </div>
                    <div className="share-icon-drop Pinterest">
                        {ICON_SOCIAL_PINTEREST}
                    </div>
                    <div className="share-icon-drop Link">
                        {ICON_SOCIAL_LINK}
                    </div>
                </div>
                <div className="share-icon" onClick={() => {this.setState({'opened': !this.state.opened})}}> 
                    {ICON_SHARE}
                    {this.props.shares_number}
                </div>
            <style jsx global>{shareStyles}</style>
        </div>
    }
};