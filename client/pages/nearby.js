import React from "react";
import Layout from '../components/Layout'
import { IMaskInput } from "react-imask";
import Head from 'next/head';
import Sticky from 'react-stickynode';

// import feedStyles from '../static/comp-styles/feed/Feed.scss'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'

import Map from  '../components/nearby/Map'
import Shop from '../components/nearby/Shop'

import Midddly from '../models/Midddly';
import { ICON_SEARCH } from "../components/static/Icons";
import NearbyStoresStyles from '../static/comp-styles/nearby/NearbyStores.scss';


export default class Product extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      stickyMapEnabled: false,
      'shops': [ {
          "id":1,
          "title" :"The wau store 9",
          "location":"City Center, Manama",
          "rating":3.5,
          "url":"/",
          "latlng":{  lat: 26.206522, lng: 50.5818679 }
       },
       {
          "id":2,
          "title" :"The wau store 10",
          "location":"City Center, Manama",
          "rating":3.5,
          "url":"/",
          "latlng":{  lat: 26.207522, lng: 50.5838679 }
       },
       {
          "id":3,
          "title" :"The wau store",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.2114927, lng: 50.5904429}
       },
       {
          "id":4,
          "title" :"The wau store 1",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.205, lng: 50.584}
       },
       {
          "id":5,
          "title" :"The wau store 2",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.2214927, lng: 50.5204429}
       },
       {
          "id":6,
          "title" :"The wau store 3",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.2414927, lng: 50.5304429}
       },
       {
          "id":7,
          "title" :"The wau store 4 ",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.2514927, lng: 50.5404429}
       },
       {
          "id":8,
          "title" :"The wau store 5",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.264927, lng: 50.5504429}
       },
       {
          "id":9,
          "title" :"The wau store 6",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.1814927, lng: 50.5604429}
       },
       {
          "id":10,
          "title" :"The wau store 7",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.1814927, lng: 50.5704429}
       },
       {
          "id":11,
          "title" :"The wau store 8",
          "location":"City Center, Manama",
          "rating":4.5,
          "url":"/",
          "latlng":{  lat: 26.2014927, lng: 50.5804429}
       }
      ]
    };
  }

  handleResize = () => {
    if (window.innerWidth >= 992) this.setState({stickyMapEnabled: true}); else this.setState({stickyMapEnabled: false});
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    console.log('render Product page ');
    return <Layout>
        <Head>
          <title>Nearby Stores</title>
        </Head>
        <Header show={false} mobile={false} marketplace/>
        <main>
          <section className="NearbyStores">
            <div className="NearbyStores-wrapper">
              <div className="NearbyStores-heading">
                <h2 className="NearbyStores-title">Shops Near</h2>
                <form className="NearbyStores-searchBox">
                  <input type="search" name="search" autoComplete="search" id="search-nearby" placeholder="Enter your country, city or store name"/>
                  <div className="btn outline">{ICON_SEARCH}</div>
                </form>
                <p className="NearbyStores-searchResult">25 Stores found</p>
              </div>
              <div className="NearbyStores-inner">
                <div className="NearbyStores-map">
                  <Sticky enabled={this.state.stickyMapEnabled} top={125} bottomBoundary='.NearbyStores-wrapper'>
                    <Map shops={this.state.shops} />
                  </Sticky>
                </div>
                <div className="NearbyStores-content">
                  <div className="NearbyStores-list">
                    {
                      this.state.shops.map((shop,idx) => {
                        return  <Shop key={"shop"+idx} shop={shop}/>
                      })
                    } 
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Subscription/>
        </main>
        <Footer/>
        <style jsx global>{NearbyStoresStyles}</style>
      </Layout>;
    }
};
