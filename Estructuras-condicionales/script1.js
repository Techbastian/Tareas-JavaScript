let horaslaboradas = 0;
let pagosemanal = 0;
let valorhora = 16;
let sobrante;

horaslaboradas = Number(prompt("Indique el numero de horas que laboro: "));

if (horaslaboradas <= 40){
    pagosemanal = horaslaboradas*valorhora;
}else{
    sobrante = horaslaboradas - 40;
    pagosemanal = (40*valorhora)+(sobrante*20);
}

document.write(`Al trabajador se le deben pagar $ ${pagosemanal} esta semana`);