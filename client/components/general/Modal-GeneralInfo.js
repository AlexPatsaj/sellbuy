import React from "react";
import Link from 'next/link'
import generalInfoStyles from '../../static/comp-styles/shop/Modal-GeneralInfo.scss'
import {} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';
import Colors from  '../product/Colors'
import Sizes from  '../product/Sizes'
import InputNumber from 'rc-input-number'

export default class GeneralInfo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            value: 1,
        }; 
    } 
    onChange = (value) => {
        console.log('onChange:', value);
        this.setState({ value });
    }
    render() {
    return  <div className="general-info">
                <h2>NB SAMENG 2018 Evening Party Dress Dresses Vestido De Festa</h2>
                <div className="modal-product__rating">
                    <Ratings
                        rating={3.5}
                        widgetRatedColors="#F7D620"
                        widgetEmptyColors="#ccc"
                        widgetHoverColors="#F7D620"
                        widgetDimensions="16px"
                        widgetSpacings="2px"
                        changeRating={this.changeRating}
                        typeOfWidget='Star'
                    >
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                    </Ratings>
                    <span className="voters">(16)</span>
                    <span className="shipping-info">Free shipping</span>
                </div>
                <span className={"__block-price " + (this.props.discount ? "discount" : '')}>
                    <span>$124</span>
                    <strike>$444</strike>
                    {
                        this.props.discount && <strike>{this.props.discount}</strike>
                    }
                </span>
                <div className="description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et accusantium doloremque laudantium, totam rem ab illo inventore aperiam unde oqu… <Link><a href="/">More</a></Link></p>
                </div>
                <Colors/>
                <Sizes/>
                <p className='qty'>Quantity: 
                    <InputNumber
                        min={0}
                        max={99}
                        style={{ width: 120 }}
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    {/* <div className="btn grey ">-</div> 
                    1
                    <div className="btn grey ">+</div> */}
                </p> 
                <div className="modal-product__buttons">
                    <div className="btn outline">ADD TO CART</div>
                    <div className="btn">BUY NOW</div>
                </div>
            <style jsx global>{generalInfoStyles}</style>
        </div>
    }
};