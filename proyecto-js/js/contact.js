$(document).ready(function(){
	
	$("form input[name='date']").datepicker({
		dateFormat: 'dd-mm-yy'
	});

	$.validate({
    	lang: 'es',
    	errorMessagePosition: 'top',
    	scrollToTopOnError: true
  	});

})