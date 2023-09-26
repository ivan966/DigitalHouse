/*En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función.

1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
y lo retorna. Investiga qué hace el método de strings .toUpperCase()
*/
let convertirMayuscula = caracter => caracter.toUpperCase();


/*
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Investiga qué hace la palabra reservada typeof().
*/
let tipoDato = caracter => typeof(caracter);

/*
3. Crear una función que calcule la edad de los perros, considerando que 1 año para
nosotros son 7 de ellos.
*/
let edadPerruna = edad => edad * 7;


/*
4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que
dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día.
Cuando tengas alguna duda que te impida avanzar, puedes preguntarle a tus profesores.*/

function valorHoraTrabajo(salarioMensual, diasTrabajados, horasXdia) {
    let horasTotales = horasXdia * diasTrabajados;
    let precioHora = salarioMensual / horasTotales;

    return precioHora;
}

console.log(valorHoraTrabajo(125000, 20, 8))