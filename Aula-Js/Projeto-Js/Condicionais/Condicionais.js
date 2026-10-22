// const temperatura = 25;

// if (temperatura > 30) {
//     console.log("Está calor!!");
// }

// console.log("Fim do programa!");

// const idade = Number(prompt("Sua idade:"));

// if (Number.isNaN(idade) || idade < 0) {
//     console.log("Idade inválida!");
// } else {
//     if (idade >= 18) {
//         console.log("Maior de idade!!")
//     } else {
//         console.log("Menor de idade!!")
//     }
// } 

//else if (múltiplos caminhos)
// const temp = Number(prompt("Temperatura atual (°C):"));

// if (Number.isNaN(temp)) {
//     console.log("Valor inválido!");
// } else if (temp < 0) {
//     console.log("Muito frio!!");
// } else if (temp <= 20) {
//      console.log("frio!!");
// }else if (temp <= 30) {
//      console.log("Agradável!!");
// } else {
//      console.log("Quente!!");
// }

// const nota = 95;

// if (nota >= 60) {
//     console.log("Aprovado");
// } else if (nota >= 90) {
//     console.log("Excelente");
// }

//Operadores Lógicos: && (E), || (OU)
// const temCarteira = true;
// const temCartao = false;

// console.log(temCarteira && temCartao);
// console.log(temCarteira || temCartao);
// console.log(!temCartao);

// const dinheiro = Number(prompt("Dinheiro na carteira:"));

// const temCartao = prompt("Tem cartão? (s/n)") === "s";

// if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
//     console.log("Você consegue comprar o lanche.");
// } else {
//     console.log("Não vai rolar agora.");
// }

//Operador Ternário 
// const idade = 20;

// const situacao = idade >= 18 ? "maior" : "menor";

// let situacao2;

// if (idade >= 18) {
//     situacao2 = "maior";
// } else {
//      situacao2 = "menor";
// }

//switch
// const dia = prompt("dia da Semana (seg, ter, qua, ...):");

// switch (dia) {
//     case "seg":
//     case "ter":
//     case "qua":    
//     case "qui":
//     case "sex":
//            console.log("Dia Útil");
//         break;
//     case "sab":
//     case "dom":
//         console.log("Fim de Semana");
//         break;
//     default:
//         console.log("Dia inválido");
// }
