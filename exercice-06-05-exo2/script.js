let film = {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    annee: 2010,
    duree: 148,
    vu: false
  };

let reponse = prompt("As-tu déjà vu ce film ? (oui/non)");

if(reponse === "oui") {
    film.vu = true;

    let note = prompt("Super, quelle note tu metterai à ce film ? (Entre 1 et 5)");
    note = Number(note); /* Dire que c'est bien un nombre qu'il faut choisir */


    /* le "!" devant isNaN permet maintenant de demander la chose inverse, c'est à dire : Est ce que c'est bien un nombre ? */
    if (!isNaN(note) && note >= 1 && note <= 5) {
        film.note = note;
    } else {
        alert("Note invalide.");
    }
 } else if (reponse === "non") {
        film.vu = false;
    }

    console.log(film);

