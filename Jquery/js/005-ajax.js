$(document).ready(function(){

	//load

//	$("#datos").load("https://reqres.in")

	//Get y Post

	$.get("https://reqres.in/api/users",{page: 2},function(response){
		response.data.forEach((element,index)=>{
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>")
		})
	})

	

	

	$("#formulario").submit(function(e){
		e.preventDefault();

		var usuario = {
			name: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		};

		//console.log(usuario);

		$.post("https://reqres.in/api/users",usuario,function(response){
			console.log(response);
		})


		$.ajax({
			type: 'post',
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("enviando usuario");
			},
			succes: function(response){
				console.log(response);
			},
			error: function(){
				console.log("a ocurrido un error");
			},
			timeout: 2000
		})





		return false;

	})


})