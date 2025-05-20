// Défi 1

function saluer() {
    alert("Bonjour tout le monde");
}

function executerFonction(fonction) {
    fonction();
}

executerFonction(saluer);

// Défi 2 

function direBonjour(nom) {
    alert("Bonjour " + nom);
}

function direAurevoir(nom) {
    alert("Au revoir " + nom);
}

function accueillir(nom, action) {
    action(nom);
}

accueillir("Tabata", direBonjour);
accueillir("Adrien", direAurevoir); 

// Défi 3 

function poserQuestion(question, ouiCallback, nonCallback) {
    if (confirm(question)) {
        ouiCallback();
    } else {
        nonCallback();
    }
}

function actionOui() {
    alert("Super choix !");
}

function actionNon() {
    alert("Dommage !");
}

poserQuestion("Veux-tu apprendre JavaScript ?", actionOui, actionNon);

// Défi 4


function animerMots(mots, callback) {

    let i = 0;
    let intervalle = setInterval(function() {
        document.body.innerHTML = mots[i];
        i = i + 1;
        if (i == mots.length) {
            clearInterval(intervalle);
            // i = 0 // Permet de boucler à l'infini
            callback(); 
        }
    }, 1000);
}

const mots = ["Pomme", "Banane", "Abricot", "Fraise", "Mangue"];

animerMots(mots, function(){
    console.log("terminé");
})