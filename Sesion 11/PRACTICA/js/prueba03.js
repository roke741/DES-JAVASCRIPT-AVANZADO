//crear un arreglo de alumnos
let alumnos = ["Juan", "Pedro", "Maria", "Luis", "Ana"];
//crear un arreglo de notas
let notas = [10, 8, 9, 7, 20];

//mostrar la nota mas alta y la mas baja
let notaAlta = 0;
let notaBaja = 20;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaAlta) {
        notaAlta = notas[i];
    }
    if (notas[i] < notaBaja) {
        notaBaja = notas[i];
    }
}
console.log("La nota mas alta es: " + notaAlta);
console.log("La nota mas baja es: " + notaBaja);