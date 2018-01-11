// $(document).ready(function () {
//   $("#formOne").submit(function (event) {
//     var appetizerInput = $("#appetizer").val();
//     var mainCourseInput = $("#mainCourse").val();
//     var dessertInput = $("#dessert").val();
//
//     $(".appetizer").text(appetizerInput);
//     $(".mainCourse").text(mainCourseInput);
//     $(".dessert").text(dessertInput);
//
//     $("#result").show();
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["appetizer", "mainCourse", "dessert"];
    // these "appetizer", "mainCourse", "dessert" are for to form the previous var appetizerInput...

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      // take (var appetizerInput = $("#appetizer").val();) as refrence
      $("." + blank).text(userInput).val();
    });

    $("#result").show();

    event.preventDefault();
  });
});
