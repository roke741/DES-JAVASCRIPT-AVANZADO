/*
En una empresa se deben ingresar datos de los empleados para dar bonificaciones.
Los datos son: Nombre, categoria[A,B,C] y años de labor [1-10].
Sueldos:
A->3000
B->2500
C->2000
La bonificacion a pagar sera de 10% para los que trabajaron menos de 5 años y 
15% para 5 o mas.
Mostrar las lista de empleados con sus nombres, sueldos y bonificaciones.
Mostrar el sueldo mayor y menor.
Mostrar el promedio de sueldos.
*/
let empleados = [];
let anios = [];
let sueldos = [];
op = confirm("Deseas ingresar un nuevo Empleado? ");
while(op == true){
    let nombre = prompt("Ingresa el nombre del empleado: ");
    empleados.push(nombre);
    let anio = Number(prompt("Ingresa los años laborados: "));
    anios.push(anio);
    let categoria = prompt("Ingresa su categoria:  ");
    calcularBonificaciones(anio , categoria);
    op = confirm("Deseas ingresar un nuevo Empleado? ");
}

function calcularBonificaciones(anio, categoria){
    switch(categoria.toUpperCase()) {
        case "A":
            let sueldoA = anio < 5 ? 3000 + (3000 * 0.10) : 3000+ (3000 * 0.15);
            sueldos.push(sueldoA);
            break;
        case "B":
            let sueldoB = anio < 5 ? 2500 + (2500 * 0.10) : 2500+ (2500 * 0.15);
            sueldos.push(sueldoB);
            break;
        case "C":
            let sueldoC = anio < 5 ? 2000 + (2000 * 0.10) : 2000+ (2000 * 0.15);
            sueldos.push(sueldoC);
            break;
        default:
            alert("categoria invalida");
    }
}

console.log("%cMostrar las lista de empleados con sus nombres, sueldos y bonificaciones.", "color:yellow;");
for(let i = 0; i < empleados.length; i++) {
    console.log(`
    ${empleados[i]}, S/.${sueldos[i]} 
    `)
}

console.log("%cMostrar el sueldo mayor y menor.", "color:yellow;");
let sueldoAlto = 0;
let sueldoBajo = 3450;
for (let i = 0; i < sueldos.length; i++) {
    if (sueldos[i] > sueldoAlto) {
        sueldoAlto = sueldos[i];
    }
    if (sueldos[i] < sueldoBajo) {
        sueldoBajo = sueldos[i];
    }
}
console.log("->El sueldo mas alto es: S/." + sueldoAlto);
console.log("->El sueldo mas bajo es: S/." + sueldoBajo);


console.log("%cMostrar el promedio de sueldos", "color:yellow;");
let sumsueldo = 0;
for(let j = 0 ; j < sueldos.length ; j++){
    sumsueldo += sueldos[j];
}
console.log("->El promedio de sueldos es : S/.", sumsueldo/sueldos.length);


