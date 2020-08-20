$(document).ready(function() {
  $("#checkbox-list__enter").click(function(e) {
    e.preventDefault();
    $(".checkbox-list__arrow").toggleClass("checkbox-list__arrow_up");
    $(".checkbox-list__choice").toggleClass("checkbox-list__choice_activated");
  });
});
