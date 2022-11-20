/*Desarrollar un programa que permita ingresar los nombres de muchos productos y sus precios.  
Se debe dejar de preguntar por ellos cuando ingrese un producto con nombre "Q"
Al final deberá mostrar cada producto con su precio y el promedio de precios. */
let listaProducto = []
let listaPrecio = []
let producto = prompt("Nombre del producto")
while(producto.toUpperCase() !== "Q"){
    listaProducto.push(producto)
    precio = parseInt(prompt("Precio del producto"))
    listaPrecio.push(precio)
    producto = prompt("Nombre del producto")
}
let suma = 0
for(let i = 0; i < listaPrecio.length; i++){
    suma += listaPrecio[i]
}
let promedio = suma / listaPrecio.length
for(i = 0; i < listaProducto.length; i++){
    console.log(`
    Nombre del producto: ${listaProducto[i]}
    Precio del producto: ${listaPrecio[i]}
    `)
}
console.log("precio promedio: "+ promedio)


