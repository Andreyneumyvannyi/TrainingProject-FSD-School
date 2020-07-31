//import "./"

// JS
import "./components/range-slider/range-slider";

import flatpickr from "flatpickr";
const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
flatpickr(".dropdown-date__range", {
  locale: Russian,
  mode: "range",
  plugins: [new rangePlugin({ input: "#secondRangeInput" })],
});

// SCSS
import "./style.scss";

//CSS
import "flatpickr/dist/flatpickr.min.css";
import "nouislider/distribute/nouislider.min.css";
