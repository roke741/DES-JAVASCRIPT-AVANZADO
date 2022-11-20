function f01(){
    var nombre = document.getElementById("txtNombre").value;
    var categoria = document.getElementById("categoria").value;
    var anio = document.getElementById("txtAnio").value;
    var sueldo = 0;
    var bonificacion = 0;
    var total= 0;

    if(categoria == 1){
        sueldo = 5000;
    }else if(categoria == 2){
        sueldo = 4500;
    }else if(categoria == 3){
        sueldo = 3000;
    }
    if(anio > 10 ){
        bonificacion = sueldo * 0.1;
    }
    total  = sueldo + bonificacion;
    alert("El empleado "+nombre+" tiene un sueldo de "+total);

}