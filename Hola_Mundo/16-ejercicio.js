'use strict'

/*Hacer un programa  si un numero es par o impar 
1.ventana prompt
2. si no es valido que nos pida de nuevo el numero
*/

var number = parseInt (prompt("introduce el numero", 0));


while (isNaN(number)){
    var number = parseint (prompt("introduce el numero", 0));
}

if((number % 2 == 0)){

    alert("el numero es par")
}else{
    alert("el numero es impar")
}
