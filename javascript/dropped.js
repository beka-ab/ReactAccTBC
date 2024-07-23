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
