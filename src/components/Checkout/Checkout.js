import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcAmex, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import './Checkout.scss';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h2>Experience it now!</h2>
        <form className="payment-form">
          <div className="payment-form-type">
            <input type="radio" className="styled" id="credit-card" name="payment-type" value="credit-card" defaultChecked />
            <label htmlFor="credit-card">
              <FontAwesomeIcon icon={faCcVisa} fixedWidth />
              <FontAwesomeIcon icon={faCcAmex} fixedWidth />
              <FontAwesomeIcon icon={faCcMastercard} fixedWidth />
            </label>
            
            <input type="radio" className="styled" id="paypal" name="payment-type" value="paypal" />
            <label htmlFor="paypal">
              <FontAwesomeIcon icon={faCcPaypal} fixedWidth />
            </label>
          </div>
          <div className="payment-form-options">
            <div className="switch">
              <input type="radio" className="button" id="month" name="option" value="month" defaultChecked />
              <label htmlFor="month">€1/month</label>
              
              <input type="radio" className="button" id="year" name="option" value="year" />
              <label htmlFor="year">€10/year</label>
            </div>
            <select className="currency">
              <option value="euro">EUR</option>
              <option value="dollar">USD</option>
            </select>
          </div>
          <div className="payment-form-info">
            <div className="payment-form-input">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john.doe@mail.com" />
            </div>
            <div className="payment-form-input">
              <label htmlFor="card">Card Number</label>
              <input type="text" id="card" name="card" placeholder="1234 1234 1234 1234" />
            </div>
            <div className="payment-form-input payment-form-input-half">
              <label htmlFor="expdate">Expiration Date</label>
              <input type="text" id="expdate" name="expdate" placeholder="MM / YY" />
            </div>
            <div className="payment-form-input payment-form-input-half">
              <label htmlFor="cvc">CVC / CVV</label>
              <input type="number" id="cvc" name="cvc" placeholder="000" />
            </div>
          </div>
          <button type="submit">Upgrade now!</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
