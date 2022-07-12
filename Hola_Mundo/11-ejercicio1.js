'use strict'

/* 
 Programa que nos pida dos numero si es mayor, si es menor
 oh si es igual  

 Si los numeros no son un numero o iguales a cero, nos los vuelva a pedir que introduzcamos los datos


*/

    var numero1 = parseInt(prompt('Numero 1:',1))
    var numero2 = parseInt(prompt('Numero 2:',1))

    while(numero1 <=0 || numero2 <=0 || isNaN(numero1) ||isNaN(numero2)){
        
        numero1 = parseInt(prompt('Numero 1:',1))
        numero2 = parseInt(prompt('Numero 2:',1))
    }
  

console.log(numero1, numero2)


if(numero1 > numero2){
    console.log('es mayor numero 1')

    
}else if(numero1 == numero2){
    console.log('son iguales')
}else if (numero1 < numero2){
    console.log('es mayor el numero 2')
}
else{
    console.log('Introduce numeros correctos')
}
