const header = document.querySelector('#header');

function createTitle() {
    const title = document.createElement('h1');
    title.innerHTML = 'Minha Lista de Tarefas';
    header.appendChild(title);
}

createTitle();
