function getLocalStorage(){

    if (localStorage.length == 0){
        console.log("vide")

        displayForm()

    } else { 
        displayHoro()
        console.log("plein")
    }

}
getLocalStorage()

const stockageName = (name) => {
    localStorage.setItem("name", name)
    console.log("stockage name")
};

const stockageSign = (sign) => {
    localStorage.setItem("sign", sign)
    return sign ; 
}

function displayForm(){

    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;   
    stockageName(name) ;
    })

    const signList = document.querySelector('select');
    signList.addEventListener('change', function() {
    const sign = this.value;
    stockageSign(sign);
    })

}

function getApiUrl(){

    
}




function displayHoro() {

    let name = localStorage.getItem("name")
    document.getElementById("welcome").textContent = "Bonjour " + name ;


}
