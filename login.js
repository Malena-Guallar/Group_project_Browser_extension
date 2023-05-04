let form = document.getElementById("form");
let horoscope = document.getElementById("horoscope")

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    // localStorage.setItem("signe", signe.value);
    document.getElementById("welcome").textContent = "Bonjour " + name;
    form.style.display = "none";
    horoscope.style.display = "block";
    localStorage.setItem("name", name);
});

// if(localStorage.getItem("name", "signe") != null) {
//     form.style.display = "none" ;
//     horoscope.style.display = "block";
//     }

// if localStorage est rempli alors on cache le formulaire 