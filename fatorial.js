// Crie um laço for que calcule o fatorial de um número (por exemplo, 5!), imprimindo 
// o resultado final.

const prompt = require(`prompt-sync`)();

const numero = parseInt(prompt('Digite um número: '));

let fatorial = 1;

// for (let iterator = numero; iterator >= 1; iterator--) {
//     fatorial *= iterator
// }

// let iterator = numero
// while (iteratorv >= 1) {
//     fatorial *- iterator;
//     iterator--;
// }

let iterator = numero
do {
    fatorial *= iterator;
    iterator--;
} while (iterator >= 1);

console.log(`${numero}! = ${fatorial}`)
