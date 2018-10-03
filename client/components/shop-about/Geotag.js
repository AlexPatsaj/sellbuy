import React, { Component} from 'react';
import {ICON_GEOTAG} from '../static/Icons'; 

export default class Geotag extends Component {

  static defaultProps = {};

  render() {
    return (
      <div className="geotag">
		    {ICON_GEOTAG}
      </div>
    );
  }
}