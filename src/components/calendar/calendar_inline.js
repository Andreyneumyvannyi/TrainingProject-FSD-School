$(function() {
  $(".calendar_inline").datepicker({
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: "-",
    classes: "datepicker_block",
    inline: true,
    clearButton: true,
    prevHtml: `<div class="arrow_prew"></div>`,
    nextHtml: `<div class="arrow_next"></div>`,
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>",
    },
    language: {
      today: "Применить",
    },
    onRenderCell: function(date, cellType) {
      if (cellType == "day") {
        return {
          html: `${date.getDate()}<div class="bg-selected"><span></span></div>`,
        };
      }
    },
  });
});
