//Saudação personalizada

// const nome = prompt("Olá, qual seu nome:");

// alert(`Olá, ${nome}!`);




//Leia dois números, some e mostre com 2 casas decimais.

//**Exemplo:** entradas `10` e `5.5` → saída `A soma é 15.50`

// const a = Number(prompt("Primeiro número:"));
// const b = Number(prompt("Segundo número:"));

// const soma = a + b;

// console.log(`A soma é ${soma.toFixed(2)}`);




//Converter centímetros para polegadas (1 in = 2,54 cm).

//Exemplo: entrada 254 → saída 254 cm = 100.00 polegadas

// const cm = Number(prompt("Centímetros:"));

// const polegadas = cm / 2.54;

// console.log(`${cm} cm = ${polegadas.toFixed(2)} polegadas.`);






//Converter anos em meses, dias, horas e minutos (use 365 dias por ano como simplificação).

//Exemplo: entrada 20 → 240 meses, 7300 dias, 175200 horas e 10512000 minutos

const anos = Number(prompt("Digite sua idade em anos:"));

const meses = anos * 12;
const dias = anos * 365;
const horas = dias * 24;
const minutos = horas * 60;

console.log(`Idade informada: ${anos} anos:`);
console.log("-----------------------")
console.log(`${meses} meses`);
console.log(`${dias} dias`);
console.log(`${horas} horas`);
console.log(`${minutos} minutos`);