const botao = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
botao.addEventListener('click', interacaoDoBotao);

function interacaoDoBotao() {
	let inputTexto = input.value;
	let filhoDaLista = document.createElement('li');
	lista.appendChild(filhoDaLista);
	filhoDaLista.innerText = inputTexto;
	input.value = ''
}