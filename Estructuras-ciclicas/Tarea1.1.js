let positivos = "";
let numero;

for (let cont = 1; cont <= 10; cont++){

    numero = prompt("Ingrese un número: ");

    if((numero > 0) && (cont < 10)){
        positivos += (numero+", ");
    }else if(cont == 10){
        positivos += numero;
    }

}

alert(`Los números positivos en la lista son: ${positivos}`);