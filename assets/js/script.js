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

var allData = [
    {
        time: $("#time8AM"),
        input: $("#input8AM"), 
        lSKey:"Event 8AM", 
    },
    {
        time: $("#time9AM"),
        input: $("#input9AM"), 
        lSKey:"Event 9AM",
    },
    {
        time: $("#time10AM"),
        input: $("#input10AM"), 
        lSKey:"Event 10AM",
    }, 
    {
        time: $("#time11AM"),
        input: $("#input11AM"), 
        lSKey:"Event 11AM",
    }, 
    {
        time: $("#time12PM"),
        input: $("#input12PM"), 
        lSKey:"Event 12PM",
    }, 
    {
        time: $("#time1PM"),
        input: $("#input1PM"), 
        lSKey:"Event 1PM",
    }, 
    {
        time: $("#time2PM"),
        input: $("#input2PM"), 
        lSKey:"Event 2PM",
    }, 
    {
        time: $("#time3PM"),
        input: $("#input3PM"), 
        lSKey:"Event 3PM",
    }, 
    {
        time: $("#time4PM"),
        input: $("#input4PM"), 
        lSKey:"Event 4PM",
    }, 
    {
        time: $("#time5PM"),
        input: $("#input5PM"), 
        lSKey:"Event 5PM",
    }
]; 

// Saves User Input for first row to Local Storage  This works! Don't mess with it! 
$(".save").on("click", function() { 
    for(var i=0; i<= allData.length; i++) {
        localStorage.setItem(allData[i].lSKey, allData[i].input.val());
    } 
}) 

for (var i=0; i<=allData.length; i++) {
    var newEvent = localStorage.getItem(allData[i].lSKey);
}

console.log(newEvent); 
//user input is saved within the table 
allData[0].input.attr("placeholder", newEvent8AM);

//link current time to time table column

//round the current time down so if it is 10:30, the 10AM column is highlighted / Math. method? 

//Current time row background color changes to bluegem 

//past time rows background color changes to ocean and opacity is low 

// future time rows background color is lightblue 

//current time row background is bluegem

//if you have time, figure out how to populate the table in JS instead of writing it in HTML. Dry Code! 