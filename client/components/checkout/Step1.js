import React from "react"
import Link from 'next/link'
import step1Styles from '../../static/comp-styles/checkout/Step1.scss'
import {} from '../static/Icons' 
import Address from './Address'
import {ICON_UI_TICK, ICON_MAP_TARGET, ICON_ARROW_DOWN, ICON_CIRCLE_FLAG_EMPTY} from '../static/Icons' 
import {IMaskInput} from 'react-imask'
// import Geocode from "react-geocode"
import DropdownAutosuggest from './Dropdown-Autosuggest'
import ReactTelInput from 'react-telephone-input'

import {GMAPS_KEY} from '../../models/Constants'
import Midddly from '../../models/Midddly'

export default class Step1 extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            isEdit: false,
            isAdd: false,
            countryShort: "bh",
            country: "",
            countries:[],
            cities:[], 
            city: '',
            zip: '',
            address: '',
            lat: this.props.lat,
            lng: this.props.lng
        }

        this.geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
        }
        this.getAddress = this.getAddress.bind(this);
    }


    componentDidMount(){
       Midddly.getCountries((resp) => {
        console.log("countries ", resp);
        this.setState({
            countries:this.getOptionsFromlist(resp.data)
        });
       }); 

       Midddly.getCities('',(resp) => {
        this.setState({
            cities:this.getOptionsFromlist(resp.data)
        });
       });    
    }

    getAddress = (lat, lng) => {
		var GEOCODING = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "%2C" + lng + "&language=en&key="+GMAPS_KEY;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', GEOCODING, true);
        xhr.send();
        xhr.onreadystatechange = () => { // (3)
            if (xhr.readyState != 4) return;
          
            if (xhr.status != 200) {
                console.log("error", xhr );
            } else {
                var response = JSON.parse(xhr.responseText); // responseText -- текст ответа.
                console.log(response.results[0]);
                this.setState({
                    countryShort: response.results[0].address_components[5].short_name.toLowerCase(),
                    country: response.results[0].address_components[5].long_name,
                    city: response.results[0].address_components[2].long_name,
                    zip: response.results[0].address_components[6].long_name,
                    address: response.results[0].address_components[4].long_name + ", "  + response.results[0].address_components[1].long_name + ' ' + response.results[0].address_components["0"].long_name,
                })
                console.log("this.state", this.state);
            }
        }
	}
  
    nextStep = () => {
        this.props.nextStep()
    }
    
    geo_success = (position) => {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
        this.getAddress(position.coords.latitude, position.coords.longitude);
    }
      
    geo_error = () => {
        // alert("Sorry, no position available.");
    }


    getPosition =  () => {
        var wpid = navigator.geolocation.watchPosition(this.geo_success, this.geo_error, this.geo_options);
    }

    edit = (add) => {
        add === 'add' ?
        this.setState({
            isEdit: !this.state.isEdit,
            isAdd: !this.state.isAdd
        }) :
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        let form = document.querySelector('.address-form');
        if (!e.target.checkValidity()) {
            form.classList.add("has-error");
            /* Needs error messages for not valid inputs */
            return;
        } else {
            console.log("In case everything went well we can send form");
        }
    }

    /*
        * get the list of cities for the selected country from the database 
    */ 
    getCities(){
        Midddly.getCities(this.state.country, (resp) => {
            this.setState({
                'cities': this.getOptionsFromlist(resp.data)
            });
        });
    }

    setCountry(value){
        this.setState({
            'country': value
        }); 

        this.getCities(); 
    }

    setCity(value){
        this.setState({
            'city': value
        });
    }

    /*
        transform a list of string in an options array for the dropdown component 
        * @param [] of strings 
        * @return [{name: }] 
    */ 
    getOptionsFromlist(list){
        let options = []; 
        for(let x=0; x<list.length; ++x){
            options.push({"name":list[x]}); 
        } 

        return options;
    }


    render() {
    const AddressEdit = () => {return <React.Fragment>
            <div className="address-edit">
                <h4>{ this.state.isAdd ? "Add New" : "Edit" }  Shipping Address</h4>
                <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form form">
                    <div className="address-input">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="fname" id="first-name" autoComplete="given-name" autoFocus tabIndex="0" required />
                        <span className="focused"></span>
                    </div>
                    <div className="address-input">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="lname" id="last-name" autoComplete="family-name" required />
                        <span className="focused"></span>
                    </div>
                    <div className="address-input location">
                        {/* window.navigator.location
                        <span onClick={this.getPosition}>{ICON_MAP_TARGET}</span> */}
                        <label htmlFor="address-line-1">Address Line 1</label>
                        <input type="text"  id="address-line-1"  defaultValue={this.state.address} name="address" autoComplete="shipping address-line1" required />
                        <span className="focused"></span>
                    </div>
                    <div className="address-input">
                        <label htmlFor="address-line-2">Address Line 2</label>
                        <input type="text" id="address-line-2" name="address" autoComplete="shipping address-line2"  />
                        <span className="focused"></span>
                    </div>
                    <div className="address-input dropdown">
                        {ICON_ARROW_DOWN}
                        <label htmlFor="country">Country</label>
                        {this.state.countries.length > 0 && <DropdownAutosuggest 
                            options={this.state.countries} 
                            callback={this.setCountry.bind(this)} 
                            value={this.state.country}
                            name="country" 
                            autoComplete="shipping country-name"/>}
                    </div>
                    <div className="address-input dropdown">
                        {ICON_ARROW_DOWN}
                        <label htmlFor="city">City</label>
                        {this.state.cities.length > 0 && <DropdownAutosuggest 
                            options={this.state.cities}  
                            callback={this.setCity.bind(this)} 
                            value={this.state.city} 
                            name="city" 
                            autoComplete="shipping address-level2"/>}
                        
                    </div>
                    
                    <div className="address-input zip">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="text"  id="zip" name="zip" defaultValue={this.state.zip} autoComplete="shipping postal-code" required pattern="^\d{5,6}(?:[-\s]\d{4})?$"  maxLength="6"/>
                        <span className="focused"></span>
                    </div>
                    <div className="address-input phone">
                        <label htmlFor="phone">Phone Number</label>
                        <ReactTelInput
                            defaultCountry={this.state.countryShort}
                            flagsImagePath='/static/images/flags.png'
                            ref={ ref =>  this.ReactTelInput = ref  }
                            required
                        />
                        <span className="focused"></span>
                        {/* <div className="country-code">
                            {ICON_CIRCLE_FLAG_EMPTY}
                            <div className="code-number">
                                {"+" + this.state.country}
                            </div>
                        </div>
                        
                        <IMaskInput mask={"(000) 000-00-00"} className="input-phone" tabIndex="5" maxLength="15" onChange={this.handleChanges} type="tel" id="phone" name="phone" autoComplete="tel" required /> */}
                    </div>
                    
                    
                    {/* <div className="address-input w100">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" autoComplete="email" required />
                    </div> */}
                    
                    <div className="checkbox">
                        <input type="checkbox" name="as-billing" id="as-billing"/>
                        <label htmlFor="as-billing">Use as Billing Address</label>
                        {ICON_UI_TICK}
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="save-address" id="save-address"/>
                        <label htmlFor="save-address">Save this Address</label>
                        {ICON_UI_TICK}
                    </div>
                    <div className="btns">
                        <button className="btn">Save {'&'} Continue</button> 
                        <div className="cancel" onClick={this.edit}>Cancel</div>
                    </div>
                </form>
            </div>
        </React.Fragment>}
    return  <div className={"step1-block checkout-step" + (this.props.accordionStep === 1 ? ' active' : '')}>
                <div className={"step-heading" + (this.props.accordionStep > 1 ? ' pointer' : '')} onClick={()=>{this.props.setStep(1)}}>
                    <h3>1. Shipping Address</h3>
                    {this.props.accordionStep > 1 ? 
                        <span className="btn grey">Edit</span>
                    : null}
                </div>
                {this.props.accordionStep > 1 ? 
                    <div className="data-entry"  onClick={()=>{this.props.setStep(1)}}>
                        <p>Angela C. Harvey</p>
                        <p>1453 Rosemont Avenue, Cocoa Beach, FL 23231</p>
                        <p>305-578-4836</p>
                    </div> 
                    : null}
                <div className="step-wrapper">
                {
                    this.state.isEdit 
                    ? 
                    <AddressEdit/>
                    : 
                    <React.Fragment>
                        <Address id={'1'} edit={this.edit} default/>
                        <Address id={'2'} edit={this.edit}/>
                        <hr/>
                        <div className="add-address" onClick={() => {this.edit("add")}}>Add shipping address</div>
                        <div className="btn" onClick={this.nextStep}>Save {'&'} Continue</div>
                    </React.Fragment>
                }
                </div>
            <style jsx global>{step1Styles}</style>
        </div>
    }
};