const $listMenuButton = document.getElementById("list-menu-button");
const $menuBtnIcon = document.getElementById("menu-btn-icon");
const $navbarLinks = document.querySelector(".navbar__links");

let isVisible = false;

$listMenuButton.addEventListener("click", function () {
  $navbarLinks.classList.toggle("navbar__links--is-visible");
  isVisible = !isVisible;

  isVisible
    ? $menuBtnIcon.setAttribute("src", "/assets/icons/cancel.svg")
    : $menuBtnIcon.setAttribute("src", "/assets/icons/menu.svg");
});
