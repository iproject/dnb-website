//  Services Swiper
var swiper = new Swiper("#home-testimonials .swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Team members Swiper
window.addEventListener("load", updateSwiperSize);
document.addEventListener("DOMContentLoaded", updateSwiperSize);
window.addEventListener("orientationchange", updateSwiperSize);
window.addEventListener("resize", updateSwiperSize);

function updateSwiperSize() {
  let windowWidth = window.screen.width;
  if (windowWidth <= 500) {
    myTeamSwiper(1);
  } else if (windowWidth > 500 && windowWidth <= 769) {
    myTeamSwiper(2);
  } else {
    myTeamSwiper(3);
  }
}

function myTeamSwiper(slidesPerView) {
  var swiper = new Swiper("#home-how-it-works .tutorials .swiper-container", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    slidesPerGroup: slidesPerView,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Smooth Scrolling
// This code is jQuery so use the minified CDN in the html code
$("#home-nav .menu a, #home-main-footer .useful-links  ul a").on(
  "click",
  function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 10,
        },
        800
      );
    }
  }
);
