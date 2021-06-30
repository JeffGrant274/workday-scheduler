$(document).ready(function () {
    //Code for current date and time
    let nowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("curDate");
    displayDate.innerHTML = nowMoment;
    let jumboTime = moment().format("h:mm:ss a");
    let currentHour = moment().format("HH");
    let displayTime = document.getElementById("curHour")
    displayTime.innerHTML = jumboTime;

    //Compares time block to actual time
    $(".tdiv").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    //grabs values from time saves to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".tblock").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-08 .tblock").val(localStorage.getItem("08"));
    $("#hour-09 .tblock").val(localStorage.getItem("09"));
    $("#hour-10 .tblock").val(localStorage.getItem("10"));
    $("#hour-11 .tblock").val(localStorage.getItem("11"));
    $("#hour-12 .tblock").val(localStorage.getItem("12"));
    $("#hour-13 .tblock").val(localStorage.getItem("13"));
    $("#hour-14 .tblock").val(localStorage.getItem("14"));
    $("#hour-15 .tblock").val(localStorage.getItem("15"));
    $("#hour-16 .tblock").val(localStorage.getItem("16"));
    $("#hour-17 .tblock").val(localStorage.getItem("17"));
    $("#hour-18 .tblock").val(localStorage.getItem("18"));
    $("#hour-19 .tblock").val(localStorage.getItem("19"));
    $("#hour-20 .tblock").val(localStorage.getItem("20"));

  });