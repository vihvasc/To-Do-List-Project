function salve() {
  const buttonSalve = document.getElementById('salvar-tarefas');
  const salveLi = document.querySelectorAll('li');
  const objeto = [];
  buttonSalve.addEventListener('click', () => {
    for (let key = 0; key < salveLi.length; key += 1) {
      const value = salveLi[key].innerText;
      objeto.push({ item: value, classe: salveLi[key].classList.value });
      localStorage.setItem('list', JSON.stringify(objeto));
    }
  });
}
salve();

function finalizedClean() {
  const buttonFinalized = document.getElementById('remover-finalizados');
  const taksfinalized = document.querySelectorAll('.completed');
  buttonFinalized.addEventListener('click', () => {
    for (let key = 0; key < taksfinalized.length; key += 1) {
      taksfinalized[key].remove();
    }
  });
}

function clean() {
  const buttonClean = document.getElementById('apaga-tudo');
  const li = document.querySelectorAll('li');
  buttonClean.addEventListener('click', () => {
    localStorage.clear();
    for (let key = 0; key < li.length; key += 1) {
      li[key].remove();
    }
  });
}
clean();

function taskComplete() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    let cont = 0;
    li[key].addEventListener('dblclick', () => {
      if (cont === 0) {
        li[key].className = 'completed';
        finalizedClean();
        cont = 1;
      } else {
        li[key].classList.remove('completed');
        cont = 0;
      }
    });
  }
}
taskComplete();

function cleanBackgrood() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].style.backgroundColor = 'white';
  }
}

function listColor() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].addEventListener('click', () => {
      cleanBackgrood();
      li[key].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
listColor();

function addTaks() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const valueInpt = document.getElementById('texto-tarefa');
    const list = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = valueInpt.value;
    valueInpt.value = '';
    list.appendChild(li);
    listColor();
    taskComplete();
    salve();
    clean();
  });
}
addTaks();

function getLocalStorage() {
  const get = JSON.parse(localStorage.getItem('list'));
  if (get) {
    const list = document.getElementById('lista-tarefas');
    for (let key = 0; key < get.length; key += 1) {
      const li = document.createElement('li');
      if (get[key].classe === 'completed') {
        li.className = get[key].classe;
      }
      li.innerText = get[key].item;
      list.appendChild(li);
      taskComplete();
      listColor();
    }
  }
}
getLocalStorage();
