// On récupère le nombre total de personnages
let totalPersonnages;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

let galerie = document.getElementById("galerie");
let boutonMulti = document.getElementById("btn-multi");

boutonMulti.addEventListener("click", async function () {
  galerie.innerHTML = ""; // On vide la galerie avant d'afficher les nouveaux personnages 

  for (let i = 0; i < 10; i++) {

    let id = Math.floor(Math.random() * totalPersonnages) + 1;

    fetch("https://rickandmortyapi.com/api/character/" + id)
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(data){
        // c'est le + qu'on peut aller jusqu'à 10 personnages car si on met juste un = on va écraser ce qui a été fait n'afficher que le dernier personnage, il efface et refait à neuf
        galerie.innerHTML += `
        <div class="grille">
        <div class="carte">
        <img src="${data.image}" alt="${data.name}">
        <h3>Name : ${data.name}</h3>
        </div>
        </div>`;
    });
  };
});