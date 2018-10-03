import React from "react";
import dealOfDayStyles from '/static/comp-styles/offers/DealOfDay.scss'

/* Widgets */
import Share from  '../../components/general/Share'
import Like from  '../../components/general/Like'

export default class DealOfDay extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    }
    render() { 
        return  <div className="deal-of-day">
                    <div className="container">
                        <h2 className="deal-of-day__h2">Deal of The Day</h2>
                        <div className="deal-of-day__block">
                            <div className="deal-of-day__info">
                                <h3>Classic White Headphones</h3>
                                <span className="header-banner__price">$79.99 <strike>$399</strike></span>
                                <p className="header-banner__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem dicta ea velit. Cumque excepturi distinctio, aperiam alias omnis dignissimos, hic ullam dolorum maiores dolorem, quod doloribus repellat voluptatem. Veniam!</p>
                                <div className="btn">SHOP NOW</div>
                                <div className="deal-of-day__icons">
                                    <div className="deal-of-day__likes">
                                        <Like likes_number={22}/>
                                    </div>
                                    <div className="deal-of-day__shared">
                                        <Share shares_number={12} horisontal={true}/>
                                    </div>
                                </div>
                            </div>
                            <div className="deal-of-day__image">
                                <span className="deal-of-day__discount">40% <strong>OFF</strong></span>
                                <img src="../static/images/deal-of-the-day-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <style jsx global>{dealOfDayStyles}</style>
                </div>
        }
};