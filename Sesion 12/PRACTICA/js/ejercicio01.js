/*
 Ejercicio 01
En un instituto existen dos salones de clase, 
en cada uno hay un total de 5 alumnos[id,nombre,correo,promedio,estado], 
cada alumno solo lleva un curso[id,nombre,precio].
Se desea ingresar datos para los dos salones como json y 
mostrarlos en la pagina web en una tabla.
*/
let salones = {
    "salon1":{
        "alumnos":{
        }
    },
    "salon2":{
        "alumnos":{
        }
    },
}
let id = 0
while(id < 1 ){
    let alumno = prompt("Ingresa tu nombre");
    let correo = prompt("Ingresa tu correo");
    let promedio = Number(prompt("Ingresa tu promedio"));
    let estado = prompt("Ingresa tu estado T o F");
    let idSalon = Number(prompt("Ingresa tu salon"));
    guardarDatos(alumno, correo, promedio, estado ,idSalon, id);
    id += 1;  
}
//let jsonstring = `{"id": ${0}, "alumno": ${alumno}, "correo": ${correo}, "estado": ${estado}   }`

function guardarDatos(alumno, correo, promedio, estado ,idSalon, id){
    let cursoS1 = [1, "programacion 1", 200];
    let cursoS2 = [2, "programacion 2", 300];
    let arrayAlumnos = [];
    if(idSalon == 1){
        salones.salon1.alumnos[id] = arrayAlumnos;
        arrayAlumnos.push(alumno, correo, promedio, estado , cursoS1);
    }
    if(idSalon == 2){
        salones.salon2.alumnos[id] = arrayAlumnos;
        arrayAlumnos.push(alumno, correo, promedio, estado , cursoS2);
    }
    //const objAlumno = JSON.parse(alumno);
}
let filas = document.getElementById("datosTabla")
for(let i = 0; i < 10 ; i++){
    filas.innerHTML += "<tr><td>Salon1</td>"+"<td>"+salones.salon1.alumnos[i][0]+"</td>"+"<td>"+salones.salon1.alumnos[i][1]+"</td>"+"<td>"+salones.salon1.alumnos[i][2]+"</td>"+"<td>"+salones.salon1.alumnos[i][3]+"</td>"+"<td>"+salones.salon1.alumnos[i][4][1]+"</td>"+"<td>S/."+salones.salon1.alumnos[i][4][2]+"</td></tr>";
}
for(let j = 0; j < 10 ; j++){
    filas.innerHTML += "<tr><td>Salon2</td>"+"<td>"+salones.salon2.alumnos[j][0]+"</td>"+"<td>"+salones.salon2.alumnos[j][1]+"</td>"+"<td>"+salones.salon2.alumnos[j][2]+"</td>"+"<td>"+salones.salon2.alumnos[j][3]+"</td>"+"<td>"+salones.salon2.alumnos[j][4][1]+"</td>"+"<td>S/."+salones.salon2.alumnos[j][4][2]+"</td></tr>";
}