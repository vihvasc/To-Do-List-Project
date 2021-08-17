function adicionaTitulo() {
  const elementoHeader = document.createElement('header');
  elementoHeader.id = 'titulo-header';
  elementoHeader.textContent = 'Minha Lista de Tarefas';
  document.body.appendChild(elementoHeader);
}
adicionaTitulo();

function adicionaParagrafo() {
  const elementoP = document.createElement('p');
  elementoP.id = 'funcionamento';
  elementoP.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  document.body.appendChild(elementoP);
}
adicionaParagrafo();

function adicionaInput() {
  const elementoInput = document.createElement('input');
  elementoInput.id = 'texto-tarefa';
  document.body.appendChild(elementoInput);
}
adicionaInput();

function criaLO() {
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.id = 'lista-tarefas';
  body.appendChild(listaOrdenada);
}
criaLO();

function criaTarefa() {
  const botaoCriarTarefa = document.createElement('button');
  botaoCriarTarefa.id = 'criar-tarefa';
  botaoCriarTarefa.textContent = 'Adicionar Tarefa';
  document.body.appendChild(botaoCriarTarefa);
  botaoCriarTarefa.addEventListener('click', function () {
    const textoAAdicionar = document.getElementById('texto-tarefa');
    const listaDeTarefas = document.getElementById('lista-tarefas');
    if (!textoAAdicionar.value ) {
      alert('ERRO: INPUT/TEXTO NÃO PODE SER VAZIO!!!');
    } else {
      const novoItem = document.createElement('li');
      novoItem.innerHTML = textoAAdicionar.value;
      novoItem.addEventListener('click', function () {
        const elementosDaLista = document.querySelectorAll('li');
  
        for (let index = 0; index < elementosDaLista.length; index += 1) {
          elementosDaLista[index].style.backgroundColor = '';
          elementosDaLista[index].id = '';
        }
        novoItem.style.backgroundColor = 'rgb(128,128,128)';
        novoItem.id = 'selecionado';
      })
      novoItem.addEventListener('dblclick', function () {
        let comparaClasse = novoItem.className;
          if (comparaClasse.endsWith('completed') ) {
            console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI DESELECIONADO');
            novoItem.className = '';
            novoItem.style.textDecoration = '';
          } else {
            console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI SELECIONADO');
            novoItem.className = 'completed';
            novoItem.style.textDecoration = 'line-through solid rgb(0,0,0)';
          }
        })
      listaDeTarefas.appendChild(novoItem);
    }
    textoAAdicionar.value = '';
  })
}
criaTarefa();

// 09 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// https://pt.stackoverflow.com/questions/9605/detectar-se-um-elemento-cont%C3%A9m-uma-classe-com-javascript-puro

function limpaLista() {
    const botaoLimpar = document.createElement('button');
    botaoLimpar.id = 'apaga-tudo';
    botaoLimpar.textContent = 'Limpar Lista';
    botaoLimpar.addEventListener('click', function () {
      
      const elementosLista = document.querySelectorAll('li');
        for (let index = 0; index < elementosLista.length; index +=1) {
          elementosLista[index].remove();
        }
      salvaTarefas()
    })
    document.body.appendChild(botaoLimpar);
}
limpaLista();

function removerFinalizados() {
  const botaoRemover = document.createElement('button');
  botaoRemover.id = 'remover-finalizados';
  botaoRemover.textContent = 'Apaga Finalizados';
  document.body.appendChild(botaoRemover);
  botaoRemover.addEventListener('click', function () {
    const checaElementos = document.querySelectorAll('li');
    for (let index = 0; index < checaElementos.length; index += 1 ) {
      if ( checaElementos[index].className.endsWith('completed') ) {
        console.log('Apagando Elemento: ' + checaElementos[index].textContent );
        checaElementos[index].remove();
      }
    }
  })
}
removerFinalizados();

function botaoSalvar() {
  const botaoSalvar = document.createElement('button');
  botaoSalvar.textContent = 'Salvar Tarefas';
  botaoSalvar.id = 'salvar-tarefas';
  botaoSalvar.addEventListener('click', salvaTarefas);
  document.body.appendChild(botaoSalvar);
}
botaoSalvar();

function salvaTarefas() {
  let listaOrdenada = document.querySelectorAll('li');
  let arrayDeTarefas = new Array();
  
  for (let index = 0; index < listaOrdenada.length; index += 1) {
    arrayDeTarefas.push(listaOrdenada[index].textContent);
  }
  localStorage.setItem("arrayDeTarefas", JSON.stringify(arrayDeTarefas));
}

function recuperaTarefas () {
  if (localStorage.hasOwnProperty("arrayDeTarefas")) {
    const arrayDeTarefas = JSON.parse(localStorage.getItem("arrayDeTarefas"))
    for (let index = 0; index < arrayDeTarefas.length; index +=1) {
      
      const listaTarefas = document.getElementById('lista-tarefas');
      const novaTarefa = document.createElement('li');
      novaTarefa.textContent = arrayDeTarefas[index];
      
      novaTarefa.addEventListener('click', function () {
        const elementosDaLista = document.querySelectorAll('li');
  
        for (let index = 0; index < elementosDaLista.length; index += 1) {
          elementosDaLista[index].style.backgroundColor = '';
          elementosDaLista[index].id = '';
        }
        novaTarefa.style.backgroundColor = 'rgb(128,128,128)';
        novaTarefa.id = 'selecionado';
      })
      novaTarefa.addEventListener('dblclick', function () {        
        
        let comparaClasse = novaTarefa.className;

        if (comparaClasse.endsWith('completed') ) {
            console.log('ELEMENTO \''+ novaTarefa.textContent + '\' FOI DESELECIONADO');
            novaTarefa.className = '';
            novaTarefa.style.textDecoration = '';

        } else {
            console.log('ELEMENTO \''+ novaTarefa.textContent + '\' FOI SELECIONADO');
            novaTarefa.className = 'completed';
            novaTarefa.style.textDecoration = 'line-through solid rgb(0,0,0)';
        }
      })
      listaTarefas.appendChild(novaTarefa);
    }
  } else {
    // alert("INFO: Não existem dados Salvos no localStorage!!!"); // [DEBUG]
  }
}
recuperaTarefas();

function removerSelecionado() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover Selecionado';
    botaoRemover.id = 'remover-selecionado';
    botaoRemover.addEventListener('click', function () {
      const elementoSelecionado = document.getElementById('selecionado');
      elementoSelecionado.remove();

    })
    document.body.appendChild(botaoRemover);
}
removerSelecionado();

function moverElementoSelecionado() {
  const moveCima = document.createElement('button');
  moveCima.id = 'mover-cima';
  moveCima.textContent = 'Mover para Cima';
  const moveBaixo = document.createElement('button');
  moveBaixo.id = 'mover-baixo';
  moveBaixo.textContent = 'Mover para Baixo';
  moveCima.addEventListener('click', function moveCima() {
    const arrayElementos = document.querySelectorAll('li');
    console.log(arrayElementos);
  })
  moveBaixo.addEventListener('click', function moveCima() {
    const arrayElementos = document.querySelectorAll('li');
    console.log(arrayElementos);
  })
  document.body.appendChild(moveCima);
  document.body.appendChild(moveBaixo);
}
moverElementoSelecionado();
