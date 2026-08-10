import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  },
};

export const validateEnv = () => {
  if (!config.stripe.secretKey && config.nodeEnv === 'production') {
    console.warn('STRIPE_SECRET_KEY is not defined in environment variables.');
  }
};
