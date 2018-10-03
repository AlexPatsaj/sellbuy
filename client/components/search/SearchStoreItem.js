import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import Ratings from 'react-ratings-declarative';
import {ICON_HUMAN} from '../static/Icons';

import styles from '../../static/comp-styles/search/SearchStoreItem.scss'

class SearchStoreItem extends React.Component {
  render() {
    const {
      items,
      itemsCount,
      name,
      logo,
      rating,
      followers,
      address,
      tags,
      discount,
    } = this.props;
    return (
      <div className="index-store">
        <div className="store-products">
          {
            items.map((item) => (
              <div className="store-product">
                <img src={item} alt={item}/>
              </div>
            ))
          }
          <div className="store-product amount">
            <p>{itemsCount}+</p>
            <p>items</p>
          </div>
        </div>
        <div className="store-name">
          <div className="logo">
            <img src={logo} alt={logo}/>
          </div>
          <div className="store-name__info">
            <h3><Link href='/shop'>{name}</Link></h3>
            <div className="store__media-parameters">
              <Ratings
                rating={rating}
                widgetRatedColors="#F7D620"
                widgetEmptyColors="#ccc"
                widgetHoverColors="#F7D620"
                widgetDimensions="12px"
                widgetSpacings="1px"
                typeOfWidget='Star'
              >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
              </Ratings>
              <div className="followers">
                {ICON_HUMAN}
              </div>
              {followers}
            </div>
          </div>
          <div className="store-name__address">
            {address}
          </div>
          <div className="store-name__tags">
            {
              tags.map((tag) => (
                <span className="store-name__tags-item">#<span className="store-name__tags-label">{tag}</span></span>
              ))
            }
          </div>
        </div>
        <div className="store-link">
          {
            discount && (
              <div className="store-link__discount">
                <div className="store-link__discount-label">{discount}</div>
                <div>on selected items</div>
              </div>)
          }
          <div className="btn">VISIT STORE</div>
          <div className="btn outline store-link__discount-follow">+ FOLLOW</div>
        </div>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

SearchStoreItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  logo: PropTypes.string,
  address: PropTypes.string,
  followers: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  discount: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  itemsCount: PropTypes.number,
};

export default SearchStoreItem;