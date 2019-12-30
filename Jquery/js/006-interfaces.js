$(document).ready(function(){

	//mover elemento
	$('.elemento').draggable();

	//redimencionar
	$(".elemento").resizable();

	//seleccionar
//	$(".lista").selectable();

	//ordenar

	$(".lista").sortable({
		update: function(event, ui){
			console.log(event)
		}
	});

	//drop
	$("#elemento_movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("has soltado")
		}
	});


	//efectos
	$("#mostrar").click(function(){
		$(".caja_efectos").fadeToggle(); 
	});

	//tooltip

	$(document).tooltip();

	//dialog
	$("#lanzar_popup").click(function(){
		$("#popup").dialog();
	})

	//datepicker
	$("#calendario").datepicker();

	//tabs
	$("#tabs").tabs();
});