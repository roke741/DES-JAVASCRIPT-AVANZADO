/*En una farmacia se esta haciendo inventario de poductos, para lo que se toman los datos
 de los nombres, 
 catergoria, 
 la cantidad que tienen en stock y 
 los precios.   
Se solicita un programa que permita ingresar de uno en uno los productos y mostrar los siguiente:
- Mostrar los productos y cantidades por categoria: [natural, generica, otros]
- Mostrar el promedio de precios por categoria.
- Mostrar el precio promedio de todos los productos.
- Mostrar el costo (precio * cantidad) de todos los productos. */

let listaNatural = []
let listaGenerica = []
let listaOtros = []

alert("Bienvenidos a la farmacia")
let op = Number(prompt("Ingrese 1 para ingresar un productos o 2 para salir"))
while (op === 1 ){
    let nombre = prompt("Ingrese su nombre: ");
    let categoria = prompt("Ingrese la categoria [N = natural, G = generica, O = otros]: ");
    let cantStock = Number(prompt("Ingrese la cantidad: "));
    let precio = Number(prompt("Ingrese su precio: "));
    switch(categoria.toUpperCase()){
        case "N": listaNatural.push([nombre, cantStock , precio]); break;
        case "G": listaGenerica.push([nombre, cantStock , precio]); break;
        case "O": listaOtros.push([nombre, cantStock , precio]); break;
    }
    //listaProductos.push([nombre, categoria, cantStock, precio])
    op = Number(prompt("Desea continuar agregando productos ?(ingrese 1 para continuar, 2 para salir)"))
}

console.log(listaNatural)
console.log(listaGenerica)
console.log(listaOtros)

console.log("->Mostrar los productos y cantidades por categoria: ")
console.log("Cat. Natural:")
for(let i = 0; i < listaNatural.length; i++) {
    console.log(listaNatural[i][i] , listaNatural[i][1])
}
console.log("Cat. Generica:")
for(let i = 0; i < listaGenerica.length; i++) {
    console.log(listaGenerica[i][i] , listaGenerica[i][1])
}
console.log("Cat. Otros:")
for(let i = 0; i < listaOtros.length; i++) {
    console.log(listaOtros[i][i] , listaOtros[i][1])
}

//////////////////////////////////////////////////////////////

console.log("->Mostrar el promedio de precios por categoria.")
//promedio lista natural
let sumaNatural = 0
for(let i = 0; i <listaNatural.length; i++){
    sumaNatural += listaNatural[i][2]
}
let promedioNatural = sumaNatural / listaNatural.length
console.log("Promedio de precios Cat. Natural: ", promedioNatural)

//promedio lista generica
let sumaGenerica = 0
for(let i = 0; i <listaGenerica.length; i++){
    sumaGenerica += listaGenerica[i][2]
}
let promedioGenerica = sumaGenerica / listaGenerica.length
console.log("Promedio de precios Cat. Generica: ",promedioGenerica)

//promedio lista otros
let sumaOtros = 0
for(let i = 0; i <listaOtros.length; i++){
    sumaOtros += listaOtros[i][2]
}
let promedioOtros = sumaOtros / listaOtros.length
console.log("Promedio de precios Cat. Otros: ",promedioOtros)

////////////////////////////////////////////////////////////////////////

console.log("->Mostrar el precio promedio de todos los productos")
let sumaGeneral = sumaNatural + sumaGenerica + sumaOtros
let promedioGeneral = sumaGeneral /  ( listaNatural.length + listaGenerica.length + listaOtros.length)
console.log("Promedio General: ", promedioGeneral)

////////////////////////////////////////////////////////////////////////

console.log("Mostrar el costo (precio * cantidad) de todos los productos.")
console.log("Lista Natural: ")
let costosNatural = 0
for(let i = 0; i < listaNatural.length ; i++){
    costosNatural = listaNatural[i][2] * listaNatural[i][1]
    console.log(`
    Producto ${i + 1 } 
    Cantidad:${listaNatural[i][1]}
    Precio ${listaNatural[i][2]}
    Costo: ${costosNatural}
    `)
}
console.log("Lista Generica: ")
let costosGenerica = 0
for(let i = 0; i < listaGenerica.length ; i++){
    costosGenerica = listaGenerica[i][2] * listaGenerica[i][1]
    console.log(`
    Producto ${i + 1 } 
    Cantidad:${listaNatural[i][1]}
    Precio ${listaNatural[i][2]}
    Costo: ${costosNatural}
    `)
}
console.log("Lista Otros: ")
let costosOtros = 0
for(let i = 0; i < listaOtros.length ; i++){
    costosOtros = listaOtros[i][2] * listaOtros[i][1]
    console.log(`
    Producto ${i + 1 } 
    Cantidad:${listaNatural[i][1]}
    Precio ${listaNatural[i][2]}
    Costo: ${costosNatural}
    `)
}

