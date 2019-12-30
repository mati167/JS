'use strict'

//BOM - browser object model
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url)
}

getBom();

//redirect("https://google.com");


abrirVentana("https://google.com");