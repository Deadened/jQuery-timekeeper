(function ($) {
    // Date & Time
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function timekeeper() {
        var today = new Date(),
            year = today.getFullYear(),
            month = addZero(today.getMonth()),
            day = addZero(today.getDate()),
            hour = addZero(today.getHours()),
            minute = addZero(today.getMinutes()),
            second = addZero(today.getSeconds()),
            offset = today.getTimezoneOffset();

        var currentDate = month + "." + day + "." + year,
            currentTime = hour + ":" + minute + ":" + second;

        document.getElementById("tk-date").innerHTML = currentDate;
        document.getElementById("tk-time").innerHTML = currentTime;

        var timeUpdateInterval = setInterval(function () {
            timekeeper();
        }, 1000);
    }
    $.fn.addTK = function () {
        $(this).append('<div class="timekeeper" id="tk-date">Date</div><div class="timekeeper" id="tk-time">Time</div>');
        timekeeper();
    };
})(jQuery);
