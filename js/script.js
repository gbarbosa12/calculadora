// Atribuindo valor de entrada a uma const
const valoresDeEntrada = document.querySelector(".contas");

// Adicionando um digito a tela da calculadora
function addCaracter(valor) {
  valoresDeEntrada.value += valor;
}

// Adicionando operação
function addOperation(operator) {
  if (valoresDeEntrada.value.includes(operator)) {
    return;
  }

  valoresDeEntrada.value += operator;
}

// Exibindo o resultado na tela
function results() {
  let valores = valoresDeEntrada.value;
  let resultado = eval(valores);
  valoresDeEntrada.value = resultado;
}

// Apagando todos os valores "C"
function delAllCaracter() {
  valoresDeEntrada.value = "";
}

// Apagando último digito "DEL"
//Método slice para apagar o último digito
function delCaracter() {
  valoresDeEntrada.value = valoresDeEntrada.value.slice(0, -1);
}
