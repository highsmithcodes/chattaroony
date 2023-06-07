import { loadStripe } from '@stripe/stripe-js';
// import dotenv from 'dotenv';
// dotenv.config();
let stripePromise;
const getStripe = () => {

  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;