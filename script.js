// creating a namespace
const app = {};

// changing to the selected background when button is pressed
app.backgroundChange = () => {
    
    $('.backgroundBtn').on('click', function () {
        const chosenBackground = $(this).val();

        // removing previous background if another button was already pressed and adding chosen background
        $('#background').removeClass('mountains beach trees');
        $('#background').toggleClass(chosenBackground);
    });

    // background array
    const backgroundArray = ['mountains', 'beach', 'trees'];

    // getting a random background from background array
    $('.randomBkgBtn').on('click', function () {
        const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];

        // removing previous background if another button was already pressed and adding random background
        $('#background').removeClass('mountains beach trees');
        $('#background').toggleClass(randomBackground);
    });

    // reset to original background
    $('.resetBtn').on('click', function () {
        $('#background').removeClass('mountains beach trees');
    });
};

// play selected audio when button is pressed
app.audioPlay = () => {

    $(".audioBtn").on('click', function () {
        const chosenAudio = $(this).val();

        // pausing previous audio if another button was already pressed and playing chosen audio
        $('audio').trigger("pause");
        $('#' + chosenAudio).trigger("play");
    });

    // audio array
    const audioArray = ['#ambientAudio', '#birdsAudio', '#rainAudio'];

    // play a random audio
    $('.randomAudioBtn').on('click', function () {
        const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];

        // pausing previous audio if another button was already pressed and playing random audio
        $('audio').trigger("pause");
        $(randomAudio).trigger("play");
    });

    // pause audio that is currently playing
    $(".pauseAudioBtn").on('click', function () {
        $('audio').trigger("pause");
    });
};


//declaring variable in the global scope to use in timer function
app.countdown; 
// adding timer when button is pressed
app.timer = () => {
    
    $('.timerBtn').on('click', function () {
        chosenTime = $(this).val() * 60;

        // clearing out previous time if another button was already pressed
        clearInterval(app.countdown);

        app.countdown = setInterval(function () {
            // converting the total seconds to display as minutes
            // inspo code to convert total seconds to minutes from https://youtu.be/x7WJEmxNlEs
            minutes = Math.floor(chosenTime / 60);
            seconds = chosenTime % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            $('.timer').text(minutes + " : " + seconds);
            chosenTime--;

            $('.timerDisplay').show();

            // clearing timer so it doesn't go into negative numbers
            if (chosenTime < 0) {
                clearInterval(app.countdown);
                $('.timer').text("You're done! Good job!");
                alert("You've finishd!");
            };
        }, 1000);
    });

    // timer array
    const timerArray = [10*60, 5*60, 2*60];

    // add a timer with random amount of time
    $('.randomTimerBtn').on('click', function () {
        randomTimer = timerArray[Math.floor(Math.random() * timerArray.length)];

        // clearing out previous time if another button was already pressed
        clearInterval(app.countdown);

        app.countdown = setInterval(function () {
            // converting the total seconds to display as minutes
            // inspo code to convert total seconds to minutes from https://youtu.be/x7WJEmxNlEs
            minutes = Math.floor(randomTimer / 60);
            seconds = randomTimer % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            $('.timer').text(minutes + " : " + seconds);
            randomTimer--;

            $('.timerDisplay').show();

            // clearing timer so it doesn't go into negative numbers
            if (randomTimer < 0) {
                clearInterval(app.countdown);
                $('.timer').text("You're done! Good job!");
                alert("You've finishd!");
            };
        }, 1000);
    });

    // stop timer
    $('.stopTimerBtn').on('click', function () {
        clearInterval(app.countdown);
        $('.timer').text("Timer has stopped!");
        $('.timerDisplay').show();
    });
};


// adding visualizer when timer is clicker

app.visualize = () => {
    $('.timerDisplay').on('click', function () {
        $(".circle").css("animation-play-state", "running");
    });
};

// initialize the app
app.init = () => {
    app.backgroundChange();
    app.audioPlay();
    app.timer();
    app.visualize();
};

// wait until the document is ready
$(function() {
    app.init();
});