$('.timerBtn').on('click', function () {
    app.chosenTime = $(this).val() * 60;

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        clearInterval(app.countdown);
        app.minutes = Math.floor(app.chosenTime / 60);
        app.seconds = app.chosenTime % 60;

        app.seconds = app.seconds < 10 ? '0' + app.seconds : app.seconds;

        $('.seconds').text(app.minutes + ":" + app.seconds);
        app.chosenTime--;

        if (app.chosenTime < 0) {
            clearInterval(app.countdown);
            $('.seconds').text("You're done! Good job!");
            alert("You've finishd!");
        }
    }
});