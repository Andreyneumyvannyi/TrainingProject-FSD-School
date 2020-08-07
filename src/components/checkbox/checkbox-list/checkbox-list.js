$(document).ready(function() {
  $("#checkbox-list-button").click(function(e) {
    e.preventDefault();
    $(".checkbox-list__arrow_up").toggleClass("checkbox-list__arrow_down");
    $(".checkbox-list__choice").toggleClass("checkbox-list__choice_activated");
  });
});
