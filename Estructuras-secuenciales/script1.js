let estudiantes, hombres, mujeres;
let porcentajehombres, porcentajemujeres;

estudiantes = Number(prompt("Defina el número total de estudiantes: "));
hombres = Number(prompt("¿Cuantos hombres hay en el grupo? "));
mujeres = Number(prompt("¿Cuantas mujeres hay en el grupo? "));

porcentajehombres = (100/estudiantes)*hombres;
porcentajemujeres = (100/estudiantes)*mujeres;

document.write(`En el salón hay un total de ${estudiantes} estudiantes
                Porcentaje de hombres: ${porcentajehombres} %
                Porcentaje de mujeres: ${porcentajemujeres} % `);

/*document.write(` hombres ${porcentajehombres}%`);
document.write(` mujeres ${porcentajemujeres}%`);*/