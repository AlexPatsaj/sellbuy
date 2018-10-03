import React from "react";
import Link from 'next/link'
import productPostPreviewtyles from '../../static/comp-styles/feed/ProductPostPreview.scss'
import {} from '../static/Icons'; 
import AddPost from  './AddPost'
import FeedCategories from  './FeedCategories'
import Posts from  './Posts'
 
export default class ProductPostPreview extends React.Component {
    constructor(props) {
        super (props);
    } 

    /*
        * if a callback was defined call it 
    */ 
    remove(){
        if(typeof(this.props.callback) == 'undefined'){
            console.log("someone forgot to say which function is going to remove ProductPostPreview  from what ever collection he's been instanciated in.  "); 
            return;
        }
        
        this.props.callback(this.props.product.id); 
    }

    render() {
    return  <div className="product-block-add">
                { 
                    this.props.editable && 
                    <div className="product-remove" title="Remove" onClick={this.remove.bind(this)}>
                        ×
                    </div> 
                }
                <div className="product-picture">
                    <img src={this.props.product.img} alt=""/>
                </div>
                <div className="product-info">
                    <div className="product-info__wrapper">
                        <p className="product-name">
                            {this.props.product.name}
                        </p>
                        <div className="product-price">
                            ${this.props.product.price}
                        </div>
                    </div>
                    <div className="product-info__seller">
                       <Link href={this.props.product.seller.link}><a>From {this.props.product.seller.name}</a></Link>
                    </div>
                </div>
            <style jsx global>{productPostPreviewtyles}</style>
        </div>
    }
};