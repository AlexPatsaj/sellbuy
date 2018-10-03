import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';

// import feedStyles from '../static/comp-styles/feed/Feed.scss'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'
import ShopHeader from  '../components/shop/ShopHeader'

import RecentPosts from  '../components/shop-home/RecentPosts'
import SaleItems from  '../components/shop-home/SaleItems'
import HotDeals from '../components/offers/HotDeals'
//import Deals from  '../components/shop-home/Deals'
import NewArrivals from  '../components/shop-home/NewArrivals'
import MostPopular from  '../components/shop-home/MostPopular'

/** We can't use - in pageNames because next.js interprets that as a /folder */ 

export default class ShopFeed extends React.Component {
  constructor(props) {
    super (props); 
  }

  render() {
    return <Layout>
        <Head>
          <title>Shop</title> 
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <main>
          <ShopHeader page='home'/>
          <RecentPosts />
          <HotDeals title='Deals'/>
          <SaleItems />
          <NewArrivals/>
          {/*<MostPopular/> we are dumping this responsive nightmare there's a new layout on the way :P hold your breath */}
          <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{}</style> */}
      </Layout>;
    }
};