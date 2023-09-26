/*
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
*/
let montoPagar = (tipoVehiculo, diaAlquiler, sillaBebe) => {
    let total = 0;
    switch(tipoVehiculo){
        case 'Compacto':
            total = 14000 * diaAlquiler;
            break;
        case 'Mediano':
            total = 17000 * diaAlquiler;
            break;
        case 'Camioneta':
            total = 28000 * diaAlquiler;
            break;
    }

    if(sillaBebe == true){
        total = total + 1200
        return total;
    } 
    else{
        return total;
    }
} ;
/*

4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” .

Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final.
*/
let vehiculo = 'Compacto';
let dias = 5;
let silla = false;


if(silla){
    console.log(`Estimado cliente: en base al tipo de vehiculo ${vehiculo} alquilado, considerando los ${dias} dias utilizados y el alquiler de la silla, el monto a pagar es de ${montoPagar(vehiculo,dias,silla)}`);
}
else{
    console.log(`Estimado cliente: en base al tipo de vehiculo ${vehiculo} alquilado, considerando los ${dias} dias utilizados el monto a pagar es de ${montoPagar(vehiculo,dias,silla)}`);
}


