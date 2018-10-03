import React from 'react'
import Link from 'next/link'
import aboutStyles from '../../static/comp-styles/shop-about/About.scss'
import {ICON_SEARCH} from '../static/Icons'; 

export default class About extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    	return <div className="about-block">
                    <h3>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor eius, quae ut illo laboriosam, nam temporibus esse eveniet, corrupti odit sed error perferendis nulla placeat quod? Consequuntur, cum inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laborum atque ab pariatur nulla nihil eos similique repellat libero debitis repudiandae, explicabo quia doloremque nesciunt, adipisci non ipsa, cum dolorem?
                    </p>
                <style jsx global>{aboutStyles}</style>
            </div>; 
    }
};

