$(function () {
  $("#devour").on("click", function (event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("Devoured : " + newDevour);
      location.reload();
    });
  });

  $("#submit").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerText").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Insert the new Burger");
      location.reload;
    });
  });
});
