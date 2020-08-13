import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = "pk_test_51HFWhZFzcqw3oavHxewucURQFfBZXqcNtpPdNho3os4i5SfIawc9mDmDzdkK5An4BjOuYekkAFOPv3U0KiKorm4q00TImESTB1";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;