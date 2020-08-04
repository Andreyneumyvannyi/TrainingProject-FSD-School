$(document).ready(function() {
  $(".room-card__slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".room-card__arrow_prev"),
    nextArrow: $(".room-card__arrow_next"),
  });
});
