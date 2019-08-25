const reducePrice = (sale, discount, price) => {
  const reducedPrice = Math.floor(price - (price * (discount / 100)));
  return sale
    ? `<strike>${`$${price}`}</strike> <span style="color: crimson">${`$${reducedPrice}`}</span>`
    : `$${price}`;
};

const discountBadge = (sale, discount) => (sale
  ? `<span class="new badge red" data-badge-caption="off!">${discount}%</span>`
  : ''
);

// let total = 0;

// const updateTotal = (price, discount) => {
//   $('#total').html(`Total: $${total += Math.floor(price - (price * (discount / 100)))}.00`);
// };
