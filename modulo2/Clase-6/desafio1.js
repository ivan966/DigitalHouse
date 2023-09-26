/*1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.
2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.
*/
let electrodomesticos = [
    'cocina',
    'heladera',
    'batidora',
    'cafetera',
    'procesadora',
    'exprimidora'
]
/*
3. Ejecutar sobre el array creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.
*/
//console.log(electrodomesticos[4])
//console.log(electrodomesticos[1])
/*
● Extraer el primer elemento del array y agregarlo al final del mismo.
*/
let ultimoelemento = electrodomesticos.pop()
electrodomesticos.unshift(ultimoelemento)
//console.log(electrodomesticos)
/*

● Agregar al final del array dos (2) nuevos productos.
*/
electrodomesticos.push('microondas','horno')
//console.log(electrodomesticos)
/*
● Mostrar por la consola la cantidad de elementos que contiene el array.
*/
//console.log(electrodomesticos.length)
/*
● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
*/
const busqueda = producto =>{
    if(electrodomesticos.indexOf(producto) !== -1){
        return'Producto encontrado'
    }
    else{
        return 'El producto que esta buscando no existe'
    }
}

//console.log(busqueda('exprimidora'))

/*
● Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.
*/
let union = electrodomesticos.join(' ')
//console.log(union)

/*
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
*/
//console.log(union.length)

/*
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.
*/

let nombreNuevo = union.replace('horno','mesa')
//console.log(nombreNuevo)
/*
● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.*/

let nuevoArray = nombreNuevo.split(' ');

console.log(nuevoArray)