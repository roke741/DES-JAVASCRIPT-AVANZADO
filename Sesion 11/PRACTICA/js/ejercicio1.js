/*
Ejercicios:
Ejercicio 1.
Desarrollar una aplicacion para ingresar nombres y promedios de varios alumnos.
a. Mostrar la lista de alumnos con sus promedios.
b. Mostrar el promedio del grupo de alumnos.
c. Mostrar el promedio menor y mayor ingresados */


//let notas = [];
let alumnos = [];
let promedios = [];

op = confirm("Deseas ingresar un nuevo alumno? ");
while(op == true){
    let nombre = prompt("Ingresa tu nombre: ");
    alumnos.push(nombre);
    calcularPromedio(nombre);
    op = confirm("Deseas ingresar un nuevo alumno? ");
}

function calcularPromedio(nombre){
    let notas = [];
    let sumnotas = 0
    let nota = 1;
    while(nota > 0){
        nota = Number(prompt("Ingresa tu nota: "));
        notas.push(nota)
    }
    for(let i = 0; i < notas.length ; i++){
        sumnotas += notas[i];
    }
    console.log(notas)
    console.log(sumnotas)
    promedios.push(sumnotas/ (notas.length-1));
}

console.log("a. Mostrar la lista de alumnos con sus promedios.")
console.log(alumnos)
console.log(promedios)

let promediototal = 0
for(let i = 0 ; i < promedios.length ; i++){
    promediototal += promedios[i]
}
console.log("el promedio total del grupo es: ", promediototal / promedios.length)

let notaAlta = 0;
let notaBaja = 20;
for (let i = 0; i < promedios.length; i++) {
    if (promedios[i] > notaAlta) {
        notaAlta = promedios[i];
    }
    if (promedios[i] < notaBaja) {
        notaBaja = promedios[i];
    }
}
console.log("La nota mas alta es: " + notaAlta);
console.log("La nota mas baja es: " + notaBaja);