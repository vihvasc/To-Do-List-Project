const botao = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
// let filhoDaLista = document.createElement('li');
const classeDoFilhoDaLista = document.querySelector('.list');

// coloquei o .value, pois ele me da o valor
// do input, e assim consigo manipular 
// o que fica dentro dele

botao.addEventListener('click', interacaoDoBotao);
function interacaoDoBotao() {
	let inputTexto = input.value;
	filhoDaLista = document.createElement('li');
	filhoDaLista.classList.add('list')
	lista.appendChild(filhoDaLista);
	filhoDaLista.innerText = inputTexto;
	input.value = '';
	filhoDaLista.addEventListener('click', mudandoBackground);
}


function mudandoBackground(obj) {

	obj.target.style.backgroundColor = 'rgb(128,128,128)'

}