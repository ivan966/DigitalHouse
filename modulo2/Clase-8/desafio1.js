/*El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
permita calcular el monto a pagar por un alumno basándose en los cursos que
desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
objetivo:
a. Crear un array multidimensional que contenga los nombres de los cursos y su
precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
7000”, “nodejs, 15000”.
*/
let cursoPrecio = [ ['html5', 4000],
                    ['css3', 5000],
                    ['javascript', 10000],
                    ['react',7000],
                    ['nodejs', 15000]
];



/*
b. Crear un array que contenga los cursos que el alumno quiere tomar con DH.
Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
*/
let cursoTomado = ['NODEJS','HTML5','CSS3']
/*
c. Crear una función (Callback) que reciba como parámetros el array
multidimensional de los cursos y el otro array que indica los cursos que
quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
devolver el monto total a pagar por el alumno en función de los cursos que
quiere realizar. No olvides que en el array multidimensional los nombres de los
cursos están escritos en letras minúsculas y tienes que pasarlas a
MAYÚSCULAS.
*/
function calcularPrecio(cursoPrecio,cursoTomado){
    let cursosEnMayusculas = cursoPrecio.map(curso => [curso[0].toUpperCase(), curso[1]]);
        let totalPagar  = 0;
        //console.log('inicio', totalPagar)
        for(let i = 0; i < cursosEnMayusculas.length; i++){
            for(let a = 0; a < cursoTomado.length; a++){

                if(cursosEnMayusculas[i][0] == cursoTomado[a]){
                    totalPagar = totalPagar + cursosEnMayusculas[i][1]
                }
            }
        }
    return totalPagar;
}



/*
d. Crear otra función que reciba como parámetros el nombre y el apellido del
alumno, el array multidimensional de los cursos con sus respectivos
precios y el array que contiene qué cursos quiere hacer el alumno. Esta
función tendrá la responsabilidad de retornar el nombre y el apellido del
alumno y el monto total a pagar en función de los cursos que quiere realizar.
e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados,
invoca a la segunda función, asigna diferentes valores o argumentos y no
olvides utilizar el console.log() para mostrar los resultados al usuario. Te
compartimos un ejemplo:

*/
function resultados(nombre,apellido,cursoPrecio,cursoTomado){

    let precio = calcularPrecio(cursoPrecio,cursoTomado);
    let mensaje = `Estimado ${nombre} ${apellido}, en funcion de los cursos seleccionados: \n`
    
    for(let i = 0; i < cursoTomado.length; i++ ){
        mensaje += `${i+1}. - ${cursoTomado[i]}\n`
    }
    
    mensaje += `El monto total a pagar es de: ${precio}.\nBienvenido a la gran aventura de Digital House`;

    return mensaje;

}

console.log(resultados('Ivan','Parra',cursoPrecio,cursoTomado))
/*
2

Estimado Luis Fuentes, en función de los cursos seleccionados:
1.- HTML5
2.- CSS3
3.- JAVASCRIPT
4.- NODEJS
El monto total a pagar es de: $34000.
Bienvenido a la gran aventura Digital House.*/