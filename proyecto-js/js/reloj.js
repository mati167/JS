$(document).ready(function(){

	setInterval(function(){
		var reloj = moment().format("hh:mm:ss");
		$("#reloj").html(reloj);
	},1000);
	
});