function getLocalStorage(){

    if (localStorage.length == 0){
       
        let bonjour = document.getElementById("horoscope")
        bonjour.style.display="none";
        displayForm()

    } else { 
        let form = document.getElementById("form");
        form.style.display = "none";


        displayHoro()

    }

}
getLocalStorage()

const stockageName = (name) => {
    localStorage.setItem("name", name)

    displayHoro()
};

const stockageSign = (sign) => {
    localStorage.setItem("sign", sign)

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



    const date = new Date();
    let day = date.getUTCDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    if (month < 10){
        month = "0" + month
    }
    if (day < 10){
        day = "0" + day
    }
    let currentDate = `${month}-${day}-${year}`;


    let sign = localStorage.getItem("sign")


    const apiUrl = `https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&sign=${sign}&date=${currentDate}` ;
            
    async function getHoroData(){


                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    console.log(data)

                        displayHoroData(data)
                }  

                catch (error) {
                    console.log(error)
                }
            }
            getHoroData()

}


function displayHoro() {


    let name = localStorage.getItem("name")
    document.getElementById("welcome").textContent = "Bonjour " + name ;
    let horoscopeDiv = document.getElementById("horoscope_container")
    horoscopeDiv.style.display = "block"; 
    let bonjour = document.getElementById("horoscope")
    bonjour.style.display="block";
    
    getApiUrl()

}

function displayHoroData(data){

    let horoscope = data.description;
    let horoscopeDiv = document.getElementById("horoscope_container")


    let para = document.createElement("p");
    para.innerHTML = horoscope;
    horoscopeDiv.appendChild(para)

    form.style.display = "none";
 

}