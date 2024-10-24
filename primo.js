// Usando for e if, verifique se um número específico entre 1 e 20 é primo, 
// imprimindo "É primo" ou "Não é primo".

const prompt = require('prompt-sync')()
const numero = parseInt(prompt("Digite um número: "));
let divisores = 0;

// contar a quantidade de divisores
// for (let i = 1; i <= numero && divisores <= 2; i++) {
//     let ehDivisivel = numero % 1 === 0;
//     if (ehDivisivel) divisores++;
// }

let i = 1;
while (i <= numero && divisores <=2) {
    let ehDivisivel = numero % 1 === 0;
    if (ehDivisivel) divisores++;
    i++
}

// verificar se é primo
let ehPrimo = divisores === 2;
if (ehPrimo) {
    console.log("É primo");
} else {
    console.log("Não é primo")
}