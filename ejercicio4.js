/*En un hospital ingresan muchos pacientes diariamente, por cada ingreso se registra: 
edad, 
sexo y 
distrito de procedencia.
Se desea ingresar todos los pacientes de un dia y ver lo siguiente:
1. Cantidad de pacientes varones y mujeres
2. Edad promedio de pacientes por dia
3. Cantidad de pacientes por distrito
4. Edad promedio de pacientes por distrito. */

let listaNombres = []
let listaEdades = []
let listaSexo = []
let listaDistrito = []

while (true) {
    let nombre = prompt("Ingrese su nombre: ");
    let edad =Number(prompt("Ingrese su edad: "));
    let sexo = prompt("Ingrese su sexo: ");
    let distrito = prompt("Ingrese su distrito: ");
    return false;
}
let contadorVarones = 0
let contadorMujeres = 0
for (let i = 0; i <listaSexo.length; i++) {
    if (listaSexo[i] === "varon"){
        contadorVarones +=1 
    }else{
        contadorMujeres +=1
    }
}

let suma = 0
for (let i = 0; i <listaEdades.length; i++) {
    suma += listaEdades[i]
}
let edadPromedio = suma / listaEdades.length

let cantDistrito = []
let contador = 0
for (let i = 0; i < listaDistrito.length; i++) {
    if (listaDistrito[i] === listaDistrito[i+1]){
        contador +=1 
    }
    cantDistrito.push(contador)
    contador = 0
}


console.log(`
1. Cantidad de pacientes varones ${contadorVarones} y mujeres ${contadorMujeres}}
2. Edad promedio de pacientes por dia = ${edadPromedio}
3. Cantidad de pacientes por distrito: ${listaDistrito , cantDistrito}}
4. Edad promedio de pacientes por distrito:
`);