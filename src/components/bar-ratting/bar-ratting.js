function ratingRoom(numberRoom, countStar) {
  $(function() {
    $(`#rating_room${numberRoom}`).barrating({
      theme: "css-stars",
      initialRating: countStar,
    });
  });
}

ratingRoom(888, 5);
ratingRoom(840, 4);
ratingRoom(980, 3);
ratingRoom(856, 5);
ratingRoom(740, 4);
ratingRoom(982, 3);
ratingRoom(678, 5);
ratingRoom(450, 4);
ratingRoom(350, 3);
ratingRoom(666, 5);
ratingRoom(444, 4);
ratingRoom(352, 3);
ratingRoom("ui-4", 4);
ratingRoom("ui-5", 5);
