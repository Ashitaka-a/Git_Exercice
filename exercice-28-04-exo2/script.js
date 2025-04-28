let choix = prompt("Choisis un chiffre entre 1 et 5 pour révéler ton animal magique :");

let magie = Number(choix);

function revelerAnimal(magie) {
  if (magie === 1) {
    alert("Tu es une Licorne !");
  } else if (magie === 2) {
    alert("Tu es une Grenouille !");
  } else if (magie === 3) {
    alert("Tu es un Dragon !");
  } else if (magie === 4) {
    alert("Tu es un Hibou mystique !");
  } else if (magie === 5) {
    alert("Tu es un Escargot enchanté !");
  } else {
    alert("Tu es trop puissant pour être classé dans notre bestiaire !");
  }
}

revelerAnimal(magie);