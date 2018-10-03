import React from "react";
// import indexStyles from '../index'
import Layout from '../components/Layout'
import Head from 'next/head';
/* General Components */
import Header from  '../components/header/Header'
import HeaderBannerStatic from  '../components/header/HeaderBannerStatic'
import Subcategories from  '../components/general/Subcategories'
import Categories from  '../components/header/Header-Categories'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'

/* Specific Components */
import HotDeals from  '../components/offers/HotDeals'
import DealOfDay from  '../components/offers/DealOfDay'
import Bannerx1170x264 from  '../components/offers/Bannerx1170x264'
import MoreDeals from  '../components/offers/MoreDeals'

export default class ParentClass extends React.Component {
  constructor(props) {
    super (props);
    // this.state = {
    //   screen: 1
    // }
  }


  render() {
    return <Layout>
        <Head>
          <title>Deals</title> 
        </Head> 
        <Header show={true} mobile={false} marketplace/>
        <main>
          <div className="container">
            <HeaderBannerStatic/>
          </div>
          {/* <Categories mobile={true} show={true}/> */}
          <Subcategories/>
          <HotDeals/>
          <DealOfDay/>
          <Bannerx1170x264/>
          <MoreDeals/>
          <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{indexStyles}</style> */}
      </Layout>;
    }
};