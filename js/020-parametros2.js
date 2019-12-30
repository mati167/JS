'use strict'

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log("resto de frutas: ",resto_de_frutas);
}

var frutas = ["manzana","Naranja"];
listadoFrutas(...frutas,"manzana","sandia","pera");