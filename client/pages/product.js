import React from "react";
import Layout from '../components/Layout'
import { IMaskInput } from "react-imask";
import Head from 'next/head';

// import feedStyles from '../static/comp-styles/feed/Feed.scss'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Breadcrumbs from  '../components/product/Breadcrumbs-product'
import Footer from  '../components/general/Footer'
import ProductInfo from  '../components/product/ProductInfo'
import BannerStaticSellWithUs from  '../components/product/BannerStaticSellWithUs'
import AlsoViewed from  '../components/product/AlsoViewed'
import AlsoLiked from  '../components/product/AlsoLiked'
import ItemsMobile from  '../components/product/Items-Mobile'
import MayLikeMobile from  '../components/product/May-Like-Mobile'

import Midddly from '../models/Midddly'; 

/*
  * DONT forget to append apropriate meta 
  minimum: https://developers.facebook.com/docs/reference/opengraph/object-type/product/ 
*/
export default class Product extends React.Component {
  constructor(props) {
    super (props); 
    this.state = {
      'product': {}
    }; 
  }


  componentDidMount(){
    let products = Midddly.getProducts(); 
    this.setState({'product': products[0]}); 
  }

  render() {
    console.log('render Product page '); 
    return <Layout>
        <Head>
          <title>Samsung - 55” Class - LED - NU7100 Series - 2160p - Smart - 4K UHD TV with HDR</title> 
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <main>
          <div className="f6f6f7">
            <Breadcrumbs title="Samsung - 55” Class - LED - NU7100 Series - 2160p - Smart - 4K UHD TV with HDR"/>
            <div className="product container">
              <ProductInfo product={this.state.product}/>
              <BannerStaticSellWithUs />
              <AlsoViewed />
              <AlsoLiked />
              {/* Mobile comps */}
              <ItemsMobile title={"Other Items of This Seller"}/>
              <ItemsMobile title={"Similar Items"}/>
              <MayLikeMobile/>
            </div>
          </div>
          <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{feedStyles}</style> */}
      </Layout>;
    }
};