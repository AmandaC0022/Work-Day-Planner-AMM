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

//global arrays with links to table 
var inputIDs = [$("#input8AM"), $("#input9AM"), $("#input10AM"), $("#input11AM"), $("#input12PM"), $("#input1PM"), $("#input2PM"), $("#input3PM"), $("#input4PM"), $("#input5PM")]; 

var lsKeys = ["Event 8AM", "Event 9AM", "Event 10AM", "Event 11AM", "Event 12PM", "Event 1PM", "Event 2PM", "Event 3PM", "Event 4PM", "Event 5PM"]; 

var saves = [$("#save8AM"), $("#save9AM"), $("#save10AM"), $("#save11AM"), $("#save12PM"), $("#save1PM"), $("#save2PM"), $("#save3PM"), $("#save4PM"), $("#save5PM")]; 

//When I click the save button, I am setting the input value to local storage 
saves[0].on("click", function(){
    localStorage.setItem(lsKeys[0], inputIDs[0].val());
})
saves[1].on("click", function(){
    localStorage.setItem(lsKeys[1], inputIDs[1].val());
})
saves[2].on("click", function(){
    localStorage.setItem(lsKeys[2], inputIDs[2].val());
})
saves[3].on("click", function(){
    localStorage.setItem(lsKeys[3], inputIDs[3].val());
})
saves[4].on("click", function(){
    localStorage.setItem(lsKeys[4], inputIDs[4].val());
})
saves[5].on("click", function(){
    localStorage.setItem(lsKeys[5], inputIDs[5].val());
})
saves[6].on("click", function(){
    localStorage.setItem(lsKeys[6], inputIDs[6].val());
})
saves[7].on("click", function(){
    localStorage.setItem(lsKeys[7], inputIDs[7].val());
})
saves[8].on("click", function(){
    localStorage.setItem(lsKeys[8], inputIDs[8].val());
})
saves[9].on("click", function(){
    localStorage.setItem(lsKeys[9], inputIDs[9].val());
})

//Displays all placeholder text from what is stored on local storage 
inputIDs[0].attr("placeholder", localStorage.getItem(lsKeys[0]));
inputIDs[1].attr("placeholder", localStorage.getItem(lsKeys[1]));
inputIDs[2].attr("placeholder", localStorage.getItem(lsKeys[2]));
inputIDs[3].attr("placeholder", localStorage.getItem(lsKeys[3]));
inputIDs[4].attr("placeholder", localStorage.getItem(lsKeys[4]));
inputIDs[5].attr("placeholder", localStorage.getItem(lsKeys[5]));
inputIDs[6].attr("placeholder", localStorage.getItem(lsKeys[6]));
inputIDs[7].attr("placeholder", localStorage.getItem(lsKeys[7]));
inputIDs[8].attr("placeholder", localStorage.getItem(lsKeys[8])); 
inputIDs[9].attr("placeholder", localStorage.getItem(lsKeys[9]));

// This displays the current hour 
var hour = moment().hour(); 

//this saves all of the timeIDs in one place 
var timeIDs = [$("#time8AM"), $("#time9AM"), $("#time10AM"), $("#time11AM"), $("#time12PM"), $("#time1PM"), $("#time2PM"), $("#time3PM"), $("#time4PM"), $("#time5PM")];  

//this function controls the background colors of the table 
function changeBackground() {
    if (hour === 8) {
       timeIDs[0].addClass("currentTime");
       var arr = timeIDs.slice(1);
       arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 9) {
        timeIDs[1].addClass("currentTime"); 
        var arr = timeIDs.slice(2);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 10) {
        timeIDs[2].addClass("currentTime"); 
        var arr = timeIDs.slice(3);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 11) {
        timeIDs[3].addClass("currentTime"); 
        var arr = timeIDs.slice(4);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 12) {
        timeIDs[4].addClass("currentTime");
        var arr = timeIDs.slice(5);
        arr.forEach(element => element.addClass("futureTime")); 
    } else if (hour === 1) {
        timeIDs[5].addClass("currentTime"); 
        var arr = timeIDs.slice(6);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 2) {
        timeIDs[6].addClass("currentTime"); 
        var arr = timeIDs.slice(7);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 3) {
        timeIDs[7].addClass("currentTime"); 
        var arr = timeIDs.slice(8);
        arr.forEach(element => element.addClass("futureTime"));
    } else if (hour === 4) {
        timeIDs[8].addClass("currentTime"); 
        var arr = timeIDs.slice(9);
        arr.forEach(element => element.addClass("futureTime"));
    } else {
        timeIDs[9].addClass("currentTime"); 
    }
}; 
changeBackground(); 