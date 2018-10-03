import React from "react";
import languageStyles from '../../static/comp-styles/header/Header-Language.scss'

import Link from 'next/link';
import {ICON_LANGUAGE,ICON_FLAG_SA,ICON_FLAG_DE,ICON_FLAG_BH,ICON_FLAG_AE,ICON_CONFIRM_WHITE,ICON_CONFIRM_BLACK,ICON_ARROW_DOWN} from '../static/Icons';

import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions';

export default class Language extends React.Component {
    constructor(props) {
        super (props); 
        
        this.state = {
            isOpen : props.open,
            countryDropdown: false,
            currencyDropdown: false,
            cityDropdown: false,
            languageDropdown: false,

            countryOptions: {
                "Germany": false,
                "Bahrain": true,
                'Saudi Arabia': false,
                'UAE': false,
            },
            cityOptions: {
                "Berlin": true,
                "Los Angeles": false,
            },
            currencyOptions: {
                "$USD": true,
                "$EUR": false
            },
            languageOptions: {
                "English": true,
                "Arabic": false,
                "Spanish": false,
                "Russian": false,
            },
        }



        let that = this; 
        headerReducer.subscribe(() => {
            let state = headerReducer.getState();   

            if((state.area && state.area != 'language')  && that.state.isOpen){ //some other area was opened and we are open 
                that.openClose(null); 
            }
        }); 
    }
    
    openCountryDropdown = () => {
        if (this.state.countryDropdown === true) {
            this.setState({
                countryDropdown: false
            })
        }
        else {
            this.setState( {
                countryDropdown: true,
                currencyDropdown: false,
                cityDropdown: false,
                languageDropdown: false,
            })
        }
    }

    openCurrencyDropdown = () => {
        if (this.state.currencyDropdown === true) {
            this.setState({
                currencyDropdown: false
            })
        }
        else {
            this.setState( {
                countryDropdown: false,
                currencyDropdown: true,
                cityDropdown: false,
                languageDropdown: false,
            })
        }
    }

    openCityDropdown = () => {
        if (this.state.cityDropdown === true) {
            this.setState({
                cityDropdown: false
            })
        }
        else {
            this.setState( {
                countryDropdown: false,
                currencyDropdown: false,
                cityDropdown: true,
                languageDropdown: false,
            })
        }
        
    }

    openLanguageDropdown = () => {
        if (this.state.languageDropdown === true) {
            this.setState({
                languageDropdown: false
            })
        }
        else {
            this.setState( {
                countryDropdown: false,
                currencyDropdown: false,
                cityDropdown: false,
                languageDropdown: true,
            })
        }
    }

    flag = (country) => {  

            switch (country) {
                case "Germany":
                        return ICON_FLAG_DE;
                    break;
                case "Bahrain":
                    return ICON_FLAG_BH;
                break;
                case "UAE":
                    return ICON_FLAG_AE;
                break;
                case "Saudi Arabia":
                    return ICON_FLAG_SA;
                break;
                default:
                    break;
            }
    }


    chooseCountry = (choosenCountry) => {
        let buffer = Object.assign({}, this.state.countryOptions)
        Object.keys(buffer).forEach(v => buffer[v] = false)
        buffer[choosenCountry] = true;
        this.setState({countryOptions: buffer})
        this.setState({countryDropdown: false})
    }

    chooseCity = (choosenCity) => {
        let buffer = Object.assign({}, this.state.cityOptions)
        Object.keys(buffer).forEach(v => buffer[v] = false)
        buffer[choosenCity] = true;
        this.setState({cityOptions: buffer})
        this.setState({cityDropdown: false})
    }

    chooseCurrency = (choosenCurrency) => {
        let buffer = Object.assign({}, this.state.currencyOptions)
        Object.keys(buffer).forEach(v => buffer[v] = false)
        buffer[choosenCurrency] = true;
        this.setState({currencyOptions: buffer})
        this.setState({currencyDropdown: false})
    }

    chooseLanguage = (choosenLanguage) => {
        let buffer = Object.assign({}, this.state.languageOptions)
        Object.keys(buffer).forEach(v => buffer[v] = false)
        buffer[choosenLanguage] = true;
        this.setState({languageOptions: buffer})
        this.setState({languageDropdown: false})
    }

    getSelectedCountry(){
        let countries = Object.keys(this.state.countryOptions); 
        for(let x=0; x < countries.length; ++x){
            if(this.state.countryOptions[countries[x]]){
                return countries[x]; 
            }
        }
    }

  
    openClose(event, area){ 
        this.setState({
            isOpen: !this.state.isOpen
        }); 
        
//      if we are opening , thell others to close 
        if(event){
            headerReducer.dispatch( openCloseAction('language') );     
        } 
    }
 

    render() { 

    return <div className={"language"+ (this.state.isOpen ? ' open' : '')}>
                <span onClick={this.openClose.bind(this)}>
                    {this.flag(this.getSelectedCountry())}<br/>
                    Manama
                </span>
                <div className="language-dropdown">
                    <div className="dropdown-triangle-up">▲</div>
                    <div className="language-dropdown__wrapper">
                    <div className={this.state.countryDropdown ? "language-dropdown__choices dropdown-opened" : "language-dropdown__choices"}>
                        {Object.entries(this.state.countryOptions).map((country, i) => {
                            if (country[1]) {
                                return (
                                    <div title='Choose Country' key={i} onClick={this.openCountryDropdown} className="language-dropdown__option">
                                                <div className="language-dropdown__choice__flag">
                                                    {this.flag(country[0])}
                                                </div>
                                                <div className="language-dropdown__choice__name">
                                                    {country[0]}
                                                </div>
                                                <div className="arrow">{ICON_ARROW_DOWN}</div>
                                </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                        <div className="language-dropdown__choice__dropdown">
                            {Object.entries(this.state.countryOptions).map((country, i) => {
                                return (
                                    <div onClick={()=>{this.chooseCountry(country[0])}} key={i} className={country[1] === true ? "language-dropdown__option active" : "language-dropdown__option"}>
                                        <div className="language-dropdown__choice__flag">
                                            {this.flag(country[0])}
                                        </div>
                                        <div className="language-dropdown__choice__name">
                                            {country[0]}
                                        </div>
                                        <div className="language-dropdown__confirm">{ICON_CONFIRM_BLACK}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={this.state.cityDropdown ? "language-dropdown__choices dropdown-opened" : "language-dropdown__choices"}>
                        {Object.entries(this.state.cityOptions).map((city, i) => {
                            if (city[1] === true) {
                                return (
                                    <div title='Choose city' key={i} onClick={this.openCityDropdown} className="language-dropdown__option">
                                                <div className="language-dropdown__choice__name">
                                                    {city[0]}
                                                </div>
                                                <div className="language-dropdown__confirm">
                                                    {ICON_CONFIRM_BLACK}
                                                </div>
                                                <div className="arrow">{ICON_ARROW_DOWN}</div>
                                </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                        <div className="language-dropdown__choice__dropdown">
                            {Object.entries(this.state.cityOptions).map((city, i) => {
                                return (
                                    <div onClick={()=>{this.chooseCity(city[0])}} key={i} className={city[1] === true ? "language-dropdown__option active" : "language-dropdown__option"}>
                                        <div className="language-dropdown__choice__name">
                                            {city[0]}
                                        </div>
                                        <div className="language-dropdown__confirm">
                                              {ICON_CONFIRM_WHITE}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={this.state.currencyDropdown ? "language-dropdown__choices dropdown-opened" : "language-dropdown__choices"}>
                        {Object.entries(this.state.currencyOptions).map((currency, i) => {
                            if (currency[1] === true) {
                                return (
                                    <div title='Choose currency' key={i} onClick={this.openCurrencyDropdown} className="language-dropdown__option">
                                                <div className="language-dropdown__choice__name">
                                                    {currency[0]}
                                                </div>
                                                <div className="language-dropdown__confirm">
                                                    {ICON_CONFIRM_WHITE}
                                                </div>
                                                <div className="arrow">{ICON_ARROW_DOWN}</div>
                                </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                        <div className="language-dropdown__choice__dropdown">
                            {Object.entries(this.state.currencyOptions).map((currency, i) => {
                                return (
                                    <div onClick={()=>{this.chooseCurrency(currency[0])}} key={i} className={currency[1] === true ? "language-dropdown__option active" : "language-dropdown__option"}>
                                        <div className="language-dropdown__choice__name">
                                            {currency[0]}
                                        </div>
                                        <div className="language-dropdown__confirm">
                                           {ICON_CONFIRM_WHITE}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className={this.state.languageDropdown ? "language-dropdown__choices dropdown-opened" : "language-dropdown__choices"}>
                        {Object.entries(this.state.languageOptions).map((language, i) => {
                            if (language[1] === true) {
                                return (
                                    <div title='Choose language' key={i} onClick={this.openLanguageDropdown} className="language-dropdown__option">
                                                <div className="language-dropdown__choice__name">
                                                    {language[0]}
                                                </div>
                                                <div className="language-dropdown__confirm">
                                                    {ICON_CONFIRM_WHITE}
                                                </div>
                                                <div className="arrow">{ICON_ARROW_DOWN}</div>
                                </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                        <div className="language-dropdown__choice__dropdown">
                            {Object.entries(this.state.languageOptions).map((language, i) => {
                                return (
                                    <div onClick={()=>{this.chooseLanguage(language[0])}} key={i} className={language[1] === true ? "language-dropdown__option active" : "language-dropdown__option"}>
                                        <div className="language-dropdown__choice__name">
                                            {language[0]}
                                        </div>
                                        <div className="language-dropdown__confirm">
                                            {ICON_CONFIRM_WHITE}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            <style jsx global>{languageStyles}</style>
        </div>;
    }
};