import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProfileMenuItem from 'components/profile/ProfileMenuItem';
import { ICON_ADD_IMAGE } from 'components/static/Icons';

import MyProfileIcon from '../../static/images/profile-my.svg';
import MyAddressIcon from '../../static/images/profile-address.svg';
import MyNewsfeedIcon from '../../static/images/profile-newsfeed.svg';
import OrdersIcon from '../../static/images/profile-orders.svg';
import MyPostsIcon from '../../static/images/profile-posts.svg';
import FriendsIcon from '../../static/images/profile-friends.svg';
import MessagesIcon from '../../static/images/profile-messages.svg';
import MyListsIcon from '../../static/images/profile-lists.svg';
import NotificationIcon from '../../static/images/profile-notification.svg';
import SettingsIcon from '../../static/images/profile-settings.svg';

import styles from '../../static/comp-styles/profile/ProfileMenu.scss';

const menu = [
  {
    id: 'my_profile',
    label: 'My Profile',
    icon: MyProfileIcon,
    to: '/'
  },
  {
    id: 'my_address',
    label: 'My Address',
    icon: MyAddressIcon,
    to: '/'
  },
  {
    id: 'my_newsfeed',
    label: 'My Newsfeed',
    icon: MyNewsfeedIcon,
    to: '/'
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: OrdersIcon,
    to: '/'
  },
  {
    id: 'my_posts',
    label: 'My Posts',
    icon: MyPostsIcon,
    to: '/'
  },
  {
    id: 'friends',
    label: 'Friends',
    icon: FriendsIcon,
    to: '/profile/following'
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: MessagesIcon,
    to: '/'
  },
  {
    id: 'my_lists',
    label: 'My Lists',
    icon: MyListsIcon,
    to: '/'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: NotificationIcon,
    to: '/profile/notifications'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon,
    to: '/'
  },
];

class ProfileMenu extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleToggleMobileMenu() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }

  render() {
    const {
      mobileOpen
    } = this.state;
    return (
      <nav className="ProfileMenu">
        <button className="ProfileMenu-menu-btn" onClick={this.handleToggleMobileMenu.bind(this)}>
          Menu <span className="ProfileMenu-menu-btn-icon">{mobileOpen ? '-' : '+'}</span>
        </button>
        <ul className={classNames('ProfileMenu-list', { 'open': mobileOpen })}>
          {
            menu.map(item => <ProfileMenuItem {...item} isActive={item.id === this.props.active} />)
          }
        </ul>
        <style jsx global>{styles}</style>
      </nav>
    )
  }
}

ProfileMenu.propTypes = {
  active: PropTypes.string,
};

export default ProfileMenu;