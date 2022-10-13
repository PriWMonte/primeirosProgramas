/* Faça um programa que receba o salário base de um funcionario, calcule e mostre o salario a receber
sabendo que o funcionario tem uma gratificação de R$50 e paga um imposto de 10% sobre o salario base.*/

let salarioBase = parseFloat(prompt("Digite seu salario."));
let imposto = salarioBase * 0.10;
let gratificação = 50;
let salarioFinal = salarioBase + gratificação - imposto;

alert(salarioFinal);
