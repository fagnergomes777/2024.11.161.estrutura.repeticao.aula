const prompt = require(`prompt-sync`)()

let nome;

do {
    nome = prompt("Digite seu nome: (para sair digite `sair`):")
} while (nome !== "sair")