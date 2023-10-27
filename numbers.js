//1.- Hallar el valor mayor de dos números
//2.- Sumar, restar, multiplicar y dividir los números.
//3.- Calcular la raíz cuadradada de los números agregados.


//1.- Hallar el valor mayor de dos números.
let a = 20;
let b = 5;
function valorMayor (a,b) {
    if (a > b ) {
        return a;
    } else {
        return b;
    }
}
console.log(valorMayor(a,b));


//2- Sumar, restar, multiplicar y dividir los números
let c = 4;
let d = 2;
let suma = c + d;
let resta = c - d;
let multiplicar = c * d;
let dividir = c / d;

console.log(suma);
console.log(resta);
console.log(multiplicar);
console.log(dividir);


//3.- Calcular la raíz cuadradada de los números agregados.
let e = 25;
let f = 9;

let raiz = e ** (1/2);
let raiz2 = Math.sqrt(f);

console.log(raiz);
console.log(raiz2);