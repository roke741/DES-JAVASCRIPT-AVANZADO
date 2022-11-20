let cat = "W"
let a = 31

if(cat.toUpperCase() === "A"){
    if(a > 30){ 
        let sueldoFinal = 7000 - (7000 * 0.06)
        console.log(sueldoFinal)
    }else{
        let sueldoFinal = 7000 - (7000 * 0.10)
        console.log(sueldoFinal)
    }
}else if(cat.toUpperCase() === "B"){
    if(a > 30){ 
        let sueldoFinal = 6500 - (6500 * 0.06)
        console.log(sueldoFinal)
    }else{
        let sueldoFinal = 6500 - (6500 * 0.10)
        console.log(sueldoFinal)
    }
   
}else if(cat.toUpperCase() === "C"){
    if(a > 30){ 
        let sueldoFinal = 5000 - (5000 * 0.06)
        console.log(sueldoFinal)
    }else{
        let sueldoFinal = 5000 - (5000 * 0.10)
        console.log(sueldoFinal)
    }
   
}else{
    console.log("INGRESE UNA CATEGORIA VALIDA")
}