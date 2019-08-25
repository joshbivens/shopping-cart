$(document).ready(() => {
  const renderStorefront = (item, id) => {
    $('#items').append(`
    <div class="col s12 m6" id="item-card" data-id="${id}">
      <div class="card medium grey lighten-4">
        <div class="card-image">
          ${discountBadge(item.sale, item.discount)}
          <img class="activator" src="${item.img_url}" alt="${item.name}">
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
`);
  };

  db.collection('items').get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        renderStorefront(doc.data(), doc.id);
      });
    });
});
