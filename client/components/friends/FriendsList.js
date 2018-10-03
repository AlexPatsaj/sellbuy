import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import FriendsCard from 'components/friends/FriendsCard';
import styles from '../../static/comp-styles/friends/FriendsList.scss';

export default function FriendsList({ list, onUnfollow }) {
  return (
    <div className="FriendsList">
      {
        !isEmpty(list) ?
          list.map(item => <FriendsCard key={item.id} {...item} onUnfollow={onUnfollow} />) :
          (
            <div className="FriendsList-notFound">Users not found</div>
          )
      }
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsList.propTypes = {
  list: PropTypes.array,
  onUnfollow: PropTypes.func,
};

FriendsList.defaultProps = {
  list: [],
};
