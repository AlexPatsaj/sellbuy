import React from 'react';
import PropTypes from 'prop-types';
import NotificationListItem from 'components/notification/NotificationListItem';

import styles from '../../static/comp-styles/notification/NotificationList.scss';

export default function NotificationList({ list }) {
  return (
    <div className="NotificationList">
      {
        list.map(item => <NotificationListItem {...item} />)
      }
      <style jsx global>{styles}</style>
    </div>
  )
}

NotificationList.propTypes = {
  list: PropTypes.array,
};

NotificationList.defaultProps = {
  list: [],
};
