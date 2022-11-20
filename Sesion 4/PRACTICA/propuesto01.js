
/*
En un evento de 5 dias (lunes 7 nov al viernes 11 nov) 
se desea colocar exposiciones de 1 o 2 horas maximo entre horarios de 9am a 8pm. = 11horas / 2 = 10 exposciones 
Hacer un programa que permita reservar espacios de tiempo que esten dentro del rango permitido y que no permita traslapes.
Al final se debera mostrar las fechas y horarios reservados.
*/
const dias = new Date();

let reservaciones = []

let reservacionLunes = []
let reservacionMartes = []
let reservacionMiercoles = []
let reservacionJueves = []
let reservacionesViernes = []

let op = Number(prompt("Desa registrar una reservacion, 1 para continuar 2 para cerrar"))
while (op == 1){
    let reservacionDia = Number(prompt("Ingrese que dia quiere hacer su reservacion (7 , 8, 9, 10 , 11)"))
    let reservacionHorario = Number(prompt("Ingrese la hora de reservacion (9am - 8pm, ingrese en formato de 24 horas)"))
    let reservacionTiempo = Number(prompt("Ingrese tiempo estimado (1 hrs 0 2hrs)"))
    validar(reservacionDia, reservacionHorario, reservacionTiempo)
    op = Number(prompt("Desea continuar registrando reservaciones (ingrese 1 para continuar, 2 para salir)"))
}


function validar(dia, horario, tiempo) {
    switch(dia){
        case 7:
            validarHorario(reservacionLunes, horario, tiempo)            
            validarTiempo(reservacionLunes, horario, tiempo)
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        default:
            console.log("Dia Invalido")
    }
}

function validarHorario(dia, horario, tiempo){
    for(let i=0; i<dia.length; i++){
        if(dia[i][0] == horario){
            console.log("Horario ocupado")
        }
    }

}

function validarTiempo(dia, horario, tiempo){
    let sumaLunes = 0
    for(let i = 0; i < dia.length; i++) { 
        sumaLunes += dia[i][1] 
    }
    if(sumaLunes <= 11){
        registrarDatos(dia, horario, tiempo)
    }else{
        console.log("no hay reservaciones disponible el dia lunes")
    }
}

function registrarDatos(){
    switch(dia){
        case 7:
            reservaciones.push([reservacionDia, reservacionHora ,reservacionTiempo]);
            break;
        case 8:
            reservaciones.push([reservacionDia, reservacionHora ,reservacionTiempo]);
            break;
        case 9:
            reservaciones.push([reservacionDia, reservacionHora ,reservacionTiempo]);
            break;
        case 10:
            reservaciones.push([reservacionDia, reservacionHora ,reservacionTiempo]);
            break;
        case 11:
            reservaciones.push([reservacionDia, reservacionHora ,reservacionTiempo]);
            break;
    }

}
/*


let diaL, diaM, diaMi , diaJ, diaV = 11




console.log(reservaciones)*/