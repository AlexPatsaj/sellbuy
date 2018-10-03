import React from "react";
// import indexStyles from '../index'
import Layout from '../components/Layout'
import Head from 'next/head';
//Components
import Header from  '../components/header/Header'
import Breadcrumbs from  '../components/general/Breadcrumbs'
import Cart from  '../components/cart/Cart-Component'

import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'


export default class ParentClass extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return <Layout>
        <Head>
          <title>Cart</title> 
        </Head> 
        <Header show={false}  mobile={false} marketplace/>
        <main>
        <div className="f6f6f7">
          <Breadcrumbs title={"My Cart"}/>
          <Cart/> 
          <Subscription/>
        </div>
        </main>
        <Footer/>
        {/* <style jsx global>{indexStyles}</style> */}
      </Layout>;
    }
};