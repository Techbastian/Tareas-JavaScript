let resultado = 0;
let tabla;
tabla = Number(prompt("Ingrese el número de la tabla de multiplicar que desea calcular: "));
//Tabla de multiplicar del 3
alert("Se va a calcular la trabla del "+ tabla);
for (cont  = 1; cont <= 10; cont++){
    resultado = tabla * cont;
    alert(`3 X ${cont} = ${resultado}`);
}