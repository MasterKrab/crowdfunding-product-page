document.addEventListener("DOMContentLoaded", updateCollected);

header.addEventListener("click", e =>{
   if(e.target === menuButton || e.target.classList.contains("background-menu--active")){
      menuButton.classList.toggle("top-bar__icon-menu--active");
      menu.classList.toggle("menu--active");
      bgMenu.classList.toggle("background-menu--active");
      document.body.classList.toggle("no-scroll");
   };
});

article.addEventListener("click", e =>{
   e.preventDefault();

   if( e.target.classList.contains("bookmarks") || e.target.classList.contains("bookmarks__icon") || e.target.classList.contains("bookmarks__text")){
      document.querySelector(".bookmarks__icon").classList.toggle("bookmarks__icon--active");
      document.querySelector(".bookmarks__text").classList.toggle("bookmarks__text--active");
   };

   if(e.target.classList.contains("article__back-button") || e.target.classList.contains("card__button")){
      if(!e.target.classList.contains("card__button--off")){
         toggleModal();
         modal.scrollIntoView();
      };
   };

   if(e.target.classList.contains("card__button") && !e.target.classList.contains("card__button--off")){
      document.querySelector(`.modal-card__checkbox[data-id="${e.target.dataset.id}"]`).checked = true;

      document.querySelectorAll(".modal-card__selected").forEach(item => {
         item.classList.remove("modal-card__selected--show");

            if(e.target.dataset.id === item.dataset.id){
               item.classList.toggle("modal-card__selected--show");
               scrollElement(item);
            };
      });
   }
});

modal.addEventListener("click", e =>{
   
   if(e.target.classList.contains("modal__close-button")){
      toggleModal();
      uncheckSelects();
   }

   if(e.target.classList.contains("modal-card__checkbox")){

      uncheckSelects();

      document.querySelectorAll(".modal-card__selected").forEach(item => {

            if(e.target.dataset.id === item.dataset.id){
               item.classList.toggle("modal-card__selected--show");
               e.target.checked = true;
            }
      });
   };

   if(e.target.classList.contains("modal-card__submit")){
      if(e.target.previousElementSibling.firstElementChild.validity.valid){
         e.preventDefault();
         collected += parseFloat(e.target.previousElementSibling.firstElementChild.value);
         backers++;
         updateCollected();
         toggleModal();
         toggleModalCompleted();
         scrollElement(modalCompleted);
         uncheckSelects();
      }
   }     
});

modalCompleted.addEventListener("click", e => e.target.classList.contains("modal-completed__button") && toggleModalCompleted(e));