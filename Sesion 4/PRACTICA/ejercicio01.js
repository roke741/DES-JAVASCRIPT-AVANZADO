/*
Ingresar en un prompt 5 nombres separados por comas y en otro prompt 5 notas (0-20).
Mostrar el siguiente reporte:
    a. cada nombre con su nota
    b. el promedio de notas
    c. la nota mayor
    d. la nota menor.

let nombres = prompt("Ingrese 5 nombres separados por comas");
let notas = prompt("Ingrese 5 notas separadas por comas");
let arrayNombres = nombres.split(",");
let arrayNotas = notas.split(",");
let suma = 0;
let mayor = 0;
let menor = 20;
for(let i=0;i<arrayNombres.length;i++){
    console.log(arrayNombres[i] + " : " + arrayNotas[i]);
    suma += parseInt(arrayNotas[i]);
    if(parseInt(arrayNotas[i])>mayor){
        mayor = parseInt(arrayNotas[i]);
    }
    if(parseInt(arrayNotas[i])<menor){
        menor = parseInt(arrayNotas[i]);
    }
}
console.log("Promedio: " + suma/arrayNombres.length);
console.log("Nota mayor: " + mayor);
console.log("Nota menor: " + menor);
*/