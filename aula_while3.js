const prompt = require(`prompt-sync`)()

let email;
let senha;
do {
    email = prompt("Digite seu e-mail:")
    senha = prompt("Digite sua senha:")
} while (email !== "fulano@email.com" || senha !== 123456);
