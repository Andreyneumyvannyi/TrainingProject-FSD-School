function generateRating(numberRoom) {
  $(document).ready(function() {
    $(`.room-card__slide_${numberRoom}`).slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      prevArrow: $(`.room-card__arrow_prev_${numberRoom}`),
      nextArrow: $(`.room-card__arrow_next_${numberRoom}`),
    });
  });
}

generateRating(888);
generateRating(840);
generateRating(980);
generateRating(856);
generateRating(740);
generateRating(982);
generateRating(678);
generateRating(450);
generateRating(350);
generateRating(666);
generateRating(444);
generateRating(352);
