//crear un arreglo de alumnos
let alumnos = ["Juan", "Pedro", "Maria", "Luis", "Ana"];
//crear un arreglo de notas
let notas = [10, 8, 9, 7, 20];

//mostrar el promedio de notas
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}
let promedio = suma / notas.length;
console.log("El promedio de notas es: " + promedio);