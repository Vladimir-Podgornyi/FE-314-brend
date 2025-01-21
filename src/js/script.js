
var swiper = new Swiper(".swiper", {
pagination: {
  slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
    },
});


/* let swiperInstance; // Переменная для хранения экземпляра Swiper

// Функция для проверки ширины экрана и управления слайдером
function handleSwiper() {
  if (window.innerWidth <= 768) {
    // Если экран меньше или равен 768px и Swiper ещё не создан
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
      });
    }
  } else {
    // Если экран больше 768px и Swiper создан, уничтожаем его
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

// Вызываем функцию при загрузке страницы и изменении размера экрана
handleSwiper();
window.addEventListener('resize', handleSwiper); */