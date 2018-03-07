(function() {
	console.log("Module ok");
	let callback = data1 => {
		let permutacoes = JSON.parse(data1.currentTarget.response);
		console.log(permutacoes);
		for (permutacao in permutacoes.permutacoes) {
			criaElemento(permutacoes.permutacoes[permutacao], SUCESSO_STATUS);
		}
	};
	let btn_permuta = document.getElementById("permut");
	let txt_number = document.getElementById("number");
	let repeat = document.getElementById("repeat-option");
	txt_number.onkeypress = event => {
		//apenas numeros
		return event.charCode >= 48 && event.charCode <= 57;
	};
	btn_permuta.onclick = () => {
		let currentValue = txt_number.value;
		if (!currentValue) {
			criaElemento("Vc precisa digitar um número!", ERRO_STATUS);
			return false;
		} else {
			removeStatus();
			if (repeat.checked) {
				makeRequest(
					"number=" + currentValue + "&repeat=true",
					callback
				);
			} else {
				makeRequest(
					"number=" + currentValue + "&repeat=false",
					callback
				);
			}
		}
	};
	function criaElemento(strPermutacao, status) {
		let newElement = document.createElement("div");
		newElement.classList.add(status);
		newElement.innerHTML = strPermutacao;
		result.appendChild(newElement);
	}
	function removeStatus() {
		let result = document.getElementById("result");
		while (result.firstChild) {
			result.removeChild(result.firstChild);
		}
	}
	function makeRequest(params, callback) {
		let ajax = new XMLHttpRequest();
		ajax.open("POST", endpoint, true);
		ajax.setRequestHeader(
			"Content-type",
			"application/x-www-form-urlencoded"
		);
		ajax.onload = callback;
		ajax.send(params);
	}
})();
