import React from "react";
import Link from 'next/link'
import sitePreviewtyles from '../../static/comp-styles/feed/SitePostPreview.scss' 
 
/** 
*   receives a metadata object (title, descr... )
*/ 
export default class SitePostPreview extends React.Component {
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
        
        this.props.callback(); 
    }


    render() {
    return  <div className="sitePostPreview">  
               {this.props.callback &&  <div className="sitePostPreview__remove" title="Remove" onClick={this.remove.bind(this)}>
                    ×
                </div>  
                }
                <div className="sitePostPreview__picture">
                    <img src={this.props.meta.img} alt=""/>
                </div> 
                <div className="sitePostPreview__infoWrapper">
                    <h4 className="sitePostPreview__title"> 
                       <a href={this.props.meta.url} target="_blank">{this.props.meta.title}</a>
                    </h4>
                    <p className="sitePostPreview__description">
                    { this.props.meta.description }
                    </p>
                    {
                        this.props.meta.price && <div className="sitePostPreview__price">
                        ${this.props.meta.price}
                    </div>
                    }
                    
                    {this.props.meta.site && <div className="sitePostPreview__site"><a href={this.props.meta.domain} target="_blank">{this.props.meta.site}</a></div>}
                </div> 
            <style jsx>{sitePreviewtyles}</style>
        </div>
    }
};