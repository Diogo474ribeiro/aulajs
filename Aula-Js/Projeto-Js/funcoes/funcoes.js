/*
const precoA = 100 ;
console.log("preço final A:", precoA - precoA * 0.1);
const precoB = 250;
console.log("preço final B:", precoB - precoB * 0.1);
const precoC = 80;
console.log("preço final C:", precoC - precoC * 0.1);

function aplicardesconto(preco) {
    return preco - preco * 0.1;
}

console.log("preço final A:", aplicardesconto(100));
console.log("preço final B:", aplicardesconto(250));
console.log("preço final C:", aplicardesconto(80));

function saudar() {
    console.log("ola, bem vindo ao curso!");
}

saudar ();
*/


/*
function saudar(nome) {
    console.log("ola, " + nome + "!");
}

saudar("lucas");

function apresentar(nome, idade) {
    console.log('${nome} tem ${idade} anos.');
}

apresentar("lucas", 35);

apresentar(35, "lucas");

function cumprimentar(nome = "visitante") {
    console.log('ben-vindo, ${nome}');
}

cumpromentar("lucas");
cumprimentar();

function somar(a, b) {
    console.log(a + b);
}

somar(2, 3);
somar(2);
somar(2, 3, 4);
*/
/*
function dobroMostra(n) {
    console.log(n * 2);
}

function dobroDevolve(n){
    return n * 2;
}

dobroMostra(5);
const b = dobroDevolve(5);

function classificar(idade) {
    if (idade < 0) {
        return "idade invalida!"
    }

    if (idade >= 18) {
        return "maior de idade!";
    }

return "menor de idade!"
}

console.log(classificar(20));
console.log(classificar(-5));
console.log(classificar(10));

function estatisticas(a, b) {
    return {
        soma: a + b,
        media: (a + b) / 2,
    };
}

const resultado = estatistica(4, 10);
console.log(resultado.soma);
console.log(resultado.media);

function ehPar(n) {
    return n % 2 === 0;
}

function descrever(n) {
    return ehPar(n) ? "Par" : "impar;"
}

console.log(descrever(4));
console.log(descrever(7));
*/


const dobro = function (n) {
    return n * 2;
};

console.log(dobro(4));

function quadrado1(n) {
    return n * n;
};

const quadrado2 = function (n) {
    return n * n;
};

const quadrado3 = (n) => {
    return n * n;
};

const quadrado4 = n => n * n;


const somar = (a, b) => a + b;

const oi = () => "oi!!";

const criarAluno = nome => ({nome: nome, ativo: true});
console.log(criarAluno("lucas"));

const criarAlunoErrado = nome => ({nome: nome});
console.log(criarAlunoErrado("lucas"));