//1.- Agregar valores al array al principio. ["Soy","Hola", "Juan"]
//2.- Revertir los valores por que tenga el array [1,2,3] [3,2,1]
//3.- Sumar todos los números del array: [1,2,3] = 6


//1.- Agregar valores al array al principio. ["Soy","Hola", "Juan"]
const array = ["Soy", "Hola", "Juan"];

array.unshift("Bienvenido", 35, "Profesor");

console.log(array);


//2.- Revertir los valores por que tenga el array [1,2,3] [3,2,1]
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];

array1.reverse();
array2.reverse();

console.log(array1);
console.log(array2);


//3.- Sumar todos los números del array: [1,2,3] = 6
let array3 = [1,2,3];
let resultado = 0;

for ( let sumaDeLosNumeros of array3) {
    resultado += sumaDeLosNumeros;
}
console.log(resultado);