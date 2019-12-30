$(document).ready(function(){

	reloadLinks();

	$('#add_button').click(function(){
		$('#menu').append('<a href="'+$("#add_link").val()+'"></a>');
		reloadLinks();
		/*append para agregar 
			html para borrar y escribir lo nuevo
			prepend para ponerlo al principio
			before al principio FUERA de la lista
		*/
	})


	
});
 
function reloadLinks(){
	$('a').each(function(index){
			var that = $(this);
			var enlace = $(this).attr("href");
			that.attr('target','_blank');
			that.text(enlace);
	})
}