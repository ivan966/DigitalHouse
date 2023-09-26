/*
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/


let arrayPositivo= [10,15,20,25,30,35,40,45,50]

function pares(numeros){
    let arrayRetorno = [];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i]%2 == 0){
            arrayRetorno.push(numeros[i]);
        }
    }
    return arrayRetorno;
}


console.log(pares(arrayPositivo))