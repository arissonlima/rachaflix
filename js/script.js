function sortearTimes() {
  // Obter a lista de nomes do textarea
  const nomesInput = document.getElementById('nomesInput');
  const nomes = nomesInput.value.trim().split('\n');

  // Embaralhar a lista de nomes
  const nomesEmbaralhados = shuffleArray(nomes);

  // Dividir os nomes em times de 4
  const times = [];
  for (let i = 0; i < nomesEmbaralhados.length; i += 4) {
    times.push(nomesEmbaralhados.slice(i, i + 4));
  }

  // Exibir os times na lista
  const timesList = document.getElementById('timesList');
  timesList.innerHTML = '';
  times.forEach((time, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Time ${index + 1}: ${time.join(', ')}`;
    timesList.appendChild(listItem);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function colarConteudo() {
  // Colar o conteúdo da área de transferência na textarea
  navigator.clipboard.readText().then((text) => {
    document.getElementById('nomesInput').value = text;
  }).catch((err) => {
    console.error('Erro ao colar conteúdo:', err);
  });
}

function limparTextarea() {
  // Limpar o conteúdo da textarea
  document.getElementById('nomesInput').value = '';
}
