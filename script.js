const addBtn = document.querySelector('#criar-tarefa');
const addText = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const delallBtn = document.querySelector('#apaga-tudo');
const endBtn = document.querySelector('#remover-finalizados');
const saveBtn = document.querySelector('#salvar-tarefas');
const upBtn = document.querySelector('#mover-cima');
const downBtn = document.querySelector('#mover-baixo');
const delBtn = document.querySelector('#remover-selecionado');

delBtn.addEventListener('click', () => {
  document.querySelector('.selected').remove();
});

upBtn.addEventListener('click', () => {
  const allTodos = document.querySelectorAll('.todo');
  for (let index = 0; index < allTodos.length; index += 1) {
    const todo = allTodos[index];
    const btodo = allTodos[index - 1];

    if (todo.classList.contains('selected') && btodo) {
      [todo.innerText, btodo.innerText] = [btodo.innerText, todo.innerText];
      [todo.className, btodo.className] = [btodo.className, todo.className];
      break;
    }
  }
});

downBtn.addEventListener('click', () => {
  const allTodos = document.querySelectorAll('.todo');
  for (let index = 0; index < allTodos.length; index += 1) {
    const todo = allTodos[index];
    const btodo = allTodos[index + 1];

    if (todo.classList.contains('selected') && btodo) {
      [todo.innerText, btodo.innerText] = [btodo.innerText, todo.innerText];
      [todo.className, btodo.className] = [btodo.className, todo.className];
      break;
    }
  }
});

saveBtn.addEventListener('click', () => {
  localStorage.todoList = todoList.innerHTML;
});

window.addEventListener('load', () => {
  if (localStorage.todoList) {
    todoList.innerHTML = localStorage.todoList;
  }
});

delallBtn.addEventListener('click', () => {
  todoList.innerHTML = '';
});

endBtn.addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((e) => {
    e.remove();
  });
});

addBtn.addEventListener('click', () => {
  if (addText.value !== '') {
    const todo = document.createElement('li');
    todo.className = 'todo';
    todo.innerText = addText.value;
    addText.value = '';
    todoList.appendChild(todo);
    todo.addEventListener('click', (e) => {
      const allTodos = document.querySelectorAll('.todo');
      allTodos.forEach(() => {
        e.classList.remove('selected');
      });
      e.target.classList.add('selected');
    });
    todo.addEventListener('dblclick', (e) => {
      e.target.classList.toggle('completed');
    });
  } else {
    alert('Especifique a tarefa');
  }
});
