'use strict'

//funciones
//Una funcione es una agrupacion reutilizable de un conjunto de instrucciones

function Calculadora(){
    //return "Hola soy la calculadora";
    console.log("Hola soy la calculadora");
    console.log("Si soy yo");
}


function Calculadora1(numero1, numero2, mostrar = false){ //parametros opcionales
    //return "Hola soy la calculadora";
    
    if(mostrar == false){
      console.log("suma:" + (numero1 + numero2));
      console.log("resta:" + (numero1 - numero2));
      //console.log(mostrar);
      console.log("****************************");
    }else{
      document.write("suma:" + (numero1 + numero2)+ "<br>");
      document.write("resta:" + (numero1 - numero2)+ "<br>");
      //document.write(mostrar);
      //document.write("****************************");
  
    }
    
  
}

/*for(var i = 1; i<= 10; i++){
  console.log (i)
  Calculadora1(i, 8);

}*/

//invocar o llamar la funcion
//var resultado = Calculadora();

Calculadora1(3,5, true)
Calculadora1(7, 3, true)

