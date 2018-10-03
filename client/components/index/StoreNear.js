import React from 'react';
import Link from 'next/link';
import Ratings from 'react-ratings-declarative'

import {ICON_HUMAN} from '../static/Icons';
import StoreNearStyles from '../../static/comp-styles/index/StoreNear.scss';

export default class StoreNear extends React.Component {
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return  <section className="StoreNear">
      <div className="StoreNear-thumb">
        <img src="../static/images/shop-pic-1.png" alt=""/>
      </div>
      <div className="StoreNear-description">
        <div className="StoreNear-row">
          <div className="StoreNear-colLogo">
            <div className="StoreNear-logo">
              <img src="static/images/shop-logo.jpg" />
            </div>
          </div>
          <div className="StoreNear-colContent">
            <h2 className="StoreNear-title">
              <Link href="/"><a>Watsons Wedding Apparel</a></Link>
            </h2>
            <p className="StoreNear-location">City Center, Manama</p>
            <div className="StoreNear-rating">
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
        </div>
        <div className="StoreNear-linksRow">
          <div className="StoreNear-linksCol">
            <Link href="/">
              <a className="StoreNear-followBtn StoreNear-followBtn--inverse">Follow 2k</a>
            </Link>
          </div>
          <div className="StoreNear-linksCol">
            <Link href="/">
              <a className="StoreNear-followBtn">Visit Store</a>
            </Link>
          </div>
        </div>
        <div className="StoreNear-products">
          <Link href="/">
            <a>
              <div className="StoreNear-productsList">
                <div className="StoreNear-productsItem">
                  <img src="http://138.68.255.94:3001/square/images/shop-product-1.png" alt=""/>
                </div>
                <div className="StoreNear-productsItem">
                  <img src="http://138.68.255.94:3001/square/images/shop-product-1.png" alt=""/>
                </div>
                <div className="StoreNear-productsItem StoreNear-productsItem--all">
                  <div>128+</div>
                  <div>items</div>
                </div>
              </div>
              <div className="StoreNear-productsCta">
                <span>Visit Store</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx global>{StoreNearStyles}</style>
    </section>
  }
};
