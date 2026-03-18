var nota = prompt("Digite as notas do aluno");
var nota2 = prompt("Digite a segunda nota:");
var nota3 = prompt("Digite a terceira nota:");

nota = Number(nota);
nota2 = Number(nota2);
nota3 = Number(nota3);

var media = (nota + nota2 + nota3) / 3;


document.write("A média do aluno é: " + media);

