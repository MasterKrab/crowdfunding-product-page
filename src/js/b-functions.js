const updateCollected = () =>{
   collectedElement.textContent =  "$" + collected.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   backersElement.textContent =  backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   collectedTotalElement.textContent = `of $${collectedTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} backed`;
   progress.style.width = (collected * 100) / collectedTotal + "%";
}

const toggleModal = () =>{
   modalBg.classList.toggle("modal-bg--show");
   modal.classList.toggle("modal--show");
};

const toggleModalCompleted = e =>{
   modalBg.classList.toggle("modal-bg--show");
   modalCompleted.classList.toggle("modal-completed--show");
   scrollElement(document.body)
};

const uncheckSelects = () => {
      document.querySelectorAll(".modal-card__checkbox").forEach(item =>item.checked = false);
      document.querySelectorAll(".modal-card__selected").forEach(item => item.classList.remove("modal-card__selected--show"));
};

const scrollElement = element => element.scrollIntoView({block: "center"});