import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {} from '../static/Icons'; 
import UserPreviewSmall from  './UserPreviewSmall'
import PerfectScrollbar from 'react-perfect-scrollbar'
// import User from '../../models/MidddlyUser' 

export default class SuggestedFriends extends React.Component {
    constructor(props) {
        super (props);
    } 

    // componentDidMount(){
    //     let user = typeof(User.getUser()) != 'undefined' ? User.getUser() : null;
    //     clgUser.getUser(User.getUser())

    //     this.setState({
    //         user
    //     });
    // }

    render() {
    console.log("this.state", this.state);
    return  <div className={"feed-left__suggested-friends " + (this.props.mobile ? 'mobile' : '')}>
                <h3 className="feed-left__header">
                    Suggested Friends
                    <span className="see-more mobile-only">See More</span>
                </h3>
                <PerfectScrollbar>
                    <div className="friends-wrapper">
                        <UserPreviewSmall followed={false} seller/>
                        <UserPreviewSmall followed={false}/> 
                        <UserPreviewSmall followed={false} seller/> 
                        <UserPreviewSmall followed={false}/> 
                    </div>
                </PerfectScrollbar>
                
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};