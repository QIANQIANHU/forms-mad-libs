$(document).ready(function () {
  $("#formOne").submit(function () {
    var appetizerInput = $("#appetizer").val();
    var mainCourseInput = $("#mainCourse").val();
    var dessertInput = $("#dessert").val();

    $(".appetizer").text(appetizerInput);
    $(".mainCourse").text(mainCourseInput);
    $(".dessert").text(dessertInput);
    
    $("#result").show();

    event.preventDefault();
  });
});
