// AFFICHAGE DE L'HOROSCOPE SUR LA PAGE



// Récupérer la date du jour et la mettre au bon format pour la requête API mm-jj-aaaa
const date = new Date();
let day = date.getDay();
let month = date.getMonth() +1;
let year = date.getFullYear();
if (month < 10){
    month = "0" + month
}
if (day < 10){
    day = "0" + day
}
let currentDate = `${month}-${day}-${year}`;

// Ici on crée une fonction asynchrone qui va, dans un premier temps, récupérer la valeur choisie par l'utilisateur avec l'event listener, puis mettre cette valeur dans l'url 
// pour que la requête soit faite correctement. Idem avec la date au bon format.
// Ensuite on donne les instructions avec le await -> faire la requête puis afficher dans la page les données récupérées, avec la fonction displayHoro. 
// Une fois que la fonction a récupéré le signe astro, on l'envoie dans une autre fonction pour le stocker dans le local storage.

const signList = document.querySelector('select');
signList.addEventListener('change', async function() {
    const sign = this.value;
    const apiUrl = `https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&sign=${sign}&date=${currentDate}` ;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayHoro(data);
        stockageSign(sign);
    }  

    catch (error) {
        console.log(error)
    } 
});

const stockageSign = (sign) => {
    localStorage.setItem("sign", sign)
}

// La fonction ci-dessous va permettre de récupérer le nom de l'utilisateurice quand iel aura cliqué sur 'envoyer'
// Avec ca on pourra afficher le message de bienvenue + stocker le nom dans le local storage ; 

let form = document.getElementById("form");
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let horoscope = document.getElementById("horoscope")
    
    document.getElementById("welcome").textContent = "Bonjour " + name ;
    form.style.display = "none";
    horoscope.style.display = "block";
    stockageName(name)

});

const stockageName = (name) => {
    localStorage.setItem("name", name)
};



// La fonction displayHoro permet d'afficher le résultat de la requête sur la page HTML avec le DOM. 

function displayHoro(data){
    let horoscope = data.description;
    let horoscopeDiv = document.getElementById("horoscope_container")

    let para = document.createElement("p");
    para.innerHTML = horoscope;
    horoscopeDiv.appendChild(para)

    // document.getElementById("welcome").textContent = "Bonjour " + name;
    // localStorage.getItem("signe", signe);
    
    // prendre le nom 
    // on prend la div welcome avec un getElemntByID
    // créer une variable epour insérer un paragraphe 
    // la variable paragraphe on va l'insérer dans la div welcome avec un appendChild

}




// La fonction displayHoro permet d'afficher le résultat de la requête sur la page HTML avec le DOM. 


let form = document.getElementById("form");
let nameFromStorage = ""

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let horoscope = document.getElementById("horoscope")
    // localStorage.setItem("signe", signe.value);
    document.getElementById("welcome").textContent = "Bonjour " + name;
    form.style.display = "none";
    horoscope.style.display = "block";
    stockageName(name)
    nameFromStorage = localStorage.getItem("name")
    console.log("inside function " + nameFromStorage)
    return nameFromStorage ; 
});

console.log("outside function " + nameFromStorage)
// faire une fonction async avec le onClick


// if(localStorage.getItem("name", "signe") != null) {
//     form.style.display = "none" ;
//     horoscope.style.display = "block";
//     }

// if localStorage est rempli alors on cache le formulaire 


// document.getElementById("form").addEventListener("submit", async function getItems(){
    
//     try {
//         let nameFromStorage = await localStorage.getItem("name")
//         console.log("inside function " + nameFromStorage)
//         return nameFromStorage ; 

//     } catch (error) { console.log(error) }


// })

// console.log("outside function " + nameFromStorage)

//     } catch (error) { console.log(error) }

