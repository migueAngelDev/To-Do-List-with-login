const saludar = document.getElementById("saludarUsuario");

const nameSaludo = JSON.parse(localStorage.getItem("nameUsuario"));

if (!nameSaludo) {
	const p = document.createElement("p");
	p.innerHTML = "Hola, desconocido";
	saludar.appendChild(p);
} else {
	const p = document.createElement("p");
	p.innerHTML = nameSaludo.nombre;
	saludar.appendChild(p);
}
