import React from "react"
import Link from 'next/link'
import shopFilterStyles from '../../static/comp-styles/shop/ShopFilter.scss'
import {ICON_ARROW_DOWN} from '../static/Icons'; 
 
import ReactDOM from 'react-dom'; 

export default class ShopFilters extends React.Component {
    constructor(props) {
    	super(props); 
    	this.state= { opened: false }; 
    }


    render(){
    	return <div className={"accordion-block" + (this.state.opened ? ' opened':'')}>
            <h3 className="accorion-header" onClick={() => { this.setState({'opened':!this.state.opened})}}>
                {this.props.title}
                <span className="arrow">{ICON_ARROW_DOWN}</span>
            </h3>
            <div className="accordion-body">
                <p>54.6” screen (measured diagonally from corner to corner) Large enough to provide an immersive experience for everyone in the room. </p>
                <p>2160p resolution for breathtaking HD images Watch 4K movies and TV shows at 4x the resolution of Full HD, and upscale your current HD content to gorgeous, Ultra HD-level picture quality. </p>
                <p>Watch high dynamic range (HDR) content on your TV With an HDR-compatible 4K TV, you can enjoy HDR movies and TV shows, in addition to all your current content.</p>
                <p>Smart TV with access to streaming services for countless entertainment options Stream shows, movies, games and more with the TV’s built-in Wi-Fi and integrated apps. <Link href=""><a className="more">More</a></Link></p>
            </div>
        </div>
    }
}