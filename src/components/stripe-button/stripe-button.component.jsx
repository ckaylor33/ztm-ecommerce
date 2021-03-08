import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51ISftwGBzPmXbYiZImDPVWUlDpqcXPzUL7vt5oUCrwJjgGDvhyLB7JxcdCQdX8n3imHbXG2ctgL3wYKDVHxkbMdS00YZPu1dqJ'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      currency='GBP'
      label='Pay Now'
      name='CrownCoffee'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
