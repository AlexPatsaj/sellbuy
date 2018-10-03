import React from 'react';
import PropTypes from 'prop-types';
import FriendsTab from 'components/friends/FriendsTab';
import FriendsSearch from 'components/friends/FriendsSearch';
import FriendsToolbar from 'components/friends/FriendsToolbar';
import FriendsFilter from 'components/friends/FriendsFilter';
import FriendsList from 'components/friends/FriendsList';

import styles from '../../static/comp-styles/friends/FriendsBox.scss';

export default function FriendsBox({ active, users, onUnfollow }) {
  return (
    <div className="FriendsBox">
      <FriendsTab active={active} />
      <FriendsSearch />
      <FriendsToolbar count={users.length} />
      <FriendsFilter />
      <FriendsList list={users} onUnfollow={onUnfollow} />
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsBox.propTypes = {
  active: PropTypes.string,
  users: PropTypes.array,
  onUnfollow: PropTypes.func,
};

FriendsBox.defaultProps = {
  active: 'following',
  users: [],
};
