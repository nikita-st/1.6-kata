import Swiper, { Pagination } from 'swiper'

if (document.documentElement.clientWidth < 768) {
  let swipers = document.querySelectorAll('.swiper')
  let paginationElems = document.querySelectorAll('.swiper-pagination')

  for (let i = 0; i < swipers.length; i++) {
    let swiperWrapper = swipers[i].querySelector('ul')
    let swiperSlides = swipers[i].querySelectorAll('li')

    swiperWrapper.classList.add('swiper-wrapper')
    for (let i = 0; i < swiperSlides.length; i++) {
      swiperSlides[i].classList.add('swiper-slide')
    }
    const swiper = new Swiper(swipers[i], {
      modules: [Pagination],
      pagination: {
        el: paginationElems[i],
        clickable: true
      },
      simulateTouch: true,
      grabCursor: true,
      slideToClickedSlide: true,
      spaceBetween: 16,
      slidesPerView: 1.1,
      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        400: {
          slidesPerView: 1.4
        },
        480: {
          slidesPerView: 1.6
        },
        560: {
          slidesPerView: 1.8
        },
        640: {
          slidesPerView: 2
        },
        720: {
          slidesPerView: 2.2
        }
      }
    })
  }
}
