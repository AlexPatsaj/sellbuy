import React from 'react';
import Link from 'next/link';
import BannerStyles from '../../static/comp-styles/index/Banners.scss';

export default class Banners extends React.Component {
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return <section className="Banners">
      <div className="Banners-wrapper">
        <div className="Banners-inner">
          <div className="Banners-item">
            <Link to="/"><a>
              <div className="Banners-image">
                <img src="../static/images/index-banner-1.jpg" />
              </div>
            </a></Link>
          </div>
          <div className="Banners-item">
            <Link to="/"><a>
              <div className="Banners-image">
                <img src="../static/images/index-banner-2.jpg" />
              </div>
            </a></Link>
          </div>
        </div>
      </div>
      <style jsx global>{BannerStyles}</style>
    </section>
  }
};
