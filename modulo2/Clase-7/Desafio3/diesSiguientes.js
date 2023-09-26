/*Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones:

En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
desarrolles.
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
*/
let numeroSolicitado = 100;

function diesSiguientes(numero){
    for(let i = 0; i<=10;i++){
        console.log(numero+i);
    }
}

diesSiguientes(numeroSolicitado);

