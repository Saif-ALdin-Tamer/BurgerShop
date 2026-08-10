import express from 'express';
import cors from 'cors';
import { config, validateEnv } from './config/env.js';
import paymentRoutes from './routes/payment.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

validateEnv();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/payments', paymentRoutes);

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Burger Shop Backend API',
  });
});

app.use(errorHandler);

export default app;
