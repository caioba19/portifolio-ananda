//1 
console.log("Olá, mundo! Bem-vindo ao JavaScript.");

//2
let nome = "João";
let idade = 20;
let cidade = "Salvador";

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

//3
let a = 10;
let b = 5;
let soma = a + b;

console.log("Resultado da soma:", soma);

//4
let x = 8;
let y = 2;

console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Multiplicação:", x * y);
console.log("Divisão:", x / y);

//5
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//6
let numero = -7;

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

//7
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
} else if (imc <= 24.9) {
  console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
} else if (imc <= 29.9) {
  console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
} else {
  console.log(`IMC: ${imc.toFixed(2)} - Obesidade`);
}

//8
let n1 = 15;
let n2 = 68;
let n3 = 45;
let maior = n1;

if (n2 > maior) maior = n2;
if (n3 > maior) maior = n3;

console.log("O maior número é:", maior);

//9
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C equivale a ${fahrenheit}°F`);

//10
let numero = 14;

if (numero % 2 === 0) {
  console.log(numero, "é par");
} else {
  console.log(numero, "é ímpar");
}

//11
let nota1 = 8.0;
let nota2 = 6.5;
let nota3 = 7.0;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(`Média: ${media.toFixed(1)} - Aprovado`);
} else if (media >= 5) {
  console.log(`Média: ${media.toFixed(1)} - Recuperação`);
} else {
  console.log(`Média: ${media.toFixed(1)} - Reprovado`);
}

//12
let numero = 10;

console.log("Antecessor:", numero - 1);
console.log("Número:", numero);
console.log("Sucessor:", numero + 1);