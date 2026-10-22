//Peça a cor do semáforo (`"verde"`, `"amarelo"`, `"vermelho"`) e diga a ação.
//Exemplo: verde → Siga. · azul → Cor inválida.

// const cor = prompt("Cor do semáforo (verde/amarelo/vermelho):");

// if (cor === "verde") {
//     console.log("Siga.");
// } else if (cor === "amarelo") {
//       console.log("Atenção.");
// } else if (cor === "vermelho") {
//       console.log("Pare.");
// } else {
//       console.log("Cor inválida.");
// }

/*
0–100 → <60 reprovado, 60–79 recuperação, 80–100 aprovado.
Exemplo: 75 → Recuperação · 105 → Nota inválida.
*/

// const nota = Number(prompt("Nota (0-100):"));

// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//     console.log("Nota inválida.");
// } else if (nota < 60) {
//     console.log("Reprovada!");
// } else if (nota < 80) {
//     console.log("Recuperação!");
// } else {
//     console.log("Aprovado!");
// }

/*
Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.

Exemplo: admin e 1234 → Acesso liberado` · `admin` e `0000` → `Acesso negado`
*/

const user = prompt("Usuário:");
const pass = prompt("Senha:");

const perfilOk = (user === "admin" || user === "gerente");
const senhaOk = (pass === "1234");

if (perfilOk && senhaOk) {
    console.log("acesso liberado");
} else {
    console.log("Acesso negado");
}

//1-) 
const num = number(prompt ("digite um numero"));

if (number.isNaN(num)) {
    console. log("valor inválido");
} else if (num > 0) {
    console. log ("número positivo");
}else if (num < 0) {
    console. log("número negativo");
} else {
    console. log("numero zero");
}

//2-)
const idade = number(prompt ("qual é sua idade"));
if (number.isnan(idade) ){
    console. log("idade imvalida");
} else if (idade >= 18) {
    console. log ("voce pode tirar carteira de motorista.");
} else {
    console. log("voce ainda nao pode tirar a carteira de motorista.");
}

//-3)

const numero = number(prompt("digite um número:"));

if (number.isnan(numero)) {
    console.log("numero invalido");
}else if (numero % 2 === 0) {
    console. log("o numero é par.");
}else {
    console.log("o numero é impar");
}

//-4)
const peso = number(prompt("digite seu peso em kg:"));
const altura = number(prompt ("digite sua altura em metros:"));

if (number.isnan(peso))
    console.log("valores de peso ou altura invalitos.");
else {
    const imc = peso / (altura * altura);

    console.log('seu IMC é: ${imc.tofixed(2)}');

    if (imc < 18.5) {
        console.log("classificaçao: abaixo do peso");
    } else if (imc < 25) {
        console.log ("classificaçâo: peso normal");
    }else if (imc < 30) {
        console.log("classificaçâo: sobrepeso");
    } else {
        console.log("classificaçâo: obesidade");
    }
}

//-5) 

const valor = number(prompt("digital o valor da compra:"));

if (number.isnan(valor) || valor < 0) {
    console.log("valor invalido.");
} else if (valor > 100) {
    const desconto = valor * 0.1;
    console.log("valor final com desconto:" + valor - desconto);
} else {
    console.log("valor final: R$" + valor)
}

//-6) 
const a = number(prompt("digite o primeiro numero:"));
const b = number(prompt("digite o segundo numero:"));
const c = number(prompt("digite o terceiro numero:"));

if (number.isnan(a) || number.isnan(b) || number.isnan(c)) {
    console.log ("numeros invalidos.");
} else {
    let maior = a;
    if(b > maior) maior = b;
    if (c > maior) maior = c;
    console.log("o maior numero e:" + maior);
}