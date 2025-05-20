let utilisateur = {
    prenom: "Lucien",
    age: 45,
    ville: "Tartas"
};

utilisateur.ville = "Dax";
utilisateur.age = (45 + 1);
utilisateur.estEtudiant = true;

console.log(utilisateur);


function afficherInfos() {
    console.log("Je m'appelle " + utilisateur.prenom + " l'idien, j'ai " + utilisateur.age + " ans et j'habite à " + utilisateur.ville + ".");
}
afficherInfos()


const utilisateurs = [
    {prenom: "Alice", age: 28, ville: "Lyon"},
    {prenom: "Arthur", age: 39, ville: "Paris"},
    {prenom: "Catherine", age: 52, ville: "Bordeaux"}
]

for (let i = 0; i < utilisateurs.length; i++) {
    console.log(utilisateurs[i].prenom);
}


let bibliotheque = [
    {
        titre: "Don Quichotte",
        auteur: "Miguel de Cervantes",
        anneePublication: 1605,
        estDisponible: false
    } , {

        titre: "Le petit prince",
        auteur: "Antoine de Saint-Exupéry",
        anneePublication: 1943,
        estDisponible: true
    } , {

        titre: "Le seigneur des anneaux",
        auteur: "J.R.R. Tolkien",
        anneePublication: 1954,
        estDisponible: false
    } , {

        titre: "Harry Potter à l'école des sorciers",
        auteur: "J.K Rowling",
        anneePublication: 1997,
        estDisponible: true
    }
];

console.log("Livres disponibles :");
for (let i = 0; i < bibliotheque.length; i++) {
    if (bibliotheque[i].estDisponible === true) {
        console.log(bibliotheque[i].titre)
    }
}

function emprunterLivre(titre) {
    
}