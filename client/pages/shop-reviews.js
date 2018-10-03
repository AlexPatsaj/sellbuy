import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';

// import feedStyles from '../static/comp-styles/feed/Feed'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'
import ShopHeader from  '../components/shop/ShopHeader'
import Rating from  '../components/shop-reviews/Rating'
import Reviews from  '../components/shop-reviews/Reviews'

import MidddlyInterface from '../models/MidddlyInterface'; 

export default class ShopSearchPage extends React.Component {
  constructor(props) {
    super (props); 
  }

  componentDidMount(){
    MidddlyInterface.pageLoad(); 
    if(!MidddlyInterface.isMobile){ //only stick on desktop 
      MidddlyInterface.stickElements(document.querySelectorAll('.sticky'));  
    } 
  }

  render() {
    return <Layout>
        <Head>
          <title>Madewell Shop Reviews</title> 
        </Head> 
        <Header show={false} mobile={false}  marketplace/>
        <main>
            <ShopHeader page='reviews'/>
            <div className="f6f6f7">
              <Rating/>
              <Reviews/>
            </div>
          <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{}</style> */}
      </Layout>;
    }
};