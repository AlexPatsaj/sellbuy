import React from 'react';
import Link from 'next/link';

import ProductSlider from './ProductSlider';

import {ICON_USER_ARROW} from '../static/Icons';
import ItemsSectionStyles from '../../static/comp-styles/index/ItemsSection.scss';

export default class HotDealsSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className="ItemsSection">
      <div className="ItemsSection-wrapper">
        <div className="ItemsSection-heading">
          <div className="ItemsSection-colTitle">
            <h3 className="ItemsSection-title">
              {this.props.title ? this.props.title : 'Hot Deals'}
            </h3>
          </div>
          <div className="ItemsSection-colLink">
            <Link to="/"><a>
              <span>View All</span>
              <span className="linkArrow">
                {ICON_USER_ARROW}
              </span>
            </a></Link>
          </div>
        </div>
        <div className="ItemsSection-content">
          <ProductSlider />
        </div>
      </div>
      <style jsx global>{ItemsSectionStyles}</style>
    </section>
  }
}
