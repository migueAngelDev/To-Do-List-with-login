const REGISTER_FORM = document.getElementById("register-form");
const REGISTER_NAME = document.getElementById("name");
const REGISTER_LASTNAME = document.getElementById("apellidos");
const REGISTER_EMAIL = document.getElementById("email");
const REGISTER_PASSWORD = document.getElementById("password");
const REGISTER_SUBMIT = document.getElementById("submit-register");

REGISTER_SUBMIT.addEventListener("click", function (e) {
	e.preventDefault();

	const campoName = REGISTER_NAME.value;
	const campoLastName = REGISTER_LASTNAME.value;
	const campoEmail = REGISTER_EMAIL.value;
	const campoPassword = REGISTER_PASSWORD.value;

	if (!campoName || !campoLastName || !campoEmail || !campoPassword) {
		alert("Por favor, rellena los campos");
	} else {
		const usuariosEncontrados = JSON.parse(
			localStorage.getItem("usuarios")
		);
		const usuariosRegistrados = !usuariosEncontrados
			? []
			: [...usuariosEncontrados];

		const camposUsuario = {
			nombre: campoName,
			apellidos: campoLastName,
			email: campoEmail,
			password: campoPassword,
		};

		usuariosRegistrados.push(camposUsuario);

		localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
		// console.log(usuariosRegistrados);
		alert(
			"Registro completo, ya tienes una cuenta, ahora incia sesión en el login"
		);
		window.location.href = "./login.html";
	}
	REGISTER_FORM.reset();
});
