/* 
Ejercicios:
Ejercicio 01:
Una empresa que vende vinos ha decidido vender sus productos por categorias:
T  vino tinto
B  Vino Blanco
Los precios varian por el tipo de vino
S  Seco
M  SemiSeco
D  Dulce
Se tienen  dos proveedores
Intipalka y Tacama
El precio base de los vinos 
Intipalka:(S:15%, M:10%, D:5%)
100 soles --> tinto
80 soles  --> blanco
El precio base de los vinos
Tacama:(S:20%, M:10%, D:8%)
200 soles  --> tinto
120 soles  --> blanco
Se necesita un programa que permita mostrar el precio de venta de un vino dependiendo del proveedor, tipo y categoria.

t 200
s 200 * 0.20 = 40
tacama 240 
240
*/
var categoria = prompt("Ingresa la categoria de vino, (t = vino tinto, b = vino blanco)")
var tipo = prompt("Ingrese el tipo de vino, (S = seco, M = semiseco , D = dulce")
var proveedor = prompt("Ingrese el proveedor de vino, (Intipalka o Tacama)")
var precioFinal

if(proveedor.toUpperCase() === "INTIPALKA"){
    let preciobaseInti = categoria.toUpperCase() === "T" ? 100 : categoria.toUpperCase() === "B" ? 80 : "categoria no valida";
    //console.log(categoria, tipo, proveedor )
    switch(tipo.toUpperCase()){
        case "S":
            precioFinal = preciobaseInti + (preciobaseInti * 0.15)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: Seco
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        case "M":
            precioFinal = preciobaseInti + (preciobaseInti * 0.10)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: SemiSeco
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        case "D":
            precioFinal = preciobaseInti + (preciobaseInti * 0.5)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: Dulce
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        default:
            alert("Tipo invalido")
            break;
    }
}else if(proveedor.toUpperCase() === "TACAMA"){
    let preciobaseTacma = categoria.toUpperCase() === "T" ? 200 : categoria.toUpperCase() === "B" ? 120 : "categoria no valida";
    //console.log(categoria, tipo, proveedor)
    switch(tipo.toUpperCase()){
        case "S":
            precioFinal = preciobaseTacma + (preciobaseTacma * 0.20)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: Seco
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        case "M":
            precioFinal = preciobaseTacma + (preciobaseTacma * 0.10)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: SemiSeco
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        case "D":
            precioFinal = preciobaseTacma + (preciobaseTacma * 0.8)
            alert(`
            Descripcion:
            - Categoría: ${categoria === "T" ?  "Vino Tinto" : "Vino Blanco"}
            - Tipo: Dulce
            - Proveedor: ${proveedor}
            --------------------------
            - Precio final: ${precioFinal}
            `)
            break;
        default:
            alert("Tipo invalido")
            break;
    }
}else{
    alert("proveedor invalido")
}