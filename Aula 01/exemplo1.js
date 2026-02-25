document.write("<h2> Entrada de Dados </h2>")

var numero1 = prompt("Digite o número 1")
var numero2 = prompt("Digite o número 2")

document.write("número 1 = " + numero1 + "<br>");
document.write("número 2 = " + numero2 + "<br>");

document.write ("<h2> Operações aritméticas</h2>");

var resultado;

resultado = Number(numero1) + Number(numero2);

document.write("A soma dos números é " + resultado + "<br>");

document.write("<h2> Operações Aritméticas </h2>")

var soma = prompt("Digite o A soma dos números é")
resultado = Number(numero1) + Number(numero2);
var dif = prompt("digite o A diferença entre numeros é")
resultado = Number(numero1) - Number(numero2);
var pro = prompt("Digite o O Produto dos números é")
resultado = Number(numero1) * Number(numero2) ;
var div = prompt("Digite o A divisão entre os números é")
resultado = Number(numero1) % Number(numero2);

document.write("A soma dos numeros é " +  soma+ "<br>"); 
document.write("A diferença dos numeros é " + dif +"<br>");
document.write("O produto dos numeros é " + pro + "<br>");
document.write("A divisão entre os numeros é " + div + "<br>" );


