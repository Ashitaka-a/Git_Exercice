/* Défi 1 */

let i = 1;
while (i <= 20) {

  modulo = i % 2;

  if(modulo === 0) {
    console.log(i);
  }

  i++;
}


/* Défi 2 */

// function tableMultiplication() {

//   let choixNombre = prompt("Choisis un nombre :");
//   let number = Number(choixNombre);

//   if (isNaN(number)) {
//     alert("Ce n'est pas un nombre !");
    
//   } for (let i=1; i<=10; i++) {

//     console.log(i * number);
//   }

// }
// tableMultiplication();


/* Défi 3 */

for (let i=1; i<=20; i++) {

  modulo = i % 3;
  modulo2= i % 5;

  if (modulo === 0  && modulo2 === 0) {
    console.log(i + " : FizzBuzz");
  } else if (modulo === 0) {
      console.log(i + " : Fizz");
  } else if (modulo2 === 0) {
      console.log(i + " : Buzz");
  }
}


/* Défi 4 */

function compterVoyelles(phrase) {
  const voyelles = "aeiouy";
  let count = 0;
  phrase = phrase.toLowerCase();

  for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
      count++;
    }
  }

  return count;
}

console.log(compterVoyelles("Bonjour tout le monde"));


/* Défi 5 */

function Pyramid(size) {
  for (let i = 1; i <= size; i++) {
		let ligne = '';
		for (let j = 1; j <= size - i; j++) {
		ligne += ' ';
		}
		for (let k = 1; k <= 2 * i - 1; k++) {
		ligne += '*';
		}
		console.log(ligne);
	}
}
Pyramid(5);


