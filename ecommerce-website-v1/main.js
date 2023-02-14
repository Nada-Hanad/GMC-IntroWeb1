var cartButton = document.querySelector(".cart-button");
var cartItems = document.querySelector(".cart-items");
var panier = [];
cartButton.addEventListener("click", function () {
  cartItems.classList.toggle("active");
});
var productsContainer = document.querySelector(".products");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let myProducts = res.products;

    myProducts.forEach((elementCourant, i) => {
      productsContainer.innerHTML += `
         <div id=${i} class="product">
        <img
          src=${elementCourant.thumbnail}
          alt=""
        />
        <div class="item-info">
          <h3>${elementCourant.title}</h3>
          <p>${elementCourant.price} $</p>
              <input type="button" class="buy" value="Add to cart">
        </div>
      </div>

      `;
    });
    var addButtons = document.querySelectorAll(".buy");

    addButtons.forEach((e) => {
      e.addEventListener("click", function (event) {
        let clickedID = event.target.parentNode.parentNode.getAttribute("id");
        let clickedProduct = myProducts[clickedID];
        console.log(clickedProduct);
        let exist = false;
        panier.forEach((e) => {
          if (e.title == clickedProduct.title) {
            exist = true;
          }
        });
        if (exist == true) {
          alert("L'élément existe déjà");
        } else {
          let count = document.querySelector(".count");
          count.innerHTML++;
          cartItems.innerHTML += `
                  <div class="cart-item">
                  <div class="title">${clickedProduct.title}</div>
                  <div class="unit-price">${clickedProduct.price}</div>
                  <div class="quantity">
                    <i class="fa-solid fa-minus minus"></i>
                    <div class="amount">1</div>
                    <i class="fa-solid fa-plus plus"></i>
                  </div>
                  <div class="total-item-price">${clickedProduct.price}</div>
                  <i class="fa-solid fa-trash delete"></i>
                </div>

                  `;
          panier.push(clickedProduct);
          let pluses = document.querySelectorAll(".plus");
          pluses.forEach((e) => {
            e.addEventListener("click", (event) => {
              console.log(event);
              let quantyToUpdate =
                event.target.parentNode.querySelector(".amount");
              console.log(quantyToUpdate.innerHTML);
              quantyToUpdate.innerHTML++;
              //quantyToUpdate.innerHTML = quantyToUpdate.innerHTML + 1;
            });
          });
          let deletes = document.querySelectorAll(".delete");
          deletes.forEach((e) => {
            e.addEventListener("click", (event) => {
              event.target.parentNode.remove();
              let count = document.querySelector(".count");
              count.innerHTML--;
            });
          });
        }
      });
    });
  });

// var myProducts = [
//   {
//     title: "Product 1",
//     price: 10,
//     thumbnail:
//       "https://images.unsplash.com/photo-1674229074679-aeb77c70e431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "Product 2",
//     price: 10,
//   },
//   {
//     title: "Product 3",
//     price: 10,
//   },
// ];

// myProducts.forEach((elementCourant, i) => {
//   productsContainer.innerHTML += `
//          <div id=${i} class="product">
//         <img
//           src=${elementCourant.thumbnail}
//           alt=""
//         />
//         <div class="item-info">
//           <h3>${elementCourant.title} </h3>
//           <p>${elementCourant.price} $</p>
//           <div class="buy">
//             <i class="fa-solid fa-cart-shopping"></i>
//             <span>Add to cart</span>
//           </div>
//         </div>
//       </div>

//       `;
// });
