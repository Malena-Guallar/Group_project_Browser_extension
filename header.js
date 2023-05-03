// Composant horloge
const clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm = "AM";

    if(hour > 12) {
        am_pm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour} : ${min} : ${sec} ${am_pm}`;
    // console.log(currentTime);
    document.getElementById("clock").innerHTML = currentTime;
}

setInterval(clock, 1000);

