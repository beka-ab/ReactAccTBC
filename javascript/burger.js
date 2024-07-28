document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger_menu");
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector(".header_menu_mobile_version");

  const toggleMenu = () => {
    burgerMenu.classList.toggle("open");
    header.classList.toggle("header_bg_color");

    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 500);
    } else {
      mobileMenu.style.display = "block";
      setTimeout(() => {
        mobileMenu.classList.add("show");
      }, 10);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 991) {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("show");
      burgerMenu.classList.remove("open");
      header.classList.remove("header_bg_color");
    }
  };

  burgerMenu.addEventListener("click", toggleMenu);
  window.addEventListener("resize", handleResize);
});
const triger_icon_over = document.querySelector(".triger_icon_over");
const triger_icon = document.querySelector(".triger_icon");
const button_menu_trigger = document.querySelector(".button_menu_trigger");
const button_clicked_content = document.querySelector(
  ".button_clicked_content"
);
const button_menu = document.querySelector(".button_menu");
let clicked = true;
button_menu_trigger.addEventListener("click", () => {
  if (clicked) {
    button_clicked_content.style.opacity = "1";
    triger_icon.style.opacity = "0";
    triger_icon_over.style.opacity = "1";
    button_menu.style.gridTemplateRows = "1fr 56px";

    clicked = false;
  } else {
    button_clicked_content.style.opacity = "0";
    triger_icon_over.style.opacity = "0";
    triger_icon.style.opacity = "1";
    button_menu.style.gridTemplateRows = "56px";

    clicked = true;
  }
});
