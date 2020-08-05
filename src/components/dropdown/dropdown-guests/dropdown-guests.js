$("#dropdown-guests-button").click(function(e) {
  e.preventDefault();
  $(".dropdown-guests").toggleClass("dropdown-guests_default");
  $(".dropdown-guests__enter").toggleClass("dropdown-guests__enter_default");
  $(".dropdown-guests__choice").toggleClass(
    "dropdown-guests__choice_activated"
  );
});
const adultCount = +$("#adult-result").text();
const babyCount = +$("#baby").text();
const childrenCount = +$("#children").text();

if (adultCount === 0) {
  $("#adult-minus").addClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
}

$("#adult-plus").click(function(e) {
  e.preventDefault();
  $("#adult-result").text(function(index, text) {
    return String(parseInt(text) + 1);
  });
  $("#adult-minus").removeClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
});

$("#adult-minus").click(function(e) {
  e.preventDefault();
  $("#adult-result").text(function(index, text) {
    if (parseInt(text) - 1 > 0) {
      return String(parseInt(text) - 1);
    } else {
      $("#adult-minus").addClass(
        "dropdown-guests__criterion-quantity-minus_deactivated"
      );
      return 0;
    }
  });
});

if (childrenCount === 0) {
  $("#children-minus").addClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
}

$("#children-plus").click(function(e) {
  e.preventDefault();
  $("#children-result").text(function(index, text) {
    return String(parseInt(text) + 1);
  });
  $("#children-minus").removeClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
});

$("#children-minus").click(function(e) {
  e.preventDefault();
  $("#children-result").text(function(index, text) {
    if (parseInt(text) - 1 > 0) {
      return String(parseInt(text) - 1);
    } else {
      $("#children-minus").addClass(
        "dropdown-guests__criterion-quantity-minus_deactivated"
      );
      return 0;
    }
  });
});

if (babyCount === 0) {
  $("#baby-minus").addClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
}

$("#baby-plus").click(function(e) {
  e.preventDefault();
  $("#baby-result").text(function(index, text) {
    return String(parseInt(text) + 1);
  });
  $("#baby-minus").removeClass(
    "dropdown-guests__criterion-quantity-minus_deactivated"
  );
});

$("#baby-minus").click(function(e) {
  e.preventDefault();
  $("#baby-result").text(function(index, text) {
    if (parseInt(text) - 1 > 0) {
      return String(parseInt(text) - 1);
    } else {
      $("#baby-minus").addClass(
        "dropdown-guests__criterion-quantity-minus_deactivated"
      );
      return 0;
    }
  });
});

console.log($("#adult").text());
