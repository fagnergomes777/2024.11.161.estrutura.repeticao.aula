// crie um algoritimo que receba 6 numeros
// e imprima a sua media aritmedica

const prompt = require(`prompt-sync`)()

let coma = 0

let quantidade = parseInt(prompt(`Informe a quantidade de numeros`))

for (let i = 1; i <= quantidade; i++){
    let numero = parseInt(prompt(`Digite o número ${i}`))
    soma += numero
}

let media = soma / quantidade

console.log(`A média é ${media}`)