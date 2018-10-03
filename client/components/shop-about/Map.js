import React from 'react'
import Link from 'next/link'
import mapStyles from '../../static/comp-styles/shop-about/Map.scss'
import {ICON_GEOTAG} from '../static/Icons'; 
import GoogleMapReact from "google-map-react";
import MapStyle from "./MapStyle";
import Geotag from "./Geotag";

import {GMAPS_KEY} from  '../../models/Constants';

export default class Map extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            center: {
                lat: 61.2461299, 
                lng: 73.4183361
            }
        }
    } 

    static defaultProps = {
        zoom: 13
    };

    recenter = (lat, lng) => {
        
        this.setState({
            center: {
                lat: lat, 
                lng: lng
            }
        })
        console.log(this.state.center);
    }

    render() { 
    	return <div className="map">
                    <div className="map-wrapper">
                        <GoogleMapReact bootstrapURLKeys={{ key: GMAPS_KEY }} center={this.state.center} defaultZoom={this.props.zoom} options={MapStyle}>

                            {/* Current Active Geotag */}
                            <Geotag lat={this.state.center.lat} lng={this.state.center.lng} />

                        </GoogleMapReact>
                    </div>
                    <div className="addresses-block">
                        <h3>Shop addresses</h3>
                        <ul className="addresses-list">
                            <li className="address-point" onClick={()=>{this.recenter( 38.7578, -9.2245)}}>
                                {ICON_GEOTAG}
                                <span className="address-name">Some Road, Amadora</span>
                            </li>
                            <li className="address-point" onClick={()=>{this.recenter(26.2336, 50.5523)}}>
                                {ICON_GEOTAG}
                                <span className="address-name">Some Road, Bahrain</span>
                            </li>
                            <li className="address-point" onClick={()=>{this.recenter(61.2461299, 73.4183361)}}>
                                {ICON_GEOTAG}
                                <span className="address-name">Some Road, Surgut</span>
                            </li>
                        </ul>
                    </div>
                <style jsx global>{mapStyles}</style>
            </div>; 
    }
};

