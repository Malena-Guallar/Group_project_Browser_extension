document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;

    if (name !== ""){
        document.getElementById("welcome").textContent = "Bonjour " + name;
        document.getElementById("welcome").classList.remove("hidden");
        document.getElementById("horoscope").classList.remove("hidden");


    }



});