function Empleado(id,nombre, nroseguro, salario, estado) {
    this.id = id;
    this.nombre = nombre;
    this.nroseguro = nroseguro;
    this.salario = salario;
    this.estado = estado;
}
// crear objeto persona
var empleado = new Empleado(1, "Jorge", 100, 1500, true);
// mostrar objeto persona
console.log(empleado);