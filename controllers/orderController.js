import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      products: req.body.products,
      totalCost: req.body.totalCost
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('products.product');
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('products.product');
  res.json(orders);
};
