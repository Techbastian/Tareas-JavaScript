let nombre = prompt("Por favor ingrese su nombre: ");
let horas = Number(prompt("¿Cuantas horas trabajo? "));
let valorhora = Number(prompt("¿Cual es su valor por hora laborada? "));
let sueldo;

sueldo = horas*valorhora;

document.write(`El sueldo de ${nombre} es de `);
document.write("$ "+sueldo);