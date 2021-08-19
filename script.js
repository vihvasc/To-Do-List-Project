let recebe_info = document.getElementById('texto-tarefa');


document.getElementById('criar-tarefa').addEventListener('click', function() {
    let li = document.createElement('li');
    var li = document.createElement('li')
    li.addEventListener('click', function(){
        li.style.backgroundColor = 'rgb(128,128,128)'
    })
    let lista_ordenada = document.getElementById('lista-tarefas');
    lista_ordenada.appendChild(li)
    li.innerText = recebe_info.value
    recebe_info.value=''
    li.classList.add('linha')
})