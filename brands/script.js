window.addEventListener('load', () => {
  document.querySelectorAll('.b-brands').forEach((brands) => {
    var slidesPerView = brands.getAttribute('data-slidesperview') || 6,
      spaceBetween = brands.getAttribute('data-spacebetween') || 30;

    if (window.matchMedia('(max-width: 400px)').matches) {
      slidesPerView = 1;
      spaceBetween = 10;
    } else if (window.matchMedia('(max-width: 700px)').matches) {
      slidesPerView = 2;
      spaceBetween = 10;
    }

    new Swiper(brands.querySelector('.swiper'), {
      slidesPerView: slidesPerView * 1,
      spaceBetween: spaceBetween * 1,
      navigation: {
        nextEl: brands.querySelector('.swiper-button-next'),
        prevEl: brands.querySelector('.swiper-button-prev'),
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      on: {
        init: function () {
          brands.classList.add('i-swiper-init');
        },
      },
    });
  });
});
