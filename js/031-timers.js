'use strict'

window.addEventListener('load',()=>{
	//timers

	function intervalo(){
		var tiempo = setInterval(function(){ //setTimeout [una sola vez]
		console.log("set interval ejecutado");
		var encabezado = document.querySelector("h1");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px"
		}else{
			encabezado.style.fontSize = "50px";
		}
		
	},500);
		return tiempo;
	}
	
var tiempo = intervalo();
var stop = document.querySelector("#stop");

stop.addEventListener("click",function(){
	alert("HAS PARADO EL BUCLE");
	clearInterval(tiempo);

});

var start = document.querySelector("#start");
start.addEventListener("click",function(){
	alert("HAS iniciado EL BUCLE");
	intervalo();

})

})