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
document.addEventListener("DOMContentLoaded", function () {
  const buttonMenuTrigger = document.querySelector(".button_menu_trigger");
  const buttons = document.querySelector(".buttons");
  const buttonFirst = document.querySelector(".button_first");
  const buttonSec = document.querySelector(".button_sec");

  buttonMenuTrigger.addEventListener("click", function () {
    buttons.classList.toggle("active");
    buttons.classList.toggle("hidden");
    buttonFirst.classList.toggle("hidden");
    buttonSec.classList.toggle("hidden");
  });
});
