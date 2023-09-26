/*El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.

*/

let operacionesBancarias = [
    750,
    1500,
    -7899,
    10000,
    -6789,
    5000,
    -3500,
    8900,
    1500,
    800
]
/*
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.*/
function calcularSaldo(operaciones){
    let depositos = 0;
    let retiros = 0;
    for(let i = 0; i < operaciones.length; i++){
        if(operaciones[i] < 0){
            retiros = retiros + operaciones[i];
        }
        else{
            depositos = depositos  + operaciones[i];
        }
    }
    let saldo = depositos + retiros;

    return [
        depositos,
        retiros,
        saldo
    ];
}

/*3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:*/

const estadoCuenta = (nombre, apellido, movimientos, calcularSaldo) =>{
    let resultados = calcularSaldo(movimientos)
    return[`${nombre} ${apellido}`,
        resultados[0],
        resultados[1],
        resultados[2]
    ]
}

let estado = estadoCuenta('Emmanuel', 'Parra', operacionesBancarias, calcularSaldo)

console.log(estado)