// On récupère le nombre total de personnages
let totalPersonnages;

// Pour suivre où on en est dans l'affichage (1ère page, 2e, etc.)
let pageActuelle = 0;

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


  
  // On calcule les ID de début et de fin du groupe de 10 personnages à afficher
  // À faire
  const debut = pageActuelle * 10 + 1; // Cette ligne calcule l'ID du premier personnage à afficher dans la page, on veut afficher 10 personnages à la fois donc on doit rajouter + 1 parce que l'ID 0 n'existe pas, en gros ça fait page 0 = ID 1 à 10, page 1 = ID 11 à 20, page 2 = ID 21 à 30..., Prends la page actuelle, multiplie par 10, ajoute 1, et tu as l’ID du premier personnage à afficher.” //

  const fin = Math.min(debut + 9, totalPersonnages); // Cette ligne donne l'ID de dernier personnage à afficher sur cette page : début + 9 donc ça donne 10 personnages en tout, math.min est une protection qui fait en sorte que si on approche de la fin de la liste on ne veut pas dépasser le total de personnages la dernière page ne dépassera donc pas pour atteindre 10, pour cet exemple, là dernière page s'arrête à 5 ou 6 personnages et rien d'autre ne s'affiche à la suite //


  galerie.innerHTML = ""; // On vide la galerie

  // On passe à la page suivante (pour afficher 10 nouveaux personnages)
  pageActuelle++;

  for (let id = debut; id <= fin; id++) {
    fetch("https://rickandmortyapi.com/api/character/" + id)
    .then(function(reponse){
      return reponse.json();
    })
    .then(function(data){
      galerie.innerHTML += `
        <div class="grille">
        <div class="carte">
        <img src="${data.image}" alt="${data.name}">
        <h3>Name : ${data.name}</h3>
        </div>
        </div>`;
    });
  };

  // Si on a dépassé le nombre total de personnages, on revient à la première page
  // À faire avec pageActuelle;
  if (debut > totalPersonnages) {
    pageActuelle = 0;
  }
});