// AFFICHAGE DE L'HOROSCOPE SUR LA PAGE

let signList = document.getElementById('signe')



signList.addEventListener('change', function () {
    sign = this.value;
    console.log(sign);
    return sign; 
})



// function getURL(){

//     let fullUrl = 'https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&sign='+sign+'&date=05-02-2023'
//     console.log(fullUrl)
// }
// getURL()


// Requête à l'API pour obtenir l'horoscope. On transforme la réponse en format json, puis on met cette réponse dans une fonction displayHoro,
// Si la requête est mal formulée on affiche un message d'erreur.
fetch('https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&sign=scorpio&date=05-02-2023')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayHoro(data)
    })
    .catch(error => console.log('ERROR'))



// La fonction displayHoro permet d'afficher le résultat de la requête sur la page HTML avec le DOM. 

function displayHoro(data){
    let horoscope = data.description;
    let horoscopeDiv = document.getElementById("horoscope_container")

    let para = document.createElement("p");
    para.innerHTML = horoscope;
    horoscopeDiv.appendChild(para)
}