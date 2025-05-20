
// On récupère le nombre total de personnages
let totalPersonnages;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

// On récupère le bouton et la zone d'affichage avec leur ID
let bouton = document.getElementById("btn-rm");
let zoneAffichage = document.getElementById("character");


// On écoute le clic sur le bouton
bouton.addEventListener("click", function () {

    let id = Math.floor(Math.random() * totalPersonnages) + 1;

    fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(function (reponse){
            return reponse.json();
        })
        .then(function (data){
            zoneAffichage.innerHTML = `
            <img src="${data.image}">
            <h3>Name : ${data.name}</h3>
            <h3>Specie : ${data.species}</h3>
            <h3>Status : ${data.status}</h3>`
        });
});