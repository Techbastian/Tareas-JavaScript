let calificacion = [];
let decimal = 0;
let sumatoria = 0;
let promedio = 0;
let baja = 0;

for(i=0;i<=39;i++){
    decimal = Math.random()*5;
    calificacion[i] = decimal.toFixed(2);
    sumatoria += Number(calificacion[i]);
}

baja = calificacion[0];
for(i=1;i<=39;i++){
    if(baja > calificacion[i]){
        baja = calificacion[i];
    }
}

console.log(calificacion);
promedio = sumatoria/40;
alert(`El promedio de notas es de: ${promedio.toFixed(2)} y la menor nota es ${baja}`);