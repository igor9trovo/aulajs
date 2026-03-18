var principal = prompt("Digite o valor inicial:");
var taxa = prompt("Digite a taxa de juros (%):");
var tempo = prompt("Digite o tempo (anos):");


principal = Number(principal);
taxa = Number(taxa);
tempo = Number(tempo);


taxa = taxa / 100;


var montante = principal * (1 + (taxa * tempo));


document.write("O montante é: " + montante);