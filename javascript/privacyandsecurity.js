const privacyMenu = document.querySelector(".privacy-menu");
const privacyCloseIcon = document.querySelector(".privacy-menu-close-div");
const privacyButton = document.querySelector(".privacy-button");
const overlay = document.querySelector(".overlay");

privacyButton.addEventListener("click", function () {
  privacyMenu.classList.add("isOpened");
  overlay.classList.add("isOpened");
});

privacyCloseIcon.addEventListener("click", function () {
  privacyMenu.classList.remove("isOpened");
  overlay.classList.remove("isOpened");
});
console.log(privacyCloseIcon);
overlay.addEventListener("click", function () {
  privacyMenu.classList.remove("isOpened");
  overlay.classList.remove("isOpened");
});

const rulesMenu = document.querySelector(".rules-menu");
const rulesCloseIcon = document.querySelector(".rules-menu-close-div");
const rulesButton = document.querySelector(".rules-button");
const rulesOverlay = document.querySelector(".overlay");

rulesButton.addEventListener("click", function () {
  rulesMenu.classList.add("isOpened");
  rulesOverlay.classList.add("isOpened");
});

rulesCloseIcon.addEventListener("click", function () {
  rulesMenu.classList.remove("isOpened");
  rulesOverlay.classList.remove("isOpened");
});

rulesOverlay.addEventListener("click", function () {
  rulesMenu.classList.remove("isOpened");
  rulesOverlay.classList.remove("isOpened");
});
