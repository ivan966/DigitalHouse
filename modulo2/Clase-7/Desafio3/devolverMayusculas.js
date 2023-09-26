/*
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
*/
let texto = 'practicando el uso de los ciclos o bucles';
function cadena(texto){
    return texto.toUpperCase();
}

console.log(cadena(texto));