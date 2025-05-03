const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const products = document.getElementById("products");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});

products.addEventListener("click", function () {
  window.location.href = "products.html";
});
