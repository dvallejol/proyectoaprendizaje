'use strict'

//funciones dentro de otras

function porConsola(numero1, numero2){
    console.log("suma:" + (numero1 + numero2));
    console.log("resta:" + (numero1 - numero2));
     
}

function porPantalla(numero1, numero2){

    document.write("suma:" + (numero1 + numero2)+ "<br>");
      document.write("resta:" + (numero1 - numero2)+ "<br>");

}



function Calculadora1(numero1, numero2, mostrar = false){ //parametros opcionales
    //return "Hola soy la calculadora";
    
    if(mostrar == false){
        porConsola(numero1, numero2)
    }else{
      
        porPantalla(numero1, numero2)
  
    }

    return true;
    
  
}



Calculadora1(3,5, true)
Calculadora1(7, 3, true)