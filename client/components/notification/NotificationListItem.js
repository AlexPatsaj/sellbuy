import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/general/Avatar';
import styles from '../../static/comp-styles/notification/NotificationListItem.scss';

export default function NotificationListItem({ avatar, name, date, text, image }) {
  return (
    <div className="NotificationListItem">
      <div className="NotificationListItem-avatar">
        <Avatar src={avatar} name={name} />
      </div>
      <div className="NotificationListItem-content">
        <div className="NotificationListItem-info">
          <p className="NotificationListItem-title">{name}</p>
          <p className="NotificationListItem-subtitle">{date}</p>
        </div>
        <div className="NotificationListItem-text">
          <p className="NotificationListItem-title">{text}</p>
        </div>
      </div>
      <div className="NotificationListItem-image">
        <img src={image} />
      </div>
      <style jsx global>{styles}</style>
    </div>
  )
}

NotificationListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};