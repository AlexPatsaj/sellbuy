import React from "react"
import newArrivalsStyles from '../../static/comp-styles/shop-home/NewArrivals.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'

export default class NewArrivals extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="new-arrivals container">
                <div className="view-all__header">
                    <h2>New Arrivals</h2>
                    <span className="_view-all">View All</span>
                </div>
                <div className="grid__blocks">

                    <div className="grid__block half">
                        <div className="grid__discount-badge">
                        </div>
                        <div className="overflow-hidden">
                            <div className="grid__info">
                                <h3>German Steel Pan</h3>
                                <span className="grid__blocks-price">$520.99</span>
                                <div className="grid__blocks-likes">
                                   
                                </div>
                                <div className="grid__blocks-shares">
                                   
                                </div>
                                
                            </div>
                            <img src="../static/images/new-arrivals-1.png" alt=""/>
                        </div>
                    </div>

                    <div className="grid__block quarter">
                        <div className="one">
                            <div className="grid__discount-badge">
                                
                            </div>
                            <div className="overflow-hidden">
                                <div className="grid__info">
                                    <h3>German Steel Pan</h3>
                                    <span className="grid__blocks-price">$520.99</span>
                                    <div className="grid__blocks-likes">
                                       
                                    </div>
                                    <div className="grid__blocks-shares">
                                        
                                    </div>
                                    
                                </div>
                                <img src="../static/images/new-arrivals-2.png" alt=""/>
                            </div>
                        </div>
                        <div className="one">
                            <div className="grid__discount-badge">
                                
                            </div>
                            <div className="overflow-hidden">
                                <div className="grid__info">
                                    <h3>German Steel Pan</h3>
                                    <span className="grid__blocks-price">$520.99</span>
                                    <div className="grid__blocks-likes">
                                       
                                    </div>
                                    <div className="grid__blocks-shares">
                                       
                                    </div>
                                    
                                </div>
                                <img src="../static/images/new-arrivals-2.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="grid__block third">
                        <div className="grid__discount-badge">
                            
                        </div>
                        <div className="overflow-hidden">
                            <div className="grid__info">
                                <h3>German Steel Pan</h3>
                                <span className="grid__blocks-price">$520.99</span>
                                <div className="grid__blocks-likes">
                                    
                                </div>
                                <div className="grid__blocks-shares">
                                    
                                </div>
                            </div>
                            <img src="../static/images/new-arrivals-3.png" alt=""/>
                        </div>
                    </div>

                </div>
            <style jsx global>{newArrivalsStyles}</style>
        </div>
    }
};