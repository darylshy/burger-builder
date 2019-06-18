export const getTotal = (strings = "", subtotal, tax) => {
  return `Your total is $${Number(subtotal + subtotal * (tax / 100)).toFixed(
    2
  )}!`;
};

export const toDollars = (strings = "", int) => {
  return `$${int.toFixed(2)}`;
};
