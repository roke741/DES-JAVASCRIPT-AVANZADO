/*

operar(eval(prompt("Introduce un numero [1]")), 
eval(prompt("Introduce un numero [2]")),
prompt("Introduce la operacion [+,-,/,*]"));

function operar(numero1,numero2,operacion){
switch(operacion){
  case "+":
          console.log("suma: " + (numero1 + numero2));break;
  case "-":
          console.log("resta: " + (numero1 - numero2));break;
  case "*":
          console.log("producto: " + (numero1 * numero2));break;
  case "/":
          console.log("division: " + (numero1 / numero2));break;
  default:
          console.log("operacion no valida");break;

}
}
}



-----------------------------------------prueba04.js------------------------



Funciones JavaScript

// llamando a la función operar

let mensaje = operar(eval(prompt("Introduce un numero [1]")), 
              eval(prompt("Introduce un numero [2]")),
              prompt("Introduce la operacion [+,-,/,*]"));

console.log(mensaje);


function calcular(operacion){
let mensaje = operar(eval(document.getElementById("num1").value), 
              eval(document.getElementById("num2").value),
              operacion);
document.getElementById("resultado").value = mensaje;
}

function operar(numero1,numero2,operacion){
switch(operacion){
  case "+": return "suma: " + (numero1 + numero2);
  case "-": return "resta: " + (numero1 - numero2);     
  case "*": return "producto: " + (numero1 * numero2);
  case "/": return "division: " + (numero1 / numero2);
  default: return "operacion no valida";
}
}


*/