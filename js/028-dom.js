'use strict'

//DOM document object model

function cambiaColor(color){
	caja.style.background = color;
}

//conseguir elementos con un ID

//var caja = document.getElementById('micaja');
var caja = document.querySelector("#micaja");


caja.innerHTML = "CAMBIE DESDE JS"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

//console.log(caja);

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
/*
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "otro texto para el segundo";*/

//todosLosDivs.forEach((valor,indice)=>{
var valor;
for(valor in todosLosDivs){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.appendChild(texto);
		document.querySelector("#miseccion").appendChild(parrafo);
}//})

//console.log(contenidoEnTexto);

//conseguir elementos por su clase

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");


/*for (valor in divsRojos){
	if(divsRojos[valor].className == "rojo"){
		divsRojos[valor].style.background = "red";
}} */
//console.log(divsRojos);

for(valor in todosLosDivs){
	if(todosLosDivs[valor].className == "rojo"){
		todosLosDivs[valor].style.background = "red";
	}else if (todosLosDivs[valor].className == "amarillo"){
		todosLosDivs[valor].style.background = "yellow";
	}
}

//query selector

var id = document.querySelector("#encabezado");
console.log(id);

var etiqueta = document.querySelector(".rojo");
console.log(etiqueta)