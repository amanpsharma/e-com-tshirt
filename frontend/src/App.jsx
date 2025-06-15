import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './store';

export default function App() {
  const count = useSelector(state => state.cart.count);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-Com TShirt</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(addItem())}
      >
        Add Item
      </button>
      <p className="mt-2">Items in cart: {count}</p>
    </div>
  );
}
