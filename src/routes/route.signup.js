import { Router } from 'express';
import { signupcontroller } from '../controllers/signup-controller';

export const router = Router();

router.post('/signup', signupcontroller);
