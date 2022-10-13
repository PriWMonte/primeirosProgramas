/* Faça um programa que receba o salário de um funcionario, calcule e mostre o novo salario
sabendo que este sofreu um aumento de 25%.*/

let salarioInicial = parseFloat(prompt("digite o seu salario."));
let aumento = 25/100 ;
let salarioAumento = salarioInicial * aumento;
let salarioFinal = salarioAumento + salarioInicial;

alert(salarioFinal);
