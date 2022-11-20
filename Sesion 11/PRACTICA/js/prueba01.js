let alumnos = ["juan", "pedro", "maria", "luis", "ana"]

let notas = [10, 8,9,7,6];

console.log("Lista de alumnos");
/* for (let alumno of alumnos){
    console.log(alumno);
} */
for(let i = 0; i < alumnos.length; i++){
    console.log("El alumno: "+alumnos[i]+" tiene la nota: " + notas[i]);
}