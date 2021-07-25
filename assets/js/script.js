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

//holds all of selectors for the table 
var allData = [
    {
        time: $("#time8AM"),
        input: $("#input8AM"), 
        lSKey:"Event 8AM", 
        save: $("#save8AM"),
    },
    {
        time: $("#time9AM"),
        input: $("#input9AM"), 
        lSKey:"Event 9AM",
        save: $("#save9AM"),
    },
    {
        time: $("#time10AM"),
        input: $("#input10AM"), 
        lSKey:"Event 10AM",
        save: $("#save10AM"),
    }, 
    {
        time: $("#time11AM"),
        input: $("#input11AM"), 
        lSKey:"Event 11AM",
        save: $("#save11AM"),
    }, 
    {
        time: $("#time12PM"),
        input: $("#input12PM"), 
        lSKey:"Event 12PM",
        save: $("#save12PM"),
    }, 
    {
        time: $("#time1PM"),
        input: $("#input1PM"), 
        lSKey:"Event 1PM",
        save: $("#save1PM"),
    }, 
    {
        time: $("#time2PM"),
        input: $("#input2PM"), 
        lSKey:"Event 2PM",
        save: $("#save2PM"),
    }, 
    {
        time: $("#time3PM"),
        input: $("#input3PM"), 
        lSKey:"Event 3PM",
        save: $("#save3PM"),
    }, 
    {
        time: $("#time4PM"),
        input: $("#input4PM"), 
        lSKey:"Event 4PM",
        save: $("#save4PM"),
    }, 
    {
        time: $("#time5PM"),
        input: $("#input5PM"), 
        lSKey:"Event 5PM",
        save: $("#save5PM"),
    }
]; 

// Saves User Input for first row to Local Storage  Does weird things when I save all of them... It writes over the old placeholders when I save a new one.  

// $(".save").on("click", function() { 
//     for(var i=0; i<= allData.length; i++) {
//         localStorage.setItem(allData[i].lSKey, allData[i].input.val());
//     } 
// }) 

//There has to be a way to minimize this code... research forEach function 

// When I put this in a for loop, it constantly writes over all of the local storage Items. 

allData[0].save.on("click", function(){
    localStorage.setItem(allData[0].lSKey, allData[0].input.val()); 
})

allData[1].save.on("click", function() {
    localStorage.setItem(allData[1].lSKey, allData[1].input.val()); 
})

//grabs all the set values from local storage 
var event8AM = localStorage.getItem(allData[0].lSKey); 
var event9AM = localStorage.getItem(allData[1].lSKey); 
var event10AM = localStorage.getItem(allData[2].lSKey); 
var event11AM = localStorage.getItem(allData[3].lSKey); 
var event12PM = localStorage.getItem(allData[4].lSKey); 
var event1PM = localStorage.getItem(allData[5].lSKey); 
var event2PM = localStorage.getItem(allData[6].lSKey); 
var event3PM = localStorage.getItem(allData[7].lSKey); 
var event4PM = localStorage.getItem(allData[8].lSKey); 
var event5PM = localStorage.getItem(allData[9].lSKey); 

//user input is saved within the table 
allData[0].input.attr("placeholder", event8AM);
allData[1].input.attr("placeholder", event9AM);
allData[2].input.attr("placeholder", event10AM);
allData[3].input.attr("placeholder", event11AM);
allData[4].input.attr("placeholder", event12PM);
allData[5].input.attr("placeholder", event1PM);
allData[6].input.attr("placeholder", event2PM);
allData[7].input.attr("placeholder", event3PM);
allData[8].input.attr("placeholder", event4PM);
allData[9].input.attr("placeholder", event5PM);

//link current time to time table column

//round the current time down so if it is 10:30, the 10AM column is highlighted / Math. method? 

//Current time row background color changes to bluegem 

//past time rows background color changes to ocean and opacity is low 

// future time rows background color is lightblue 

//current time row background is bluegem

//if you have time, figure out how to populate the table in JS instead of writing it in HTML. Dry Code! 