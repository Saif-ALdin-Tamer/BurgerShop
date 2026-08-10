import { stripe } from '../config/stripe.js';
import { config } from '../config/env.js';

export class StripeService {
  static async createCheckoutSession({ items, customerEmail, successUrl, cancelUrl, metadata = {} }) {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: item.currency || 'usd',
        product_data: {
          name: item.name,
          description: item.description || undefined,
          images:
            item.image && (item.image.startsWith('http://') || item.image.startsWith('https://'))
              ? [item.image]
              : undefined,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    return await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      success_url: successUrl || `${config.clientUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${config.clientUrl}/cart`,
      metadata,
    });
  }

  static async createPaymentIntent({ amount, currency = 'usd', metadata = {}, paymentMethodTypes = ['card'] }) {
    return await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      payment_method_types: paymentMethodTypes,
      metadata,
    });
  }

  static constructWebhookEvent(rawBody, signature) {
    if (!config.stripe.webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not configured in environment variables.');
    }
    return stripe.webhooks.constructEvent(rawBody, signature, config.stripe.webhookSecret);
  }

  static async retrievePaymentIntent(paymentIntentId) {
    return await stripe.paymentIntents.retrieve(paymentIntentId);
  }

  static async retrieveCheckoutSession(sessionId) {
    return await stripe.checkout.sessions.retrieve(sessionId);
  }
}
