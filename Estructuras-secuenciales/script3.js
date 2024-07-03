let notafinal, parcial1, parcial2, parcial3, promedioparciales, examenfinal, trabajofinal;
let porcentajeparciales = 0;
let porcentajefinal = 0;
let porcentajetrabajofinal = 0;

parcial1 = Number(prompt("Por favor introduzca la nota de su parcial 1: "));
parcial2 = Number(prompt("Por favor introduzca la nota de su parcial 2: "));
parcial3 = Number(prompt("Por favor introduzca la nota de su parcial 3: "));
examenfinal = Number(prompt("Por favor introduzca la nota de su examen final: "));
trabajofinal = Number(prompt("Por favor introduzca la nota de su trabajo final: "));

promedioparciales = (parcial1+parcial2+parcial3)/3;

porcentajeparciales = promedioparciales*0.55;
porcentajefinal = examenfinal*0.3;
porcentajetrabajofinal = trabajofinal*0.15;

notafinal = porcentajeparciales + porcentajefinal + porcentajetrabajofinal;
notafinal = notafinal.toFixed(1);

alert(`Su nota final es ${notafinal}`);