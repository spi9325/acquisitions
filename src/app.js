//  this is for your setup express application
import express from 'express';
import logger from './config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routes/route.signup.js';
import securityMiddleware from './middleware/security.middleware.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trimEnd()) },
  })
);
app.use(securityMiddleware);
app.get('/', (req, res) => {
  logger.info('hello from Acqisitions');
  res.status(200).send('hello from acquisations........66.33');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });

  app.use('/api/auth', router);
});

export default app;
