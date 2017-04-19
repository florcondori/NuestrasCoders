window.addEventListener("load",function(){
	var arrayImagenes = [{name:"Aida Sulca", url:"aida.png"},
						{name:"Angie Condor", url:"angie.png"},
						{name:"Maia Rojas", url:"maia.png"},
						{name:"Luz Milagros Gutierrez", url:"mimi.png"},
						{name:"Nakarid Jave", url:"naka.png"},
						{name:"Sandra Solorzano", url:"sandra.png"},];

	document.getElementById("contenedor").appendChild(cargarImagenes(arrayImagenes));
});

function cargarImagenes(array){
	var documentFragment = document.createDocumentFragment();
	var ruta = "assets/img/";
	array.forEach(function(elem){
		var divContenedor = document.createElement("div");
		divContenedor.classList.add("div-contenedor");
		var img = document.createElement("img");
		img.setAttribute("src", ruta+elem.url);
		img.setAttribute("alt", elem.name);
		var span = document.createElement("span");
		span.innerText = elem.name;

		divContenedor.appendChild(img);
		divContenedor.appendChild(span);

		documentFragment.appendChild(divContenedor);
	});

	return documentFragment;
}