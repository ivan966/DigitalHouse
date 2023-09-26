/* 
Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables:
*/
let nombre = 'Iván';
let apellido = 'Parra' 
let sueldoActual = 125000;
let porcentajeAumento = 50;
let calculoAumento =  (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Buenos dias mi queridisimo ${nombre}\n alctuamente posees un sueldo de ${sueldoActual}\n como sos un excelente trabajador te vamos a dar un aumento del ${porcentajeAumento}% que seria ${calculoAumento}\n en total empezarias a cobrar ${nuevoSueldo} \n muchas gracias`)