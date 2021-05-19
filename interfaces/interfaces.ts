interface usuario{

nombreUsuario:string;
password:string;

//se usa el signo interrogacion para que sea opcional 
confirmarPassword?:string;



}


// se crea una variable  usuario de la clase principal
//se hace referencia a los atributos y se les asigna un valor para inicializarlo 
let usuario1:usuario = {nombreUsuario: "Eduardo", password:"qweq"};

//se imprime la informacion
console.log(usuario1);
//se imprime un campo especifico
console.log(usuario1.nombreUsuario);

interface Abordar{

    //metodo sin retornar nada
    abordarTransporte():void



}

// variable de la interfaz abordar
let avion:Abordar = {

    //funcion para imprimir 
abordarTransporte: function() {
    console.log("abordado")



}


}

//se manda a llamar al metodo 
avion.abordarTransporte();