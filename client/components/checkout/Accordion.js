import React from "react";
import Link from 'next/link';
import scrollToComponent from 'react-scroll-to-component-ssr';
import { debounce } from 'lodash';
import checkoutStyles from '../../static/comp-styles/checkout/Checkout.scss'
import {} from '../static/Icons';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionStep: 1
    };
    this.delayedScrollTo = debounce(this.scrollTo, 250);
  }

  scrollTo(step) {
    const headerElem = document.querySelector('.header-menu.scrolled');
    const offset = (headerElem) ? -91 : -182;
    scrollToComponent(this[`step${step}`], { offset, align: 'top', duration: 300, ease: 'linear' })
  }

  setStep = (step) => {
    this.state.accordionStep > step ?
      this.setState({
        accordionStep: step
      }, this.delayedScrollTo.bind(this, step))
      : null
  }

  nextStep = () => {
    const nextStep = this.state.accordionStep + 1;
    this.setState({
      accordionStep: nextStep
    }, this.delayedScrollTo.bind(this, nextStep))
  }

  render() {
    return <React.Fragment>
      <Step1 ref={el => { this.step1 = el; }} setStep={this.setStep} nextStep={this.nextStep} accordionStep={this.state.accordionStep}/>
      <Step2 ref={el => { this.step2 = el; }} setStep={this.setStep} nextStep={this.nextStep} accordionStep={this.state.accordionStep}/>
      <Step3 ref={el => { this.step3 = el; }} setStep={this.setStep} nextStep={this.nextStep} accordionStep={this.state.accordionStep}/>
      <style jsx global>{checkoutStyles}</style>
    </React.Fragment>
  }
};