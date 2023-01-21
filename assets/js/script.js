// use DOM manipulation
// integration of third-party API
// jQuery
// moment.js

// ******************************************************
// currentDay ID element
let currentDay = $("#currentDay");
// timeblocks element container
let timeBlockContainer = $(".container");

// get the current day and display it to the screen
let momentDate = moment();
currentDay.text(momentDate.format("dddd, MMMM Do, HH:mm"))
    
// make a function to render timeblocks
function renderTimeBlocks(){
    // initialize variable for the current hour
    let currentHour = moment().format("HH");

    // create timeBlock <ul> element with class of time-block
    let timeBlock = $("<ul>").attr("class", "time-block");
    // and append to timeBlock container
    timeBlockContainer.append(timeBlock);

    // create a loop to display a 9am to 5 pm timeblock
    for (let i = 9; i < 18; i++){
        // create row element <li> with class of row
        let row = $("<li>").attr("class", "row");
        // append to timeBlock <ul>
        timeBlock.append(row);
        
        // create hour element <div> with class of hour
        let hour = $("<div>").attr("class", "hour");
        // assign textContent of loop i
        hour.text(i)
        // append to each row <li>
        row.append(hour);
    }

    // use moment.js to display blocks based on the current day time
}

renderTimeBlocks();

// each timeblock has a different color based on the current time
    // grey for the past
    // red for the present 
    // green for the future

// ******************************************************
