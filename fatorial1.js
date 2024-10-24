const prompt = require('prompt-sync')()

do {
    var resposta = prompt('Eu sou Bonito? ').toLowerCase();
} while (resposta !== 'sim');

console.log('Obrigador');