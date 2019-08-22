db.collection("items").get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderStorefront(doc.data(), doc.id);
    });
  });

  // Function on Add to cart button that will take in doc.id
  // and create new card (in cart) with doc.data() retreived
  // using that doc.id

  // <div class="cart-contents">
  //   <div class="card horizontal">
  //     <div class="card-image">
  //       <img src="https://picsum.photos/110" alt="">
  //     </div>
  //     <div class="card-stacked">
  //       <div class="card-content">
  //         <h6><b>Commodo Nullam</b></h6>
  //         <p>$13.99</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

const renderStorefront = (item, id) => {
  const items = document.querySelector("#items");
  items.innerHTML += `
    <div class="col s12 m6">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
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
            href="#"  
            id="add-to-cart"
            class="waves-effect waves-light btn orange"
            data-id="${id}"
          >Add To Cart</a>
        </div>    
      </div>
    </div>
`;
}

const reducePrice = (sale, discount, price) => {
  const reducedPrice = Math.floor(price - (price * (discount / 100)));
  return sale ?
    `<strike>${"$" + price}</strike> <span style="color: crimson">${"$" + reducedPrice}</span>` :
    "$" + price;
};

const discountBadge = (sale, discount) => {
  return sale ?
  `<span class="new badge red" data-badge-caption="off!">${discount}%</span>` :
  '';
};


