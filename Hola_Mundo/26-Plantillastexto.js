'use strict'

var nombre = prompt ("ingresa tu nombre");
var apellidos = prompt ("ingresa tus apellidos");

//var texto = "Mi nombre es: " + nombre + "<br/>Mis nombres son: " +apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis Apellidos son:  ${apellidos}</h3>


`;

document.write(texto);















