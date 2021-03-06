// creating a namespace
const app = {};

// BACKGROUND SECTION
// function for changing background
app.newBackground = () => {
    // removing previous background if another button was already pressed and adding new background
    $('#background').removeClass('mountains beach trees');
    $('#background').toggleClass(displayedBackground);
};

// changing to the selected background when button is pressed
app.backgroundChange = () => {
    
    $('.backgroundBtn').on('click', function () {
        displayedBackground = $(this).val();

        app.newBackground();
    });

    // background array
    const backgroundArray = ['mountains', 'beach', 'trees'];

    // getting a random background from background array
    $('.randomBkgBtn').on('click', function () {
        displayedBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];

        app.newBackground();
    });

    // reset to original background
    $('.resetBtn').on('click', function () {
        $('#background').removeClass('mountains beach trees');
    });
};


// AUDIO SECTION
app.audioChoice = () => {
    // pausing previous audio if another button was already pressed and playing chosen audio
    $('audio').trigger("pause");
    $('#' + seclectedAudio).trigger("play");
};

// play selected audio when button is pressed
app.audioPlay = () => {

    $(".audioBtn").on('click', function () {
        seclectedAudio = $(this).val();

        app.audioChoice();
    });

    // audio array
    const audioArray = ['ambientAudio', 'birdsAudio', 'rainAudio'];

    // play a random audio
    $('.randomAudioBtn').on('click', function () {
        seclectedAudio = audioArray[Math.floor(Math.random() * audioArray.length)];

        app.audioChoice();
    });

    // pause audio that is currently playing
    $(".pauseAudioBtn").on('click', function () {
        $('audio').trigger("pause");
    });
};


// COUNTDOWN SECTION
// declaring variable in the global scope to use in timer function
app.countdown; 

// function that displays the time
app.addTime = () => {
    // clearing out previous time if another button was already pressed
    clearInterval(app.countdown);

    app.countdown = setInterval(function () {
        // converting the total seconds to display as minutes
        // inspo code to convert total seconds to minutes from https://youtu.be/x7WJEmxNlEs
        let minutes = Math.floor(timeAmount / 60);
        let seconds = timeAmount % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        $('.timer').text(minutes + " : " + seconds);
        timeAmount--;

        $('.timerDisplay').show();

        // clearing timer so it doesn't go into negative numbers
        if (timeAmount < 0) {
            app.stopCountdown();
        };
    }, 1000);
};

// function to use when timer is stopped
app.stopCountdown = () => {
    clearInterval(app.countdown);
    $('.timer').text("You're done! Good job!");
    $(".circle").css("animation-play-state", "paused");
    $('footer').show();
    alert("You've finishd!");
};

// adding timer when button is pressed
app.timer = () => {    
    $('.timerBtn').on('click', function () {
        timeAmount = $(this).val() * 60;

        app.addTime();

        // adding this in case stop button was pressed
        $('.timerDisplay p').show();
    });

    // timer array
    const timerArray = [10*60, 5*60, 2*60];

    // add a timer with random amount of time
    $('.randomTimerBtn').on('click', function () {
        timeAmount = timerArray[Math.floor(Math.random() * timerArray.length)];

        app.addTime();

        // adding this in case stop button was pressed
        $('.timerDisplay p').show();
    });

    // stop timer
    $('.stopTimerBtn').on('click', function () {
        clearInterval(app.countdown);
        $('.timer').text("Timer has stopped!");
        $('.timerDisplay p').hide();
        $(".circle").css("animation-play-state", "paused");
        $('footer').show();
    });
};


// adding visualizer when timer display is clicked
app.visualizer = () => {
    $('.timerDisplay').on('click', function () {
        $('.timerDisplay p').hide();
        $('footer').hide();
        $('.circleAnimation').css("height", "100vh");
        $('.circle').css("animation-play-state", "running");
        $('html').animate({
            scrollTop: $('.circleAnimation').offset().top
        }, 1000);
    });
};


// initialize the app
app.init = () => {
    app.backgroundChange();
    app.audioPlay();
    app.timer();
    app.visualizer();
};

// wait until the document is ready
$(function() {
    app.init();
});