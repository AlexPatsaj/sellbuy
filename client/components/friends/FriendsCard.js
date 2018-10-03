import React from 'react';
import PropTypes from 'prop-types';
import Ratings from 'react-ratings-declarative';
import Avatar from 'components/general/Avatar';
import {ICON_HUMAN} from 'components/static/Icons';
import styles from '../../static/comp-styles/friends/FriendsCard.scss';

export default function FriendsCard({ id, avatar, type, firstname, lastname, rating, followers, onUnfollow }) {
  return (
    <div className="FriendsCard">
      <div className="FriendsCard-avatar">
        <Avatar src={avatar} name={`${firstname} ${lastname}`} />
        <div className="FriendsCard-avatar-status" />
      </div>
      <div className="FriendsCard-body">
        <div className="FriendsCard-content">
          <div className="FriendsCard-content-type">{type}</div>
          <div className="FriendsCard-content-name">{`${firstname} ${lastname}`}</div>
          <div className="FriendsCard-content-info">
            <div className="FriendsCard-content-info-rating">
              <Ratings
                rating={rating}
                widgetRatedColors="#F7D620"
                widgetEmptyColors="#ccc"
                widgetHoverColors="#F7D620"
                widgetDimensions="12px"
                widgetSpacings="1px"
                typeOfWidget='Star'
              >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
              </Ratings>
            </div>
            <div className="FriendsCard-content-info-followers">
              {ICON_HUMAN} {followers}
            </div>
          </div>
        </div>
        <div className="FriendsCard-btns">
          <button className="btn outline">Message</button>
          <button className="btn grey" onClick={() => onUnfollow(id)}>Unfollow</button>
        </div>
      </div>
      <style jsx global>{styles}</style>
    </div>
  )
}

FriendsCard.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  type: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  rating: PropTypes.number,
  followers: PropTypes.string,
  onUnfollow: PropTypes.func,
};

FriendsCard.defaultProps = {
  type: 'Seller',
  firstname: 'No',
  lastname: 'Name',
  rating: 0,
  followers: '0',
};
