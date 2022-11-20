function f01(){
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