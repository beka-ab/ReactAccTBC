const sliders = document.querySelectorAll(".slider");
const sliderThumbs = document.querySelectorAll(".slider-scrollbar-thumb");

for (let i = 0; i < sliders.length; i++) {
  let isDown = false;
  let startX;
  let scrollLeft;

  sliders[i].addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - sliders[i].offsetLeft;
    scrollLeft = sliders[i].scrollLeft;
  });
  sliders[i].addEventListener("mouseleave", () => {
    isDown = false;
  });
  sliders[i].addEventListener("mouseup", () => {
    isDown = false;
  });
  sliders[i].addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliders[i].offsetLeft;
    const walk = x - startX;
    sliders[i].scrollLeft = scrollLeft - walk;
    updateThumbPosition();
  });

  function updateThumbPosition() {
    const scrollRatio =
      sliders[i].scrollLeft / (sliders[i].scrollWidth - sliders[i].clientWidth);
    const thumbMaxTranslate =
      sliders[i].clientWidth - sliderThumbs[i].offsetWidth;
    sliderThumbs[i].style.transform = `translateX(${
      scrollRatio * thumbMaxTranslate
    }px)`;
  }

  updateThumbPosition();
}

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper_container", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".main-slider_back",
      prevEl: ".main-slider_prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.213,
        spaceBetween: 15,
        scrollbar: { dragSize: 200 },
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        scrollbar: { dragSize: 100 },
      },
      500: { slidesPerView: 1.49, spaceBetween: 15 },
      600: { slidesPerView: 1.7, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      991: { slidesPerView: 3, spaceBetween: 30, scrollbar: { dragSize: 200 } },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: { dragSize: 300 },
      },
    },
    on: {
      slideChangeTransitionEnd: updateScrollbarPosition,
      setTranslate: updateScrollbarPosition,
    },
  });

  function updateScrollbarPosition() {
    const scrollbar = document.querySelector(".swiper-scrollbar");
    const drag = document.querySelector(".swiper-scrollbar-drag");
    if (typeof swiper.maxTranslate === "function") {
      const maxTranslate = swiper.maxTranslate();
      const currentTranslate = Math.abs(swiper.translate);
      const progress = currentTranslate / maxTranslate;
      const maxDragLeft = scrollbar.offsetWidth - drag.offsetWidth;
      drag.style.transform = `translateX(${progress * maxDragLeft}px)`;
    } else {
      console.error("maxTranslate is not a function on swiper instance");
    }
  }

  function handleArrowClick(clickedArrow, otherArrow) {
    const clickedSvg = clickedArrow.querySelector("svg");
    const otherSvg = otherArrow.querySelector("svg");
    if (clickedSvg && otherSvg) {
      clickedSvg.style.fill = "#182cc0";
      otherSvg.style.fill = "#a5aaac";
    }
  }

  const prevArrows = document.querySelectorAll(".main-slider_prev");
  const nextArrows = document.querySelectorAll(".main-slider_back");

  prevArrows.forEach((prevArrow) => {
    prevArrow.addEventListener("click", () => {
      nextArrows.forEach((nextArrow) => {
        handleArrowClick(prevArrow, nextArrow);
      });
    });
  });

  nextArrows.forEach((nextArrow) => {
    nextArrow.addEventListener("click", () => {
      prevArrows.forEach((prevArrow) => {
        handleArrowClick(nextArrow, prevArrow);
      });
    });
  });

  updateScrollbarPosition();
});
