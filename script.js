var iconeDoMenu = document.querySelector(".icone-do-menu");
var sidebar = document.querySelector(".sidebar");
var larguraDoConteudoPrincipal = document.querySelector(".principal");

iconeDoMenu.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  larguraDoConteudoPrincipal.classList.toggle("largura-do-principal");
};
