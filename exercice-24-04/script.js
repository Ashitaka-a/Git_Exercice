/* Exercice 1 : */

// let firstName = 'Adrien';
// let lastName = 'Simon'
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// let message = "Bonjour, je m'appelle " + fullName + '.';
// console.log(message);

// let sujet = 'sujet';
// let verbe = 'verbe';
// let complement = 'complément';
// let fullVar = sujet + ' ' + verbe + ' ' + complement + ' ';
// console.log(fullVar);

// let anneeNaissance = 2001;
// let anneeActuelle = 2025;
// let age = "Tu as " + (anneeActuelle - anneeNaissance) + " ans";
// console.log(age);

// let a = 12;
// let b = 8;
// let aB = "La somme est : " + (a + b);
// console.log(aB);

// let prenom = 'Tabata'
// console.log('Let prénom :', prenom);
// prenom = 'Ashitaka';
// console.log('Nouveau nom :', prenom);
// let age2 = 28;
// age2 = age2 + 1;
// console.log('Age :', age2);
// const PI = 3.14;
// console.log("Pi :", PI);


/* Exercice 2 */

function capitalizeFirstLetter() {
    let hello = 'hello';
    console.log("Avec slice : ", hello.slice(0, 1));
    console.log("En majuscule : ", hello.toUpperCase());
    console.log("Juste le H majuscule : ", hello.slice(0,1).toUpperCase());
    console.log("Le H majuscule + la fin du mot : ", hello.slice(0, 1).toUpperCase() + hello.slice(1));
}
capitalizeFirstLetter();


function countOccurences() {
    let chainHello = "hello hello hello";
    console.log(chainHello.split("hello"));
}
countOccurences();