

//creamos la clase principal
class Persona{



    //si es tipo private se debe crear un metodo para acceder a sus atributos
   
   
    //si es publica directamente se manda a imprimir 
    //nombres:string
   
  
    //atributo de la clase
    private nombres:string


    //inicializa los atributos el constructor 
    constructor(nombres:string){

    this.nombres = nombres;

    }

    //metodo para acceder a la clase 
    getNombre():string{

        return this.nombres;
    }

    //metodo estatico definido
    static Metodostatico():number{

        return 12;


    }

}


//creamos un objeto de la clase persona y asignamos valor 
let persona1 = new Persona ("jose");
console.log(persona1.getNombre());

//se imprime con nombre de la clase y el nombre del metodo estatico definido
console.log(Persona.Metodostatico());



//si fuera publica se usa este
//console.log(persona1.nombres);