const LOGIN_FORM = document.getElementById("login-form");
const LOGIN_EMAIL = document.getElementById("email");
const LOGIN_PASSWORD = document.getElementById("password");
const LOGIN_SUBMIT = document.getElementById("submit-login");

LOGIN_SUBMIT.addEventListener("click", function (e) {
	e.preventDefault();

	const email = LOGIN_EMAIL.value;
	const password = LOGIN_PASSWORD.value;

	if (!email || !password) {
		alert("Por favor, rellena los campos");
	} else {
		const usuarios = JSON.parse(localStorage.getItem("usuarios"));
		let usuarioEncontrado = null;

		if (usuarios) {
			console.log(usuarios);

			for (let i = 0; i < usuarios.length; i++) {
				if (
					usuarios[i].email === email &&
					usuarios[i].password === password
				) {
					usuarioEncontrado = usuarios[i];
					localStorage.setItem(
						"nameUsuario",
						JSON.stringify(usuarioEncontrado)
					);
					break;
				}
			}
			if (usuarioEncontrado) {
				// Permitir el inicio de sesión
				alert("Inicio de sesión exitoso");
				window.location.href = "./index.html";
			} else {
				// Mostrar mensaje de error
				alert("Credenciales de inicio de sesión inválidas");
			}
		} else {
			// Mostrar mensaje de error
			alert("Credenciales de inicio de sesión inválidas");
		}
	}

	LOGIN_FORM.reset();
});
