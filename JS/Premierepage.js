let pseudo = window.prompt("Comment vous appelez vous?");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pseudo").innerHTML = pseudo;
});