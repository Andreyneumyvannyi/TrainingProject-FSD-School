$(document).ready(function() {
  $("#dropdown-guests-button").click(function(e) {
    e.preventDefault();
    $("#dropdown-guests-button").toggleClass("dropdown-guests__arrow_gray");
    $(".dropdown-guests").toggleClass("dropdown-guests_default");
    $(".dropdown-guests__enter").toggleClass("dropdown-guests__enter_default");
    $(".dropdown-guests__choice").toggleClass(
      "dropdown-guests__choice_activated"
    );
  });

  // adultCount
  let adultCount = +$("#adult-result").text();
  if (adultCount === 0) {
    $("#adult-minus").addClass(
      "dropdown-guests__criterion-quantity-minus_deactivated"
    );
    $("#clear").removeClass("dropdown-guests__clear_active");
  }
  dropdownGuestPlus("adult");
  dropdownGuestMinus("adult");
  dropdownGuestClear("adult");

  // childrenCount
  let childrenCount = +$("#children-result").text();
  if (childrenCount === 0) {
    $("#children-minus").addClass(
      "dropdown-guests__criterion-quantity-minus_deactivated"
    );
    $("#clear").removeClass("dropdown-guests__clear_active");
  }
  dropdownGuestPlus("children");
  dropdownGuestMinus("children");
  dropdownGuestClear("children");

  // babyCount
  let babyCount = +$("#baby-result").text();
  if (babyCount === 0) {
    $("#baby-minus").addClass(
      "dropdown-guests__criterion-quantity-minus_deactivated"
    );
    $("#clear").removeClass("dropdown-guests__clear_active");
  }
  dropdownGuestPlus("baby");
  dropdownGuestMinus("baby");
  dropdownGuestClear("baby");

  // Function
  function dropdownGuestMinus(id) {
    $(`#${id}-minus`).on("click", function(e) {
      e.preventDefault();
      $(`#${id}-result`).text(function(index, text) {
        if (parseInt(text) - 1 > 0) {
          return String(parseInt(text) - 1);
        } else {
          $(`#${id}-minus`).addClass(
            "dropdown-guests__criterion-quantity-minus_deactivated"
          );
          return 0;
        }
      });

      // Apply
      dropdownGuestApply();

      count = $(".dropdown-guests__criterion-quantity-result").text();
      if (count === "000") {
        $("#clear").removeClass("dropdown-guests__clear_active");
      } else {
        $("#clear").addClass("dropdown-guests__clear_active");
      }
    });
  }

  function dropdownGuestPlus(id) {
    $(`#${id}-plus`).on("click", function(e) {
      e.preventDefault();
      $(`#${id}-result`).text(function(index, text) {
        return String(parseInt(text) + 1);
      });
      $(`#${id}-minus`).removeClass(
        "dropdown-guests__criterion-quantity-minus_deactivated"
      );
      // Apply
      dropdownGuestApply();
      count = $(".dropdown-guests__criterion-quantity-result").text();
      if (count === "000") {
        $("#clear").removeClass("dropdown-guests__clear_active");
      } else {
        $("#clear").addClass("dropdown-guests__clear_active");
      }
    });
  }

  function dropdownGuestApply() {
    $("#apply").on("click", function(e) {
      e.preventDefault();
      let countResult =
        +$("#adult-result").text() +
        +$("#children-result").text() +
        +$("#baby-result").text();
      $(".dropdown-guests__text").text(function() {
        return countResult + " " + "гостей";
      });
      $(".dropdown-guests__choice").removeClass(
        "dropdown-guests__choice_activated"
      );
      $(".dropdown-guests").addClass("dropdown-guests_default");
      $(".dropdown-guests__enter").addClass("dropdown-guests__enter_default");
    });
  }

  function dropdownGuestClear(id) {
    $("#clear").on("click", function(e) {
      e.preventDefault();
      $(`#${id}-result`).text(function(index, text) {
        return (text = 0);
      });
      $("#clear").removeClass("dropdown-guests__clear_active");
      $(`#${id}-minus`).addClass(
        "dropdown-guests__criterion-quantity-minus_deactivated"
      );
      $(".dropdown-guests__text").text(function(index, text) {
        return "Сколько гостей";
      });
    });
  }
});
