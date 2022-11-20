export class Animal{
    nombre;
    constructor(nombre){
        this.nombre = nombre;
    }
    speak(){
        alert(this.nombre + " hace ruido.")
    }
    
}

//export default Animal