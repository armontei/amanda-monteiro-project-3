// creating a namespace
const app = {}

// changing to the selected background when button is pressed
app.backgroundChange = () => {
    
    $('.backgroundBtn').on('click', function () {
        const chosenBackground = $(this).val();

        $('#background').removeClass('mountains animals abstract');
        $('#background').toggleClass(chosenBackground);
    });

    // background array
    const backgroundArray = ['mountains', 'animals', 'abstract'];

    // getting a random background from background array
    $('.random').on('click', function () {
        const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];

        $('#background').removeClass('mountains animals abstract');
        $('#background').toggleClass(randomBackground);
    });

    // reset to original background
    $('.reset').on('click', function () {
        $('#background').removeClass('mountains animals abstract');
    });
};


// adding timer when button is pressed
app.timer = () => {
    let seconds = 2;
    
    $('.twoMin').on('click', function () {
        const countdown = setInterval(function () {
            $('.seconds').text(seconds);
            seconds--;

            if (seconds < 0) {
                clearInterval(countdown);
                $('.seconds').text("You're done! Good job!");
                alert("You've finishd!");
            }
        }, 1000);
    });
};


// play selected audio when button is pressed
app.audioPlay = () => {
    
    $(".audioBtn").on('click', function () {
        const chosenAudio = $(this).val();

        $('audio').trigger("pause");
        $('#' + chosenAudio).trigger("play");
    });

    // audio array
    const audioArray = ['#ambientAudio', '#birdsAudio', '#rainAudio'];

    // play a random audio
    $('.randomAudio').on('click', function() {
        const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];

        $('audio').trigger("pause");
        $(randomAudio).trigger("play");   
    });

    // stop audio that is currently playing
    $(".stop").on('click', function () {
        $('audio').trigger("pause");
    });
};

// initialize the app
app.init = () => {
    app.backgroundChange();
    app.timer();
    app.audioPlay();
};

// wait until the document is ready
$(function() {
    app.init();
});