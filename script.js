const URL = 'https://script.google.com/macros/s/SEU_ID_DO_SCRIPT/exec';

function votar(livro) {
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ livro: livro })
    })
    .then(() => {
        document.getElementById('selecionar').style.display = 'none';
        const agradecimento = document.getElementById('agradecimento');
        agradecimento.style.display = 'flex';

        const imagemEscolhida = document.getElementById('imagemEscolhida');
        if (livro === 'O Pequeno Príncipe') {
            imagemEscolhida.src = 'pequeno_principe.jpg';
        } else if (livro === 'Chapeuzinho Vermelho') {
            imagemEscolhida.src = 'chapeuzinho_vermelho.jpg';
        }
        
        const audio = document.getElementById('audioAgradecimento');
        audio.play();
        audio.onended = () => {
            location.reload();
        };
    })
    .catch(() => {
        alert('Erro ao registrar voto. Tente novamente.');
    });
}
