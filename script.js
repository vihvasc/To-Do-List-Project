let input = document.getElementById('texto-tarefa');
let buttonTask = document.getElementById('criar-tarefa');
let listTask = document.getElementById('lista-tarefas');

buttonTask.addEventListener('click', createListTask);
// target: botao
// evento: clicar no botao, adiciona a task do input na lista
function createListTask(event) {
    let liTaks = document.createElement('li');
    liTaks.innerText = input.value;
    listTask.appendChild(liTaks);
    event.target.buttonTask;
    input.value = "";
}

