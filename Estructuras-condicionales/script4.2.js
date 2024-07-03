let montocompra = 0;
let propio = 0;
let banco = 0;
let credito = 0;

montocompra = Number(prompt("Indique el moto total de la compra: "));

if (montocompra <= 500000){
    propio = montocompra*0.7;
    credito = montocompra-propio;
    credito = credito + (credito*0.2);
    document.write(`El pago se realizara de la siguiente forma: Dinero propio 70%: ${propio} Credito fabricante 30%: ${credito}`);
    alert("Total: "+ (propio+credito));
} else{
    propio = montocompra*0.55;
    banco = montocompra*0.3;
    credito = montocompra*0.15;
    credito = credito + (credito*0.2);
    document.write(`El pago se realizara de la siguiente forma: Dinero propio 55%: ${propio} Banco 30%: ${banco} Credito fabricante 15%: ${credito}`);
    alert("Total: "+ (propio+banco+credito));
}

