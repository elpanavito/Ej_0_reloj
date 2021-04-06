function realtimeClock() {

    let rtClock = new Date();

    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    let getHour = rtClock.getHours();

    //dynamic color change via conditionals
    if (getHour >= 18 || getHour <= 5 ) {
        document.querySelector(".day").innerHTML = '';
    };

    //add AM and PM systems
    let amPm = ( hours < 12 ) ? "AM" : "PM";


    //convert hours variables to 12-hour format
    hours = ( hours > 12 ) ? hours - 12 : hours;

    //add zeroes to hours, minutes and seconds
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //display clock
    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    let t = setTimeout(realtimeClock, 500);
}
