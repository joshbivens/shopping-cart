# Shopping Cart

Using JavaScript, Materialize, and Firestore to create a shopping cart

---
## TODO
### 08/16
- git init &#10003;
- npm init &#10003;
- set up fakeJSON account/get key &#10003;
- create folders/files &#10003;
- get Materialize &#10003;
- ~~create secret keys private repo with `git_secret`~~
- set up index.html &#10003;
- ~~Add Axios~~

### 08/19 > 08/20
- create new Firestore &#10003;
- save products to Firestore &#10003;
  - data structure
    - name
    - description
    - price
    - sale?
    - discount percent
    - img (lg and sm) url

### 08/21
- retrieve products from Firestore and show them on the page &#10003;
- Find dummy product images (110px and 200px) &#10003;
- store images in S3 &#10003;
- set product data in Firestore &#10003;

### 08/22 > 08/23
- get small versions of imgs &#10003;
- when "add to cart" is clicked &#10003;
	- Close card overlay
	- Add "added to cart" timed modal

### 08/24 > 08/25
- convert to jQuery &#10003;
- make a 'cart' doc in Firestore and use *that* to populate the cart.
  - add quantity badge
  - add ability to remove items from cart
    - show 'empty' when no items
  - update total when items are added to cart

## Notes

## Future
- get badge to display properly on cart image &#10003;
- rethink js organization/refactor