import React from 'react'; 
import Layout from '../components/Layout' 
import Head from 'next/head';
 
import Header from  '../components/header/Header'
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer' 
import indexStyles from './staticPage.scss'

/** We can't use - in pageNames because next.js interprets that as a /folder */ 
import Midddly from '../models/Midddly'; 
 
export default class StaticPage extends React.Component {
  constructor(props) {
    super (props);  

    this.state={
      'content': '',
      'content_heading':''
    };  
  }

  static async getInitialProps (req) {  
    return req.query;
  }

  componentDidMount(){
    Midddly.getPage(this.props.url.query.slug,(resp) =>  {
       this.setState({
        'content': resp.data.content,
        'content_heading' : resp.data.content_heading
       }) 
    });
  }

  render() {
    return <Layout>
        <Head>
          <title>Shop</title> 
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <main>  
          <div className='container'>
            <div className='staticPage' >
              <h1>{this.state.content_heading}</h1>
              <div dangerouslySetInnerHTML={{ __html:this.state.content}}></div>
            </div>
          </div>
          <Subscription/>
           <style jsx global>{indexStyles}</style> 
        </main>
        <Footer/> 
      </Layout>;
    }
};