import React from 'react';
import {ICON_CREATE_LIST, ICON_UI_TICK} from '../static/Icons';
import followButtonStyles from '/static/comp-styles/general/FollowButton.scss'

export default class FollowButton extends React.Component {
    constructor(props) {
        super (props);
    } 
    
    render() {
        return <React.Fragment>
        {
        this.props.followed ? 
            <div className="btn follow grey">
                {ICON_UI_TICK} Followed
            </div> : 
            <div className="btn follow">
                {ICON_CREATE_LIST} Follow
            </div> 
        }
        <style jsx global>{followButtonStyles}</style>
        </React.Fragment>;
    }
}