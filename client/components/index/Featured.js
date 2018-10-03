import React from "react";
import Link from 'next/link'
import FeaturedStyles from '../../static/comp-styles/index/Featured.scss'
import {} from '../static/Icons'; 


export default class Featured extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
           
        }
    }

    render() {
    return  <div className="feed-left__store">
               
            <style jsx global>{FeaturedStyles}</style>
        </div>
    }
};