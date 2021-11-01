var countDownDate = new Date("Nov 4, 2021 4:30:00").getTime(); //Put the 12'o clock time here
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;


    if (minutes < 0 && hours < 0 && days < 0) {
        document.querySelector(".countdown-timer").style.display = "none";

        setInterval(function time() {
            var d = new Date();
            var hours = 122 - d.getHours(); //Try putting 122.5
            var min = 60 - d.getMinutes();
            if ((min + '').length == 1) {
                min = '0' + min;
            }
            var sec = 60 - d.getSeconds();
            if ((sec + '').length == 1) {
                sec = '0' + sec;
            }
            document.getElementById("hour24").innerHTML = hours;
            document.getElementById("minute24").innerHTML = min;
            document.getElementById("second24").innerHTML = sec;

            // && min == 0 && sec == 0 must be added in the final copy
            //36 hours 

            if (hours == 122) {
                //Print first stage has started
                document.getElementById("sentence").innerHTML = "First stage has started ";
                document.getElementById("1st").style.backgroundColor = "green";
            }
            if (hours == 97) {
                //Print first stage has started
                document.getElementById("sentence").innerHTML = "First stage has ended ";
                document.getElementById("1st-end").style.backgroundColor = "green";
            }

            if (hours == 72) {
                document.getElementById("sentence").innerHTML = "Second stage has started ";
                document.getElementById("2nd").style.backgroundColor = "green";
            }

            if (hours == 24) {
                //Print first stage has started
                document.getElementById("sentence").innerHTML = "Second stage has ended";
                document.getElementById("2nd-end").style.backgroundColor = "green";
            }
            if (hours == 0) {
                document.getElementById("sentence").innerHTML = "Third stage has started";
                document.getElementById("3rd").style.backgroundColor = "green";
            }
            // if (hours == 0) {
            //     document.getElementById("sentence").innerHTML = "Fourth stage has started";
            //     document.getElementById("4th").style.backgroundColor = "green";
            // }


            if (min < 0 && hours < 0) {
                document.querySelector('.countdown-timer-24').style.display = "none";
                document.querySelector("sentence").innerHTML = " Event has Ended !";
            }
        }, 1000);
    }
}, 1000);

