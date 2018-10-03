import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../static/comp-styles/general/Avatar.scss';

class Avatar extends React.Component {
  parseName(name) {
    let names = name.split(' ');
    if (names.length === 1) {
      return name.substr(0, 2)
    } else {
      names = names.map(item => item.substr(0, 1));
      return names.join('');
    }
  }

  render() {
    const {
      name,
      src,
    } = this.props;
    return (
      <React.Fragment>
        {
          src ? (
            <img className="Avatar" src={src} alt={name} />
          ) : (
            <div className="Avatar">
              {this.parseName(name)}
            </div>
          )
        }
        <style jsx global>{styles}</style>
      </React.Fragment>
    )
  }
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  name: 'Avatar'
};

export default Avatar;