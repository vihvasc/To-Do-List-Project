const taskList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

const createLi = () => {
  const li = document.createElement('li');
  return li;
};

taskButton.addEventListener('click', () => {
  const task = inputTask.value;
  const li = createLi();
  li.innerText = task;
  li.classList.add('task');
  taskList.appendChild(li);
  inputTask.value = '';
});

taskList.addEventListener('click', (e) => {
  const el = e.target;
  const selected = document.querySelector('.selected');

  if (el.classList.contains('selected')) return;
  if (el.classList.contains('task')) {
    el.style.backgroundColor = 'rgb(128,128,128)';
    el.classList.add('selected');
    if (!selected) return;
    selected.style.backgroundColor = 'white';
    selected.classList.remove('selected');
  }
});

taskList.addEventListener('dblclick', (e) => {
  const el = e.target;
  if (el.classList.contains('completed')) {
    el.style.textDecoration = '';
    el.classList.remove('completed');
    return;
  }
  if (el.classList.contains('task')) {
    el.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    el.classList.add('completed');
  }
});

// function addLineTr(e) {
//   const el = e.target;
//   console.log('cliquei');
//   if (el.classList.contains('completed')) {
//     el.style.textDecoration = '';
//     el.classList.remove('completed');
//     return;
//   }
//   el.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//   el.classList.add('completed');
// }

// function addTaskEventdblclick() {
//   tasks.forEach((task) => {
//     task.addEventListener('dblclick', addLineTr);
//   });
// }

// addTaskEventdblclick();

clearButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

clearCompletedButton.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((task) => task.remove());
});

removeSelectedButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove();
});

// Fonte https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
moveUpButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (!selected) return;
  if (selected.previousSibling) {
    selected.parentNode.insertBefore(selected, selected.previousElementSibling);
  }
});

moveDownButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (!selected) return;
  if (selected.nextElementSibling) {
    selected.parentNode.insertBefore(selected.nextElementSibling, selected);
  }
});

function getCompletedIndex() {
  const children = Array.from(taskList.children);
  const completedIndex = [];

  children.forEach((task, i) => {
    if (task.classList.contains('completed')) {
      completedIndex.push(i);
    } else {
      completedIndex.push('empty');
    }
  });
  return completedIndex;
}

saveListButton.addEventListener('click', () => {
  const tasksChildren = Array.from(taskList.children);
  const list = [];
  tasksChildren.forEach((task) => {
    list.push(task.innerHTML);
  });

  localStorage.setItem('taskList', JSON.stringify(list));
  localStorage.setItem('completedTasks', JSON.stringify(getCompletedIndex()));
});

function getSavedList() {
  const listString = localStorage.getItem('taskList');
  const listIndex = localStorage.getItem('completedTasks');
  const list = JSON.parse(listString);
  const index = JSON.parse(listIndex);
  if (!list) return;
  list.forEach((task, i) => {
    const li = createLi();
    li.innerText = task;
    li.classList.add('task');
    if (i === index[i]) li.classList.add('completed');
    taskList.appendChild(li);
  });
}

function setCompletedLineTr() {
  const children = Array.from(taskList.children);
  if (!children) return;
  children.forEach((task) => {
    const elementTask = task;
    if (elementTask.classList.contains('completed')) {
      elementTask.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}

window.onload = () => {
  getSavedList();
  setCompletedLineTr();
};
