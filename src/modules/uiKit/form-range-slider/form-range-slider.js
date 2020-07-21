import noUiSlider from "nouislider";

var skipSlider = document.getElementById("skipstep");
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
  document.getElementById("skip-value-lower"),
  document.getElementById("skip-value-upper"),
];

skipSlider.noUiSlider.on("update", function(values, handle) {
  skipValues[handle].innerHTML = String(Math.round(values[handle]) + iconRuble);
});
