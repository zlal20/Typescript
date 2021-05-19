"use strict";
//creamos la clase principal
var Persona = /** @class */ (function () {
    function Persona(nombres) {
        this.nombres = nombres;
    }
    Persona.prototype.getNombre = function () {
        return this.nombres;
    };
    return Persona;
}());
//creamos un objeto de la clase persona 
var persona1 = new Persona("jose");
console.log(persona1.getNombre);
