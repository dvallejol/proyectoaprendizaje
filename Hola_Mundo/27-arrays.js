'use strict'

var nombres = "victor robles"; //una varible solo almacena un solo valor
var nombre = ["Victor robles", "Juan Lopez", "Manolo Garcia", "Jose", 52, true]//arreglo varios datos dentro de una misma variable

//instanciar un objeto array

var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombre  [5]);


//recorro el arreglo

for(var i=0; i<6;i++)
{
    console.log(nombre  [i] );
}


// longitud de un array
console.log(nombre.length);

var elemento = parseInt (prompt("Que elemento quieres??", 0));

if (elemento >= nombre.length){
  alert("el valor solo de 0 a 5");
}else{
  alert (nombre [elemento]);
}

