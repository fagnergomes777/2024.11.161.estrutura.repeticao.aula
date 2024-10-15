const prompt = require('prompt-sync')()

// Escreva um laço for que percorra os números de 1 a 20 e use if para imprimir "Fizz" 
// para números múltiplos de 3 e "Buzz" para números múltiplos de 5. Imprima 
// "FizzBuzz" para números que são múltiplos de ambos.

for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
}