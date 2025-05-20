let compteur = 0; // me permet de déclarer le début du compteur à 0
let intervalle = null; // permettra de vérifier que le chrono n'est pas déjà entrain de fonctionner, ça empêchera le setInterval() de se lancer pleins de fois et donc d'aller super vite; null veut dire que la variable existe mais qu'il n'y a rien à l'interrieur

const display = document.getElementById("Chrono");
const buttonStart = document.getElementById("buttonStart");
const buttonEnd = document.getElementById("buttonEnd");
const buttonReset = document.getElementById("buttonReset");

buttonStart.addEventListener("click", function(){
    if (intervalle === null) { // si l'intervalle est vide ( le chrono n'a pas encore commencé) alors on démarre le setIntervall quand on click sur le bouton
        intervalle = setInterval(function(){
            compteur = compteur + 1; // on ajoute 1 à la variable déclarée au début qui est de 0 à la base
            display.textContent = compteur; // ici on prends la balise p, le Chrono dans le HTML et on lui dit d'afficher lle compteur qu'on a paramétrer juste au dessus
        }, 1000);
    }
});

buttonEnd.addEventListener("click", function(){
    clearInterval(intervalle);
});

buttonReset.addEventListener("click", function() {
    intervalle = null; // Remet l'état comme initial
    compteur = 0; // Remet le compteur à 0
    display.textContent = compteur; // Met à jour l'affichage
});