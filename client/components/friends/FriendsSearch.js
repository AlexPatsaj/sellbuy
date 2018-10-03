import React from 'react';
import PropTypes from 'prop-types';
import { ICON_SEARCH } from 'components/static/Icons';
import styles from '../../static/comp-styles/friends/FriendsSearch.scss';

export default function FriendsSearch() {
  return (
    <div className="FriendsSearch">
      <input className="FriendsSearch-input" type="text" placeholder="Search for users…" />
      <button className="FriendsSearch-btn">
        {ICON_SEARCH}
      </button>
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsSearch.propTypes = {
};

FriendsSearch.defaultProps = {
};
