import React from 'react'
import Link from 'next/link'
import aboutStyles from '../../static/comp-styles/nearby/Shop.scss'
import {ICON_HUMAN} from '../static/Icons';
import Ratings from 'react-ratings-declarative';

import {selectStore} from '../../actions/nearby'; 
import nearbyReducer from '../../reducers/nearby';

export default class About extends React.Component {
    constructor(props) {
        super (props);
    }

    selectShop(shop){ 
      nearbyReducer.dispatch(selectStore(shop));
    }

    render() {
    	return <div className="NearbyShop"  onClick={ ()=> { this.selectShop(this.props.shop)}}>
              <div className="NearbyShop-thumb">
                <img src="../static/images/shop-pic-1.png" alt=""/>
              </div>
              <div className="NearbyShop-description">
                <h2 className="NearbyShop-title">
                  <Link href="/"><a>{this.props.shop.title}</a></Link>
                </h2>
                <p className="NearbyShop-location">City Center, Manama</p>
                <div className="NearbyShop-row">
                  <div className="NearbyShop-col">
                    <div className="NearbyShop-rating">
                      <div className="full-rating">
                        <Ratings
                          rating={3.5}
                          widgetRatedColors="#F7D620"
                          widgetEmptyColors="#ccc"
                          widgetDimensions="16px"
                          widgetSpacings="1px"
                          changeRating={this.changeRating}
                          typeOfWidget='Star'
                        >
                          <Ratings.Widget  widgetHoverColor="#F7D620"/>
                          <Ratings.Widget  widgetHoverColor="#F7D620"/>
                          <Ratings.Widget widgetHoverColor="#F7D620"/>
                          <Ratings.Widget widgetHoverColor="#F7D620" />
                          <Ratings.Widget widgetHoverColor="#F7D620"/>
                        </Ratings>
                        <span className="human-icon">{ICON_HUMAN}</span>
                        <span> 789</span>
                      </div>
                    </div>
                  </div>
                  <div className="NearbyShop-col">
                    <Link href="/">
                      <a className="NearbyShop-followBtn">Visit Store</a>
                    </Link>
                  </div>
                </div>
                <style jsx global>{aboutStyles}</style>
              </div>
            </div>
    }
};
