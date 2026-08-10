import { StripeService } from '../services/stripe.service.js';

export class PaymentUseCase {
  static async createCheckoutSession({ items, customerEmail, successUrl, cancelUrl, orderId }) {
    if (!items || !Array.isArray(items) || items.length === 0) {
      const error = new Error('Cart items are required and must not be empty.');
      error.statusCode = 400;
      throw error;
    }

    for (const item of items) {
      if (!item.name || typeof item.price !== 'number' || item.price <= 0) {
        const error = new Error(`Invalid item details: ${JSON.stringify(item)}. Name and positive price are required.`);
        error.statusCode = 400;
        throw error;
      }
    }

    const metadata = {
      orderId: orderId || `order_${Date.now()}`,
    };

    const session = await StripeService.createCheckoutSession({
      items,
      customerEmail,
      successUrl,
      cancelUrl,
      metadata,
    });

    return {
      sessionId: session.id,
      url: session.url,
      orderId: metadata.orderId,
    };
  }

  static async createPaymentIntent({ amount, currency = 'usd', orderId }) {
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      const error = new Error('Valid positive amount is required.');
      error.statusCode = 400;
      throw error;
    }

    const metadata = {
      orderId: orderId || `order_${Date.now()}`,
    };

    const paymentIntent = await StripeService.createPaymentIntent({
      amount,
      currency,
      metadata,
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      orderId: metadata.orderId,
    };
  }

  static handleWebhookEvent(rawBody, signature) {
    const event = StripeService.constructWebhookEvent(rawBody, signature);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log(`Checkout session completed for order: ${session.metadata?.orderId || session.id}`);
        break;
      }
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent succeeded for order: ${paymentIntent.metadata?.orderId || paymentIntent.id}`);
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object;
        console.warn(`PaymentIntent failed: ${paymentIntent.last_payment_error?.message}`);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return { received: true, type: event.type };
  }

  static async getPaymentStatus(id) {
    if (!id) {
      const error = new Error('Payment ID or Session ID is required.');
      error.statusCode = 400;
      throw error;
    }

    if (id.startsWith('cs_')) {
      const session = await StripeService.retrieveCheckoutSession(id);
      return {
        id: session.id,
        paymentStatus: session.payment_status,
        status: session.status,
        customerEmail: session.customer_details?.email,
      };
    } else {
      const paymentIntent = await StripeService.retrievePaymentIntent(id);
      return {
        id: paymentIntent.id,
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
      };
    }
  }
}
