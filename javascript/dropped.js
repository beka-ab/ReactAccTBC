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
const titles = document.querySelectorAll(".footer-arrow-div-title");
const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelectorAll(".footer-arrow-div-content");
let expandedContent = null;

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    const isCurrentlyExpanded = expandedContent === index;
    expandedContent = isCurrentlyExpanded ? null : index;

    arrows.forEach((arrow, i) => {
      if (i === expandedContent) {
        arrow.classList.add("isExpanded");
      } else {
        arrow.classList.remove("isExpanded");
      }
    });

    contents.forEach((content, i) => {
      if (i === expandedContent) {
        content.classList.add("isExpanded");
      } else {
        content.classList.remove("isExpanded");
      }
    });
  });
});
