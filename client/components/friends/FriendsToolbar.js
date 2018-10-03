import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../static/comp-styles/friends/FriendsToolbar.scss';

export default function FriendsToolbar({ count }) {
  return (
    <div className="FriendsToolbar">
      <div className="FriendsToolbar-count">{count} results found</div>
      <div className="FriendsToolbar-resize">Show: 50 100 Show All</div>
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsToolbar.propTypes = {
  count: PropTypes.string,
};

FriendsToolbar.defaultProps = {
  count: 0,
};
