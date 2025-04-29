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

if (nombreTickets > 3) {
    reduction = 0,1;
} else {
    reduction = 0;
}

console.log(prenom);
console.log(age);
console.log(estEtudiant);
console.log(nombreTickets);
console.log(reduction);
console.log(prixBase);
