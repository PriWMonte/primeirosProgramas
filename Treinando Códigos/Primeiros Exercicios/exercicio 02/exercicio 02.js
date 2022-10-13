/* Faça um programa que receba 3 notas, calcule e mostre a média aritmética.*/

let nota1 = parseFloat(prompt("Digite a primeira Nota."));
let nota2 = parseFloat(prompt("Digite a segunda Nota."));
let nota3 = parseFloat(prompt("Digite a terceira Nota."));
let média = (nota1 + nota2 + nota3)/3;

alert(média.toFixed(2));
