import React from "react";
import Link from 'next/link'
import processingSuccessStyles from '../../static/comp-styles/processing-result/Success.scss'


export default class ProcessingSuccess extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        }
    }
    render() {
    return  <div className="processing-success">
                <h1>Thank you for your order!</h1>
                <p>Order Number: {this.props.orderNumber}</p>
                <p>You will revieve an email confirmation shortly.</p>
                {/* Should be here some kinda tracking number? */}
                <div className="print">Print reciept</div>
                <Link><a href="/shop"><div className="btn">Continue Shopping</div></a></Link>
            <style jsx global>{processingSuccessStyles}</style>
        </div>
    }
};