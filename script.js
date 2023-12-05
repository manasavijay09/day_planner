//var currentDay = $("#currentDay");
//var button = $("saveBtn");
//var timeBlockE1 = document.querySelector('.container');


$(function () {
  //code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  function saveHandler(){
    var apptText=$(this).siblings(".description").val();
    console.log("apptText = ", apptText);

    var apptTime=$(this).parent().attr("id").split("-")[1];
    console.log("apptTime = ", apptTime);

    localStorage.setItem(apptTime,apptText);

  }
  $(".saveBtn").on("click", saveHandler);  // listener for click events on the save button.

  var currentHour =  dayjs().hour()
  console.log(currentHour,"Current Time")
  // Var - function scope, let-block scope
 //  Added code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  for(let i=9;i<18;i++){
    var timeBlockId= "#hour-"+i
    console.log(timeBlockId)
    var dataStore= localStorage.getItem(i)
    $(timeBlockId).children(".description").val(dataStore)
    if(i < currentHour){
      $(timeBlockId).children(".description").addClass("past")
    }else if(i===currentHour){
      $(timeBlockId).children(".description").addClass("present")

    }else{
      $(timeBlockId).children(".description").addClass("future")
    }
  }

  
  //  code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});

