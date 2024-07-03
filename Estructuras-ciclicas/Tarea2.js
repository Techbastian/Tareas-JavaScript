let positivo = 0;
let numero = 0;
let salida = "";

for(i = 1; i <= 15; i++){
    numero = Number(prompt("Por favor ingrese un número: "));
    positivo = -numero;
    salida += (positivo +", ");
}

alert(`La lista de números son: ${salida}`);