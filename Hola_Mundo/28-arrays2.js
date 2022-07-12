'use strict'

var nombres = "victor robles"; //una varible solo almacena un solo valor
var nombre = ["Victor robles", "Juan Lopez", "Manolo Garcia", "Jose", 52, true]//arreglo varios datos dentro de una misma variable

//instanciar un objeto array

var lenguajes = new Array("PHP", "JS", "Go", "Java");


document.write("<h1> Lenguajes del programacion 2018</h1>");

/*for(var i = 0; i <lenguajes.length; i++){
    document.write("<ul><li>"+ lenguajes[i]+"</li></ul>")
}*/


//otra forma de recorrer el array

/*lenguajes.forEach((elemento, index, data)=>{
   //console.log(data);
   document.write("<li>"+index+"-"+elemento+"</li>");
});*/


 //otra forma de recorrer los arreglos

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

//Busquedas

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda);


//busquedas por indices

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);
