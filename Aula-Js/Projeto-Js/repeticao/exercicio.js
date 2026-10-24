//let i = 1;

//while(i <= 10) {
//    console.log(i);
//    i++
//}
//
//for (let i = 1; i <= 10; i++) {
//    console.log('5 x ${i} = ${5 * i}');
//}

//divisao que eu decidi colocar

//let soma = 0;

//for (let i = 1; i <= 100; i++) {
    //soma += i;
//}
//console.log(soma)

//-7)

//let soma = 0;

//for (let i = 1; i <= 5; i++) {
//    const num = number(prompt('digite o ${i} número:'));
//    soma += num
//}

//const media = soma / 5;
//
//console.log('A media é ${media}');

//-8)

//let nome;

//do {
//    nome = prompt("digite um nome ( ou 'sair' para encerrar:");
//    if (nome !== "sair") {
//        console.log('você digitou: ${nome}');
//    }
//} while (nome !== "sair");

//-9)

//for (let i = 1; i <= 20; i++) {
//    if (i % 2 === 0) {
//    console.log(i);
//    }
//}

//-10)

 //const palavra = prompt("digite uma palavra");

 //let invertida = "";

 //for (let i = palavra.length -1; i >= 0; i--) {

//    invertida += palavra[i];

// }

// if (palavra === invertida) {
//    console.log('${palavra} é um palídromo!')
// } else {
//    console.log('${palavra} não é um palíndromo.');
// }


//-11)

//let saldo = 0;
//let opcao;
//
//do {
//    opcao = prompt("Menu:\n1. Depositar\n2. Sacar\n3. Sair");
//
//    if (opcao === "1") {
//        const valor = Number(prompt("Digite o valor do depósito:"));
//        saldo += valor;
//        console.log('Depósito realizado. Saldo: R$${saldo}');
//    } 
//    else if (opcao === "2") {
//        const valor = Number(prompt("Digite o valor do saque:"));
//        if (valor > saldo) {
//            console.log("saldo insuficiente.");
//        } else {
//            saldo -= valor;
//            console.log('saque realizado. saldo: R${saldo}');
//        }
//    } 
//    else if (opcao === "3") {
//        console.log("Programa encerrado.");
//    }
//
//} while (opcao !== "3");


//-12)

for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log('--- Tabuada do " ${tabuada} ---');
    
    for (let i = 1; i <= 10; i++) {
        console.log('${tabuada} x ${i} = ${tabuada * i}');
    }
}