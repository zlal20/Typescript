"use strict";
// se crea una variable  usuario de la clase principal
//se hace referencia a los atributos y se les asigna un valor para inicializarlo 
var usuario1 = { nombreUsuario: "Eduardo", password: "qweq" };
//se imprime la informacion
console.log(usuario1);
//se imprime un campo especifico
console.log(usuario1.nombreUsuario);
// variable de la interfaz abordar
var avion = {
    //funcion para imprimir 
    abordarTransporte: function () {
        console.log("abordado");
    }
};
//se manda a llamar al metodo 
avion.abordarTransporte();
