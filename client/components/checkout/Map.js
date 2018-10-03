import React from 'react'
import Link from 'next/link'
import mapStyles from '../../static/comp-styles/checkout/Map.scss'
import {ICON_GEOTAG} from '../static/Icons'; 
import GoogleMapReact from "google-map-react";
import MapStyle from "./MapStyle";
import Geotag from "./Geotag";



export default class Map extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            lat: this.props.lat,
            lng: this.props.lng
        }
    } 


    componentDidUpdate () {
        
    }

    render() { 
    	return <div className="map">
                    <div className="map-wrapper">
                        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyCNdrg69JGMKN-9Ht5-07b-eT_o0ShNk3E" }} defaultCenter={this.state} defaultZoom={this.state.lat === 26.022407 && this.state.lng === 50.559644 ? 1 : 13} options={MapStyle}>
                            <Geotag lat={this.state.lat} lng={this.state.lng} />
                        </GoogleMapReact>
                    </div>
                <style jsx global>{mapStyles}</style>
            </div>; 
    }
};

