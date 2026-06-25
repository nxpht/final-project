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

let brandSwiper = null
let repairSwiper = null
let priceSwiper = null
export function createSwipers() {
  if (window.innerWidth < 768) {
    if (!brandSwiper) {
      brandSwiper = new Swiper('.brand__swiper', swiperConfig)
    }
    if (!repairSwiper) {
      repairSwiper = new Swiper('.repair__swiper', swiperConfig)
    }
    if (!priceSwiper) {
      priceSwiper = new Swiper('.price__swiper', swiperConfig)
    }
  } else {
    if (brandSwiper) {
      brandSwiper.destroy(true, true)
      brandSwiper = null
    }
    if (repairSwiper) {
      repairSwiper.destroy(true, true)
      repairSwiper = null
    }
    if (priceSwiper) {
      priceSwiper.destroy(true, true)
      priceSwiper = null
    }
  }
}

