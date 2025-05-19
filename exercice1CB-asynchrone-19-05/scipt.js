// Défi 1

// function saluer() {
//     alert("Bonjour tout le monde");
// }

// function executerFonction(fonction) {
//     fonction();
// }

// executerFonction(saluer);

// Défi 2 

// function direBonjour(nom) {
//     alert("Bonjour " + nom);
// }

// function direAurevoir(nom) {
//     alert("Au revoir " + nom);
// }

// function accueillir(nom, action) {
//     action(nom);
// }

// accueillir("Tabata", direBonjour);
// accueillir("Adrien", direAurevoir); 

// Défi 3 

function poserQuestion(question, ouiCallback, nonCallback) {
    if (confirm(question)) {
        ouiCallback();
    } else {
        nonCallback();
    }
}

function actionOui() {
    alert("Vous avez cliqué sur OK");
}

function actionNon() {
    alert("Vous avez cliqué sur Annuler");
}

poserQuestion("Voulez-vous supprimer ce fichier ?", actionOui, actionNon);