import logger from '../config/logger';

export async function signupcontroller(req, res) {
  try {
    const { email } = req.body;
    console.log('hiii', email);
    res.send('hii');
    // rest of your code
  } catch (error) {
    logger.error(error);
  }
}
