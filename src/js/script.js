
let swiper = new Swiper(".swiper", {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    });


    /* Читать Далее ------------------------- */


    function readMore() {
      const moreElements = document.querySelectorAll(".brand-more"); 
      const btn = document.querySelector(".lease"); 
    
      let allHidden = true;
    
      // Проверяем, скрыты ли все элементы
      moreElements.forEach((more) => {
        if (more.style.display !== "none" && more.style.display !== "") {
          allHidden = false;
        }
      });
    
      if (allHidden) {
        // Если все элементы скрыты, показываем их
        moreElements.forEach((more) => {
          more.style.display = "flex";
        });
        btn.innerHTML = "Скрыть"; // Меняем текст кнопки
      } else {
        // Если хотя бы один элемент показан, скрываем их
        moreElements.forEach((more) => {
          more.style.display = "none";
        });
        btn.innerHTML = "Показать всё"; // Меняем текст кнопки
      }
    }

   /*  
    function readMore () {
      const more = document.querySelectorAll(".brand-more");
      const btn = document.getElementById(".lease");

      if(more.style.display === "none") {
        more.style.display="block";
        btn.innerHTML="Показать всё";
      } else {
        btn.innerHTML ="Скрыть";
        more.style.display ="none"
      }
    } */


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