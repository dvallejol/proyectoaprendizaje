'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][0]);

/*for(var i = 0; i< cine.length; i++){
    for(var j = 0; j<= cine.length; j++){
        console.log(cine[i][j]);
    }
}*/

/*var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento); //AGREGAR UN NUEVO ELEMENTO AL ARRAY PUSH
}while(elemento != "ACABAR");

peliculas.pop(); //BORRA EL ULTIMO ELEMENTO DEL ARRAY

console.log(peliculas);*/

var indice = peliculas.indexOf('Gran torino');

if(indice > -1){
    peliculas.splice(indice, 1); //despues de encontrar el indice borra el valor de acuerdo a la cantida que se le pase
}

//convertir a un string separado por comas

var peliculas_string = peliculas.join();

console.log(peliculas);

//convertir una cadena de texto en un arreglo separdo por comas y espacios

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", "); //separadas por comas y espacios

console.log(cadena_array);

var orden = categorias.sort(); //ordenarlo por orden alfabetico ascendente

console.log(orden);

//ordenar en orden descendente

var orden2 = categorias.reverse(); // orden descendente

console.log(orden2);

