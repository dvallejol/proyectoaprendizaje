'use strict'

/*
utilizando un bucle, mostrar la suma y la media de los numeros introducccidos
hasta introduccir un numero negativo

*/
var contador = 0;

var suma = 0;

do{
    var numero1 = parseInt(prompt('Introduce numeros hasta que ingreses uno negatvio:',0))
    if(isNaN(numero1)){
        numero1 = 0
    }else if(numero1 >= 0){
        suma +=numero1
        contador ++
    }

}while(numero1 >=0)

alert("la suma de todos los numeros es: "+ suma)

alert ("el promedio es: "+ suma/contador)
