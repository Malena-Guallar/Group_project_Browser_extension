// AFFICHAGE DE L'HOROSCOPE SUR LA PAGE


const signList = document.querySelector('select');


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

// Requête à l'API pour obtenir l'horoscope. On transforme la réponse en format json, puis on met cette réponse dans une fonction displayHoro,
// Si la requête est mal formulée on affiche un message d'erreur.
// fetch('https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&sign=scorpio&date=05-02-2023')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         displayHoro(data)
//     })
//     .catch(error => console.log('ERROR'))



// La fonction displayHoro permet d'afficher le résultat de la requête sur la page HTML avec le DOM. 


let form = document.getElementById("form");
let nameFromStorage = ""

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let horoscope = document.getElementById("horoscope")
    // localStorage.setItem("signe", signe.value);
    // document.getElementById("welcome").textContent = "Bonjour " + name;
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



const stockageName = (name) => {
    localStorage.setItem("name", name)
}



const stockageSign = (sign) => {
    localStorage.setItem("sign", sign)

}




function welcome() {
    const date = new Date();
    const heure = date.getHours();
    // Si matin
    if (heure < 18)
    {
            document.getElementById("welcome").textContent = "Bonjour " + name;
    } else
    // Sinon soir
    {
            document.getElementById("welcome").textContent = "Bonsoir " + name;
    }
}
welcome()