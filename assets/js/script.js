// capture value and input field and store it in local storage
// when i first get to the page, read whats in local storage
// display values in the proper input box
// indicate which values are past present and future
// added feature update the date

// wrap the whole script to load when the page is ready / not needed but did it anyway


$(document).ready(function(){

  
  const saveBtn = $(".btn");
  const currentHour = parseInt(moment().format("kk"));

  // function to display the time
  function currentTime() {
    $('#fullClock').html(moment().format('MMMM Do YYYY, h:mm a'));
    $('#smallClock').html(moment().format('h:mm a'));
  }

  // local storage function for each timeblock
  function getStoredTime() {
    const hourNine = localStorage.getItem("nine");
    $("#nine").val(hourNine);
    const hourTen = localStorage.getItem("ten");
    $("#ten").val(hourTen);
    const hourEleven = localStorage.getItem("eleven");
    $("#eleven").val(hourEleven);
    const hourTwelve = localStorage.getItem("twelve");
    $("#twelve").val(hourTwelve);
    const hourOne = localStorage.getItem("one");
    $("#one").val(hourOne);
    const hourTwo = localStorage.getItem("two");
    $("#two").val(hourTwo);
    const hourThree = localStorage.getItem("three");
    $("#three").val(hourThree);
    const hourFour = localStorage.getItem("four");
    $("#four").val(hourFour);
    const hourFive = localStorage.getItem("five");
    $("#five").val(hourFive);
  }

  // past future present function
  function loadHour() {
    $("input").each(function() {
      const rowTime = parseInt($(this).attr("data-hour"));
      if (rowTime > currentHour) {
        $(this).removeClass("present", "past");
        $(this).addClass("future");
      } else if (rowTime === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future", "past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present", "future");
        $(this).addClass("past");
      }
    });
  }

  // on click event safe to local storage
  saveBtn.on("click", function() {
    const dataTime = $(this).attr("data-time");
    const userInput = $("#" + dataTime).val();
    localStorage.setItem(dataTime, userInput);
  });
  // global function calls
  loadHour();
  getStoredTime();
  setInterval(currentTime, 1000);
});
