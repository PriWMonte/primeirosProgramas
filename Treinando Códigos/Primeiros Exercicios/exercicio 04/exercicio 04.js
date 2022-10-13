/* Faça um programa que receba o salário base de um funcionario, calcule e mostre o salario a receber
sabendo que o funcionario tem uma gratificação de 5% sobre o salario base e paga um importo de 7% também
sobre o salario base.*/

let salarioBase = parseFloat(prompt("Digite o seu salario."));
let gratificação = salarioBase * 0.05;
let imposto = salarioBase * 0.07;
let salarioFinal = salarioBase + gratificação - imposto;

alert(salarioFinal);
