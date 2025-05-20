function reponseBonne() {
  const resultat = document.getElementById("resultat");
  resultat.innerText = "Bonne réponse !";
  resultat.style.color = "green";
}

function reponseFausse() {
  const resultat = document.getElementById("resultat");
  resultat.innerText = "Mauvaise réponse !";
  resultat.style.color = "red";
}

function reset() {
  const resultat = document.getElementById("resultat");
  resultat.innerText = "";
  resultat.style.color = "";
}