import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from 'components/profile/ProfileMenu';

import styles from '../../static/comp-styles/profile/ProfileLayout.scss';

export default function ProfileLayout({ title, active, children }) {
  return (
    <main className="ProfileLayout">
      <div className="f6f6f7">
        <div className="container ProfileLayout-content">
          <aside className="ProfileLayout-menu">
            <ProfileMenu active={active} />
          </aside>
          <section className="ProfileLayout-body">
            {
              title && <h2 className="ProfileLayout-legend">{title}</h2>
            }
            {children}
          </section>
        </div>
      </div>
     <style jsx global>{styles}</style>
    </main>
  )
}

ProfileLayout.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
};