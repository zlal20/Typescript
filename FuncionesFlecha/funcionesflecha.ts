

//funcion normal 
let suma = function(a:number, b:number){


    return a+b; 
}


console.log(suma(2,1));


//funcion flecha 

let sumaflecha = (a:number, b:number) => {
   return a+b;
}

//funcion flecha 2 simplificada 
let sumaflecha2 = (a:number, b:number) => a+b;


console.log(sumaflecha(2,1));

//funcion normal

var nombres = function(){

return "jose jose";

}
console.log(nombres);


//funcion flecha 
let obtenernombre = () => "jose jose2";
console.log(obtenernombre());