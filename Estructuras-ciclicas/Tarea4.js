let horas = 0;
let minutos = 0;
let segundos = 0;

for(horas=0;horas<24;horas++){
    
    for(minutos=0;minutos<60;minutos++){
        
        for(segundos=0;segundos<60;segundos++){
            console.log(`${horas}:${minutos}:${segundos}`);
        }
        
        segundos = 0;
    }
    
    minutos = 0;
}