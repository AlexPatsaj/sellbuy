import React from "react";
import indexStyles from '../static/comp-styles/reset-password/styles.scss'
import Layout from '../components/Layout'
import Head from 'next/head';

import Link from 'next/link';
//Components
import Header from  '../components/header/Header';
import Footer from  '../components/general/Footer'; 
 
export default class ParentClass extends React.Component {
  constructor(props) {
    super (props); 

    this.state = {
      'formErrors': ''
    };
    console.log(props.url.query.token);
  }

  static async getInitialProps({ req, query, params }) {
        if (req) {
            try {
                return { 'query': req.query, 'params': req.params }; 
            } catch(err) {
                 console.log(err);
            }
        }

        return { query, params };
  }

  /* 
  * Check if we have a token 
  */ 
  componentDidMount(){

  }

    /**
        * When creating an account we require that the user writes the password twice    
    */ 
    confirmPassword(){
        let ePassword = document.getElementById("new-password"); 

        if(ePassword.value == ''){return; }

        let eConfirm = document.getElementById("confirm-password"); 
        console.log('confirmPassword', ePassword.value, eConfirm.value); 

        this.state.formErrors.password =  ePassword.value !== eConfirm.value ? 'passwords must match' : ""; 
        this.setState({
            'formErrors' : this.state.formErrors
        });
    }

    savePassword(){
      if(this.state.formErrors){
        return;
      }
      Midddly.resetPassword(props.url.query.token, document.getElementById("new-password"));
    }


  render() {
    return <Layout>
        <Head>
          <title>Reset Password</title> 
        </Head> 
        <Header show={false} mobile={false} page='Marketplace'/>
        <main>
        <div className='resetPassword container'>  
          <form onSubmit= { () => {return false; }}>
 
            <h1> Choose your new password </h1>
            <div className="form-input w100">
                <label htmlFor="new-password">Password</label>
                <input type="password" name="new-password" id="new-password" autoComplete="new-password" required  onKeyup={this.confirmPassword.bind(this)} />
            </div>
            <div className="form-input w100">
                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" required onKeyup={this.confirmPassword.bind(this)} />
            </div> 

              {
                   this.state.formErrors.password   && <div className='form-input w100'>
                        <p class='error'>{this.state.formErrors.password  }</p>
                    </div>
              }
               <button className="btn" onClick={this.savePassword.bind(this)}>Save Password</button> 
          </form> 
        </div>  
        </main>
        <Footer/>
        <style jsx global>{indexStyles}</style>
      </Layout>;
    }
};