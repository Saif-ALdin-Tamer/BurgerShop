import { PaymentUseCase } from '../usecases/payment.usecase.js';

export const handleWebhook = (req, res, _next) => {
  const signature = req.headers['stripe-signature'];

  if (!signature) {
    return res.status(400).json({
      success: false,
      message: 'Missing stripe-signature header.',
    });
  }

  try {
    const result = PaymentUseCase.handleWebhookEvent(req.body, signature);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Webhook Error:', error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
};
