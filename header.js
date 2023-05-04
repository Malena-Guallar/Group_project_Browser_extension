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

// conposant meteo

let temp = document.getElementById("temp")
let ville = document.getElementById("ville")
let img = document.getElementById("icon")

async function meteoFunc() {
    const meteoUrl = "http://api.weatherapi.com/v1/forecast.json?key=eeeec6c522cd48c7b7781438230405&q=Paris&days=5&aqi=no&alerts=no";
    const dataMeteo = await fetch(meteoUrl);
    console.log(dataMeteo)

    let responseMeteo = await dataMeteo.json();
    console.log(responseMeteo);

    temp.innerHTML = `${responseMeteo.current.temp_c}°`;
    ville.innerHTML = responseMeteo.location.name;
    img.src = responseMeteo.current.condition.icon;
}
meteoFunc();

