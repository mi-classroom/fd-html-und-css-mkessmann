const menuOpenButton = document.querySelector("[data-js-main-menu-open]");
const menuCloseButton = document.querySelector("[data-js-main-menu-close]");
const searchOpenButton = document.querySelector("[data-js-search-open");
const searchCloseButton = document.querySelector("[data-js-search-close");
const menuOverlay = document.querySelector("[data-js-main-menu-target]");

menuOpenButton.addEventListener("click", function () {
  menuOverlay.classList.add("is-active");
});

menuCloseButton.addEventListener("click", function () {
  menuOverlay.classList.remove("is-active");
});

searchOpenButton.addEventListener("click", function () {
  console.log('Searching...')
});
