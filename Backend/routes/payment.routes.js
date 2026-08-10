import { Router } from 'express';
import express from 'express';
import { PaymentController } from '../controllers/payment.controller.js';
import { handleWebhook } from '../middlewares/handleWebhook.js';

const router = Router();

router.post('/create-checkout-session', PaymentController.createCheckoutSession);
router.post('/create-payment-intent', PaymentController.createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);
router.get('/status/:id', PaymentController.getPaymentStatus);

export default router;
