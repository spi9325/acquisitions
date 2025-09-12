import { slidingWindow } from '@arcjet/node';
import aj from '../config/arcjet.js';
import logger from '../config/logger.js';
const securityMiddleware = async (req, res, next) => {
  try {
    // const role = req.user.role || 'guest';
    const role =  'guest';
    let limit;
    let message;

    switch (role) {
      case 'admin':
        limit = 20;
        message = 'admin req limit exceeded (20 per min)';
        break;
      case 'user':
        limit = 10;
        message = 'user req limit exceeded (10 per min)';
        break;
      case 'guest':
        limit = 10;
        // eslint-disable-next-line no-unused-vars
        message = 'guest req limit exceeded (5 per min)';
        break;
    }
    const client = aj.withRule(
      slidingWindow({
        mode: 'LIVE',
        interval: '1m',
        max: limit,
        name: `${role}-Rate-Limit`,
      })
    );
    const decision = await client.protect(req);
    if (decision.isDenied() && decision.reason.isBot()) {
      logger.warn('Bot req blocked', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        path: req.path,
      });
      return res
        .status(403)
        .json({ error: 'Forbidden', message: 'automated Request not allowed' });
    }
    if (decision.isDenied() && decision.reason.isShield()) {
      logger.warn('shield req blocked', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        path: req.path,
        method: req.method,
      });
      return res
        .status(403)
        .json({
          error: 'Forbidden',
          message: ' Request Blocked By Security Policy',
        });
    }
    if (decision.isDenied() && decision.reason.isRateLimit()) {
      console.log('===============================');
      logger.warn('shield req blocked', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        path: req.path,
        method: req.method,
      });
      return res
        .status(403)
        .json({ error: 'Forbidden', message: ' too Many Requests' });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default securityMiddleware;
