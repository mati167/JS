$(document).ready(function(){

	var theme = $("#theme")

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css")
	});	

	$("#to-green").click(function(){
		theme.attr("href","css/green.css")
	})

	$("#to-red").click(function(){
		theme.attr("href","css/red.css")
	});
	$("#to-k").click(function(){
		theme.attr("href","css/k.css")
	});
	$("#to-yellow").click(function(){
		theme.attr("href","css/yellow.css")
	});

	


	//scroll arriba de la web

	$(".subir").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},500);

		return false;
	});
})