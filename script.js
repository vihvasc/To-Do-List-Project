const header = document.createElement('header');
header.innerHTML = 'Minha Lista de Tarefas';
document.body.appendChild(header);

const discreteParagraph = document.createElement('p');
discreteParagraph.id = 'funcionamento';
discreteParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(discreteParagraph);
