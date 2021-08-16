const taskList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');
// const tasks = document.querySelectorAll('#lista-tarefas li');

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
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach((task) => task.remove());
});

clearCompletedButton.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((task) => task.remove());
});

function getCompletedIndex() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  const completedIndex = [];

  tasks.forEach((task, i) => {
    if (task.classList.contains('completed')) {
      completedIndex.push(i);
    } else {
      completedIndex.push('empty');
    }
  });
  return completedIndex;
}

saveListButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  const list = [];
  tasks.forEach((task) => {
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
    console.log(li, typeof i, typeof index[i]);
    if (i === index[i]) li.classList.add('completed');
    taskList.appendChild(li);
  });
}

function setCompletedLineTr() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  if (!tasks) return;
  tasks.forEach((task) => {
    console.log(task);
    if (task.classList.contains('completed')) {
      task.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}

window.onload = () => {
  getSavedList();
  setCompletedLineTr();
};
