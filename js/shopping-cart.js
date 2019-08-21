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
              <img class="activator" src="https://picsum.photos/200">
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
              <h5>$${item.price}.00</h5>
              <p>${item.description}</p>
              <p><i>Free shipping on orders over $50!</i></p>
            </div>
          </div>
        </div>
      `
    });
  });