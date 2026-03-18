var valor = prompt("Digite o valor da hora: ");
var quant = prompt("Digite a quantidade de horas trabalhadas por dia: ");

quant = Number(quant);
valor = Number(valor);

salario = valor * quant * 30;

document.write("O salario é: R$" + salario);