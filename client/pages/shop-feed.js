import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';

import feedStyles from '../static/comp-styles/shop-feed/Shop-feed.scss'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'
import ShopHeader from  '../components/shop/ShopHeader'
import Posts from  '../components/feed/Posts'
import Sidebar from  '../components/shop-feed/Sidebar'

/** We can't use - in pageNames because next.js interprets that as a /folder */ 

export default class ShopFeed extends React.Component {
  constructor(props) {
    super (props); 
    this.state = {
      mobileScrolled: false,
      feedLeftSideHeight: 0
    }
  }

  render() {
    return <Layout>
        <Head>
          <title>Shop</title> 
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <main>
          <ShopHeader page='feed' />
          <div className="f6f6f7">
            <div className="shop-feed container">
              <Posts shopfeed/>
              <Sidebar/>
            </div>
          </div>
          <Subscription/>
        </main>
        <Footer/>
        <style jsx global>{feedStyles}</style>
      </Layout>;
    }
};