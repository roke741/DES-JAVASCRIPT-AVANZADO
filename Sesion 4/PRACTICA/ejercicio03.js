/*Generar 5 notas (0-20) aleatorias y obtener:
a. la nota mayor
b. la nota menor
c. el promedio de notas.


let notas = [];
let suma = 0;
let mayor = 0;
let menor = 20;
for(let i=0;i<5;i++){
    notas.push(Math.floor(Math.random() * 21));
    console.log(notas[i]);
    suma += notas[i];
    if(notas[i]>mayor){
        mayor = notas[i];
    }
    if(notas[i]<menor){
        menor = notas[i];
    }
}
console.log("Promedio: " + suma/notas.length);
console.log("Nota mayor: " + mayor);
console.log("Nota menor: " + menor);
*/