//Home section Start
var swiper = new Swiper(".home-slider", {
  loop:true,
    centeredSlides:true,
    autoplay:{
        display:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

//Featured section Start
var swiper = new Swiper(".featured-slider", {
  spaceBetween:20,
  loop:true,
  centeredSlides:true,
  autoplay:{
      display:9500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});