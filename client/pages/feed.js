import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';

import feedStyles from '../static/comp-styles/feed/Feed.scss'

//Components
import Header from  '../components/header/Header'
import FeedHeader from  '../components/feed/FeedHeader';
import FeedLeftSide from  '../components/feed/FeedLeftSide';
import FeedMain from  '../components/feed/FeedMain'; 
import FeedRightSide from '../components/feed/FeedRightSide'; 
import Subcategories from  '../components/general/Subcategories';
import Categories from  '../components/header/Header-Categories';
import Subscription from  '../components/general/Subscription';
import Footer from  '../components/general/Footer';
 
import MidddlyInterface from '../models/MidddlyInterface'; 

/**
*  Default entryPoint for seller 
*/ 
export default class FeedPage extends React.Component {
  constructor(props) {
    super (props); 
    this.state = {
      mobileScrolled: false,
      feedLeftSideHeight: 0
    }
  }

  componentDidMount() {
   // window.addEventListener('scroll', this.handleScroll);
    MidddlyInterface.stickElements(document.querySelectorAll('.sticky'));
  }

  componentWillUnmount() {
     // window.removeEventListener('scroll', this.handleScroll);
  } 

  getHeight = (height) => {
    console.log(height);
    this.setState({feedLeftSideHeight: height});
  }

/*  handleScroll(event){      
      if (  window.scrollY <= (this.state.feedLeftSideHeight+300) 
            && this.state.mobileScrolled === true
            && window.innerWidth <= 1080
            && window.innerWidth >= 768) {
                this.setState({mobileScrolled: false});
            }
      else if ( window.scrollY >= (this.state.feedLeftSideHeight+300) 
                && this.state.mobileScrolled !== true
                && window.innerWidth <= 1080
                && window.innerWidth >= 768) {
                    this.setState({mobileScrolled: true});
                }
      console.log(this.state);
  };*/

  render() {
    return <Layout>
        <Head>
          <title>Feed</title> 
        </Head> 
        <Header show={false} mobile={false} hambugerOnly feed/>
        {/* Categories inside of header must accept some props 
            to be shown in tablet hamburger */}
        <main>
          <div className="f6f6f7">
            <FeedHeader/>
            <div className="feed-wrapper container">
              <FeedLeftSide mobileScrolled={this.state.mobileScrolled} getHeight={this.getHeight}/> 
              <FeedMain mobileScrolled={this.state.mobileScrolled}/>
              <FeedRightSide/> 
            </div> 
          </div>
        </main>
        <style jsx global>{feedStyles}</style>
      </Layout>;
    }
};