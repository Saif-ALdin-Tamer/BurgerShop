import { PaymentUseCase } from '../usecases/payment.usecase.js';

export class PaymentController {
  static async createCheckoutSession(req, res, next) {
    try {
      const { items, customerEmail, successUrl, cancelUrl, orderId } = req.body;
      const result = await PaymentUseCase.createCheckoutSession({
        items,
        customerEmail,
        successUrl,
        cancelUrl,
        orderId,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createPaymentIntent(req, res, next) {
    try {
      const { amount, currency, orderId } = req.body;
      const result = await PaymentUseCase.createPaymentIntent({
        amount,
        currency,
        orderId,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPaymentStatus(req, res, next) {
    try {
      const { id } = req.params;
      const result = await PaymentUseCase.getPaymentStatus(id);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
