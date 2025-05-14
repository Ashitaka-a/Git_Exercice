// Liste fixe de fruits
const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];


let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau
const bouttonPreparer = document.getElementById("btnSmoothie");
const bouttonBoire = document.getElementById("btnBoire");

bouttonPreparer.addEventListener("click", preparerSmoothie);
bouttonBoire.addEventListener("click", boireSmoothie);


// Fonction de préparation
function preparerSmoothie() {

  const resultat = document.getElementById("resultat");
  resultat.innerHTML = "";
  let smoothie = [];

  for(let counter = 0; counter < 3; counter++) {
    // let index = indexDepart + counter;

    // if (index >= fruits.length) {
    //   index = index - fruits.length;
    // }

      let index= (indexDepart + counter) % fruits.length;
    smoothie.push(fruits[index]);
  }

  smoothie.forEach(function(fruit){
    let p = document.createElement("p");
    p.innerText = fruit;
    resultat.appendChild(p);
  });

  indexDepart++;

  let compteurHtml = document.getElementById("compteur");
  compteurHtml.innerText = "Smoothies préparés : " + indexDepart;

  if (smoothie.includes("kiwi magique")) {
    resultat.style.backgroundColor = "green";
  } else {
    resultat.style.backgroundColor = "initial";
  }
}

// Fonction de reset
function boireSmoothie() {
  const resultat = document.getElementById("resultat");
  resultat.innerHTML = "";
}