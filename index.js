
const openMenu = document.querySelector(".harmburger-icon");
const closeMenu = document.querySelector(".close-btn");
const menuItems = document.querySelector(".nav-links");

openMenu.addEventListener("click", function openMenu() {
   menuItems.style.display="block";
 
})

closeMenu.addEventListener("click", function closeMenu() {
   menuItems.style.display="none";
 
})

