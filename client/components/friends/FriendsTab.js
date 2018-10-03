import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';

import styles from '../../static/comp-styles/friends/FriendsTab.scss';

export default function FriendsTab({ active }) {
  return (
    <div className="FriendsTab">
      <div className={classNames('FriendsTab-item', { 'is-active': active === 'following' })}>
        <Link prefetch href="/profile/following">
          <a>Following</a>
        </Link>
      </div>
      <div className={classNames('FriendsTab-item', { 'is-active': active === 'followers' })}>
        <Link prefetch href="/profile/followers">
          <a>Followers</a>
        </Link>
      </div>
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsTab.propTypes = {
  active: PropTypes.string,
};

FriendsTab.defaultProps = {
  active: 'following',
};
