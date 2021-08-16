const addBtn = document.querySelector('#criar-tarefa');
const addText = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const delBtn = document.querySelector('#apaga-tudo');
const endBtn = document.querySelector('#remover-finalizados')

delBtn.addEventListener('click', () => {
    todoList.innerHTML = '';
})

endBtn.addEventListener('click', () => {
    document.querySelectorAll('.completed').forEach((e) => {
        e.remove()
    });
})

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
                e.classList.remove('selected');
            });
            e.target.classList.add('selected');

        })

        todo.addEventListener('dblclick', (e) => {
            e.target.classList.toggle('completed');
        })
    } else {
        alert('Especifique a tarefa');
    }
});