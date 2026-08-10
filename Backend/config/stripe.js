import Stripe from 'stripe';
import { config } from './env.js';

if (!config.stripe.secretKey) {
  console.warn('Stripe secret key missing. Set STRIPE_SECRET_KEY in your .env file.');
}

export const stripe = new Stripe(config.stripe.secretKey || 'dummy_key_for_init', {
  apiVersion: '2023-10-16',
});
