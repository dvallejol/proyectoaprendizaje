'use strict'

var numero = 444;
var texto1 = "Bienvenidos al mundo al viva al";
var texto2 = "Es muy buen curso";

var dato = numero.toString();

console.log(typeof dato);

//convertir de minuscula a mayuscula


document.write(texto1.toUpperCase()+ "<br>"); 

document.write(texto2.toLowerCase());

//calcular longitud

var nombre =  "Colombia";



console.log(nombre.length);

//concaternar o unir textos

//var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat( " " + texto2);



console.log(textoTotal);


//busquedas dentro de una cadena de texto

var busqueda = texto1.indexOf("al");
console.log(busqueda);

var busqueda1 = texto1.lastIndexOf("al");
console.log(busqueda1)

var busqueda3 = texto1.search("al");
console.log(busqueda3);

var busqueda4 = texto1.match(/al/g);
console.log(busqueda4);

var busqueda5 = texto1.substr(12, 2);
console.log(busqueda5);

var busqueda6 = texto1.charAt(8);
console.log(busqueda6);

var busqueda7 = texto1.startsWith("Bi");
console.log(busqueda7);

var busqueda8 = texto1.endsWith("al");
console.log(busqueda8);

var busqueda9 = texto1.includes("mundo");
console.log(busqueda9);

var busqueda10 = texto1.replace("viva", "muerte" );
console.log(busqueda10);

var busqueda11 = texto1.slice(14, 22);
console.log(busqueda11);

var busqueda12 = texto1.split(" ");
console.log(busqueda12);

var busqueda13 = texto1.trim();
console.log(busqueda13);













