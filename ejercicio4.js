/*En un hospital ingresan muchos pacientes diariamente, por cada ingreso se registra: 
edad, 
sexo y 
distrito de procedencia.
Se desea ingresar todos los pacientes de un dia y ver lo siguiente:
1. Cantidad de pacientes varones y mujeres
2. Edad promedio de pacientes por dia
3. Cantidad de pacientes por distrito
4. Edad promedio de pacientes por distrito. */

let listaDistrito1 = []
let listaDistrito2 = []
let listaDistrito3 = []

let op = Number(prompt("Ingrese 1 para registrar paciente o 2 para salir"))
while (op === 1 ){
    let nombre = prompt("Ingrese su nombre: ");
    let edad =Number(prompt("Ingrese su edad: "));
    let sexo = prompt("Ingrese su sexo: ");
    let distrito = prompt("Ingrese su distrito: ");
    switch(distrito.toUpperCase()){
        case "D1": listaDistrito1.push([nombre, edad , sexo]); break;
        case "D2": listaDistrito2.push([nombre, edad , sexo]); break;
        case "D3": listaDistrito3.push([nombre, edad , sexo]); break;
        default: break;
    }
    //listaProductos.push([nombre, categoria, cantStock, precio])
    op = Number(prompt("Desea continuar agregando productos ?(ingrese 1 para continuar, 2 para salir)"))
}
console.log(listaDistrito1)
console.log(listaDistrito2)
console.log(listaDistrito3)

//////////1///////////
let contadorVarones = 0
let contadorMujeres = 0
console.log("1. Cantidad de pacientes varones y mujeres")
for(let i = 0; i <listaDistrito1; i++){
    if(listaDistrito1[i][2].toUpperCase() === "VARONES"){
        contadorVarones += 1
    }else{
        contadorMujeres += 1
    }
}
for(let i = 0; i <listaDistrito2; i++){
    if(listaDistrito1[i][2].toUpperCase() === "VARONES"){
        contadorVarones += 1
    }else{
        contadorMujeres += 1
    }
}
for(let i = 0; i <listaDistrito3; i++){
    if(listaDistrito1[i][2].toUpperCase() === "VARONES"){
        contadorVarones += 1
    }else{
        contadorMujeres += 1
    }
}
console.log("Pacientes Varones: " + contadorVarones + ", Pacientes Mujeres: " + contadorMujeres)

///////////2///////////
console.log("2. Edad promedio de pacientes por dia")
let sumaEdades = 0
for (let i = 0; i <listaDistrito1; i++) {
    sumaEdades += listaDistrito1[i][1]
}
for (let i = 0; i <listaDistrito2; i++) {
    sumaEdades += listaDistrito2[i][1]
}
for (let i = 0; i <listaDistrito3; i++) {
    sumaEdades += listaDistrito3[i][1]
}
let promedio = sumaEdades / (listaDistrito1.length + listaDistrito2.length + listaDistrito3.length)
console.log("El promedio de edades de pacientes por dia es: "+ promedio)


//////////3////////////
console.log("3. Cantidad de pacientes por distrito")
console.log(`
Distrito 1 : ${listaDistrito1.length}}
Distrito 2 : ${listaDistrito2.length}}
Distrito 3 : ${listaDistrito3.length}}
`)

//////////4///////////
console.log("4. Edad promedio de pacientes por distrito.")
let sumEdadD1 = 0
for (let i = 0; i <listaDistrito1; i++) {
    sumEdadD1 += listaDistrito1[i][1]
}
console.log("Edad promedio del distrito 1: "+ sumEdadD1/listaDistrito1.length)
let sumEdadD2 = 0
for (let i = 0; i <listaDistrito2; i++) {
    sumEdadD2 += listaDistrito2[i][1]
}
console.log("Edad promedio del distrito 2: "+ sumEdadD2/listaDistrito2.length)
let sumEdadD3 = 0
for (let i = 0; i <listaDistrito3; i++) {
    sumEdadD3 += listaDistrito3[i][1]
}
console.log("Edad promedio del distrito 3: "+ sumEdadD3/listaDistrito3.length)
