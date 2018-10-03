import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from '../../static/comp-styles/search/SearchBrandItem.scss'

class SearchBrandItem extends React.Component {
  render() {
    const {
      name,
      count,
      items,
    } = this.props;
    return (
      <div className="brand-item">
        <div className="brand-item__header">
          <div className="brand-item__header-label">
            <h2><Link href="/">{name}</Link></h2>
            <h3>{count} items</h3>
          </div>
          <div className="btn outline">FOLLOW</div>
        </div>
        <div className="brand-item__items">
          <div className="brand-item__items-left">
            {
              items.slice(1).map((item) => (
                <img src={item} alt={item} />
              ))
            }
          </div>
          <div className="brand-item__items-right">
            <img src={items[0]} alt={items[0]} />
          </div>
        </div>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

SearchBrandItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default SearchBrandItem;