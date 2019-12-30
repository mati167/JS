$(document).ready(function(){

/*
	if(window.location.href.indexOf('index')> -1){
		$('.galeria').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200
		});

	}

	
	//posts

	if(window.location.href.indexOf('index')> -1){
		var posts = [
			{
				title: 'prueba de titulo 1',
				date: "Publicado el dia: " + moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, sem congue congue fermentum, neque odio sollicitudin dolor, eget lobortis neque mi in urna. Maecenas porta eget orci eget cursus. Suspendisse a quam rhoncus, lobortis metus et, suscipit urna. Aliquam lobortis diam eget erat scelerisque, a aliquet arcu pulvinar. Nullam dictum, nibh at lobortis consectetur, ex sapien venenatis sapien, ac iaculis nisl ipsum ac risus. Duis eget ex lacus. Etiam tristique massa quis tortor ultrices, quis vulputate lorem scelerisque. Sed efficitur lacus est, id efficitur odio semper nec. Nullam tincidunt metus nunc, facilisis dictum nulla rhoncus eget. Suspendisse ac purus tortor. Duis ac neque nunc. In hac habitasse platea dictumst. Pellentesque et fermentum nibh. Ut congue neque eget ultricies euismod. Maecenas ornare tempus urna. Pellentesque ornare tempor sapien, ut porta tortor finibus sit amet.'
			},
			{
				title: 'prueba de titulo 2',
				date: "Publicado el dia: " + moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, sem congue congue fermentum, neque odio sollicitudin dolor, eget lobortis neque mi in urna. Maecenas porta eget orci eget cursus. Suspendisse a quam rhoncus, lobortis metus et, suscipit urna. Aliquam lobortis diam eget erat scelerisque, a aliquet arcu pulvinar. Nullam dictum, nibh at lobortis consectetur, ex sapien venenatis sapien, ac iaculis nisl ipsum ac risus. Duis eget ex lacus. Etiam tristique massa quis tortor ultrices, quis vulputate lorem scelerisque. Sed efficitur lacus est, id efficitur odio semper nec. Nullam tincidunt metus nunc, facilisis dictum nulla rhoncus eget. Suspendisse ac purus tortor. Duis ac neque nunc. In hac habitasse platea dictumst. Pellentesque et fermentum nibh. Ut congue neque eget ultricies euismod. Maecenas ornare tempus urna. Pellentesque ornare tempor sapien, ut porta tortor finibus sit amet.'

			},
			{
				title: 'prueba de titulo 3',
				date: "Publicado el dia: " + moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, sem congue congue fermentum, neque odio sollicitudin dolor, eget lobortis neque mi in urna. Maecenas porta eget orci eget cursus. Suspendisse a quam rhoncus, lobortis metus et, suscipit urna. Aliquam lobortis diam eget erat scelerisque, a aliquet arcu pulvinar. Nullam dictum, nibh at lobortis consectetur, ex sapien venenatis sapien, ac iaculis nisl ipsum ac risus. Duis eget ex lacus. Etiam tristique massa quis tortor ultrices, quis vulputate lorem scelerisque. Sed efficitur lacus est, id efficitur odio semper nec. Nullam tincidunt metus nunc, facilisis dictum nulla rhoncus eget. Suspendisse ac purus tortor. Duis ac neque nunc. In hac habitasse platea dictumst. Pellentesque et fermentum nibh. Ut congue neque eget ultricies euismod. Maecenas ornare tempus urna. Pellentesque ornare tempor sapien, ut porta tortor finibus sit amet.'

			},
			{
				title: 'prueba de titulo 4',
				date: "Publicado el dia: " + moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, sem congue congue fermentum, neque odio sollicitudin dolor, eget lobortis neque mi in urna. Maecenas porta eget orci eget cursus. Suspendisse a quam rhoncus, lobortis metus et, suscipit urna. Aliquam lobortis diam eget erat scelerisque, a aliquet arcu pulvinar. Nullam dictum, nibh at lobortis consectetur, ex sapien venenatis sapien, ac iaculis nisl ipsum ac risus. Duis eget ex lacus. Etiam tristique massa quis tortor ultrices, quis vulputate lorem scelerisque. Sed efficitur lacus est, id efficitur odio semper nec. Nullam tincidunt metus nunc, facilisis dictum nulla rhoncus eget. Suspendisse ac purus tortor. Duis ac neque nunc. In hac habitasse platea dictumst. Pellentesque et fermentum nibh. Ut congue neque eget ultricies euismod. Maecenas ornare tempus urna. Pellentesque ornare tempor sapien, ut porta tortor finibus sit amet.'

			},
		];
		
		posts.forEach((item, index)=>{
			var post = `
				<article class="post">
							<h2>${item.title}</h2>
							<span class="date">${item.date}</span>
							<p>
							${item.content}
							</p>
							<a href="#" class="button-more">Leer Más</a>
						</article>

			`; 

		$("#posts").append(post);
		});
	};
	*/
	var theme = $("#theme")
	$("#to-green").click(function(){
		theme.attr("href","css/green.css")
	})

	$("#to-red").click(function(){
		theme.attr("href","css/red.css")
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css")
	});	


	//scroll arriba de la web

	$(".subir").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},500);

		return false;
	});

	//login falso

	$("#login form").submit(function(){
		var form_name =  $("#form_name").val();
		localStorage.setItem("form_name",form_name);
	});

	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined" ){
		var about_parrafo = $("#about p")
		about_parrafo.html("<br/><strong>Bienvenido "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
		$("#login").hide();
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
})