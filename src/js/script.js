
let swiper = new Swiper(".swiper", {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });


    
    
    
    /* Читать Далее ------------------------- */


    function readMore() {
      const moreElements = document.querySelectorAll(".brand-more"); 
      const btnMore = document.querySelectorAll(".lease__more"); 
      const btnClouse = document.querySelectorAll(".lease__clouse"); 
    
      let allHidden = true;
      let btnsClouse = true;
      let btnsMore = true;


      /* ---------------открываем и закрываем блоки --------------- */

      moreElements.forEach((more) => {
        if (more.style.display === "none")  {
          allHidden = true;
        }
      });

      if (allHidden) {

        moreElements.forEach((more) => {
          more.style.display = "flex";
        });

      } else {

        moreElements.forEach((more) => {
          more.style.display = "none";
        });
    }
   /*  ---------------------скрыл кнопу показать еще ------------------------------ */
   
    btnMore.forEach((more) => {
      if (more.style.display === "flex")  {
        btnsMore = true;
      }
    });

  
      if (btnsMore) {

        btnMore.forEach((more) => {
          more.style.display = "none";
        });
      } 
       /*  ---------------------показал кнопу показать еще ------------------------------ */
       
       btnClouse.forEach((more) => {
        if (more.style.display === "none")  {
          btnsClouse = true;
        }
      });
      
       if (btnsClouse) {

        btnClouse.forEach((more) => {
          more.style.display = "flex";
        });
      } 
    }







    function readSmall() {
      const moreElements = document.querySelectorAll(".brand-more"); 
      const btnMore = document.querySelectorAll(".lease__more"); 
      const btnClouse = document.querySelectorAll(".lease__clouse"); 
    
      let allHidden = false;
      let btnsClouse = false;
      let btnsMore = false;


      /* ---------------открываем и закрываем блоки --------------- */

      moreElements.forEach((more) => {
        if (more.style.display === "flex")  {
          allHidden = true;
        }
      });

      if (allHidden) {

        moreElements.forEach((more) => {
          more.style.display = "none";
        });

      } else {

        moreElements.forEach((more) => {
          more.style.display = "flex";
        });
    }
   /*  ---------------------показал кнопу показать еще ------------------------------ */
   
    btnMore.forEach((more) => {
      if (more.style.display === "none")  {
        btnsMore = true;
      }
    });

  
      if (btnsMore) {

        btnMore.forEach((more) => {
          more.style.display = "flex";
        });
      } 
       /*  ---------------------скрыл кнопу показать еще ------------------------------ */
       
       btnClouse.forEach((more) => {
        if (more.style.display === "flex")  {
          btnsClouse = true;
        }
      });
      
       if (btnsClouse) {

        btnClouse.forEach((more) => {
          more.style.display = "none";
        });
      } 
    }