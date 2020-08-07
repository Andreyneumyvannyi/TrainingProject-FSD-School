$(document).ready(function() {
  $("#dropdown-facilities-button").click(function(e) {
    e.preventDefault();
    $(".dropdown-facilities").toggleClass("dropdown-facilities_default");
    $(".dropdown-facilities__enter").toggleClass(
      "dropdown-facilities__enter_default"
    );
    $(".dropdown-facilities__choice").toggleClass(
      "dropdown-facilities__choice_activated"
    );
  });

  // Bedroom

  let bedroomCount = +$("#bedroom-result").text();
  if (bedroomCount === 0) {
    $("#bedroom-minus").addClass(
      "dropdown-facilities__criterion-quantity-minus_deactivated"
    );
  }
  dropdownFacilitiesPlus("bedroom");
  dropdownFacilitiesMinus("bedroom");

  // Bed

  let bedCount = +$("#bed-result").text();
  if (bedCount === 0) {
    $("#bed-minus").addClass(
      "dropdown-facilities__criterion-quantity-minus_deactivated"
    );
  }
  dropdownFacilitiesPlus("bed");
  dropdownFacilitiesMinus("bed");

  // Bathroom

  let bathroomCount = +$("#bathroom-result").text();
  if (bathroomCount === 0) {
    $("#bathroom-minus").addClass(
      "dropdown-facilities__criterion-quantity-minus_deactivated"
    );
  }
  dropdownFacilitiesPlus("bathroom");
  dropdownFacilitiesMinus("bathroom");

  // Function

  function dropdownFacilitiesPlus(id) {
    $(`#${id}-plus`).on("click", function(e) {
      e.preventDefault();

      $(`#${id}-result`).text(function(index, text) {
        return String(parseInt(text) + 1);
      });

      changeFacilitiesText();

      $(`#${id}-minus`).removeClass(
        "dropdown-facilities__criterion-quantity-minus_deactivated"
      );
    });
  }

  function dropdownFacilitiesMinus(id) {
    $(`#${id}-minus`).on("click", function(e) {
      e.preventDefault();
      $(`#${id}-result`).text(function(index, text) {
        if (parseInt(text) - 1 > 0) {
          return String(parseInt(text) - 1);
        } else {
          $(`#${id}-minus`).addClass(
            "dropdown-facilities__criterion-quantity-minus_deactivated"
          );
          return 0;
        }
      });
      changeFacilitiesText();
    });
  }

  function changeFacilitiesText() {
    let countBedroom = $("#bedroom-result").text();
    let countBed = $("#bed-result").text();
    let countBathroom = $("#bathroom-result").text();
    let bedroomName = $("#bedroom-name").text();
    let bedName = $("#bed-name").text();
    let bathroomName = $("#bathroom-name").text();

    $("#text").text(function() {
      return `${
        countBedroom === "0" ? "" : `${countBedroom} ${bedroomName}`
      }${countBed === "0" ? "" : ` ${countBed} ${bedName}`}${countBathroom === "0" ? "" : ` ${countBathroom} ${bathroomName}`}`;
    });

    if ($("#text").text() === "") {
      $("#text").text(function() {
        return "Выберите удобства";
      });
    }
  }
});
