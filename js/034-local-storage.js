'use strcit'


//local storage


window.addEventListener('load', ()=>{

//comprobar disponibilidad

if(typeof(Storage) != 'undefined'){
	console.log("local storage disponible");
}else
 	console.log("incopatible");

//guardar

localStorage.setItem("titulo","la parte que no es key")

//recuperar

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos

var usuario = {
	nombre: "matias",
	email: "asd@asd.com",
	web: "https://www.google.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario))


//recuperar objeto

var user = JSON.parse(localStorage.getItem("usuario"));
document.querySelector("#peliculas").append(" "+user.web+" "+user.nombre)

console.log(user)


localStorage.removeItem("usuario");

localStorage.clear();

});