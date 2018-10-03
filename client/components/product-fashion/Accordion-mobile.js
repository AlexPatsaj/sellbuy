import React from "react"
import Link from 'next/link'
import accordionStyles from '/static/comp-styles/product-fashion/Accordion-mobile.scss'
import {ICON_ARROW_DOWN} from '../static/Icons'
import AccordionBlock from './Accordion-block'

export default class Accordion extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return  <div className="accordion-mobile">
                <AccordionBlock title={'Description'}/>
                <AccordionBlock title={'Specifications'}/>
                <AccordionBlock title={'Reviews (12)'}/>
                <AccordionBlock title={'Seller Garanty'}/>
            <style jsx global>{accordionStyles}</style>
        </div>
    }
};