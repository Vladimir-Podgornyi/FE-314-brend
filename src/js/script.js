
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
      const btnZwei = document.querySelectorAll(".brand-tbl");
    
      let all = true;
      let btnsClouse = true;
      let btnsMore = true;
      let btnsZwei = true;
     
      

      /* ---------------открываем и закрываем блоки --------------- */

      moreElements.forEach((more) => {
        if (more.style.display === "none")  {
          all = true;
        }
      });

      
      btnsZwei = Array.from(btnZwei).every(
        (el) => window.getComputedStyle(el).display === "flex"
      );

      if (btnsZwei) {
        btnZwei.forEach((el) => (el.style.display = "flex"));
       } else {
        btnZwei.forEach((el) => (el.style.display = "none"));
      }

        
    
    
     /*  if (btnsZwei) {

        btnZwei.forEach((more) => {
          more.style.display = "flex";
        });

      } else {

        btnZwei.forEach((more) => {
          more.style.display = "none";
        });
    } */



      if (all) {

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
      const btnZwei = document.querySelectorAll(".brand-tbl");
    
      let all = false;
      let btnsClouse = false;
      let btnsMore = false;
      let btnsZwei = false;


      /* ---------------открываем и закрываем блоки --------------- */

      moreElements.forEach((more) => {
        if (more.style.display === "flex")  {
          all = true;
        }
      });

      if (all) {

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

    /*   btnsZwei = Array.from(btnZwei).every(
        (el) => window.getComputedStyle(el).display === "none"
      );

      if (btnsZwei) {
        btnZwei.forEach((el) => (el.style.display = "flex"));
      } else {
        btnZwei.forEach((el) => (el.style.display = "none"));
      } */





      /*  ---------------------доп кнопу на планшете показать еще ------------------------------ */
    
    
      btnsZwei = Array.from(btnZwei).every(
        (el) => window.getComputedStyle(el).display === "none"
      );

      if (btnsZwei) {
        btnZwei.forEach((el) => (el.style.display = "none"));
      }  else {
        btnZwei.forEach((el) => (el.style.display = "flex"));
      }
    
    
    
    
      /*   btnsZwei = Array.from(btnZwei).every(
        (el) => window.getComputedStyle(el).display === "flex"
      );

      if (btnsZwei) {
        btnZwei.forEach((el) => (el.style.display = "none"));
      } */ /* else {
        btnZwei.forEach((el) => (el.style.display = "flex"));
      } */
    
     /*  if (btnsZwei) {

        btnZwei.forEach((more) => {
          more.style.display = "flex";
        });

      } else {

        btnZwei.forEach((more) => {
          more.style.display = "none";
        });
    } */
      
    }