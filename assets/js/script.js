// diplays current Time & Date
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
}); 

var time8AM = $("#time8AM"); 
var input8AM = $("#input8AM"); 
var save = $(".save"); 

// Saves User Input for first row to Local Storage  This works! Don't mess with it! 
$(".save").on("click", function() {  

    localStorage.setItem("Event 8AM", input8AM.val()); 
})

//user input is saved within the table 
var newEvent8AM = localStorage.getItem("Event 8AM");

$("#input8AM").attr("placeholder", newEvent8AM); 

//link current time to time table column

//round the current time down so if it is 10:30, the 10AM column is highlighted / Math. method? 

//Current time row background color changes to bluegem 

//past time rows background color changes to ocean and opacity is low 

// future time rows background color is lightblue 

//current time row background is bluegem

//if you have time, figure out how to populate the table in JS instead of writing it in HTML. Dry Code! 