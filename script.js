const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const delButton = document.getElementById('apaga-tudo');
const delCompletedButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');
const selectedColor = 'rgb(128, 128, 128)';

function addTask() {
  const inputText = document.getElementById('texto-tarefa');

  const task = document.createElement('li');
  task.innerText = inputText.value;
  list.appendChild(task);

  inputText.value = '';
}
function changeLiColor(e) {
  const element = e.target;
  const selected = document.querySelector('.selected');

  if (selected) {
    selected.style.backgroundColor = '';
    selected.classList.remove('selected');
  }
  element.classList.add('selected');
  element.style.backgroundColor = selectedColor;
}
function scratchTask(e) {
  const element = e.target;
  const completed = element.classList.contains('completed');

  if (completed) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}
function deleteAll() {
  const elementsList = list.childNodes;
  const arrayWithElements = [];

  for (let i = 0; i < elementsList.length; i += 1) {
    arrayWithElements.push(elementsList[i]);
  }

  for (let i = 0; i < arrayWithElements.length; i += 1) {
    arrayWithElements[i].remove();
  }
}
function deleteCompleted() {
  const elementsList = document.querySelectorAll('.completed');
  const arrayWithElements = [];
  for (let i = 0; i < elementsList.length; i += 1) {
    arrayWithElements.push(elementsList[i]);
  }

  for (let i = 0; i < arrayWithElements.length; i += 1) {
    arrayWithElements[i].remove();
  }
}

function saveTasks() {
  const tasksElements = document.getElementsByTagName('li');
  const taskList = [];

  for (let i = 0; i < tasksElements.length; i += 1) {
    const styles = getComputedStyle(tasksElements[i]);

    const taskObj = {
      text: tasksElements[i].innerText,
      completed: styles.textDecoration.includes('line-through'),
      selected: styles.backgroundColor.includes(selectedColor),
    };
    taskList.push(taskObj);
  }
  localStorage.setItem('tasks', JSON.stringify(taskList));
}
function creatSavedLi(storagedLi) {
  const li = document.createElement('li');
  li.innerText = storagedLi.text;
  if (storagedLi.completed) {
    li.classList.add('completed');
  }
  if (storagedLi.selected) {
    li.style.backgroundColor = selectedColor;
    li.classList.add('selected');
  }
  list.appendChild(li);
}
function getSavedTasks() {
  if (localStorage.tasks) {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < localStorageTasks.length; i += 1) {
      creatSavedLi(localStorageTasks[i]);
    }
  }
}

upButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const previousSib = selected.previousSibling;
    if (previousSib) {
      selected.parentNode.insertBefore(selected, previousSib);
    }
  }
});
downButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const nextSib = selected.nextSibling;
    if (nextSib) {
      selected.parentNode.insertBefore(nextSib, selected);
    }
  }
});
removeSelectedButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove();
});

getSavedTasks();

addButton.addEventListener('click', addTask);
list.addEventListener('click', changeLiColor);
list.addEventListener('dblclick', scratchTask);
delButton.addEventListener('click', deleteAll);
delCompletedButton.addEventListener('click', deleteCompleted);
saveButton.addEventListener('click', saveTasks);
