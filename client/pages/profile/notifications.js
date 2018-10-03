import React from "react";
import Head from 'next/head';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import withRedux from 'next-redux-wrapper';
import { compose } from 'recompose';
//Components
import Layout from 'components/Layout'
import Header from  'containers/Header'
import ProfileLayout from 'components/profile/ProfileLayout';
import NotificationList from 'components/notification/NotificationList';
import Footer from  'components/general/Footer'
// Redux
import initStore from 'store';

const dummyNotifyList = [
  {
    id: 'n1',
    name: 'Zara Black',
    date: '2 mins ago',
    text: 'liked your post: “Lorem ipsum.”',
    image: 'http://138.68.255.94:3001/square/images/electronics-main.png',
  },
  {
    id: 'n2',
    name: 'Zara Black',
    date: '2 mins ago',
    text: 'liked your post: “Lorem ipsum.”',
    image: 'http://138.68.255.94:3001/square/images/electronics-main.png',
  },
  {
    id: 'n3',
    name: 'Zara Black',
    date: '2 mins ago',
    text: 'liked your post: “Lorem ipsum.”',
    image: 'http://138.68.255.94:3001/square/images/electronics-main.png',
  },
  {
    id: 'n4',
    name: 'Zara Black',
    date: '2 mins ago',
    text: 'liked your post: “Lorem ipsum.”',
    image: 'http://138.68.255.94:3001/square/images/electronics-main.png',
  },
  {
    id: 'n5',
    name: 'Zara Black',
    date: '2 mins ago',
    text: 'liked your post: “Lorem ipsum.”',
    image: 'http://138.68.255.94:3001/square/images/electronics-main.png',
  }
];

class Notification extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Notification</title>
        </Head> 
        <Header show={false} mobile={false} marketplace/>
        <ProfileLayout active="notifications" title="Notifications">
          <NotificationList list={dummyNotifyList} />
        </ProfileLayout>
        <Footer/>
      </Layout>
    )
  }
}

const mapStateToProps = createStructuredSelector({
});

export default compose(
  withRedux(initStore, null),
  connect(mapStateToProps)
)(Notification)