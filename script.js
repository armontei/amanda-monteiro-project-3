// creating a namespace
const app = {}

// changing to the selected background when button is pressed
app.backgroundChange = () => {
    
    $('.backgroundBtn').on('click', function () {

        const chosenBackground = $(this).val();

        $('#background').removeClass('mountains animals abstract');
        $('#background').toggleClass(chosenBackground);
    });

    // random background array
    const backgrounds = ['mountains', 'animals', 'abstract'];

    // getting a random background
    $('.random').on('click', function () {

        const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        $('#background').removeClass('mountains animals abstract');
        $('#background').toggleClass(randomBackground);
    });

    // reset to original background
    $('.reset').on('click', function () {
        $('#background').removeClass('mountains animals abstract');
    });
}

// adding timer when button is pressed
let seconds = 2;
$('.twoMin').on('click', function () {
    const countdown = setInterval(function () {
        $('.seconds').text(seconds);
        seconds--;

        if (seconds < 0) {
            $('.seconds').text("You're done! Good job!");
            // clearInterval ?
            clearInterval(countdown);
            alert("You've finishd!");
            // the alert loads every second
        }
    }, 1000);
});

$(".ambient").on('click', function () {
    $('audio').trigger("pause");
    $('#ambientAudio').trigger("play");

});

$(".birds").on('click', function () {
    $('audio').trigger("pause");
    $('#birdsAudio').trigger("play");

});

$(".rain").on('click', function () {
    $('audio').trigger("pause");
    $('#rainAudio').trigger("play");

});

$(".stop").on('click', function () {

    $('audio').trigger("pause");

});

app.init = () => {
    console.log("App is initialized");
    app.backgroundChange();
}

$(function() {
    console.log("App is ready");
    app.init();

});

/*
Description of Project: An app that is meant to help people calm themselves down with focused breathing/calming sounds for their selected amount of time

MVP (Minimal Viable Product) Goals
1.Welcome the user to the site and explain how it works
2.User will select their preferred background image from list items they can click
3.User will select how long they want to set the timer for


Stretch Goals
1.User will select what audio they want to use (or link Youtube video)
2.More interactive elements like circle they can click to expand and constact as they breathe in and out
3.Customizable themes?

-------------

- create event listener to toggle class to change background or randomly select background from list
    - create different classes for the page container to store all the background images
    - create a randomizer function for choosing a background class when random is selcted
    - ensure font is readable across all backgrounds
    - selection not required if user wants to skip this

- prevent default form action of refreshing the page

- create a timer on the screen that will count down user's selected choice
    - create variables for different time amounts selected
    - create button with event listener to start timer when clicked
    - required

STRETCH GOALS

- find audio or video that works for each time limit
- create animation for image that gets bigger and smaller on a loop to provide a visual cue for breathing in and out
- smooth scroll to animation that fills the screen


*/