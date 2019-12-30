$(document).ready(function(){
	
	//eventos mouseover y mouseout

	var caja = $('#caja');


	/*
	caja.mouseover(function(){
		$(this).css("background","red").css("transition","300ms all")
	})
	caja.mouseout(function(){
		$(this).css("background","blue").css("transition","300ms all")
	})
	*/
	function cambiaRojo(){
		$(this).css("background","red")
	}
	function cambiaAzul(){
		$(this).css("background","blue")
	}
	//hover
	caja.hover(cambiaRojo,cambiaAzul);

	//click, doble click

	caja.click(function(){
		$(this).css("background","pink")
				.css("color","grey")
	});

	caja.dblclick(function(){
		$(this).css("background","orange")
				.css("color","white");
	})

	//focus y blur
	var nombre= $('#nombre');
	var datos = $("#datos")

	nombre.focus(function(){
		$(this).css("border","2px solid green");
	})
	nombre.blur(function(){
		$(this).css("border","1px solid #ccc")

		datos.text($(this).val()).show();
	})


	//mousedown mouseup

	datos.mousedown(function(){
		$(this).css("border-color","brown")
	})

	datos.mouseup(function(){
		$(this).css("border-color","black")
	})


	//mousemove
	$(document).mousemove(function(){
		$('body').css("cursor","none")
		 $("#sigueme").css("left",event.clientX)
				.css("top",event.clientY)
	})

})