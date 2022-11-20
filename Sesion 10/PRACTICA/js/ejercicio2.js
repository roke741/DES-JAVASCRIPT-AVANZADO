/* let alumno = {
    id : 0,
    nombre : "",
    apellido : "",
    edad: 0,
    promedio: 0,
    estado: "",

    get fullName(){
        return `${this.nombre} ${this.apellido}`
    },

    set fullName(value){
        [this.nombre, this.apellido] = value.split(" ");
    }
}

alumno.fullName = "Jhordie Roque";

alert(alumno.nombre)
alert(alumno.apellido) 
*/
/*
Desarrollar un programa que permita ingresar datos de un alumno (id, nombre, apellido, edad, promedio, estado) y muestre en consola los datos ingresados.
El estado es aprobo si el promedio es mayor o igual a 13, caso contrario es desaprobado.
En la estructura de la clase Alumno, crear un método que permita mostrar los datos del alumno.
Tome en cuenta que debe agregarse los datos del curso que esta ellvando el alumno (id, nombre, creditos, horas, estado)
Ejemplo:  Un alumno esta cursando el curso de Programación I (id, nombre, creditos, horas, estado) y su estaso es aprobado
*/

let curso = {
    programacion1: {
        id:1,
        nombre: "programacion1",
        creditos: 5,
        horas: 240,
        estado: "",
    },
    programacion2: {
        id:2,
        nombre: "programacion1",
        creditos: 5,
        horas: 240,
        estado: "",
    },
    programacion3: {
        id:2,
        nombre: "programacion1",
        creditos: 5,
        horas: 240,
        estado: "",
    }

}
let alumno = {
    id : 0,
    nombre : "",
    apellido : "",
    edad: 0,
    promedio: 0,
    estado: "",
    cursos: {
        programacion1 : {
            id:1,
            nombre: "programacion1",
            creditos: 5,
            horas: 240,
            estado: "",
        }
    },

    get fullName(){
        return `${this.nombre} ${this.apellido}`
    },

    set fullName(value){
        [this.nombre, this.apellido] = value.split(" ");
    },

    mostrarData(){
        alert(alumno.nombre)
        alert(alumno.apellido) 
        alert(alumno.edad)
        alert(alumno.promedio)
        alert(alumno.estado)
    }
}

alumno.fullName = prompt("Ingresa tu nombre y apellido: ");
alumno.edad = Number(prompt("Ingresa tu edad: "));
alumno.promedio = Number(prompt("Ingresa tu promedio: "));
var estadoCalcular = alumno.promedio > 13 ? "Aprobado" : "Desaprobado";
alumno.estado = estadoCalcular;

console.log(alumno.mostrarData())