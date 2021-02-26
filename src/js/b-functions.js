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

const toggleModalCompleted = () =>{
   modalBg.classList.toggle("modal-bg--show");
   modalCompleted.classList.toggle("modal-completed--show");
};