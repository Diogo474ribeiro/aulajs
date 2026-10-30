/*
Crie a função saudar(nome) que devolve o texto Olá, <nome>!.
*/

//-1)
/*
function saudar(nome) {
    console.log(saudar("lucas"));
}
*/
/*
Crie a função `areaRetangulo(base, altura)` que devolve a área.

**Exemplo:** `areaRetangulo(5, 3)` devolve `15`
*/

//2-)

/*
function areaRetangulo(base, altura) {
    return base * altura;
}
console.log(areaRetangulo(5, 3));
*/
/*
Crie `maiorDeTres(a, b, c)` que devolve o maior dos três números, sem usar `Math.max`.

**Exemplo:** `maiorDeTres(3, 9, 5)` devolve `9`
*/
//-3)
/*
function maiorDeTres(a, b, c) {
    let maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    return maior;
}

console.log(maiorDeTres(3, 9, 5));

math.max();
console.log(math.max(3, 9 5));
*/
/*
Crie `celsiusParaFahrenheit(c)`. Fórmula: `c * 9 / 5 + 32`. Se `c` não for um número válido, devolva `null`.

**Exemplo:** `celsiusParaFahrenheit(100)` devolve `212`; `celsiusParaFahrenheit("abc")` devolve `null`
*/
//-4)
/*
function celsiusParaFahrenheit(c) {
  if (typeof c !== 'number' || Number.isNaN(c)) {
    return null;
  }
  return c * 9 / 5 + 32;
}

console.log(celsiusParaFahrenheit(100));
*/

/*
Crie `contarVogais(texto)` que devolve quantas vogais (a, e, i, o, u) o texto tem, sem diferenciar maiúsculas de minúsculas.

**Exemplo:** `contarVogais("JavaScript")` devolve `3`
*/

//-5)

/*
function contarVogais(texto) {
    const vogais = "aeiou";
    let total = 0;

    for (const letra of texto.contarVogais()) {
        if (vogais.includes(letra)) {
            total++
        }
    }
    return total;
}

console.log(contarVogais("javascript"));
*/
/*
Crie `inverter(texto)` que devolve o texto de trás para frente. Depois crie `ehPalindromo(texto)` que **usa** `inverter` e devolve `true` ou `false`, ignorando maiúsculas.

**Exemplo:** ehPalindromo("Arara")` devolve `true`; `ehPalindromo("Casa")` devolve `false`
*/

//-6)
/*
function inverter(texto) {
    let invertido = "" ;
    for (let i = texto.length -1; i >= 0; i--) {
        invertido += texto [i]
    }
    return invertido;
}

    function ehPalindromo(texto) {
        const normal = texto.toLoWerCase();
        return normal === inverter(normal)
    }

    console.log(ehPalindromo("arara"));
    console.log(ehPalindromo("casa"));
    */
   /*
   Crie `depositar(saldo, valor)` e `sacar(saldo, valor)`, cada uma **devolvendo o novo saldo**. O saque deve ser recusado (mostrando uma mensagem e mantendo o saldo) se o valor for inválido ou maior que o saldo. Depois, desafie-se a encaixá-las no menu com `do...while` da aula de repetição.

**Exemplo:** saldo `100` → depositar `50` → sacar `30` → sacar `500` → saldo final `120`
*/
//-7)
/*
function depositar(saldo, valor) {
    if (valor <= 0) {
        console.log("Valor de depósito inválido!");
        return saldo;
    }
    console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
    return saldo + valor;
}

function sacar(saldo, valor) {
    if (valor <= 0 || valor > saldo) {
        console.log("Valor de saque inválido!");
        return saldo;
    }
    return saldo - valor;
}

let saldo = 100;
saldo = depositar(saldo, 50);
salto = sacar(saldo, 30);
salto = sacar(saldo, 500);
console.log("saldo final", salto);
*/
/*
Crie um objeto `operacoes` em que cada chave é um símbolo (`"+"`, `"-"`, `"*"`, `"/"`) e cada valor é uma arrow function. Depois crie `calcular(a, op, b)` que escolhe a função certa. Devolva `null` para operação desconhecida ou divisão por zero.

**Exemplo:** `calcular(10, "+", 5)` devolve `15`; `calcular(10, "/", 0)` devolve `null`
*/
//-7)
/*
const operacoes = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? null : a / b),
};

function calcular(a, op, b) {
    const funcao = operacoes[op];
    if (!funcao) {
        return null
    }
    
    
    return funcao(a, b)
}


console.log(calcular(10, "+", 5));
console.log(calcular(10, "/", 0));
*/


/*MAP
Dado const nums = [1, 2, 3, 4, 5], use map para criar um array com o dobro de cada número
*/
/*
const nums = [1, 2, 3, 4, 5];

const dobros = nums.map(num => num * 2);

console.log(dobros);
*/

/*
Dado const nomes = ["ana", "bruno", "carla"], use map para devolver todos os nomes em letras maiúsculas.
*/

//-2)
/*
const nomes = ["ana", "bruno", "carla"];
const maiusculas = nomes.map(nome => nome.toUpperCase());

console.log(maiusculas);
*/
/*
Dado const precos = [100, 200, 50], use map para devolver os preços com 10% de aumento.
*/
//-3)
/*
const precos = [100, 200, 50];
const comAumento = precos.map(p => p + p * 0.1);

console.log(comAumento);
*/

/*
Dado um array de alunos com nome e nota, use map para obter só os nomes.
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
];
*/

/*
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
];

Com o mesmo array de alunos, use map para gerar textos no formato "Ana: 8".
*/

//-4)
/*
const linhas = alunos.map(({ nome, nota }) => `${nome}: ${nota}`);
console.log(linhas)
*/

/*
Dado um array de produtos com nome e preco, devolva objetos com os mesmos campos e um novo campo precoFinal com 10% de desconto. O array original não pode mudar.

const produtos = [
  { nome: "Mouse", preco: 100 },
  { nome: "Teclado", preco: 40 },
];
*/

//-5)
/*
const produtos = [
  { nome: "Mouse", preco: 100 },
  { nome: "Teclado", preco: 40 },
];

const comDesconto = produtos.map(p => {
  return {
    ...p, precoFinal: p.preco * 0.9
  };
});

console.log(comDesconto);
console.log(produtos[0]);
*/

/*
Numerar uma lista com index

Dado const fila = ["Ana", "Bia", "Caio"], use map com o segundo parâmetro (index) para gerar "1. Ana", "2. Bia"...
*/

//-6)
/*
const fila = ["Ana", "Bia", "Caio"];

const filaNumerada = fila.map((nome, index) => `${index + 1}. ${nome}`)

console.log(filaNumerada)
*/

/*
Filter e map encadeados

Dado um array de itens com nome, qtd e preco, devolva objetos { nome, subtotal } apenas dos itens com qtd maior que 0. O subtotal é qtd * preco.

const itens = [
  { nome: "Caneta", qtd: 3, preco: 2 },
  { nome: "Lápis", qtd: 0, preco: 1 },
  { nome: "Caderno", qtd: 2, preco: 15 },
];
*/

//-7)
/*
const itens = [
  { nome: "Caneta", qtd: 3, preco: 2 },
  { nome: "Lápis", qtd: 0, preco: 1 },
  { nome: "Caderno", qtd: 2, preco: 15 },
];

const resultado = itens
.filter(i => i.qtd > 0)
.map(i => ({
    nome: i.nome,
    subtotal: i.qtd * i.preco,
}));

console.log(resultado);
*/

/*
Dado const nums = [1, 2, 3, 4, 5, 6, 7, 8], use filter para ficar só com os números pares.
*/

//-8)
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = nums.filter(num => num % 2 === 0);

console.log(pares);
*/

/*
Duas condições

Dado um array de pessoas com nome, idade e ativo (true/false), devolva só as pessoas ativas e maiores de 18.

const pessoas = [
  { nome: "Ana", idade: 20, ativo: true },
  { nome: "Bia", idade: 17, ativo: true },
  { nome: "Caio", idade: 25, ativo: false },
  { nome: "Duda", idade: 30, ativo: true },
];
*/

//-9)
/*
const pessoas = [
  { nome: "Ana", idade: 20, ativo: true },
  { nome: "Bia", idade: 17, ativo: true },
  { nome: "Caio", idade: 25, ativo: false },
  { nome: "Duda", idade: 30, ativo: true },
];

const elegiveis = pessoas.filter(pessoa => pessoa.ativo && pessoa.idade >= 18);

console.log(elegiveis.map(p => p.nome));
*/

/*
Dado um array de títulos de filmes e o termo "ar", devolva os títulos que contêm o termo, sem diferenciar maiúsculas de minúsculas.

const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];
*/

//-10)
/*
const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];
const termo = "ar";

const achados = titulos.filter(titulo => titulo.toLowerCase() .includes(termo.toLowerCase()));

console.log(achados);
*/

/*
1: Remover um item pelo id
Dado um array de tarefas com id e texto, use filter para devolver a lista sem a tarefa de id 2.

const tarefas = [
  { id: 1, texto: "Estudar" },
  { id: 2, texto: "Treinar" },
  { id: 3, texto: "Dormir" },
];
*/

//-11)
/*
const tarefas = [
  { id: 1, texto: "Estudar" },
  { id: 2, texto: "Treinar" },
  { id: 3, texto: "Dormir" },
];

const tarefasAtualizadas = tarefas.filter(t => t.id !== 2);

console.log(tarefasAtualizadas);
*/

/*
Primeiro maior que 10
Dado const nums = [4, 8, 12, 15, 3], use find para achar o primeiro número maior que 10.
*/

//-12)
/*
const nums = [4, 8, 12, 15, 3];

const promeiroMaior = nums.find(n => n > 10);

console.log(primeiroMaior);
*/

/*
Dado um array de pessoas com nome e idade, ache a pessoa chamada "Bruno".
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 30 },
]
*/

//-13)

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 30 },
];

const bruno = pessoas.find(p => p.nome === "Bruno");

console.log(bruno)