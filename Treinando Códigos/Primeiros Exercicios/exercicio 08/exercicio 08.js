/* Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
 A) a idade da pessoa; B) quantos anos ela terá em 2050. */

 let anoNascimento = Number(prompt("Digite seu ano de nascimento."))
 let anoAtual = Number(prompt("Digite o ano atual."));
 let idadeAtual = anoAtual - anoNascimento
 let idadeFutura = 2050 - anoNascimento

 alert("Sua idade atual é: " + idadeAtual + " e sua idade em 2050 será: " + idadeFutura);
 