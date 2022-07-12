'use strict'

//condicional if

//si a es igual a b entonces haz algo 

//si pasa esto 

var edad1 = 30
var edad2 = 15

if(edad1 > edad2){
 //ejecuta esto
 console.log('edad es mayor que edad dos')
}else{
    console.log('edad uno es inferior')
}

//determinar si es mayor de edad

var edad = 50

//edad = 15


var nombre = 'David Suarez'

if(edad >= 18)
{
  document.write(nombre + ' Es mayor de edad')
  if(edad <= 33){
      console.log('todavia eres milenial')
  }else if(edad >= 70){
      console.log('Eres anciano')
  }else{
      console.log('Ya no eres milenial')
  }
}else{
    console.log(nombre + ' Es menor de edad')
}

var year = 2018

//Negacion
if(year !=2016){
    console.log('El año no es realmente 2016: '+ year)
}

//and

if(year >= 2000 && year <=2020 && year != 2018){
    console.log("Estamos en la era actual")
}else{
    console.log('estamos en la era postmoderna')
}

//or
if(year == 2008 || (year == 2018 && year == 2018 )){
    console.log('El año acaba en 8')
}else{
    console.log('anio no registrado ')
}