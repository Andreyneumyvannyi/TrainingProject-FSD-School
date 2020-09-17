$(document).ready(function() {
  $("#header__burger").click(function(e) {
    e.preventDefault();
    $(".header__nav-mobile").toggleClass("header__nav-mobile_active");
  });
});
