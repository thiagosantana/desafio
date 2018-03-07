(function() {
	console.log("Module ok");
	ajax.onload = function() {
		if (ajax.status == STATUS_OK) {
			let result = document.getElementById("result");
		}
	};
	let btn_permuta = document.getElementById("permut");
	let txt_number = document.getElementById("number");
	txt_number.onkeypress = event => {
		//apenas numeros
		return event.charCode >= 48 && event.charCode <= 57;
	};
	btn_permuta.onclick = () => {
		let currentValue = txt_number.value;
		ajax.send("number=" + currentValue);
	};
})();
