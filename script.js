function votar(livro) {
  // Envia o voto para o Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbwRq03rmyrSi_vHC4_ZoHiMfEMOe8CvOh0YfCcCziwmKDWbhgz2LuhI_2V-DwwKjncusA/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ livro: livro })
  });

  // Atualiza a tela para agradecimento
  document.querySelector('.book-container').style.display = 'none';
  document.getElementById('agradecimento').style.display = 'flex';

  // Atualiza a imagem na tela de agradecimento
  const imagem = document.getElementById('imagemEscolhida');
  if (livro === 'Capa 1') {
    imagem.src = 'pequeno_principe.jpg';
  } else if (livro === 'Capa 2') {
    imagem.src = 'chapeuzinho_vermelho.jpg';
  }

  // Toca o áudio de agradecimento
  const audio = document.getElementById('audioAgradecimento');
  audio.play();

  // Volta para a tela inicial após o áudio
  audio.onended = () => {
    location.reload();
  };
}
