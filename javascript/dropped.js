document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(
    ".header_menu_dropdown .flex_cont"
  );
  const burgerMenu = document.querySelector(".burger_menu");

  const closeDropdown = (dropdown) => {
    const content = dropdown.querySelector(".true");
    content.style.maxHeight = content.scrollHeight + "px";
    setTimeout(() => {
      dropdown.classList.remove("active");
      content.style.maxHeight = "0";
    }, 10);
  };

  const toggleDropdown = (dropdown) => {
    const content = dropdown.querySelector(".true");
    if (dropdown.classList.contains("active")) {
      closeDropdown(dropdown);
    } else {
      dropdown.classList.add("active");
      content.style.display = "flex";
      content.style.maxHeight = "0";
      content.offsetHeight;
      setTimeout(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      }, 10);
    }
  };

  const closeAllDropdowns = (excludeDropdown) => {
    document
      .querySelectorAll(".header_menu_dropdown.active")
      .forEach((dropdown) => {
        if (dropdown !== excludeDropdown) {
          closeDropdown(dropdown);
        }
      });
  };

  dropdowns.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdown = item.closest(".header_menu_dropdown");
      closeAllDropdowns(dropdown);
      toggleDropdown(dropdown);
    });
  });

  burgerMenu.addEventListener("click", () => {
    if (!burgerMenu.classList.contains("open")) {
      closeAllDropdowns();
    }
  });

  window.addEventListener("resize", closeAllDropdowns);
});
////privacy
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

overlay.addEventListener("click", function () {
  privacyMenu.classList.remove("isOpened");
  overlay.classList.remove("isOpened");
});
//// rules
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
