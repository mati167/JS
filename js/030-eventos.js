'use strict'

//eventos del mouse

window.addEventListener('load', ()=>{



function cambiarColor(){
	var bg = boton.style.background	;
	if(bg == "green"){
		boton.style.background = "red";
		
	}else
	boton.style.background = "green";

	boton.style.padding = "10px";
		boton.style.border = "1px solic #ccc";
	return true;
	
}


var boton = document.querySelector("#boton");
//boton.addEventListener('click',function(){cambiarColor();})

//Click

boton.addEventListener('click',function(){
	cambiarColor();
	console.log("lleGUE")
	console.log(this);
	this.style.border = " 1000px Blue";
});


//mouse over

boton.addEventListener('mouseover',function(){
	boton.style.background = 'yellow'; 
});

//mouseout
boton.addEventListener('mouseout',function(){
	boton.style.background = '#ccc'; 
});

//focus

var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
	console.log("estas haciendo focus en el input"); 
});

//blur
var input = document.querySelector("#campo_nombre");
input.addEventListener('blur',function(){
	console.log("estas fuera en el input"); 
});

//keydown

input.addEventListener('keydown',function(){
	console.log("[Key Down] pulsando esta tecla",String.fromCharCode(event.keyCode)); 
});


//keypress

input.addEventListener('keypress',function(){
	console.log("[Key Pess]tecla presionada",String.fromCharCode(event.keyCode)); 
});


//keyup

input.addEventListener('keyup',function(){
	console.log("[Key Up] tecla levantada",String.fromCharCode(event.keyCode)); 
});

}) //end load



