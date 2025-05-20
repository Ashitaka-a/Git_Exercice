// Partie 1 // 

function direBravo() {
  alert("Bravo, tu as cliqué !");
}

// Partie 2 // 

let paragrapheCouleur = document.getElementById("paragraphe");

paragrapheCouleur.addEventListener("click", function() {
  paragrapheCouleur.style.color = "red";
});

// Partie 3 // 

let grossis = document.getElementById("grossis");

grossis.addEventListener("mouseover", function() {
  grossis.style.transform = "scale(1.2)";
});

grossis.addEventListener("mouseout", function() {
  grossis.style.transform = "";
});

// Partie 4 et 5 //

let compteur = 0;
const bouton = document.getElementById("bouton");
const compteurAffichage = document.getElementById("compteur");

bouton.addEventListener("click", function() {
  compteur++;
  compteurAffichage.textContent = compteur;

  if (compteur >= 3) {
        bouton.disabled = true; // désactive le bouton après 3 clics
        bouton.textContent = "Clics terminés";
      }
})

// Partie 6 // 

const bouttonAjoutDiv = document.getElementById("ajoutDiv");
const divContainer = document.getElementById("container");

// dis à JS, quand on CLICK sur le bouton execute la fonction qui suit, => veut dire qu'elle sera executé au moment du clique //
bouttonAjoutDiv.addEventListener("click", () => {
  const p = document.createElement("p"); // on créer un nouveau élément "p" // 
  p.textContent = "Nouveau paragraphe crée !"; // on défini le texte à l'intérieur du "p" qui est juste au dessus //
  divContainer.appendChild(p); // ici on ajoute le "p" dans une div, on a crée la const juste au dessus qui séléctionne la div dans le htmk // 

});

// Défi 7 // 

const suppprimerDiv = document.getElementById("containerRemove");

suppprimerDiv.addEventListener("click", () => {
  suppprimerDiv.remove(); // le remove() supprime l'élément du DOM directement //

});
