const swiperConfig = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

export const createSwipers = () => {
    new Swiper ('.brand__swiper', swiperConfig);
    new Swiper ('.repair__swiper', swiperConfig);
    new Swiper ('.price__swiper', swiperConfig);
}