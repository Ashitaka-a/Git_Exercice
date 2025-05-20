/* Défi 1 */
let animaux = ['chien', 'chat', 'lapin'];
let couleurs = ['rouge', 'vert', 'bleu'];
console.log(couleurs[1]);
animaux[0] = 'hamster';
console.log(animaux);


/* Défi 2 */
let animaux2 = ['chien', 'chat', 'lapin', 'perroquet'];
let dernierAnimal = animaux2.shift();
console.log(animaux2); 
console.log(animaux2.includes('chat'));
console.log(animaux2.join(' '))


/* Défi 3 */
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nombres.length);


/* Défi 4 */

let nombres2 = [1, 2, 2, 3, 4, 4, 5];
(nombres2.filter(nombres2.indexOf(2), 1), nombres2.filter(nombres2.indexOf(4), 1));

// nombres2.splice(nombres2.indexOf(2), 1);
// nombres2.splice(nombres2.indexOf(4), 1);
// (nombres2.splice(nombres2.indexOf(2), 1), nombres2.splice(nombres2.indexOf(4), 1));
// console.log(nombres2);


/* Défi 5 */

function displayArray() {
    let fruits = ['Pomme', 'Banane', 'Abricot', 'Cerise'];
    console.log(fruits.join(' '))
}
displayArray();