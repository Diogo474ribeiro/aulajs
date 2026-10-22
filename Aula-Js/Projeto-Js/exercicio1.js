

if (typeof prompt === "undefined") {
   globalThis.prompt = require("prompt-sync")();
   let nome = "Lucas"
  
}

const nome = prompt("Qual é o seu nome?");

const idade = Number(prompt("Qual é a sua idade?"));

console.log(`Olá, ${nome}! Daqui a 10 anos você terá ${idade + 10} anos.`);

