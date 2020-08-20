$(function() {
  $(".dropdown-date-filter__input").datepicker({
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: " - ",
    offset: 9,
    dateFormat: "d M",
    position: "bottom left",
    classes: "dropdown-date_filter",
    clearButton: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
    language: {
      today: "Применить",
      monthsShort: [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "мюл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ],
    },
    onRenderCell: function(date, cellType) {
      if (cellType == "day") {
        return {
          html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
        };
      }
    },
  });
  $(".datepicker")
    .find(".datepicker--button")
    .click(function() {
      if (this.dataset.action === "today") {
        $(this)
          .parents(".dropdown-date_filter")
          .removeClass("active");
      }
    });
});
