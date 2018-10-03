import React from 'react';
import Link from 'next/link';

import PopularCategoriesStyles from '../../static/comp-styles/index/PopularCategories.scss';

export default class PopularCategories extends React.Component {
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return <section className="ItemsSection">
      <div className="ItemsSection-wrapper">
        <div className="ItemsSection-heading">
          <div className="ItemsSection-colTitle">
            <h3 className="ItemsSection-title">Popular Categories</h3>
          </div>
        </div>
        <div className="ItemsSection-content">
          <section className="PopularCategories">
            <div className="PopularCategories-list">
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Clothing</span>
                  </div>
                </a></Link>
              </div>
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Electronics</span>
                  </div>
                </a></Link>
              </div>
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Beauty & Health</span>
                  </div>
                </a></Link>
              </div>
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Jewellery & Watches</span>
                  </div>
                </a></Link>
              </div>
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Baby Items</span>
                  </div>
                </a></Link>
              </div>
              <div className="PopularCategories-item">
                <Link to="/"><a>
                  <div className="PopularCategories-title">
                    <span>Food Items</span>
                  </div>
                </a></Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx global>{PopularCategoriesStyles}</style>
    </section>
  }
};
