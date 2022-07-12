'use strict'

//parametros de rest y spread

function listadoFrutas(fruta1, fruta2, ...restodefrutas){
    
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log(restodefrutas);

     
}

listadoFrutas("Naranja", "Manzana", "sandia", "Papaya", "melocoton");


//spread
var fruta = ["Naranja", "Manzana"];

listadoFrutas(...fruta, "sandia", "peras", "Melon", "Coco" )









