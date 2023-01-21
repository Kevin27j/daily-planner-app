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
    let timeBlock = $("<div>").attr("class", "time-block");
    // and append to timeBlock container
    timeBlockContainer.append(timeBlock);

    let hourBlocks = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    // create a loop to display a 9am to 5 pm timeblock
    for (let i = 0; i < hourBlocks.length; i++){
        // ROW LIST
        // create row element <li> with class of row
        let row = $("<div>").attr("class", "row");
        // append to timeBlock <ul>
        timeBlock.append(row);
        
        // HOUR DIV
        // create hour element for each block
        let hour = $("<div>").attr("class", "hour");
        // assign textContent of loop i
        hour.text(hourBlocks[i])
        // append to each row <li>
        row.append(hour);

        // INPUT DIV
        // create input text for each block
        let input = $("<textarea>");
        row.append(input);

        // BUTTON DIV
        // create save button for each block
        let button = $("<button>").attr("class", "saveBtn");
        row.append(button);

        // if-else conditional to check current hour to time-block hour
        // and assign class based on
        if (hourBlocks[i] < currentHour){
            input.attr("class", "past");
        }
        else if (hourBlocks[i] > currentHour){
            input.attr("class", "future");
        } 
        else {
            input.attr("class", "present");
        }
            
    }

    // use moment.js to display blocks based on the current day time
}

renderTimeBlocks();

// each timeblock has a different color based on the current time
    // red for the present 
    // green for the future

// ******************************************************
