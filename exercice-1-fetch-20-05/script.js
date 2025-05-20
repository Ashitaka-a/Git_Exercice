// // Cibler les éléments de la page
//   let bouton = document.getElementById("demarrer");
//   let message = document.getElementById("message");

//   // Quand on clique sur le bouton
//   bouton.addEventListener("click", function () {
//     // On crée une promesse qui réussit toujours
//     let promesse = new Promise(function (resolve, reject) {
//       resolve("Tout s'est bien passé !");
//     });

//     // Quand la promesse réussit, on affiche le message
//     promesse.then(function (resultat) {
//       message.textContent = resultat;
//     });
//   });


//    let bouton = document.getElementById("lancer-chainage");
//   let affichage = document.getElementById("resultat-chainage");

//   function operation1() {
//     return Promise.resolve("Étape 1");
//   }

//   function operation2(resultatPrecedent) {
//     return Promise.resolve(resultatPrecedent + " > Étape 2");
//   }

//   bouton.addEventListener("click", function () {
//     operation1()
//       .then(operation2)
//       .then(function (resultatFinal) {
//         affichage.textContent = resultatFinal;
//       });
//   });


//   let bouton = document.getElementById("btn-attendre");
//   let texte = document.getElementById("texte-bonjour");

//   // Fonction qui retourne une promesse qui se résout après un temps donné
//   function attendre(ms) {
//     return new Promise(function(resolve) {
//       setTimeout(resolve, ms);
//     });
//   }

//   // Fonction asynchrone qui utilise await pour attendre
//   async function direBonjour() {
//     texte.textContent = "Préparation...";
//     await attendre(1000); // on attend 1 seconde
//     texte.textContent = "Bonjour après 1 seconde !";
//   }

//   bouton.addEventListener("click", function () {
//     direBonjour();
//   });


//  let bouton = document.getElementById("btn-api");
//   let affichage = document.getElementById("api-resultat");

//   bouton.addEventListener("click", function () {
//     // On lance la requête vers une fausse API
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(function (response) {
//         return response.json(); // convertir la réponse en objet JS
//       })
//       .then(function (data) {
//         // On affiche le titre de l'article
//         affichage.textContent = "Titre : " + data.title;
//       })
//       .catch(function (error) {
//         // En cas d'erreur (ex : pas de connexion)
//         affichage.textContent = "Erreur lors du chargement : " + error;
//       });
//   });


//  let bouton = document.getElementById("btn-await");
//   let zoneAffichage = document.getElementById("resultat-await");

//   async function chargerPost() {
//     zoneAffichage.textContent = "Chargement...";

//     try {
//       // On attend la réponse du serveur
//       let reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//       // On attend la conversion en JSON
//       let data = await reponse.json();

//       // On affiche le résultat
//       zoneAffichage.textContent = "Titre : " + data.title;
//     } catch (erreur) {
//       // En cas d’erreur (réseau, JSON mal formé, etc.)
//       zoneAffichage.textContent = "Erreur : " + erreur.message;
//     }
//   }

//   // Quand on clique, on déclenche la fonction
//   bouton.addEventListener("click", chargerPost);


// async function chargerAnimaux() {

//   try {
//     const reponse = await fetch("data.json"); // attention au chemin !
//     const animaux = await reponse.json();

//     const zoneResultat = document.getElementById("resultat");
//     zoneResultat.innerHTML = ""; // on vide avant d’ajouter

//     animaux.forEach(animal => {
//       const p = document.createElement("p");
//       p.textContent = `${animal.nom} est un ${animal.espece}`;
//       zoneResultat.appendChild(p);
//     });
//   } catch (erreur) {
//     console.error("Oups, une erreur est survenue :", erreur);
//   }
// }

// chargerAnimaux();



// Exercice 1 //

let bouton = document.getElementById("btn-pokemon");
let affichagePokemon = document.getElementById("pokemon");

bouton.addEventListener("click", function(){

    let id = Math.floor(Math.random() * 151) + 1;

    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function (reponse){
            return reponse.json();
        })
        .then(function (data){
            affichagePokemon.innerHTML = `
            <h3>${data.name}</h3>
            <img src="${data.sprites.front_default}">`
        });
});
