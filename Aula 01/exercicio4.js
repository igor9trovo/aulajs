let base = parseFloat(prompt("Digite o valor da base do triângulo:"));
let altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));


let area = (base * altura) / 2;


alert("A área do triângulo é: " + area.toFixed(2));

document.write("<h2>Área do triângulo: " + area.toFixed(2) + "</h2>");