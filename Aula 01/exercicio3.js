
let valor = parseFloat(prompt("Digite o valor da prestação em atraso:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"));
let tempo = parseInt(prompt("Digite o tempo de atraso (em dias):"));
let valorParcela = valor + (valor * (taxa / 100) * tempo);

document.write("O valor da parcela é: R$ " + valorParcela.toFixed(2));
