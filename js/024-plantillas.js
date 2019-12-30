'use strict'

//plantillas de texto

var nombre = prompt("INGRESE NOMBRE");
var apellido = prompt("INGRESE APELLIDO");

//var texto = "Mi nombre es: "+nombre+"<br/>mi apellido es: "+apellido;
var texto = `
			<h1>Hola</h1>
			<h3>Mi nombre es: ${nombre}</h3>
			<h3>Mi apellido es: ${apellido}</h3>	
`;
document.write(texto); 
