import React from 'react';
import './Payment.css'; 
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    const handlePayment = () => {
        alert('Payment Successful');
        navigate('/app/vendor');
      };

  return (
    <div className="container">
      <h1>Payment Details</h1>

      <div className="account-info">
        <p><strong>Account Name:</strong> Mama Chisom</p>
        <p><strong>Account Number:</strong> 213445675734</p>
      </div>

      <div className="form-group">
        <label htmlFor="input-account-name">Account Name:</label>
        <input
          type="text"
          id="input-account-name"
          name="input-account-name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-account-number">Account Number:</label>
        <input
          type="text"
          id="input-account-number"
          name="input-account-number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          required
        />
      </div>

      <button onClick={handlePayment}>Checkout / Pay</button>
    </div>
  );
};

export default Payment;
