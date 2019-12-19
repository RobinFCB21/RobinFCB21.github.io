// Au changement de valeur de la selection
function auChangement() {
    const selectionIndex = document.getElementById("modele").value;
    const resultat = document.getElementById("resultat");
	const modeleChoisi = listeModele[selectionIndex];
    resultat.innerHTML = `<h1 class="titre"> Pages thématiques : ${modeleChoisi["titre"]} </h1> <br> <br>
    <div class="description">${modeleChoisi["description"]} <br> <br> 
	<div class="picture"><img class="car-picture" src="${modeleChoisi["image"]}"/></div> <br> <br>
	${modeleChoisi["texte"]}</div> <br> <br>
	${modeleChoisi["tableau1"]} <br> <br>
	<div class="picture"><img class="car-picture" src="${modeleChoisi["image2"]}"/> </div> <br> <br> 
	${modeleChoisi["tableau2"]} <br> <br>
	<div class="picture"><img class="car-picture2" src="${modeleChoisi["image3"]}"/></div> <br> <br>
	${modeleChoisi["tableau3"]} <br> <br>
	<div class="picture"><img class="car-picture" src="${modeleChoisi["image4"]}"/></div> <br> <br>
	${modeleChoisi["tableau4"]} <br>
	<p>
		<a href="#">Haut de page</a> <br>
	</p>`;
}

// Au chargement de la fenêtre, exécute auChangement()
window.onload = () => {
    auChangement();
}