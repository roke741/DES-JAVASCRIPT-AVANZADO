const jsalumno ={
    "id": 1,
    "nombre": "juana",
    "promedio": 12,
    "curso": {
        "id": 1,
        "nombre": "cosmiatria",
        "profesor": {
            "id": 1,
            "nombre": "Pamela",
            "apellido": "Lopez"
        }
    }
  }
const alumno = JSON.stringify(jsalumno);
console.log(alumno);
//document.getElementById('demo').innerHTML = alumno;
const objAlumno = JSON.parse(alumno);
//document.getElementById('demo').innerHTML = objAlumno.nombre;
document.getElementById('demo').innerHTML = objAlumno.nombre + " " + objAlumno.promedio + " " + objAlumno.curso.nombre + " " + objAlumno.curso.profesor.nombre + " " + objAlumno.curso.profesor.apellido;