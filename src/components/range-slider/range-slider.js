if (
  $(document)
    .find("title")
    .text() === "FormElements"
) {
  const noUiSlider = require("nouislider/distribute/nouislider");

  let skipSlider = document.getElementById("range-slider_ui");
  let iconRuble = "₽";

  noUiSlider.create(skipSlider, {
    connect: true,
    range: {
      min: 0,
      "10%": 1000,
      "20%": 2000,
      "30%": 3000,
      "40%": 4000,
      "50%": 5000,
      "60%": 6000,
      "70%": 7000,
      "80%": 8000,
      "90%": 9000,
      max: 10000,
    },
    snap: true,
    start: [5000, 9000],
  });

  var skipValues = [
    document.getElementById("range-slider__price-lower"),
    document.getElementById("range-slider__price-upper"),
  ];

  skipSlider.noUiSlider.on("update", function(values, handle) {
    skipValues[handle].innerHTML = String(
      Math.round(values[handle]) + iconRuble
    );
  });
}

if (
  $(document)
    .find("title")
    .text() === "searchRoom"
) {
  const noUiSlider = require("nouislider/distribute/nouislider");

  let skipSlider = document.getElementById("range-slider");
  let iconRuble = "₽";

  noUiSlider.create(skipSlider, {
    connect: true,
    range: {
      min: 0,
      "10%": 1000,
      "20%": 2000,
      "30%": 3000,
      "40%": 4000,
      "50%": 5000,
      "60%": 6000,
      "70%": 7000,
      "80%": 8000,
      "90%": 9000,
      max: 10000,
    },
    snap: true,
    start: [5000, 9000],
  });

  var skipValues = [
    document.getElementById("range-slider__price-lower"),
    document.getElementById("range-slider__price-upper"),
  ];

  skipSlider.noUiSlider.on("update", function(values, handle) {
    skipValues[handle].innerHTML = String(
      Math.round(values[handle]) + iconRuble
    );
  });
}
