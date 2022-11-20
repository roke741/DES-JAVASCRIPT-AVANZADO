class Animal{
    nombre;
    constructor(nombre){
        this.nombre = nombre;
    }
    speak(){
        console.log(this.nombre + " hace ruido.")
    }
}
Animal("perro")