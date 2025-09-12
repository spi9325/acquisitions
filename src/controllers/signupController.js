import logger from '../config/logger.js';

export async function signupController(req, res) {
  try {
    const { email } = req.body;
    console.log('hiii', email);
    res.send('hii');
    // rest of your code
  } catch (error) {
    logger.error(error);
  }
}
