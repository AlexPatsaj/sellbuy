import React from "react";
import indexStyles from './index.scss'
import Layout from '../components/Layout'
import { IMaskInput } from "react-imask";
import Head from 'next/head';
//Components
import Header from  '../components/header/Header'

import HeaderBannerStatic from  '../components/header/HeaderBannerStatic'
import Subcategories from  '../components/general/Subcategories'
import Categories from  '../components/header/Header-Categories'
import HotDeals from  '../components/offers/HotDeals'
// import DealOfDay from  '../components/general/DealOfDay'
import Bannerx1170x264 from  '../components/offers/Bannerx1170x264'
import MoreDeals from  '../components/offers/MoreDeals'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'; 

import HotDealsSquarish from '../components/offers/HotDealsSquarish'; 


export default class TestPage extends React.Component {
  constructor(props) {
    super (props);
    // this.state = {
    //   screen: 1
    // }
  }


  render() {
    return <Layout>
        <Head>
          <title>Home Page</title> 
        </Head> 
        <Header show={true} mobile={false} page='Marketplace'/>
        <main>
          <HotDealsSquarish/>
          <MoreDeals/>
          <Subcategories/>
          <HeaderBannerStatic/>
          <Categories mobile={true} show={true}/>
          <HotDeals/>
          <Subscription/>
        </main>
        <Footer/>
        <style jsx global>{indexStyles}</style>
      </Layout>;
    }
};