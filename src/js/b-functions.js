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

const uncheckCheckbox = () => document.querySelectorAll(".modal-card__checkbox").forEach(item =>item.checked = false);

const scrollElement = element => window.scroll(0, (element.offsetTop - 100));