import express from 'express';
import { createOrder, getUserOrders, getAllOrders } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/my', protect, getUserOrders);
router.get('/', protect, admin, getAllOrders);

export default router;
