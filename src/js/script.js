
let swiper = new Swiper(".swiper", {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });


    
    
    
    /* Читать Далее ------------------------- */
    
      function readMore() {
        const brandMore = document.querySelectorAll('.brand-more'); // Скрытые элементы
        const leaseMore = document.querySelector('.lease__more'); // Кнопка "Показать всё"
        const leaseClouse = document.querySelector('.lease__clouse'); // Кнопка "Скрыть"
        const brandTabl = document.querySelectorAll('.brand-tbl')
    
        // Кнопка "Показать всё"
        leaseMore.addEventListener('click', () => {
          brandMore.forEach((item) => {
            item.style.display = 'flex'; // Показываем элементы
          });
          leaseMore.style.display = 'none'; // Скрываем кнопку "Показать всё"
          leaseClouse.style.display = 'flex'; // Показываем кнопку "Скрыть"
        });
        // Кнопка "Показать всё" в планшете
        leaseMore.addEventListener('click', () => {
          brandTabl.forEach((item) => {
            item.style.display = 'flex'; // Показываем элементы
          });
          brandTabl.style.display = 'none'; // Скрываем кнопку "Показать всё"
          leaseClouse.style.display = 'flex'; // Показываем кнопку "Скрыть"
        });
    



        // Кнопка "Скрыть"
        leaseClouse.addEventListener('click', () => {
          brandMore.forEach((item) => {
            item.style.display = 'none'; // Скрываем элементы
          });
          leaseClouse.style.display = 'none'; // Скрываем кнопку "Скрыть"
          leaseMore.style.display = 'flex'; // Показываем кнопку "Показать всё"
        });

          // Кнопка "Скрыть" в планшете
          leaseClouse.addEventListener('click', () => {
            brandTabl.forEach((item) => {
              item.style.display = 'none'; // Скрываем элементы
            });
            leaseClouse.style.display = 'none'; // Скрываем кнопку "Скрыть"
            brandTabl.style.display = 'flex'; // Показываем кнопку "Показать всё"
          });
      }
    
      readMore();
    
    