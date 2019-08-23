const reducePrice = (sale, discount, price) => {
  const reducedPrice = Math.floor(price - (price * (discount / 100)));
  return sale
    ? `<strike>${`$${price}`}</strike> <span style="color: crimson">${`$${reducedPrice}`}</span>`
    : `$${price}`;
};

const discountBadge = (sale, discount) => {
  return sale
    ? `<span class="new badge red" data-badge-caption="off!">${discount}%</span>`
    : '';
};

const renderStorefront = (item, id) => {
  const items = document.querySelector('#items');
  items.innerHTML += `
    <div class="col s12 m6" id="item-card" data-id="${id}">
      <div class="card medium">
        <div class="card-image">
          ${discountBadge(item.sale, item.discount)}
          <img class="activator" src="${item.img_url}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            ${item.name}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>${item.short_desc}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${item.name}
            <i class="material-icons right">close</i>
          </span>
          <h5>${reducePrice(item.sale, item.discount, item.price)}</h5>
          <p>${item.description}</p>
          <p><i>Free shipping on orders over $50!</i></p>
          <a 
            href="#added-modal"  
            id="add-to-cart"
            class="waves-effect waves-light btn orange modal-trigger"
            data-id="${id}"
          >Add To Cart</a>
        </div>    
      </div>
    </div>
`;
};

db.collection('items').get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderStorefront(doc.data(), doc.id);
    });
  });

const renderCart = (e) => {
  const cart = document.querySelector('#cart');
  const itemID = e.target.dataset.id;
  // Close card reveal
  document.querySelector(`div[data-id="${itemID}"] .card-reveal .card-title`).click();
  if (itemID) {
    const itemRef = db.collection('items').doc(itemID);

    itemRef.get().then((doc) => {
      const item = doc.data();
      cart.innerHTML += `
        <div class="cart-contents">
          <div class="card horizontal">
            <div class="card-image">
              ${discountBadge(item.sale, item.discount)}
              <img src="${item.img_url_sm}" alt="${item.name}">
            </div>
            <div class="card-stacked">
              <div class="card-content>
                <h6><b>${item.name}</b></h6>
                <p>${reducePrice(item.sale, item.discount, item.price)}</p>
                <!-- Delete icon -->
              </div>
            </div>
          </div>
        </div>      
      `;
    });
  }
};

document.addEventListener('click', renderCart);
