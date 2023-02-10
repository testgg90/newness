// main script
(function () {
  "use strict";
  document.querySelectorAll(".slider").forEach(function (s) {
    new Swiper(s, {
      spaceBetween: 60,
      centeredSlides: true,
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
    });
  });

  new Swiper(".team-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });

  const videoModal = document.getElementById("videoModal");
  const videoModalFrame = document.querySelector(".videoModalFrame");
  const modalBtn = document.querySelector(
    "button[data-bs-target='#videoModal']"
  );

  if (videoModal) {
    videoModal.addEventListener("shown.bs.modal", (event) => {
      videoModalFrame.setAttribute("src", modalBtn.getAttribute("video-link"));
    });

    videoModal.addEventListener("hide.bs.modal", (event) => {
      videoModalFrame.setAttribute("src", "");
    });
  }
})();
