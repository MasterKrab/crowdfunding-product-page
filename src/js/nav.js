const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")

menuButton.addEventListener("click", () =>{
   menu.classList.toggle("menu--show")
   document.body.toggle("no-scroll")
})