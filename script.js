// Seleciona o botão e o parágrafo no documento
const button = document.getElementById('change-text');
const description = document.getElementById('description');

// Adiciona um ouvinte de evento ao botão
button.addEventListener('click', function() {
    // Altera o texto do parágrafo
    description.textContent = "O texto foi alterado após o clique!";
});
