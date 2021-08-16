const addBtn = document.querySelector('#criar-tarefa');
const addText = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');


addBtn.addEventListener('click', () => {
    if (addText.value !== '') {
        let todo = document.createElement('li');
        todo.className = 'todo';
        todo.innerText = addText.value;
        addText.value = '';
        todoList.appendChild(todo);

        todo.addEventListener('click', (e) => {
            let allTodos = document.querySelectorAll('.todo');
            allTodos.forEach(e => {
                e.className = 'todo';
            });
            e.target.className = 'todo selected';

        })
    } else {
        alert('Especifique a tarefa')
    }
});