/* Défi 1 : Bonjour toi ! */
function saluerUtilisateur(prenom) {
    console.log("Bonjour " + prenom + " !");
}

saluerUtilisateur("Adrien");


/* Défi 2 : Additionner deux nombres */
function addition(a, b) {
    return a + b;
}

let resultat = addition(7, 12);
console.log("Le résultat est :", resultat);


/* Défi 3 : vérifier si un nombre est pair */
function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(estPair(2));
console.log(estPair(9));
console.log(estPair(17));
console.log(estPair(20));


/* Défi 4 : Calculer la moyenne de trois notes */
function calculerMoyenne(note1, note2, note3) {
    const moyenne = (note1 + note2 + note3) / 3;
    return moyenne;
}

const moyenneFinal = calculerMoyenne(15, 46, 29);
console.log("La moyenne est de :", moyenneFinal);


/* Défi 5 : Trouver le plus grand des deux nombres */
function plusGrand(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }    
}

let nombre1 = 30;
let nombre2 = 10;
let resultat2 = plusGrand(nombre1, nombre2);

console.log("Le nombre le plus grand est : ", resultat2);