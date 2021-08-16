let addBtn = document.querySelector('#criar-tarefa');
let addText = document.querySelector('#texto-tarefa');
let todoList = document.querySelector('#lista-tarefas');
let delallBtn = document.querySelector('#apaga-tudo');
let endBtn = document.querySelector('#remover-finalizados');
let saveBtn = document.querySelector('#salvar-tarefas');
let upBtn = document.querySelector('#mover-cima');
let downBtn = document.querySelector('#mover-baixo');
let delBtn = document.querySelector('#remover-selecionado');

delBtn.addEventListener('click', () => {
    document.querySelector('.selected').remove();
})

upBtn.addEventListener('click', (e) => {
    let allTodos = document.querySelectorAll('.todo');
    for (let index = 0; index < allTodos.length; index++) {
        let todo = allTodos[index];
        let btodo = allTodos[index - 1];

        if (todo.classList.contains('selected') && btodo) {
            [todo.innerText, btodo.innerText] = [btodo.innerText, todo.innerText];
            [todo.className, btodo.className] = [btodo.className, todo.className];
            break;
        }
        
    }
})

downBtn.addEventListener('click', (e) => {
    let allTodos = document.querySelectorAll('.todo');
    for (let index = 0; index < allTodos.length; index++) {
        let todo = allTodos[index];
        let btodo = allTodos[index + 1];

        if (todo.classList.contains('selected') && btodo) {
            [todo.innerText, btodo.innerText] = [btodo.innerText, todo.innerText];
            [todo.className, btodo.className] = [btodo.className, todo.className];
            break;
        }
    }
})


saveBtn.addEventListener('click', () => {
    localStorage.todoList = todoList.innerHTML;
});

window.addEventListener('load', () => {
    if (localStorage.todoList) {
        todoList.innerHTML = localStorage.todoList;
    }
})

delallBtn.addEventListener('click', () => {
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