import React from "react";
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import withRedux from 'next-redux-wrapper';
import { compose } from 'recompose';
//Components
import Layout from 'components/Layout'
import Header from 'containers/Header'
import ProfileLayout from 'components/profile/ProfileLayout';
import FriendsBox from 'components/friends/FriendsBox';
import Footer from 'components/general/Footer'
// Redux
import initStore from 'store';
import { searchFriends, unfollowUser } from 'actions/friends';
import { selectList } from 'selectors/friends';
import { ENDPOINT_FOLLOWERS_LIST } from 'models/Endpoints';

class Friends extends React.Component {
  componentDidMount() {
    this.props.searchFriends();
  }

  render() {
    const {
      list,
      onUnfollow,
    } = this.props;
    return (
      <Layout>
        <Head>
          <title>Friends</title>
        </Head>
        <Header show={false} mobile={false} marketplace />
        <ProfileLayout active="friends">
          <FriendsBox active="followers" users={list} onUnfollow={onUnfollow} />
        </ProfileLayout>
        <Footer/>
      </Layout>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

const mapDispatchToProps = (dispatch) => ({
  searchFriends: () => dispatch(searchFriends(ENDPOINT_FOLLOWERS_LIST)),
  onUnfollow: (id) => dispatch(unfollowUser(id)),
});

export default compose(
  withRedux(initStore, null),
  connect(mapStateToProps, mapDispatchToProps)
)(Friends)