//import "./"

// JS
import "./components/range-slider/range-slider";
import "slick-carousel/slick/slick";
import "./components/room-card/room-card";
import "jquery-bar-rating/dist/jquery.barrating.min";
import "./components/bar-raiting/bar-raiting";
import "./components/button/button-like/button-like";
import "./components/dropdown/dropdown-guests/dropdown-guests";
import "./components/dropdown/dropdown-facilities/dropdown-facilities";
import "./components/checkbox/checkbox-list/checkbox-list";

// Calendar
/*import flatpickr from "flatpickr";
const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

flatpickr(".dropdown-date__range", {
  locale: Russian,
  mode: "range",
  plugins: [new rangePlugin({ input: "#secondRangeInput" })],
});
*/

import daterangepicker from "daterangepicker";
$(".dropdown-date__range").daterangepicker({
  linkedCalendars: false,
  opens: "center",
  locale: {
    format: "DD.MM.YYYY",
    separator: " - ",
    applyLabel: "Применить",
    cancelLabel: "Очистить",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    firstDay: 1,
  },
});

// SCSS
import "./style.scss";

//CSS
import "flatpickr/dist/flatpickr.min.css";
import "nouislider/distribute/nouislider.min.css";
import "slick-carousel/slick/slick.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "daterangepicker/daterangepicker.css";
