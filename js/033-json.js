'use strict'

// JSON
window.addEventListener('load', ()=>{

var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'USA'
};

var peliculas = [
	{titulo: "joker", year: "2019", pais: "usa" },
	pelicula
];


var caja_peliculas = document.querySelector("#peliculas")
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo +" - " +peliculas[index].year);
	caja_peliculas.append(p);
};
});