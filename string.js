//1.- identificar la logintud de la cadena de texto agregada.
//2.- invertir la cadena de texto: Hello - olleH
//3.- Repetir el texto

//1.- identificar la logintud de la cadena de texto agregada.
let texto1 = "¡Hola Danielys!";
const longitud = texto1.length;

console.log(longitud);


//2.- invertir la cadena de texto Hello - olleH
let texto2 = "Hello";
let invertirCadenaTexto = (cadena)=>{
    return cadena.split("").reverse().join("");
}
const textoInvertido = invertirCadenaTexto(texto2);
console.log(textoInvertido);


//3.- Repetir el texto

let texto3 = "Sonrie "
const repetirTexto = texto3.repeat(8);

console.log(repetirTexto);