function Bonbon() {
  let demandeArgent = prompt("Combien d'argent veux-tu insérer ?");
  let nombre = Number(demandeArgent);

  if (isNaN(nombre)) {
    alert("Ce n'est pas un nombre valide.");
    return;
  }

  while (nombre >= 2) {
    console.log("Bonbon distribué !");
    nombre = nombre - 2;
    console.log("Il reste " + nombre + " euros.");
  }

  console.log("Crédits insuffisants. Opération terminée.");
}
Bonbon();
