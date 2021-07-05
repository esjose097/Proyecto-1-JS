'use estrict'
$(document).ready(function(){
	//Slider
	/*Condición que se encarga de comprobar si se encuentra en la página de index*/
	if(window.location.href.indexOf('index')> -1)
	{
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200    
	  });
	}

	if(window.location.href.indexOf('index')> -1)
	{
		//Post con Json mostrados de manera dínamica
		var post = [
			{
				title: "Prueba de titulo #1",
				date: "Publicado el: "+ moment().format("MMMM DD YYYY"),
				content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
			},
			{
				title: "Prueba de titulo #2",
				date: "Publicado el: "+ moment().format("MMMM DD YYYY"),
				content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
			},
			{
				title: "Prueba de titulo #3",
				date: "Publicado el: "+ moment().format("MMMM DD YYYY"),
				content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
			},
			{
				title: "Prueba de titulo #4",
				date: "Publicado el: "+ moment().format("MMMM DD YYYY"),
				content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
			},
			{
				title: "Prueba de titulo #5",
				date: "Publicado el: "+ moment().format("MMMM DD YYYY"),
				content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
			}
		];

		//Se se recorre el Json
		post.forEach((item,index) =>{
		//Se crea una plantilla mediante los datos de Json.
			let post = `
			<article class = "post">
				<h2>${item.title}</h2>
				<span class="fecha">${item.date}</span>
				<p>${item.content}</p>
				<a href = "#" class="buttom-more">Leer más</a>
			</article>
			`;
		//Se agrega la plantilla a la página o al DOM.
			$("#post").append(post);
		});
	}
	//Selector de tema
	var theme = $("#tema");

	//Cambia el tema a verde.
	$("#to-green").click(()=>{		
		theme.attr("href","css/greenTheme.css");
	});
	//Cambia el tema a rojo.
	$("#to-red").click(()=>{		
		theme.attr("href","css/redTheme.css");
	});
	//Cambia el tema a azul.
	$("#to-blue").click(()=>{		
		theme.attr("href","css/blueTheme.css");
	});

	//Scroll que va hacia arriba de la página
	$(".subir").click((e)=>{
		e.preventDefault()	
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	//Login falso con el localStorage
	$("#login").submit(()=>{
		let nombre = $("#form_name").val();
		localStorage.setItem("form_name", nombre);		
	});	
	
	var userName = localStorage.getItem("form_name");
	if(userName != null && userName != "undefined")
	{		
		let aboutP = $("#about p");
		aboutP.html("<strong>Bienvenido "+userName+"</strong>");
		aboutP.append('<a href="#" id="logout">Cerrar sesión </a>');
		$('#login').hide();

		$('#logout').click(()=>{
			localStorage.clear();
			location.reload();
		});
	}

	//Uso del acordeon
	if(window.location.href.indexOf('about')> -1)
	{
		$('#acordeon').accordion();
	}

	//Uso del moment.js para crear el reloc dinamico
	if(window.location.href.indexOf('reloc')> -1)
	{
		setInterval(()=>{
		let reloc = moment().format("hh:mm:ss");
		$("#reloc").html(reloc);
		},1000);
	}
	if(window.location.href.indexOf('contact') > -1)
	{
		$("form input[name='bday']").datepicker();

		$.validate({
			lang: 'es'
		});
	}

});