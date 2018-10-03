import React from 'react';
import Head from 'next/head';

//Components
import Layout from '../components/Layout';
import Header from  '../components/header/Header';
import Footer from  '../components/general/Footer';
import BannerSlides from  '../components/index/BannerSlides';
//import HotDeals from  '../components/offers/HotDeals';
//import StoresNear from  '../components/index/StoresNear';
import Categories from  '../components/index/Categories';
//import Banner from  '../components/index/Banner';

import HotDealsSlider from '../components/offers/HotDealsSlider';
import StoresNearSlider from  '../components/index/StoresNearSlider';
import Banners from '../components/index/Banners';
import PopularCategories from  '../components/index/PopularCategories';
import Subscription from  '../components/general/Subscription';

import indexStyles from './index.scss';

export default class ParentClass extends React.Component {
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header show={true} mobile={false} page='Marketplace'/>

      <main>
        <div className="container ">
          <BannerSlides/>
        </div>

        <HotDealsSlider />

        <HotDealsSlider title={'Featured products'} />

        <StoresNearSlider />

        <Categories />

        <Banners />

        <PopularCategories/>

        <Subscription/>

      </main>

      <Footer/>
      <style jsx global>{indexStyles}</style>
    </Layout>;
  }
};
