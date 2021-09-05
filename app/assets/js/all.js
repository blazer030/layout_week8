$(document).ready(() => {
  var courseSwiper = new Swiper(".courseSwiper", {
    slidesPerColumnFill: 'row',
    slidesPerView: 1.5,
    slidesPerColumn: 1,
    spaceBetween: 30,
  });

  var swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grid: {
      rows: 3,
      fill: 'row'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 16,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      }
    }
  });
});