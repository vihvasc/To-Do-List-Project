window.onload = function(){
    // funcao - Adiciona tarefa
    function adicionaTarefa(){
        let li = document.createElement('LI');
        let inputValue = document.lista.tarefa.value;
        let inputText = document.createTextNode(inputValue);

        // Condicao para nao adicionar campo vazio
        if(inputValue){
            li.appendChild(inputText);
            document.querySelector('ol').appendChild(li);
            document.lista.tarefa.value = "";
            li.classList.add('list');
        }

        // evento - Muda cor de fundo quando clica na tarefa
        function mudaCor(){
            const listaLi = document.querySelectorAll('.selected');
            if (listaLi[0] === undefined){
                li.classList.toggle('selected');
            }else{
                listaLi[0].classList.remove('selected');
                li.classList.toggle('selected');
            }
        
        }
        li.addEventListener("click", mudaCor);
    }
    // evento - Remove todas as tarefas
    const botaoLimpar = document.querySelector('#apaga-tudo');

    botaoLimpar.addEventListener("click", function(){
        document.querySelector('ol').innerHTML = '';
    });

    
    
    // evento - Adiciona tarefa
    const botaoAdicionar = document.querySelector("#criar-tarefa");
    botaoAdicionar.addEventListener("click", function(e) {
        e.preventDefault();
        adicionaTarefa();
    });
}