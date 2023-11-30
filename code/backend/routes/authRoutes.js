import express from 'express';
import {login, callback, logout, failure} from '../controllers/authController.js';

const router = express.Router();

router.get('/google', login);

router.get('/google/callback', callback);

router.get('/logout', logout);

router.get('/failure', failure);

export default router;