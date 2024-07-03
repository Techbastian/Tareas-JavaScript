let nombre,clave, precio, preciodesc;

nombre = prompt("Por favor ingrese el nombre del libro: ");
clave = prompt("Por favor ingrese la clave del libro: ");;
precio = Number(prompt("Por favor ingrese el precio del libro: "));

if (clave == "01"){

    alert("Se le aplicará un descuento del 10%");
    preciodesc = precio*0.9;
    
}else{

    alert("Se le aplicará un descuento del 20%");
    preciodesc = precio*0.8;
    
}

document.write(`El libro ${nombre}, con clave ${clave}, Tiene un valor de $${precio}. Precio en descuento $${preciodesc}`);