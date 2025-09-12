import { Router } from 'express';
import { signupController } from '../controllers/signupController.js';

export const router = Router();

router.get('/signup', signupController);
