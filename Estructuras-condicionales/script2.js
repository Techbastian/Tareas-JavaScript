let actividad = 0;
let horas;
let totalcal =0;
const dormir = 1.08;
const sentado = 1.66;

actividad = Number(prompt("¿Que actividad realizo? 1. dormir/2. sentado"));

if (actividad == 1){
    horas = Number(prompt("¿Cuánto tiempo dormiste? "));
    minutos = horas*60;
    totalcal = dormir*minutos;
} else if(actividad == 2){
    horas = Number(prompt("¿Cuánto tiempo estuviste sentado? "));
    minutos = horas*60;
    totalcal = sentado*minutos;
} else{
    alert('valor equivocado');
}

document.write(`En el lapzo de ${horas} horas quemaste un total de ${totalcal} calorias`);

