const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")
const header = document.getElementById("header")
const article = document.getElementById("article")


header.addEventListener("click", e =>{
   if(e.target === menuButton || e.target.classList.contains("main-header--active")){
      menu.classList.toggle("menu--active")
      header.classList.toggle("main-header--active")
      article.classList.toggle("article--active")
      document.body.classList.toggle("no-scroll")
   }
})