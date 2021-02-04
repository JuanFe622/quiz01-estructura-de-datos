function capturarInformacionUsuario() {
	let firstUserName = document.getElementById('first_user_name').value;
	let lastUserName = document.getElementById('last_user_name').value;
	let emailUser = document.getElementById('email_user').value;
	let numberUser = document.getElementById('number_user').value;
	let addressUser = document.getElementById('address_user').value;
	let optionalAddressUser = document.getElementById('optionalAddress_user').value;

	

	document.getElementById("out0").innerHTML = "Los datos ingresados por el usuario fueron:";
	document.getElementById("out1").innerHTML = "  i. Nombre completo:     " + firstUserName  + " " + lastUserName;
	document.getElementById("out2").innerHTML = " ii. Correo Electrónico:  " + emailUser;
	document.getElementById("out3").innerHTML = "iii. Número de contacto:  " + numberUser;
	document.getElementById("out4").innerHTML = " iv. Dirección Casa:      " + addressUser;
	document.getElementById("out5").innerHTML = "  v. Dirección opcional:  " + optionalAddressUser;
}