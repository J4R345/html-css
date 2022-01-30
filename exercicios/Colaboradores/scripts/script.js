// Pagina que convert para Json https://www.convertcsv.com/csv-to-json.htm

var vId
var vNome
var vFuncao
var vNasc
var vAdmissao
var vFone
var emp
var matr
var spse

document.getElementById("matr").addEventListener("input", function () {
	var pasta = "imgs/"
	var formato = ".jpg"
	var res = document.getElementById("photo")
	var img = document.createElement("img")

	img.setAttribute("src", "imgs/base.png")

	let spse = document.getElementById("Se")

	if (spse.checked) {
		emp = "1500"
	} else {
		emp = "1600"
	}

	var matr = document.getElementById("matr")

	if (matr.value > 3) {
		res.innerHTML = ""

		//var img = document.createElement('img');

		img.setAttribute("src", pasta + emp + matr.value + formato)
		img.style.height = "200px"
		img.style.width = "170px"
		res.appendChild(img)

		console.log(img)
	} else {
		//var img = document.createElement('img');

		res.innerHTML = ""

		img.setAttribute("src", "imgs/base.png")
		img.style.height = "200px"
		img.style.width = "170px"

		res.appendChild(img)

		console.log(img)
	}
})

function limpar() {
	var res = document.getElementById("photo")
	var img = document.createElement("img")
	img.setAttribute("src", "imgs/base.png")
	img.style.height = "200px"
	img.style.width = "170px"

	res.appendChild(img)

	document.getElementById("nome").value = ""
	document.getElementById("funcao").value = ""
	document.getElementById("nasc").value = ""
	document.getElementById("idade").value = ""
	document.getElementById("admissao").value = ""
	document.getElementById("tempo").value = ""
	document.getElementById("fone").value = ""

	res.innerHTML = ""
	res.appendChild(img)
	document.getElementById("matr").focus()
}

document.getElementById("matr").addEventListener("click", function () {
	limpar()
	var cxMatricula = (document.getElementById("matr").value = "")
})

document.getElementById("Se").addEventListener("click", function () {
	limpar()
	var cxMatricula = (document.getElementById("matr").value = "")
})

document.getElementById("Sp").addEventListener("click", function () {
	limpar()
	var cxMatricula = (document.getElementById("matr").value = "")
})

function Ready() {
	// Pega as informações no HTML

	let emp = ""

	let empresa = document.getElementById("Se")

	if (empresa.checked) {
		emp = "1500"
	} else {
		emp = "1600"
	}

	matr = document.getElementById("matr").value
	vId = emp + matr
}

var dNasc = document.getElementById("nasc")
var dAdmissao = document.getElementById("admissao")
var vResIdade = document.getElementById("idade")
var vResTempo = document.getElementById("tempo")

function calcData(vData, vRes) {
	var vResult

	const date2 = new Date()
	var hoje = new Intl.DateTimeFormat("pt-BR").format(date2)
	var objCalculaIdade = new calculaIdade()
	var textoIdade = objCalculaIdade.calculaIdade(vData.value, hoje)

	console.log(textoIdade)

	vResult = vRes.value = textoIdade
}

//Busca os dados dos colaboradores
document.getElementById("matr").addEventListener("input", function () {
	var vInicio = document.getElementById("matr").value

	if (vInicio.length > 3) {
		Ready()

		emp = ""

		let empresa = document.getElementById("Se")

		let bd = colabsp

		if (empresa.checked) {
			emp = "1500"
			bd = colabse
		} else {
			emp = "1600"
			bd = colabsp
		}

		const colaborador = bd.filter((bd) => bd.Id === vId)

		document.getElementById("nome").value = colaborador[0].Nome
		document.getElementById("funcao").value = colaborador[0].Funcao
		document.getElementById("nasc").value = colaborador[0].Nascimento
		document.getElementById("admissao").value = colaborador[0].Admissao
		document.getElementById("fone").value = colaborador[0].Telefone

		calcData(dNasc, vResIdade)
		calcData(dAdmissao, vResTempo)
	} else if (vInicio.length == 3) {
		limpar()
	}
})
