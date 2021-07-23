//diplays current Time & Date
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

//when user types something into events and when the user clicks the save icon, the text is saved into local storage and is saved in the text field. Text color changes to salmon when the text is saved 

// When you refresh the page, the text is still there

//link current time to time table column

//round the current time down so if it is 10:30, the 10AM column is highlighted / Math. method? 

//Current time row background color changes to bluegem 

//past time rows background color changes to ocean and opacity is low 

// future time rows background color is lightblue 

//current time row background is bluegem

//if you have time, figure out how to populate the table in JS instead of writing it in HTML. Dry Code! 