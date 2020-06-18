// UI Vars
// > Get modal elements
const modalcontainer = document.getElementById('home-terms-and-policy');

runEvents();

//  Events
function runEvents() {
  window.addEventListener('load', updateSwiperSize);
  document.addEventListener('DOMContentLoaded', updateSwiperSize);
  window.addEventListener('orientationchange', updateSwiperSize);
  window.addEventListener('resize', updateSwiperSize);
  document.addEventListener('click', openModal);
  document.querySelectorAll('.close-modal-btn').forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });
  document.addEventListener('click', closeNavMenu);
}

//  Services Swiper
var swiper = new Swiper('#home-testimonials .swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Detect page load or window orientation change
function updateSwiperSize() {
  let windowWidth = window.screen.width;
  if (windowWidth <= 500) {
    tutorialsSwiper(1);
  } else if (windowWidth > 500 && windowWidth <= 769) {
    tutorialsSwiper(2);
  } else {
    tutorialsSwiper(3);
  }
}

// Update swiper size on page load or window orientation change
function tutorialsSwiper(slidesPerView) {
  var swiper = new Swiper('#home-how-it-works .tutorials .swiper-container', {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    slidesPerGroup: slidesPerView,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// Open Privacy Policy or Terms and Conditions Modal.
function openModal(e) {
  // > Set policy content
  if (e.target.classList.contains('policy-btn')) {
    document.querySelector('.privacy-modal').style.display = 'grid';
    document.querySelector('.terms-modal').style.display = 'none';
    fadeModalIn();
    e.preventDefault();
  }

  // > Set Terms and Conditions content
  if (e.target.classList.contains('terms-btn')) {
    document.querySelector('.privacy-modal').style.display = 'none';
    document.querySelector('.terms-modal').style.display = 'grid';
    fadeModalIn();
    e.preventDefault();
  }
}

// Animate modal on display.
function fadeModalIn() {
  document.body.style.overflowY = 'hidden';
  modalcontainer.style.display = 'block';
  setTimeout(() => {
    document
      .querySelectorAll('.modal')
      .forEach((modal) => modal.classList.add('shown'));
  }, 50);
}

// Close Terms and Policy Modal
function closeModal() {
  modalcontainer.style.display = 'none';
  document.body.style.overflowY = 'auto';
  document
    .querySelectorAll('.modal')
    .forEach((modal) => modal.classList.remove('shown'));
}

function closeNavMenu(e) {
  // Check if menu is opened
  if (document.querySelector('#home-nav #toggler').checked) {
    const navLinks = document.querySelectorAll('#home-nav .menu a');
    navLinks.forEach((link) => {
      if (e.target === link) {
        document.querySelector('#home-nav #toggler').checked = false;
      }
    });
  }
}

// Smooth Scrolling
// This code is jQuery so use the minified CDN in the html code
$('#home-nav .menu a, #home-main-footer .useful-links  ul a').on(
  'click',
  function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 10,
        },
        800
      );
    }
  }
);
