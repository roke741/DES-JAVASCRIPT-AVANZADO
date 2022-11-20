/*Genera una fecha de navidad y averigua cuantos dias faltan para que llegue esa fecha este año. */

const fecha = new Date();
console.log(fecha.getDate(), fecha.getMonth()+1 , fecha.getFullYear());
let dia = fecha.getDate()
let mes = fecha.getMonth() +1
let ano = fecha.getFullYear()

const fechaNavidad = new Date('12 25 2022');
console.log(fechaNavidad)
let diaNavidad = fechaNavidad.getDate()
let mesNavidad = fechaNavidad.getMonth() + 1
let anoNavidad = fechaNavidad.getFullYear()

if(mesNavidad == mes ){
    let diasRestante = diaNavidad - dia 
    console.log(diasRestante)
}else{
    let mesesRestante = (mesNavidad-mes) //* diasEnUnMes(mesNavidad, anoNavidad)
    let diasRestante = 0
    for(let i = 0; i < mesesRestante; i++){
        diasRestante = diasEnUnMes(ano, i)
        console.log(diasRestante)
    }
    let diasR = diaNavidad - dia 
    console.log(diasR)
    console.log("dias faltantes para navidad ", diasRestante + diasR)
}

function diasEnUnMes(mes, año) {
	return new Date(año, mes, 0).getDate();
}


/*let fechaActual = new Date();
let navidad = new Date(fechaActual.getFullYear(),11,25);
let dias = (navidad.getTime() - fechaActual.getTime())/(1000*60*60*24);
console.log("Faltan " + dias + " dias para navidad"); */