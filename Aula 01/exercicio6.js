var quantidade = prompt("Digite a quantidade do produto:");
var preco = prompt("Digite o preço do produto:");

quantidade = Number(quantidade);
preco = Number(preco);


var subtotal = quantidade * preco;


var desconto = subtotal * 0.10;


var total = subtotal - desconto;


document.write("Subtotal: R$ " + subtotal);
document.write("Desconto (10%): R$ " + desconto);
document.write("Total a pagar: R$ " + total);