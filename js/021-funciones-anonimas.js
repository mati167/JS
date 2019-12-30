'use strict'

//funcion anonima
//funcion que no tiene nombre

var pelicula = function(nombre){
	return "la pelicula es: "+ nombre;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return  sumar;
}


sumame(5,7,dato =>{ //dato=> es lo mismo que function(dato)
	console.log("La suma es: ", dato)
},
function(dato){
	console.log("la suma por dos es: ",(dato*2))
});


