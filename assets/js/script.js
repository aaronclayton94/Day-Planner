// capture value and input field and store it in local storage
// when i first get to the page, read whats in local storage
// display values in the proper input box
// indicate which values are past present and future
// added feature update the date

function currentTime() {
  $('#clock').html(moment().format('MMMM Do YYYY, h:mm a'));
}
setInterval(currentTime, 1000);

var hourEl = $(".hour");
var noteEl = $(".form-control");
var saveBtn = $(".btn");
var currentHour = parseInt(moment().format("kk"));
var t = 9;



saveBtn.on("click", function() {
  var dataTime = $(this).attr("data-time");
  var userInput = $("#" + dataTime).val();
  localStorage.setItem(dataTime, userInput);
});

var hourNine = localStorage.getItem("nine");
$("#nine").val(hourNine);
var hourTen = localStorage.getItem("ten");
$("#ten").val(hourTen);
var hourEleven = localStorage.getItem("eleven");
$("#eleven").val(hourEleven);
var hourTwelve = localStorage.getItem("twelve");
$("#twelve").val(hourTwelve);
var hourOne = localStorage.getItem("one");
$("#one").val(hourOne);
var hourTwo = localStorage.getItem("two");
$("#two").val(hourTwo);
var hourThree = localStorage.getItem("three");
$("#three").val(hourThree);
var hourFour = localStorage.getItem("four");
$("#four").val(hourFour);
var hourFive = localStorage.getItem("five");
$("#five").val(hourFive);



var timeBlock = [
  "nine", 
  "ten", 
  "eleven", 
  "twelve", 
  "one",
  "two", 
  "three", 
  "four", 
  "five"
]

var timeId = [
  9,
  10,
  11,
  12,
  1,
  2,
  3,
  4,
  5
]



function loadHour() {
  if (t < currentHour) {
  $(".form-control").addClass("future");
  } else if (t === currentHour) {
  $(".form-control").addClass("present");
  } else {
  $(".form-control").addClass("past");
  }
}
loadHour();
