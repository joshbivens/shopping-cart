const items = document.querySelector("#items");

// Fill storefront
db.collection("items").get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const item = doc.data();
      items.innerHTML += `
        <div class="col s12 m6">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.img_url}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${item.name}
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
                class="waves-effect waves-light btn btn-large orange"
              >Add To Cart</a>
            </div>
          </div>
        </div>
      `
    });
  });

const reducePrice = (sale, discount, price) => {
  const reducedPrice = Math.floor(price - (price * (discount / 100)));
  return sale ?
    `<strike style="color: crimson">${"$" + price}</strike> ${"$" + reducedPrice}` :
    "$" + price;
};