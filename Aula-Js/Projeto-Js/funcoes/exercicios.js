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
