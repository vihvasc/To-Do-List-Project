let criar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

criar.addEventListener('click', generateTask);

function generateTask(){
    var task = document.createElement('li');
    lista.appendChild(task);
    task.innerHTML=texto.value;
    texto.value='';
}

lista.addEventListener('click', selected);

function selected(filho){
    let selecionador = document.querySelector('.selected')
    if (!selecionador){
      filho.target.classList.add('selected');
    }
    else{
        selecionador.classList.remove('selected');
        filho.target.classList.add('selected');
    }
}











