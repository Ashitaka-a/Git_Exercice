// // Let et Console//

// let score = 100;
// let energy = 80;
// let hasPotion = false;
// let inventory = "épée en bois";
// let isAlive = true;

// console.log('score :' + score);
// console.log('energy :' + energy);
// console.log('hasPotion :' + hasPotion);
// console.log('inventory :' + inventory);
// console.log('isAlive :' + isAlive);

// hasPotion = true;
// energy = energy+20;
// console.log('hasPotion + energy :' + hasPotion, energy)

// energy = energy-40;
// score = score-25;
// console.log('energy + score :' + energy, score)

// inventory = false;
// console.log('inventory :' + inventory)

// energy = energy-40;
// score = score-30;
// console.log('energy + score :' + energy, score)

// inventory = 'arc';
// console.log('inventory :' + inventory)

// energy = 0;
// console.log('energy :' + energy)

// isAlive = false;
// console.log('isAlive :' + isAlive)

// // If et Else //

// let motEntreParLeJoueur = prompt("Entre le mot de passe du donjon");
// let motDePasse = "afec";
// let aUnBadgeMagique = true;
// let niveauDeForce = 8;
// let age = 20;

// if ((motEntreParLeJoueur == motDePasse)) {    
//     if ((age >= 18) && (aUnBadgeMagique == true) && (niveauDeForce >= 7)) {
//         alert("🟢 Bienvenue dans le donjon, aventurier !")
//     } else {
//         alert("🔴 Accès refusé. Tu ne remplis pas toutes les conditions…")
//     }
// } else {
//     alert("Mot de passe incorect")
// }

let nomEntreParLeMembre = prompt("Quel est ton nom ?")
// let ageEntreParLeMembre = prompt("Quel âge as-tu ?")
// let poidsEntreParLeMembre = prompt("Combien de kilos fais-tu ?")

if (!nomEntreParLeMembre || nomEntreParLeMembre.trim() === "") {
    alert('erreur');
} else {
    alert('succès');
}

// } else {
//     console.log("Accès refusé !");
// } if ((ageEntreParLeMembre > 15) || (poidsEntreParLeMembre > 10)) {
//     alert("Tu es un membre légendaire !")
// } if ((ageEntreParLeMembre <= 10) || (poidsEntreParLeMembre < 6)) {
//     alert("Tu es un membre d'honneur !")
// } if ((ageEntreParLeMembre <= 3) || (poidsEntreParLeMembre <= 3)) {
//     alert("Tu es un membre approuvé !")
// }