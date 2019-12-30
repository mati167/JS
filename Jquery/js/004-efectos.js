$(document).ready(function(){
	
	var caja = $("#caja");

	caja.hide();
	$("#ocultar").hide();

	$("#mostrar").click(function(){
		$(this).hide()
		$("#ocultar").show()
		caja.fadeTo('slow',.8);
	})
	$("#ocultar").click(function(){
		$(this).hide()
		$("#mostrar").show()
		caja.fadeTo('slow',.1);
	})

	$("#todo").click(function(){
		caja.slideToggle('slow',function(){
			console.log("Abrir")
		}); 
	})

	$("#animar").click(function(){
		caja.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '100px'
			},
			'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		}, 'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		}, 'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		}, 'slow')
	})

  
})