/*1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar
el aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en
cuenta que:

● La velocidad debe estar comprendida entre 268 a 278 km/hr.
● La altura debe estar comprendida entre 150 m a 300 m.*/

let velocidad = 270;
let altura = 0;



if(velocidad >= 268 && velocidad <= 278){
    if(altura >= 150 && altura <= 300){
        console.log('el avion puede aterrizar');
    }
    else{
        console.log('el avion no esta a la altura indicada para aterrizar');
    }
}
else{
    console.log('El avion no va a la velocidad recomendada para poder aterrizar');
}


if(velocidad >= 268){
    if(velocidad <= 278){
        if(altura >= 150){
            if(altura <= 300){
                console.log('el avion puede aterrizar')
            }
            else{
                console.log('el avion esta muy alto, recomiendo bajar la altura')
            }
        }
        else{
            console.log('el avion esta muy bajo, recomiendo subir la altura')
        }
    }
    else{
        console.log('el avion va muy rapido, recomiendo bajar la velocidad')
    }
}
else{
    console.log('el avion va muy despacio, recomiendo subir la velocidad')
}