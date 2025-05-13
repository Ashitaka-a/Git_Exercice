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


