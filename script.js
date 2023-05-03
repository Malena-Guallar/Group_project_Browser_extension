if(localStorage.getItem("nom") != null)
    h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;

button.onclick = () => {
    localStorage.setItem("nom", nom.value);
}