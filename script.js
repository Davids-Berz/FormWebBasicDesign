//(function(){
	let formulario =  document.getElementById('formulario');
	let error =  document.getElementById('error');
	let nombre = formulario.nombre;
	let correo = formulario.email;
	let sexo = formulario.sexo;
	let terminos = formulario.terminos;

	// COMPROBAR QUE EL FORMULARIO NO VAYA VACIO
	formulario.addEventListener('submit', validarFormulario);


	// FUNCION VALIDADORA
	function validarFormulario(e){
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}


	// FUNCION PARA VALIDAR NOMBRE
	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null) {
			// code
			console.log('No se aceptan campos vaciós');
			error.style.display = 'block';
			error.innerHTML += '<li>Complete el campo nombre</li>';
			e.preventDefault(); // EVITA QUE EL FORMULARIO SE ENVIE AUN ESTANDO VACIÓ
		}else{
			error.style.display = 'none';
		}
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null) {
			// code
			console.log('No se aceptan campos vaciós');
			error.style.display = 'block';
			error.innerHTML += '<li>Complete el campo correo</li>';
			e.preventDefault(); // EVITA QUE EL FORMULARIO SE ENVIE AUN ESTANDO VACIÓ
		}else{
			error.style.display = 'none';
		}
	}

	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null) {
			// code
			console.log('No se aceptan campos vaciós');
			error.style.display = 'block';
			error.innerHTML += '<li>Selecciona un sexo</li>';
			e.preventDefault(); // EVITA QUE EL FORMULARIO SE ENVIE AUN ESTANDO VACIÓ
		}else{
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false) {
			// code
			console.log('No se aceptan campos vaciós');
			error.style.display = 'block';
			error.innerHTML += '<li>Acepte los terminos</li>';
			e.preventDefault(); // EVITA QUE EL FORMULARIO SE ENVIE AUN ESTANDO VACIÓ
		}else{
			error.style.display = 'none';
		}
	}
//})();