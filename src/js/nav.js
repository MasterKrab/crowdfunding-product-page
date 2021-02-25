const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")
const bgMenu = document.getElementById("bg-menu")
const article = document.getElementById("article")


header.addEventListener("click", e =>{
   if(e.target === menuButton || e.target.classList.contains("background-menu--active")){
      menuButton.classList.toggle("top-bar__icon-menu--active")
      menu.classList.toggle("menu--active")
      bgMenu.classList.toggle("background-menu--active")
      document.body.classList.toggle("no-scroll")
   }
})

article.addEventListener("click", e =>{
   e.preventDefault()

   if( e.target.classList.contains("bookmarks") || e.target.classList.contains("bookmarks__icon") || e.target.classList.contains("bookmarks__text")){
      document.querySelector(".bookmarks__icon").classList.toggle("bookmarks__icon--active")
      document.querySelector(".bookmarks__text").classList.toggle("bookmarks__text--active")
   }
})