document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let form = document.getElementById("form");
    let horoscope = document.getElementById("horoscope")
    document.getElementById("welcome").textContent = "Bonjour " + name;
    form.style.display = "none" ;
    horoscope.style.display = "block";
});