$(document).ready(function(){

	var theme = $("#theme")
	
	var abouts = [
			{
				key: 'blue',
				title: 'Wer bin ich?',
				img: 'img/hernan_feliz.jpg',
				content:'Ich bin nicht berechtigt zu antworten'
			},
			{
				key: 'green',
				title: "Quien soy?",
				img: 'img/hernan_feliz.jpg',
				content:'Soy el que mejor sabe gambetear la ley, al que todos en el barrio llaman <b>El Sensei</b>'
			},
			{
			
				key: 'red',
				title: "Quienes <b>somos</b>?",
				img: 'img/hernan_feliz.jpg',
				content:'No estoy autorizado a responder eso'
			},
			{
			
				key: 'yellow',
				title: "Quien soy?",
				img: 'img/hernan_feliz.jpg',
				content:'No estoy autorizado a responder'
			},				
		];

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css")
		abouts.forEach((item,index)=>{
			if(item.key == "blue"){

				var about =`
						<div id="about">
			 			<h4><span>${item.title}</span></h4>
						<img src="${item.img}">
						<p>${item.content}</p>
						</div>
						`
				$("#about").replaceWith(about);
			}
		})
	});	

	$("#to-green").click(function(){
		theme.attr("href","css/green.css")
		abouts.forEach((item,index)=>{
			if(item.key == "green"){
				var about =`
			 			<div id="about">
			 			<h4><span>${item.title}</span></h4>
						<img src="${item.img}">
						<p>${item.content}</p>
						</div>
						`
				$("#about").replaceWith(about);
			}
		})	})

	$("#to-red").click(function(){
		theme.attr("href","css/red.css")
		abouts.forEach((item,index)=>{
			if(item.key == "red"){

				var about =`
						<div id="about">
			 			<h4><span>${item.title}</span></h4>
						<img src="${item.img}">
						<p>${item.content}</p>
						</div>
						`
				$("#about").replaceWith(about);
			}
		})
	});
	$("#to-k").click(function(){
		theme.attr("href","css/k.css")

	});
	$("#to-yellow").click(function(){
		theme.attr("href","css/yellow.css")
		abouts.forEach((item,index)=>{
			if(item.key == "yellow"){

				var about =`
						<div id="about">
			 			<h4><span>${item.title}</span></h4>
						<img src="${item.img}">
						<p>${item.content}</p>
						</div>
						`
				$("#about").replaceWith(about);
			}
		})
	});

	


	//scroll arriba de la web

	$(".subir").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},500);

		return false;
	});


		/*abouts.forEach((item,index)=>{
			console.log(item.key);
			console.log(tema)
			if(item.key == tema){
				var about =`
			 			<h4><span>${item.title}</span></h4>
						<img src="${item.img}">
						<p>${item.content}</p>
						`
				$("#about").append(about);
			}
		})*/
		
			
		
		

	
})