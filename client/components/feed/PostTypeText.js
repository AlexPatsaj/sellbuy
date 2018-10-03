import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS, ICON_CHEVRON, ICON_CAMERA} from '../static/Icons'; 
import TruncateMarkup from 'react-truncate-markup'

import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'
export default class SuggestedFriends extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            shouldTruncate: true
        }
        
    } 
    toggleTruncate = () => {
        this.setState({
            shouldTruncate: !this.state.shouldTruncate
        })
    }

   
    render() {
    
    const longText = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam facilis nobis, quaerat, aliquam earum dolore eum vel dolorum dignissimos ad quas eos praesentium saepe aliquid quisquam officia ipsum quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam sed perferendis a quos consequatur incidunt consequuntur ea iusto fugiat! Nisi, voluptatibus? Ipsa possimus autem in tempora eos debitis sed? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae suscipit sed ex eos architecto dolorem quibusdam minima vero veritatis ipsa? Earum repellat deleniti ea recusandae, nobis vero. Sapiente, accusantium mollitia. <br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\n Ratione dolor similique delectus error! Omnis mollitia aliquam perspiciatis expedita porro sed vitae ea ex non consequuntur sequi fugiat quos, maxime nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure reiciendis ipsum quasi non ipsam illo asperiores aperiam, molestias fugit sunt fuga! Delectus odit velit ipsum cupiditate quis explicabo voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis doloremque excepturi ea atque autem possimus minima rem, tempora similique totam, aliquid sequi ratione tempore perferendis reprehenderit veniam voluptas commodi?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/>Placeat quae natus dicta ad ipsam molestias modi velit amet dolores itaque, nostrum culpa, unde reiciendis error eos fugit reprehenderit blanditiis sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem delectus, molestias fugit dolores ipsam dolor facilis quas, ea cumque vel nobis architecto enim rem expedita saepe, mollitia deserunt incidunt quis.</p>

    const readMoreEllipsis = (
        <span>
            ...{' '}
            <span onClick={this.toggleTruncate} className="read-more">
                Read more
            </span>
        </span>
    );
    return  <div className="post-type products">
                <div className="post-header">
                    <div className="post-general">
                        <div className="post-author">
                            <div className="post-avatar">
                                <img src="../static/images/post-avatar.png" alt=""/>
                            </div>
                            <div className="post-author__name">
                                <strong>Zara</strong>
                                <p className="date-time">1 hour ago</p>
                            </div>
                        </div>
                        <div className="post-menu">
                            {ICON_MENU_DOTS}
                            <div className="post-dropdown">
                                <span className="dropdown-option">
                                    Edit
                                </span>
                                <span className="dropdown-option">
                                    Delete
                                </span>
                                <span className="dropdown-option">
                                    Report inappropriate content
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="post-body">
                    
                    {this.state.shouldTruncate ? (
                            <TruncateMarkup lines={5} ellipsis={readMoreEllipsis}>
                                <div className="user-text">
                                    {longText}
                                </div>
                            </TruncateMarkup>
                        ) : (
                            <div className="user-text">
                                {longText}
                                <span onClick={this.toggleTruncate} className="show-less">
                                    {' Show less'}
                                </span>
                            </div>
                        )
                    }
                    
                    <div className="social-icons">
                        <Like likes_number={22}/>
                        <CommentsIcon comments_number={7}/>
                        <Share shares_number={12} horisontal={true}/>
                    </div>
                    <Comments/>
                </div>
                
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};