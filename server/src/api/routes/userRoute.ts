import express from 'express';
const userController = require('../controllers/userController')
const router = express.Router();


router.post('/signup', userController.logIn);

router.post('/login', userController.signUp);

export default router;