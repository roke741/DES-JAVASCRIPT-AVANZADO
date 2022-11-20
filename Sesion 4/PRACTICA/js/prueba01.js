/*
Manejo de cadenas de texto
*/

//Si la cadena ingresada es "juan"

var cadena = prompt("Introduce una cadena de texto");
var longitud = cadena.length; //4
var mayusculas = cadena.toUpperCase(); //JUAN
var minusculas = cadena.toLowerCase();  //juan
var primera = cadena.charAt(0);  //j
var ultima = cadena.charAt(longitud-1); //n
var posicion = cadena.indexOf("a"); //1
var posicion2 = cadena.lastIndexOf("a"); //3
var subcadena = cadena.substring(1,3); //ua
console.log("La longitud de la cadena es: " + longitud);
console.log("La cadena en mayúsculas es: " + mayusculas);
console.log("La cadena en minúsculas es: " + minusculas);
console.log("La primera letra de la cadena es: " + primera);
console.log("La última letra de la cadena es: " + ultima);
console.log("La posición de la primera letra 'a' es: " + posicion);
console.log("La posición de la última letra 'a' es: " + posicion2);
console.log("La subcadena es: " + subcadena);

cadena = prompt("Introduce una cadena de texto 2");
//Si la cadena ingresada es "juan es alumno"
var reemplazo = cadena.replace("juan","pedro"); //pedro es alumno
console.log("La cadena reemplazada es: " + reemplazo);

cadena = prompt("Introduce una cadena separad por comas");
//Si la cadena ingresada es "juan, pedro, maria, luis, carlos, maria, pedro, juan"
var separacion = cadena.split(","); //["juan","pedro","maria","luis","carlos","maria","pedro","juan"]
for(var i=0;i<separacion.length;i++){
    console.log("Elemento " + i + " : " + separacion[i]);
}


