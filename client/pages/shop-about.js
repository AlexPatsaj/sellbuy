import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';

// import feedStyles from '../static/comp-styles/feed/Feed'

//Components
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'
import ShopHeader from  '../components/shop/ShopHeader'

import About from  '../components/shop-about/About'
import Contacts from  '../components/shop-about/Contacts'
import Info from  '../components/shop-about/Info'
import Map from  '../components/shop-about/Map'
import Schedule from  '../components/shop-about/Schedule'

import MidddlyInterface from '../models/MidddlyInterface'; 
import Midddly from '../models/Midddly'; 

export default class ShopSearchPage extends React.Component {
  constructor(props) {
    super (props); 

    this.state = {
      seller : {openHours:[]}
    }; 
  }

  componentDidMount(){
    /*MidddlyInterface.pageLoad(); 
    if(!MidddlyInterface.isMobile){ //only stick on desktop 
      MidddlyInterface.stickElements(document.querySelectorAll('.sticky'));  
    } */ 
    this.setState({
      seller: Midddly.getSeller(1)
    }); 
  }

  render() {

    return <Layout>
        <Head>
          <title>About Madewell on Midddly</title> 
        </Head> 
        <Header show={false} mobile={false}  marketplace/>
        <main>
            <ShopHeader page='about' />
            <div className="f6f6f7">
              <div className="about container">
                <div className="about-wrapper">
                  <div className="left-side">
                    <About/>
                    
                  </div>
                  <div className="middle">
                    <Contacts phonelink="tel:0123456789" phone="+0 (123) 456-78-90"/>
                    <hr/>
                    <Info/>
                  </div>
                  {this.props.showSchedule && <div className="right-side">
                    <Schedule hours={this.state.seller.openHours} sellerTimezone={this.state.seller.timezone}/>
                  </div>}
                </div>
                <Map/>
              </div>
            </div>
          <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{}</style> */}
      </Layout>;
    }
};