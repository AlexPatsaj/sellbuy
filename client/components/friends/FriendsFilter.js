import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Combobox from 'components/general/Combobox';
import styles from '../../static/comp-styles/friends/FriendsFilter.scss';

const dummyData = {
  condition: [
    { value: 'all', label: 'All' },
    { value: 'used', label: 'Used' },
    { value: 'new', label: 'New' },
  ]
};

export default class FriendsFilter extends React.Component {
  state = {
    filterOpen: false,
  };

  handleChangeFilterOpen() {
    this.setState({
      filterOpen: !this.state.filterOpen
    })
  }

  render() {
    const {
      filterOpen,
    } = this.state;
    return (
      <div className="FriendsFilter">
        <button className="FriendsFilter-btn" onClick={this.handleChangeFilterOpen.bind(this)}>Filter</button>
        <div className={classNames("FriendsFilter-items", {'open': filterOpen })}>
          <h2 className="FriendsFilter-items-label">Filter</h2>
          <div className="FriendsFilter-field">
            <Combobox label="Type" multi options={dummyData.condition} />
          </div>
          <div className="FriendsFilter-field">
            <Combobox label="Sex" multi options={dummyData.condition} />
          </div>
          <div className="FriendsFilter-field">
            <Combobox label="Age" multi options={dummyData.condition} />
          </div>
          <div className="FriendsFilter-field">
            <Combobox label="Geolocation" multi options={dummyData.condition} />
          </div>
        </div>

            <div className={classNames("mobile-bg", {'show': filterOpen })} onClick={this.handleChangeFilterOpen.bind(this)}>
              <div className="filter-close">×</div>
            </div>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

FriendsFilter.propTypes = {
};

FriendsFilter.defaultProps = {
};
