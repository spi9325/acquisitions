//  this is for your setup express application
import express from 'express';
import logger from './config/logger';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.get('/', (req, res) => {
  logger.info('hello from Acqisitions');
  res.status(200).send('hello from acquisations');
});

export default app;
