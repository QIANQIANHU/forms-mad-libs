$(document).ready(function () {
  $("#formOne").submit(function () {
    var appetizerInput = $("#appetizer").val();

    $(".appetizer").text(appetizerInput);

    $("#result").show();

    event.preventDefault();
  });
});
