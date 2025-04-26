let prenom = prompt("Quel est ton prénom et nom ?");
let age = parseInt(prompt("Quel est ton âge ?"));
let estEtudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase() === "oui";
let nombreTickets = parseInt(prompt("Combien de tickets veux-tu acheter ?"));
let reduction;
const prixBase = 12;

if (age < 12) {
    reduction = 0.5;
} else if (age > 60) {
    reduction = 0.3;
} else if (estEtudiant) {
    reduction = 0.2;
} else {
    reduction = 0;
}

let prixSansReduction = nombreTickets * prixBase;
let prixAvecReduction = prixSansReduction * (1 - reduction);

if (nombreTickets > 3) {
    prixAvecReduction *= 0.9; /* permet d'appliquer une réduction supplémentaire en plus de celles au dessus */
}

prixAvecReduction = prixAvecReduction.toFixed(2);

let split = prenom.split(" ");
let lePrenom = split[0];
let leNom = split[1];
let taillePrenom = lePrenom.length;
let debutNom = leNom.slice(0,1).toUpperCase() + leNom.slice(1,2).toLowerCase();

alert(`Bonjour ${lePrenom} ${leNom}, ton nom commence par ${debutNom}, tu as ${age} ans et tu paies ${prixAvecReduction} € pour ${nombreTickets} tickets.`);