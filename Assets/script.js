// make sure the html and css load first
$(document).ready(function () {
    // shows the current date on screen
    var currentDay = moment().format('LLLL');
    $("#currentDay").text(currentDay);

    //Check Time to decide whether its in the past,present or future
    function checkTime() {
        //get the hour from moment
        var currentHour = moment().hour();

        // Check every block of time and compare with current time
        $(".time-block").each(function () {
            // Convert the time string to integer by splitting the id and selecting the int element
            var hourBlock = parseInt($(this).attr("id").split("T")[1]);
            console.log(currentHour, hourBlock);

            // Compare the current time with the hourBlock to decide if its in past present or future
            if (hourBlock < currentHour) {
                $(this).removeClass("present");
                $(this).addClass("past");
                $(this).removeClass("future");

            }
            else if (hourBlock == currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else if (hourBlock > currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        })
    }
    checkTime();

// Function to save the info upon even of clicking the save button
    $(".saveBtn").on("click", function () {
        console.log(this);
        var selectedTime = $(this).parent().attr("id");

        console.log("The Description of Event is "+ selectedTime);
        
        var eventInfo = $(this).siblings(".description").val();
        console.log("The Description of Event is "+ eventInfo);
       //Write to local storage
        localStorage.setItem(selectedTime,eventInfo);


    })
    // Read Local Storage 
    //  let lastname = localStorage.getItem(key);

       $("#T9 .description").val(localStorage.getItem("T9"));
       $("#T10 .description").val(localStorage.getItem("T10"));
       $("#T11 .description").val(localStorage.getItem("T11"));
       $("#T12 .description").val(localStorage.getItem("T12"));
       $("#T13 .description").val(localStorage.getItem("T13"));
       $("#T14 .description").val(localStorage.getItem("T14"));
       $("#T15 .description").val(localStorage.getItem("T15"));
       $("#T16 .description").val(localStorage.getItem("T16"));
       $("#T17 .description").val(localStorage.getItem("T17"));

    
})

