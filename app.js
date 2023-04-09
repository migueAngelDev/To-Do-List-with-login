const itemsContainer = document.getElementById("list-items");
const agregarTarea = document.getElementById("submit");
const msgError = document.getElementById("msg-error");

agregarTarea.addEventListener("click", function (e) {
	e.preventDefault();

	const campoTitulo = document.getElementById("titulo").value;
	const campoTarea = document.getElementById("text").value;
	const datosEncontrados = JSON.parse(localStorage.getItem("tarea"));
	const items = datosEncontrados ? [...datosEncontrados] : [];
	const campos = {
		titulo: campoTitulo,
		texto: campoTarea,
	};

	if (!campoTarea || !campoTitulo) {
		const msg = document.createElement("p");
		msg.innerHTML = "Error, el campo necesita tener algo";
		msgError.appendChild(msg);
		setTimeout(() => {
			msgError.removeChild(msg);
		}, 3000);
	} else {
		items.push(campos);
		localStorage.setItem("tarea", JSON.stringify(items));

		const wrapper = document.createElement("li");
		wrapper.classList.add("wrapper");
		itemsContainer.appendChild(wrapper);

		const containerTitle = document.createElement("section");
		containerTitle.classList.add("container-title");
		wrapper.appendChild(containerTitle);

		const titulo = document.createElement("h2");
		titulo.innerHTML = campos.titulo;
		containerTitle.appendChild(titulo);

		const containerText = document.createElement("section");
		containerText.classList.add("container-text");
		wrapper.appendChild(containerText);

		const text = document.createElement("p");
		text.innerHTML = campos.texto;
		containerText.appendChild(text);
	}

	console.log(items);
});

window.addEventListener("load", function () {
	const datosEncontrados = JSON.parse(localStorage.getItem("tarea"));
	if (!datosEncontrados) {
		const containerEmpty = document.createElement("section");
		msgError.appendChild(containerEmpty);
		msgError.classList.add("error-container-empty");

		const msgContainerEmpty = document.createElement("p");
		msgContainerEmpty.innerHTML = "No tienes ninguna tarea por el momento.";
		containerEmpty.appendChild(msgContainerEmpty);
	} else {
		const items = [...datosEncontrados];

		items.forEach((campos) => {
			const wrapper = document.createElement("li");
			wrapper.classList.add("wrapper");
			itemsContainer.appendChild(wrapper);

			const containerTitle = document.createElement("section");
			containerTitle.classList.add("container-title");
			wrapper.appendChild(containerTitle);

			const titulo = document.createElement("h2");
			titulo.innerHTML = campos.titulo;
			containerTitle.appendChild(titulo);

			const containerText = document.createElement("section");
			containerText.classList.add("container-text");
			wrapper.appendChild(containerText);

			const texto = document.createElement("p");
			texto.innerHTML = campos.texto;
			containerText.appendChild(texto);
		});
	}
});
