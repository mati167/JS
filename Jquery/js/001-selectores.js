$(document).ready(function(){    //JQuery == $
	
	//selector de ID
	var rojo = $("#rojo").css("background","red")
						.css("color","white")
	var amarillo = $("#amarillo").css("background","yellow")
								.css("color","green")
	$("#verde").css("background","green")
				.css("color","pink")


	//selectores de clases

	var mi_clase = $(".zebra").css("padding","5px")

	$(".sin_borde").click(function(){
		console.log("CLICKKK")
		var selector = $(this);
		if(selector.hasClass('zebra'))
			selector.removeClass('zebra')
		else
			selector.addClass('zebra')
	})

	//selectores de etiquetas

	var  parrafos = $('p').css("cursor","pointer")

	/*
	parrafos.click(function(){
		$(this).removeClass
	})*/


	//selectores de atributo

	$('[title="google"]').css('background',"#ccc");
	$('[title="stackoverflow"]').css('background',"orange")

	//otros
//	$('p,a').addClass('margen_superior');

	var busqueda =  $('#caja').find('.resaltado')  // $("#caja .resaltado")
	console.log(busqueda) 

})