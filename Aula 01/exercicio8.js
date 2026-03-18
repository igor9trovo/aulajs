var peso = prompt("Digte o peso da pessoa (kg)");
var altura = prompt("Digite a altura da pessoa (metros)");

peso = Number(peso);
altura = Number(altura);

var imc = peso / (altura * altura);

document.write("Seu IMC é: " + imc);