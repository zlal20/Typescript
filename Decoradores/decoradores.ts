
function saludar(tarjet: Function):void{

tarjet.prototype.saludos = function():void{
    console.log("jeje salud2");
    }
}



@saludar

class js{

    constructor(){}

}



let holas = new Hola();

holas.saludos();