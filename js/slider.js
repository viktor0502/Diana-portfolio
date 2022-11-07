var swiper = new Swiper(".swiper-portfolio", {
  // loop: true,
  // slidesPerView: 4,
  // spaceBetween: 30,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 20
    },
    1600:{
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});