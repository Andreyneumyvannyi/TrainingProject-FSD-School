$("#button-like_main").click(function(e) {
  e.preventDefault();
  $("#button-like_main").toggleClass("button-like_active");
  if ($("#button-like_main").hasClass("button-like_active")) {
    $("#count_main").text(function(index, text) {
      return String(parseInt(text) + 1);
    });
  } else {
    $("#count_main").text(function(index, text) {
      return String(parseInt(text) - 1);
    });
  }
});

$("#button-like_secondary").click(function(e) {
  e.preventDefault();
  $("#button-like_secondary").toggleClass("button-like_active");
  if ($("#button-like_secondary").hasClass("button-like_active")) {
    $("#count_secondary").text(function(index, text) {
      return String(parseInt(text) + 1);
    });
  } else {
    $("#count_secondary").text(function(index, text) {
      return String(parseInt(text) - 1);
    });
  }
});

$("#button-like_review").click(function(e) {
  e.preventDefault();
  $("#button-like_review").toggleClass("button-like_active");
  if ($("#button-like_review").hasClass("button-like_active")) {
    $("#count_review").text(function(index, text) {
      return String(parseInt(text) + 1);
    });
  } else {
    $("#count_review").text(function(index, text) {
      return String(parseInt(text) - 1);
    });
  }
});
