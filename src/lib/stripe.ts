import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51PBfavIrVuaRWU8a90jaHjj57wNI96O8voepijk2CsIKjFBTW1cwiU1qkHz70ZK2wYQB0WPZ588k4CEFoXpKWdv900eV8LMVJx',
  {
    apiVersion: '2024-04-10',
  }
);

export { stripe };
