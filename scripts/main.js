const menuOverlay = document.querySelector("[data-js-main-menu-target]");
const menuOpenButton = document.querySelector("[data-js-main-menu-open]");
const menuCloseButton = document.querySelector("[data-js-main-menu-close]");
const searchOpenButton = document.querySelector("[data-js-search-open");
const searchCloseButton = document.querySelector("[data-js-search-close");

const navigationOnHover = document.querySelector(".navigation > ul > li");

/*Search and Menu Button interactions ###############################*/
menuOpenButton.addEventListener("click", function () {
  menuOverlay.classList.add("is-active");
});

menuCloseButton.addEventListener("click", function () {
  menuOverlay.classList.remove("is-active");
});

searchOpenButton.addEventListener("click", function () {
  console.log("Searching...");
});

/*Navigation on hover interaction ###############################*/
navigationOnHover.addEventListener("mouseover", function () {
  navigationOnHover.classList.add("on-hover");
});

navigationOnHover.addEventListener("mouseout", function () {
  navigationOnHover.classList.remove("on-hover");
});
