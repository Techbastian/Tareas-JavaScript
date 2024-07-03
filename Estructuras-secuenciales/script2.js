let metraje, inch;
metraje = Number(prompt("¿Cuantos metros de tela desea convertir? "));

inch = metraje/0.0254;

document.write("Debe solicitar un total de " + inch.toFixed(2) +" in");