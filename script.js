const botaoAdicionar = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const botaoApagar = document.querySelector('#apaga-tudo');
let filhoDaLista = document.createElement('li');
let classeDoFilhoDaLista = document.querySelector('.list');



// coloquei o .value, pois ele me da o valor do input, e assim consigo manipular o que fica dentro dele.


botaoAdicionar.addEventListener('click', interacaoBotaoAdicionar);
function interacaoBotaoAdicionar() {
	let inputTexto = input.value;
// ".value" serve aqui para pegar o que tem dentro do input

	filhoDaLista = document.createElement('li');
	filhoDaLista.classList.add('list');
	lista.appendChild(filhoDaLista);

// acima eu quis dizer que, a cada clique que eu der no "adicionar", vai criar uma tag <li> e dentro dela, pegar o valor com o .value, e atribuir nas listas criadas. 
	filhoDaLista.innerText = inputTexto;
	input.value = '';

// acima eu atribui um valor '' vazio, ou seja, assim que eu clicar no botao "adicionar", além de se juntar na lista o que eu escrevi, também vai substituir o que está escrito no input por uma str vazia.
	filhoDaLista.addEventListener('click', mudandoBackground);
	filhoDaLista.addEventListener('dblclick', selecionandoComDoisClicks);
}

// acima, usei o addEventListener para a cada click, ativar a minha função (que está dentro do parenteses).



function mudandoBackground(evento) {
	const classSelected = document.querySelector('.selected');
	evento.target.classList.toggle('selected');
	if (classSelected) {
		classSelected.classList.remove('selected');
	}
}

// o ".toggle" usado acima, serve para variar, por exemplo, como ele está numa função de click, então fica: se eu clicar em um item da lista, aparece a classe "selected", se eu clicar novamente, a classe some, ou seja, se não tiver a classe que coloquei no ".toggle" ele vai criar, porém se ja tiver, ele vai deletar.



function selecionandoComDoisClicks (doisClicks) {

	doisClicks.target.classList.toggle('completed');
}



botaoApagar.addEventListener('click', interacaoBotaoApagar);
function interacaoBotaoApagar() {
	const classeLista = document.querySelectorAll('.list');
	const classOl = document.querySelector('.classOl')
	// const todasAsClassesLista = document.querySelectorAll('li');
	// const removendoAsClassesLista = classeLista.classList.remove('list');
	if (classeLista) {
		for (let index = 0; index < classeLista.length; index += 1) {
			classeLista[index].remove();
		}
	}
}