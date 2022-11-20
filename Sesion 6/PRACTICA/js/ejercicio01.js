/* function f01(){
    var nombre = document.getElementById("nombre").value;
    var tipo = document.querySelector("input[name=txtRadio]:checked").value;

    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    var nota5 = Number(document.getElementById("nota5").value);
    var promedio = 0;
    var promedioEsp = 0;

    if(tipo == 1){
        promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
        alert("Alumno "+nombre+" su promedio es "+promedio);
    }else{
        let notas = [nota1, nota2, nota3, nota4, nota5];
        //console.log(notas)
        let minNota = Math.min.apply( null, notas)
        promedio = ((nota1 + nota2 + nota3 + nota4 + nota5) - minNota)/ 4;
        alert("Alumno "+nombre+" su promedio es "+promedio);
    }
}
 */
function validar(){
    var nombre = document.getElementById("nombre").value;
    if(nombre == "" || nombre == null){
        alert("Debe ingresar un nombre");
        return false;
    }
     //validar que el nombre no sea numero.
     if(!isNaN(nombre)){
        alert("El nombre no puede ser un numero");
        return false;
    }
    //validar que el nombre no tenga numeros.
    if(nombre.match(/\d+/g)){   
        alert("El nombre no puede tener numeros");
        return false;
    }
    //validar que el nombre no tenga caracteres especiales.
    if(nombre.match(/[^a-zA-Z0-9]/g)){
        alert("El nombre no puede tener caracteres especiales");
        return false;
    }
    var tipo = document.getElementById("cboTipo").selectedIndex;
    if(tipo == null || tipo == 0){
        alert("Debe seleccionar un tipo de alumno");
        return false;
    }
    return true;
}

function mostrarNota(nota, label){
    var nostrarnota = document.getElementById(nota).value;
    document.getElementById(label).innerHTML = nostrarnota;
}

function calcularPromedio(){

    var nombre = document.getElementById("nombre").value;
    var res = document.getElementById("respuesta")

    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    var nota5 = Number(document.getElementById("nota5").value);

    var tipo = document.getElementById("cboTipo").selectedIndex;
    
    var promedio = 0;


    if(tipo == 1){
        promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
        res.innerHTML = "Alumno "+nombre+" su promedio es "+promedio;
        //alert("Alumno "+nombre+" su promedio es "+promedio);
    }else{
        let notas = [nota1, nota2, nota3, nota4, nota5];
        //console.log(notas)
        let minNota = Math.min.apply( null, notas)
        promedio = ((nota1 + nota2 + nota3 + nota4 + nota5) - minNota)/ 4;
        res.innerHTML = "Alumno "+nombre+" su promedio es "+promedio;
        //alert("Alumno "+nombre+" su promedio es "+promedio);
    }
}