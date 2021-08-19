const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
    const task = document.createElement('li');
    const input = document.getElementById('texto-tarefa');

    task.innerText = input.value;
    task.className = 'taskList';
    taskList.appendChild(task);
    input.value = '';
}

button.addEventListener('click', createTask);