window.onload = function(){
    // funcao - Adiciona tarefa
    function adicionaTarefa(){
        let li = document.createElement('LI');
        let inputValue = document.lista.tarefa.value;
        let inputText = document.createTextNode(inputValue);
    
        li.appendChild(inputText);
        document.querySelector('ol').appendChild(li);
        document.lista.tarefa.value = "";
        li.classList.add('list');
        li.addEventListener("click", function(){
            li.style.backgroundColor = "rgb(128, 128, 128)";
        });
    }
    
    // evento - Adiciona tarefa
    const botaoAdicionar = document.querySelector("#criar-tarefa");
    botaoAdicionar.addEventListener("click", function(e) {
        e.preventDefault();
        adicionaTarefa();
    });
}