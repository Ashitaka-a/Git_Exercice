let prenom = prompt("Quel est ton prénom ?");
let nombreBurger = parseInt(prompt("Combien de burgers veux-tu ?"));
let veutMenu = prompt("Veux-tu un menu ? (oui/non)").toLocaleLowerCase();
let prixFinal;
const prixBurger = 5;
const supplementMenu = 3;

if (nombreBurger <= 0) {
  alert("Ce n'est pas un nombre !");
} else if (veutMenu != "oui" && veutMenu != "non") {
  alert("réponse invalide");
} else {

  prixFinal = nombreBurger * prixBurger;

  if (veutMenu === "oui") {
    prixFinal = prixFinal + supplementMenu;
  }

  alert(`Merci ${prenom} ! Ta commande de ${nombreBurger} burgers coûte ${prixFinal} euros.`) 
}

