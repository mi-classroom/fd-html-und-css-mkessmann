/*Search and Menu Button interactions ###############################*/
const menuOverlay = document.querySelector("[data-js-main-menu-target]");
const menuOpenButton = document.querySelector("[data-js-main-menu-open]");
const menuCloseButton = document.querySelector("[data-js-main-menu-close]");
const searchOpenButton = document.querySelector("[data-js-search-open]");
const searchCloseButton = document.querySelector("[data-js-search-close]");

menuOpenButton.addEventListener("click", function () {
  menuOverlay.classList.add("is-active");
});
menuCloseButton.addEventListener("click", function () {
  menuOverlay.classList.remove("is-active");
});
searchOpenButton.addEventListener("click", function () {
  console.log("Searching...");
});

/*on page navigation generation ###############################*/

const pageNavigation = document.querySelector("[data-js-page-nav-menu]");
const articleHeadlines = document.querySelectorAll(
  "[data-js-page-nav-content] > article > h2"
);

articleHeadlines.forEach(function (headline) {
  const pageNavAnchor = document.createElement("a");
  const pageNavItem = document.createElement("li");
  const sectionID = headline.innerText;

  pageNavAnchor.innerText = headline.innerText;
  pageNavItem.appendChild(pageNavAnchor);
  pageNavigation.appendChild(pageNavItem);
});

/*Navigation on hover interaction ###############################*/
const navigationOnHover = document.querySelector(
  "[data-js-page-nav-menu] > li"
);
navigationOnHover.addEventListener("mouseover", function () {
  navigationOnHover.classList.add("on-hover");
});
navigationOnHover.addEventListener("mouseout", function () {
  navigationOnHover.classList.remove("on-hover");
});
