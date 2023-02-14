const menuButton = document.querySelector(".menu");
const darkButton = document.querySelector(".change-theme");

const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
menuButton.addEventListener("click", function () {
  navUl.classList.toggle("active");
});
darkButton.addEventListener("click", () => {
  nav.classList.toggle("dark");
  navUl.classList.toggle("dark");
});
const cartButton = document.querySelector(".cart-button");
const cartModel = document.querySelector(".cart-modal");

cartButton.addEventListener("click", () => {
  cartModel.classList.toggle("active");
});
