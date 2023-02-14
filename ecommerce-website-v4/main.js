const cartButton = document.querySelector(".cart-button");
const validPromoCodes = [
  {
    code: "promo1",
    discount: 10,
  },
];
const modal = document.querySelector(".modal");
let panier = [];
cartButton.addEventListener("click", function () {
  modal.classList.toggle("active");
});

const productsContainer = document.querySelector(".products-container");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let products = res.products;
    products.forEach((e, i) => {
      productsContainer.innerHTML += ` <div id="${i}" class="product">
        <img
          src=${e.thumbnail}
          alt=""
        />

        <h3 class="product-title">${e.title}</h3>
        <h3 class="product-price">${e.price} $</h3>
        <input class="add-btn" type="button" value="Add to cart" />
      </div>`;
    });
    const addButtons = document.querySelectorAll(".add-btn");
    addButtons.forEach((e) => {
      e.addEventListener("click", (event) => {
        const cartBadge = document.querySelector(".items-count");
        let parent = event.target.parentNode;
        // let priceObject = parent.querySelector(".product-price").innerHTML;
        // let price = parseInt(priceObject);
        // let title = parent.querySelector(".product-title").innerHTML;
        let clickedProductID = parent.getAttribute("id");
        let clickedProduct = products[clickedProductID];
        let exists = false;
        panier.forEach((e) => {
          if (e.title == clickedProduct.title) {
            exists = true;
          }
        });
        if (exists) {
          alert("product already in cart");
        } else {
          panier.push(clickedProduct);
          const total = document.querySelector(".total");
          total.innerHTML = `${
            parseInt(total.innerHTML) + clickedProduct.price
          } $`;
          const modalItems = document.querySelector(".modal-items");

          modalItems.innerHTML += `
                      <div class="modal-item">
                  <div class="title">${clickedProduct.title}</div>
                  <div class="unit-price">${clickedProduct.price} </div>
                  <div class="quantity">
                    <i class="fa-solid fa-minus moins"></i>
                    <div class="quantity-amount">1</div>
                    <i class="fa-solid fa-plus plus"></i>
                  </div>
                  <div class="total-item-price">${clickedProduct.price} </div>
               
                    <i class="fa-solid fa-trash delete"></i>
              
                </div>
                  `;
          cartBadge.innerHTML = panier.length;
        }
        const pluses = document.querySelectorAll(".plus");

        pluses.forEach((e) => {
          e.addEventListener("click", (event) => {
            let stringAmount =
              event.target.parentNode.querySelector(
                ".quantity-amount"
              ).innerHTML;
            let parsedInt = parseInt(stringAmount);
            let newQuantity = parsedInt + 1;
            event.target.parentNode.querySelector(
              ".quantity-amount"
            ).innerHTML = newQuantity;
          });
        });
        const deletes = document.querySelectorAll(".delete");
        deletes.forEach((e) => {
          e.addEventListener("click", (event) => {
            let removedTitle =
              event.target.parentNode.querySelector(".title").innerHTML;
            let newPanier = [];
            panier.forEach((e) => {
              if (e.title !== removedTitle) {
                newPanier.push(e);
              }
            });
            panier = newPanier;
            event.target.parentNode.remove();
            cartBadge.innerHTML = panier.length;
          });
        });
      });
    });
  });
const input = document.querySelector(".promo-input");
const applyBtn = document.querySelector(".promo-button");
applyBtn.addEventListener("click", (event) => {
  let promoCodeIsValid = false;
  let discount;
  validPromoCodes.forEach((element) => {
    if (element.code == input.value) {
      promoCodeIsValid = true;
      discount = element.discount;
    }
  });
  if (promoCodeIsValid == true) {
    const tot = document.querySelector(".total");
    tot.innerHTML = `${
      parseInt(tot.innerHTML) - parseInt(tot.innerHTML) * (discount / 100)
    } $`;
  } else {
    alert("not valid");
  }
});
