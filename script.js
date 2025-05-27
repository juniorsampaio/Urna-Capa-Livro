const URL = 'https://script.google.com/macros/s/AKfycbwRq03rmyrSi_vHC4_ZoHiMfEMOe8CvOh0YfCcCziwmKDWbhgz2LuhI_2V-DwwKjncusA/exec';

function votar(livro) {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ voto: livro }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'Sucesso') {
      mostrarAgradecimento(livro);
    } else {
      alert('Erro ao registrar voto. Tente novamente.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao registrar voto. Tente novamente.');
  });
}

function mostrarAgradecimento(livro) {
  document.getElementById('selecionar').style.display = 'none';
  const agradecimento = document.getElementById('agradecimento');
  const img = document.getElementById('imagemEscolhida');
  img.src = `imagens/${livro}.jpg`;
  agradecimento.style.display = 'flex';

  const audio = new Audio('audio/agradecimento.mp3');
  audio.play();

  setTimeout(() => {
    agradecimento.style.display = 'none';
    document.getElementById('selecionar').style.display = 'flex';
  }, 4000);
}
