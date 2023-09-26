/*Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones
aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
numéricos que consideres. Ejemplo: let numero1 = 16;
3. Usando el console.log() mostrar al usuario los resultados de las siguientes
operaciones aritméticas, en función de los valores asignados a las variables:
I. Suma
II. Resta
III. Multiplicación
IV. División
V. Módulo
VI. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true.
De lo contrario mostrará false
VII. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true.
De lo contrario mostrará false
Cuando tengas alguna duda que te impida avanzar, puedes preguntarle a tus profesores.*/


let numero1 = 1;
let numero2 = 1;
let array = [];

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log(suma, suma > multiplicacion ? true : false);
console.log(resta);
console.log(multiplicacion, suma < multiplicacion ? true : false);
console.log(division);
console.log(modulo);

