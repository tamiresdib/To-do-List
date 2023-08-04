//Seleciona as classes do html
const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const completeList = document.querySelector(".list-tasks");

//Array que ficará armazenado toda informação digitada no input.
let itensList = [];

//Função que pega o valor digitado no input pelo usuário e adiciona no Array.
function getInput() {
  itensList.push({
    task: input.value,
    concluded: false,
  });
  //Limpa o input toda vez que o usuário insere uma informação no input
  input.value = "";
  showTask();
}

//Função que transforma o valor digitado na variável "task" e coloca o input variável dentro da tag "li".
function showTask() {
  let newLi = "";

  //Recebe o valor digitado e captura a posição deste valor
  itensList.forEach((item, index) => {
    newLi =
      newLi +
      `
    <li class="task ${item.concluded && "done"}">
    <img src="./img/checked.png" alt="check-na-tarefa" onclick="concludedTask(${index})">
    <p>${item.task}</p>
    <img src="./img/trash.png" alt="tarefa-para-o-lixo "onclick="deleteItem(${index})" >
  </li>
    `;
  });

  //Adiciona a nova Li ao HTML

  completeList.innerHTML = newLi;
}

function concludedTask(index) {
  itensList[index].concluded = !itensList[index].concluded;

  showTask();
}

//Deleta as informações adicionadas nos inputs pelo icone de lixeira
function deleteItem(index) {
  itensList.splice(index, 1);

  showTask();
}

//Evento que é acionado toda vez que o usuário clica no botão "Adicionar"
button.addEventListener("click", getInput);
