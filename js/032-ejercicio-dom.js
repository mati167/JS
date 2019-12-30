'use strict'

window.addEventListener('load',function(){
	console.log("DOM cargar");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit',function(){
		console.log("Evento submit capturando");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = document.querySelector("#edad").value;

		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("el nombre no es valido");
			return false;
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("el apellido no es valido");
			return false;
		}

		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("la edad no es valida");
			return false;
		}



		box_dashed.style.display = "block";


/*
		var datos_usuarios= [nombre, apellidos, edad]

		var indice;
		for(indice in datos_usuarios){
			var parrafo = document.createElement("p")
			parrafo.append(datos_usuarios[indice]);
			box_dashed.append(parrafo);	
		}	
		*/

		var p_nombre = document.querySelector("#p_nombre")
		var p_apellidos = document.querySelector("#p_apellidos")
		var p_edad = document.querySelector("#p_edad")

		p_nombre.innerHTML = nombre;	
		p_apellidos.innerHTML = apellidos;	
		p_edad.innerHTML = edad;		
	})
});