/* Défi 1 */

for (let i = 1; i <= 10; i++) {
  console.log("5", i);
}


/* Défi 2 */

for (let i=1; i<= 10; i++) {
  console.log(i);
}


/* Défi 3 */

for (let i=1; i<=20; i++) {

  modulo = i % 2;

  if (modulo === 0) {
    console.log(i + " Est pair");
  }
}


/* Défi 4 */

for (let i=1; i<=30; i++) {

  modulo = i % 3;

  if (modulo === 0) {
    console.log(i + " Est un multiple de 3");
  }
} 


/* Défi 5 */

function Defi() {

  let choixNombre = prompt("Choisis un nombre");
  let nombre = parseInt(choixNombre);

  if (isNaN(nombre)) {
    alert("Ce n'est pas un nombre valide");

  } else {
    if (nombre % 2 === 0) {
      alert(nombre + " Est Pair !");
    } else {
      alert(nombre + " Est Impair !");
    }
  }
}
Defi();

