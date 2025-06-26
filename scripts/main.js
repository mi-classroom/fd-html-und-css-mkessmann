/*Search and Menu Button interactions #################################*/
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

/*on page navigation generation #######################################*/
const pageNavigation = document.querySelector("[data-js-page-nav-menu]");
const articleHeadlines = document.querySelectorAll(
  "[data-js-page-nav-content] > article > h2"
);

articleHeadlines.forEach(function (headline) {
  const pageNavAnchor = document.createElement("a");
  const pageNavItem = document.createElement("li");
  let articleID = headline.innerText;

  articleID = toSlug(articleID);
  headline.parentElement.setAttribute("id", articleID);
  pageNavAnchor.setAttribute("href", `#${articleID}`);

  pageNavAnchor.innerText = headline.innerText;
  pageNavItem.appendChild(pageNavAnchor);
  pageNavigation.appendChild(pageNavItem);

  console.log(headline.parentElement.id);
});

/*turn string to slug (taken from Christian Noss' code) ###############*/
function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[äöüß]/g, (match) => {
      switch (match) {
        case "ä":
          return "ae";
        case "ö":
          return "oe";
        case "ü":
          return "ue";
        case "ß":
          return "ss";
      }
    })
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with a single dash
    .replace(/^-|-$/g, "") // Remove leading and trailing dashes
    .replace(/--+/g, "-"); // Replace multiple dashes with a single dash
}

/*Navigation on hover interaction #####################################*/
const navigationOnHover = document.querySelector(
  "[data-js-page-nav-menu] > li"
);
navigationOnHover.addEventListener("mouseover", function () {
  navigationOnHover.classList.add("on-hover");
});
navigationOnHover.addEventListener("mouseout", function () {
  navigationOnHover.classList.remove("on-hover");
});
