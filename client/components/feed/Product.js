import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS, ADD_TO_CART, ICON_CAMERA, ICON_CHEVRON, ICON_HUMAN} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';
import Products from  './Products'
import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'
import TruncateMarkup from 'react-truncate-markup'
import Slider from "react-slick"

export default class SuggestedFriends extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            shouldTruncate: true
        }
        this.slider={}; 
    } 
    toggleTruncate = () => {
        this.setState({
            shouldTruncate: !this.state.shouldTruncate
        })
    }
    nextGroup(){
        this.slider.slickNext(); 
    }

    prevGroup(){
        this.slider.slickPrev(); 
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
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        // variableWidth: true,
        autoplay: false,
        slidesToScroll: 1,
        swipeToSlide: true, 
        arrows:false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows:false,
                    dots: true,
                },
            }
        ]
    }; 
    return  <div className="post-body__product-block">
                    <div className="post-body__product-wrapper">
                        <div className="product-image">
                            <img src="http://138.68.255.94:3001/square/images/post-1.png" alt=""/>
                        </div>
                        <div className="product-general">
                            <div className="product-info-wrapper">
                                <div className="product-description">
                                    <p className="product-name">Vintafe leather city bag with knotted details</p>
                                    {/*<p className="product-price"></p>*/}
                                </div>
                                <p className="feed-product-condition">Brand new • Adidas</p>
                                <div className="product-rating">
                                    <Ratings
                                        rating={3.5}
                                        widgetRatedColors="#F7D620"
                                        widgetEmptyColors="#ccc"
                                        widgetHoverColors="#F7D620"
                                        widgetDimensions="16px"
                                        widgetSpacings="1px"
                                        changeRating={this.changeRating}
                                        typeOfWidget='Star'
                                    >
                                        <Ratings.Widget/>
                                        <Ratings.Widget/>
                                        <Ratings.Widget/>
                                        <Ratings.Widget/>
                                        <Ratings.Widget/>
                                    </Ratings>
                                    <span class="followers">
                                    {ICON_HUMAN}
                                    214
                                    </span>
                                </div>
                                <p className="feed-product-shipping">Free shipping</p>
                            </div>
                            <div className="product-order">
                                {/* <div className="product-seller">By <Link href="/shop"><a>Om-nom-nom</a></Link></div> */}
                                <div className="btn">
                                    {ADD_TO_CART} 
                                    $120.59
                                </div>
                            </div>
                    </div>
                </div>
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};