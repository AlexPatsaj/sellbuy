import React from 'react'
import Link from 'next/link'
import mapStyles from '../../static/comp-styles/nearby/Map.scss'
import {ICON_HUMAN} from '../static/Icons'
import Ratings from 'react-ratings-declarative';

import {GMAPS_KEY} from  '../../models/Constants';
import MapStyle from "./MapStyle";
import GoogleMapReact from "google-map-react";
import Geotag from "./Geotag";
import nearbyReducer from '../../reducers/nearby';


const StoreInfoWindow = (props,closeCallBack) =>{ return <div className='MapOverlay'>
              <div className='MapOverlay-close' onClick={closeCallBack}>×</div>
              <div className="NearbyShop">
              <div className="NearbyShop-thumb">
                <img src="../static/images/shop-pic-1.png" alt=""/>
              </div>
              <div className="NearbyShop-description">
                <h2 className="NearbyShop-title">
                  <Link href="/"><a>{props.title}</a></Link>
                </h2>
                <p className="NearbyShop-location">{props.location}</p>
                <div className="NearbyShop-row">
                  <div className="NearbyShop-col">
                    <div className="NearbyShop-rating">
                      <div className="full-rating">
                        <Ratings
                          rating={props.rating}
                          widgetRatedColors="#F7D620"
                          widgetEmptyColors="#ccc"
                          widgetDimensions="16px"
                          widgetSpacings="1px" 
                          typeOfWidget='Star'
                        >
                          <Ratings.Widget  widgetHoverColor="#F7D620"/>
                          <Ratings.Widget  widgetHoverColor="#F7D620"/>
                          <Ratings.Widget widgetHoverColor="#F7D620"/>
                          <Ratings.Widget widgetHoverColor="#F7D620" />
                          <Ratings.Widget widgetHoverColor="#F7D620"/>
                        </Ratings>
                        <span className="human-icon">{ICON_HUMAN}</span>
                        <span>{props.nReviews}</span>
                      </div>
                    </div>
                  </div>
                  <div className="NearbyShop-col">
                    <Link href={props.url}>
                      <a className="NearbyShop-followBtn">Visit Store</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    </div>; 
}   

export default class Map extends React.Component {
  constructor(props) {
    super (props);
    this.state={
      center: {  lat: 26.206522, lng: 50.5818679 },
      currentStore:null,
      shops : props.shops
    }; 
  }

  componentDidMount(){

    nearbyReducer.subscribe( () => {
      let state = nearbyReducer.getState(); 
      this.setState({
        center : state.selected_store.latlng
      });
    });
  }

  showStore(store){
    this.setState({
      currentStore : StoreInfoWindow(store, this.hideStore.bind(this))
    });
  }

  hideStore(){
    this.setState({
      currentStore: null
    });
  }

  mapClicked(key,childprops){ 
    this.showStore(childprops.store, this.hideStore.bind(this));
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
    return <div className="NearbyStoresMap">
      <div className="NearbyStoresMap-wrapper"> 
        {this.state.currentStore }
         <GoogleMapReact bootstrapURLKeys={{ key: GMAPS_KEY }} center={this.state.center} defaultZoom={this.props.zoom} options={MapStyle} onChildClick={this.mapClicked.bind(this)}>
          { 
            this.state.shops.map( ( store ,idx ) => {
              return <Geotag lat={store.latlng.lat} lng={store.latlng.lng} store={store} key={"store"+idx}/> 
            })
          }
        </GoogleMapReact> 
      </div>
      <style jsx global>{mapStyles}</style>
    </div>;
  }
};
