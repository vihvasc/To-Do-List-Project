function criarTarefa(){
    let input = document.getElementById('texto-tarefa');
    let texto = input.value;
    let itemLista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');    
    novoItem.innerHTML = texto;
    itemLista.appendChild(novoItem);
    input.value = "";

    novoItem.addEventListener('click', alteraCor);
    function alteraCor(evento) {
        evento.target.style.backgroundColor = 'rgb(128,128,128)'
    }
        
    
}
