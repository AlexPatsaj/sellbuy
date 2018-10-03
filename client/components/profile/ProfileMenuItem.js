import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import classNames from 'classnames';
import { isFunction } from 'lodash';
import styles from '../../static/comp-styles/profile/ProfileMenuItem.scss';

export default function ProfileMenu({ icon, label, to, isActive }) {
  icon = isFunction(icon) ? React.createElement(icon) : icon;
  return (
    <li className={classNames('ProfileMenuItem', { 'is-active': isActive })}>
      <Link href={to}>
        <a className="ProfileMenuItem-link">
          {
            icon && <div className="ProfileMenuItem-icon">{icon}</div>
          }
          <span className="ProfileMenuItem-label">{label}</span>
        </a>
      </Link>
      <style jsx global>{styles}</style>
    </li>
  )
}

ProfileMenu.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  to: PropTypes.string,
  isActive: PropTypes.bool,
};