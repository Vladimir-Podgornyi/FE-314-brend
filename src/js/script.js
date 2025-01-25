
let swiper = new Swiper(".swiper", {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 16, 
    slidesPerView: 1.4,
    centeredSlides: false,
    
    });


  
    
    
    /* Читать Далее ------------------------- */
    
      function readMore() {
        const brandMore = document.querySelectorAll('.brand-more'); // Скрытые элементы
        const leaseMore = document.querySelector('.lease__more'); // Кнопка Показать всё
        const leaseClouse = document.querySelector('.lease__clouse'); // Кнопка Скрыть
        const brandTabl = document.querySelectorAll('.brand-js')
    
        // Кнопка Показать всё плюс показать элементы
        leaseMore.addEventListener('click', () => {
          brandMore.forEach((item) => {
            item.style.display = 'flex'; // Тут показываем элементы
          });
          leaseMore.style.display = 'none'; // Тут скрываем кнопку Показать всё
          leaseClouse.style.display = 'flex'; // Тут показываем кнопку Скрыть
        });
  
        // Кнопка Скрыть
        leaseClouse.addEventListener('click', () => {
          brandMore.forEach((item) => {
            item.style.display = 'none'; // Скрываем лишнии три элемента
          });
          leaseClouse.style.display = 'none'; // Скрываем кнопку Скрыть
          leaseMore.style.display = 'flex'; // Показываем кнопку Показать всё
        });

         
      }
      readMore();


        // тут прописываем скрипт что бы была проверка ширины экрана
      function screenMedia() {
        const mediaSize = window.matchMedia("(min-width: 500px) and (max-width: 768px)");
        
        if (mediaSize.matches) {
            readMoreTbl () ; // если условие выполняется тогда работает следующая функция ниже 
        }
    }

    // функция для кнопок которые в планшете 
    function readMoreTbl () {

        const leaseMore = document.querySelector('.lease__more'); // Кнопка Показать всё
        const leaseClouse = document.querySelector('.lease__clouse'); // Кнопка Скрыть
        const brandTabl = document.querySelectorAll('.brand-js') // Два блока плланшета 

      // показать в планшете 
      leaseMore.addEventListener('click', () => {
        brandTabl.forEach((item) => {
          item.style.display = 'flex'; // Показываем элементы
        });
        leaseMore.style.display = 'none'; // Тут скрываем кнопку Показать всё
        leaseClouse.style.display = 'flex'; // Тут показываем кнопку Скрыть
      
      });
    


       // Скрыть в планшете
       leaseClouse.addEventListener('click', () => {
        brandTabl.forEach((item) => {
          item.style.display = 'none'; // Скрываем элементы
        });
        leaseClouse.style.display = 'none'; // Скрываем кнопку Скрыть
          leaseMore.style.display = 'flex'; // Показываем кнопку Показать всё
      });
    }



  // Добавляем  события для динамической проверки при изменении размера экрана
window.addEventListener("resize", screenMedia);

// Выполняем проверку при загрузке страницы
screenMedia();
    