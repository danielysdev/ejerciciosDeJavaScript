//1.- Muestrame los elementos del iterador
//2.- Iterar un array de números y devolverme el valor * 2;
//3.- Mostrarme los índices del array que vas a iterar.


//1.- Muestrame los elementos del iterador
let animales = ["perro", "gato", "pajaro"];

for (let animal of animales) {
    console.log(animal);
}


//2.- Iterar un array de números y devolverme el valor * 2;
let numeros = [4,5,6];
let resultadoNumeros = 0;

for (let valor of numeros){
    resultadoNumeros += valor;
}
resultadoNumeros *=2
console.log(resultadoNumeros);


//3.- Mostrarme los índices del array que vas a iterar.
let frutas = ["fresa", "manzana", "pera", "uva"];

for (let indice in frutas){
    console.log(indice);
}