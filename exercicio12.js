const prompt = require('prompt-sync')()

// Crie um laço for que imprima a tabuada de 6 (de 6x1 até 6x10) usando apenas for e 
// if.

for (let index = 1; index <= 10; index++) {
    let resultado = 6 * index;
    console.log("6 x " + index + " = " + resultado);
}