$(document).ready(() => {
  // ? Onclick of "add to cart" a copy of the item is pushed to
  // ? an array and the cart will be built from that
  // ? OR-
  // ? Request whole storefront and filter it to include only
  // ? what was placed in cart

  const renderCart = (e) => {
    const itemID = e.target.dataset.id;
    if (itemID) {
      const itemRef = db.collection('items').doc(itemID);
      // TODO - CLOSE CARD REVEAL
      setTimeout(() => {
        $(`a[data-id="${itemID}"]`)
          .parent()
          .children(':first-child')
          .click();
      }, 1000);

      itemRef.get().then((doc) => {
        const item = doc.data();
        $('#cart').append(`
        <div class="card horizontal">
          <div class="card-image">
            ${discountBadge(item.sale, item.discount)}
            <img src="${item.img_url_sm}" alt="${item.name}">
          </div>
          <div class="card-stacked">
            <div class="card-content grey lighten-4">
              <h6><b>${item.name}</b></h6>
              <p>${reducePrice(item.sale, item.discount, item.price)}
              </p>
            </div>
          </div>
        </div>
      `);
      });
    }
  };

  $(document).click(renderCart);
});
