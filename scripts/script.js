function todoList() {
  addTitle();
};

function addTitle() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  
  h1.innerText = 'Minha Lista de Tarefas';
  document.body.appendChild(header);
  header.appendChild(h1);
};

window.onload = todoList();