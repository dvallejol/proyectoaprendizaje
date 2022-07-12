
'use strict'

//tabla de multiplicar de un numero introduccido por pantalla

//var number = parseint (prompt("introduce el numero", 0));


var number = parseInt (prompt("introduce el numero", 0));

var contador = 0

document.write("<h1> Tabla del " + number + "</h1>")
for(var i = 1; i <= 10; i++){
  contador = number * i
  document.write(number + " x " + i + "=" + contador +"<br>")
}