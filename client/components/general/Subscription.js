import React from "react";
import subscriptionStyles from '/static/comp-styles/general/Subscription.scss';

export default class Subscription extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return <section className="Subscription">
      <div className="Subscription-wrapper">
        <h3 className="Subscription-title">
          Enter your e-mail to get notified about our offers and promotions
        </h3>
        <form className="Subscription-input">
          <input type="email" name="email" autoComplete="email" placeholder="Type your e-mail address" required/>
          <button className="btn">SUBSCRIBE</button>
        </form>
      </div>
      <style jsx>{subscriptionStyles}</style>
    </section>
  }
};
