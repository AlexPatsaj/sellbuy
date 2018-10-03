import React from 'react'
import Link from 'next/link'
import reviewStyles from '../../static/comp-styles/shop-reviews/Review.scss'
import {ICON_SEARCH} from '../static/Icons' 
import Ratings from 'react-ratings-declarative'
import TruncateMarkup from 'react-truncate-markup'

export default class Review extends React.Component {
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
        const longText =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
            'laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex quod dolor? Omnis vero illo laudantium molestiae eos magnam nesciunt nam alias molestias iure praesentium est, maxime aliquam doloremque quia.'+
            'laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex quod dolor? Omnis vero illo laudantium molestiae eos magnam nesciunt nam alias molestias iure praesentium est, maxime aliquam doloremque quia.';;
            

        const readMoreEllipsis = (
            <span>
                ...{' '}
                <span onClick={this.toggleTruncate} className="read-more">
                    Read more
                </span>
            </span>
        );

    	return <div className="review">
                    <div className="customer-reply">
                        <div className="customer-reply__avatar avatar">
                            <img src="../static/images/pic-1.png" alt=""/>
                            <p className="online">Online</p>
                        </div>
                        <div className="customer-post">
                            <div className="user-data">
                                <p className="user-name">
                                    Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas
                                </p>
                                <Ratings
                                    rating={4.6}
                                    widgetRatedColors="#F7D620"
                                    widgetEmptyColors="#ccc"
                                    widgetDimensions="16px"
                                    widgetSpacings="3px"
                                    changeRating={this.changeRating}
                                    typeOfWidget='Star'
                                    >
                                    <Ratings.Widget  widgetHoverColor="#F7D620"/>
                                    <Ratings.Widget  widgetHoverColor="#F7D620"/>
                                    <Ratings.Widget widgetHoverColor="#F7D620"/>
                                    <Ratings.Widget widgetHoverColor="#F7D620" />
                                    <Ratings.Widget widgetHoverColor="#F7D620"/>
                                </Ratings>
                            </div>
                            <div className="user-message">

                                {this.state.shouldTruncate ? (
                                        <TruncateMarkup lines={2} ellipsis={readMoreEllipsis}>
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

                                <img src="../static/images/cart.jpg" alt=""/>
                                <img src="../static/images/cart.jpg" alt=""/>
                                <img src="../static/images/cart.jpg" alt=""/>
                                <img src="../static/images/cart.jpg" alt=""/> 
                            </div>
                        </div>
                        <div className="date-time">2h</div>
                    </div>
                    {/* Seller reply */}
                    <div className="seller-reply">
                        <div className="seller-reply__avatar avatar">
                            <img src="../static/images/pic-1.png" alt=""/>
                        </div>
                        <div className="seller-reply__text">
                            <p className="heading">Seller's reply</p>
                            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eius id voluptas perferendis mollitia eveniet quas sequi magnam maiores, distinctio quibusdam, optio commodi aspernatur! Magnam veniam distinctio placeat voluptatum minima.</p>
                        </div>
                        <div className="date-time">1h</div>
                    </div>
                <style jsx global>{reviewStyles}</style>
            </div>; 
    }
};

