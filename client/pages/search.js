import React from "react";
import Head from 'next/head';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import withRedux from 'next-redux-wrapper';
import { compose } from 'recompose';
//Components
import Layout from '../components/Layout'
import Header from  '../containers/Header'
import Breadcrumbs from  '../components/general/Breadcrumbs'
import Legend from '../components/ui/Legend';
import SearchTabs from '../components/search/SearchTabs';
import Subscription from  '../components/general/Subscription'
import Footer from  '../components/general/Footer'

import { selectValue } from '../selectors/search';
import initStore from '../store';


class SearchPage extends React.Component {
  render() {
    const {
      searchValue,
    } = this.props;
    return (
      <Layout>
        <Head>
          <title>Search</title>
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <main>
          <div className="f6f6f7">
            <Breadcrumbs title="Search" />
            <div className="container">
              <Legend>Search Results</Legend>
              <span>You searched for: {searchValue}</span>
              <SearchTabs active={0} />
            </div>
            <Subscription/>
          </div>
        </main>
        <Footer/>
        {/* <style jsx global>{indexStyles}</style> */}
      </Layout>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  searchValue: selectValue(),
});

export default compose(
  withRedux(initStore, null),
  connect(mapStateToProps)
)(SearchPage)