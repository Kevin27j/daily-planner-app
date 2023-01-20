let currentDay = $("#currentDay");
let timeBlockContainer = $(".container");
// use DOM manipulation
// integration of third-party API
// jQuery
// moment.js

// ******************************************************

// create a day planner app
// get the current day and display it to the screen
let momentDate = moment();
currentDay.text(momentDate.format("dddd, MMMM Do, HH:mm"))
    
// based on current date and time display a list of timetable
    // each has 1hour
    // where i can input a text 
    // and save it to local storage

// make a function to render timeblocks
function renderBlocks(){
    // create time block list based on css classes
    // use moment.js to display blocks based on the current day time
    // initialize a var to hold and create time block elements
    let timeBlock = $("<>")
}

// each timeblock has a different color based on the current time
    // grey for the past
    // red for the present 
    // green for the future

// ******************************************************
