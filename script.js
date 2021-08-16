const addBtn = document.querySelector('#criar-tarefa');
const addText = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');


addBtn.addEventListener('click', () => {
    if (addText.value !== '') {
        todo = document.createElement('li');
        todo.id = 'todo';
        todo.innerText = addText.value;
    
        todoList.appendChild(todo);
    } else {
        alert('Especifique a tarefa')
    }
});