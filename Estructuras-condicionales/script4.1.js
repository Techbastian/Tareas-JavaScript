let valpagar, Ncamisas;

valpagar = Number(prompt("¿Cuál es el costo de su compra? "));
Ncamisas = Number(prompt("Indique la cantidad de camisas a pagar: "));

if (Ncamisas >= 3){
    alert("Se le aplicará un descuento del 20% al total de su compra");
    valpagar = valpagar*0.8;
} else{
    alert("Se le aplicará un descuento del 10% al total de su compra");
    valpagar = valpagar*0.9;
}

document.write(`Se le aplico un descuento, por ende debe pagar $${valpagar}`);