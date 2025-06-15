export const calculateTotal = (items) => {
  return items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
};
