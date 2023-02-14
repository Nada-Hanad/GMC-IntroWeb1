var menuButton = document.querySelector(".menu");
var navUl = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
  //   if (navUl.classList.contains("active")) {
  //     navUl.classList.remove("active");
  //   } else {
  //     navUl.classList.add("active");
  //   }
  menuButton.classList.toggle("active");
  navUl.classList.toggle("active");
});
