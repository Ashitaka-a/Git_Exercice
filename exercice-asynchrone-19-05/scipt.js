// Défi 1

setTimeout(function(){
    console.log("3 secondes se sont écoulés");
}, 3000);

// Défi 2

console.log("Début du script");

setTimeout(function(){
    console.log("Message 1");
}, 1000);

setTimeout(function(){
    console.log("Message 2");
}, 3000);

// Défi 3

document.getElementById("buttonCharged").addEventListener("click", function(){
    document.getElementById("content").textContent = "Chargement en cours...";

    setTimeout(function(){
        document.getElementById("content").textContent = "Contenu chargé";
    }, 2000);
});

// Défi 4

let compteur = 0; // me permet de déclarer le début du compteur à 0
let intervalle = null; // permettra de vérifier que le chrono n'est pas déjà entrain de fonctionner, ça empêchera le setInterval() de se lancer pleins de fois et donc d'aller super vite; null veut dire que la variable existe mais qu'il n'y a rien à l'interrieur

const display = document.getElementById("Chrono");
const buttonStart = document.getElementById("buttonStart");
const buttonEnd = document.getElementById("buttonEnd");

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