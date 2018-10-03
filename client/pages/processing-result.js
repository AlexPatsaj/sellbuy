import React from "react";
import Layout from '../components/Layout'
import Head from 'next/head';
//Components
import Header from  '../components/header/Header'
import Breadcrumbs from  '../components/general/Breadcrumbs'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'
import AlsoViewed from  '../components/product/AlsoViewed'
import AlsoLiked from  '../components/product/AlsoLiked'
import Success from  '../components/processing-result/Success'

export default class ParentClass extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return <Layout>
        <Head>
          <title>Checkout</title> 
        </Head> 
        <Header show={false}  mobile={false} marketplace/>
        <main>
        <div className="f6f6f7">
          <div className="container">
            <Success orderNumber={'№42342341'}/>
            <AlsoLiked/>
          </div>
        </div>
        <Subscription/>
        </main>
        <Footer/>
        {/* <style jsx global>{indexStyles}</style> */}
      </Layout>;
    }
};