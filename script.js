// Função para adicionar comentário
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentSection = document.getElementById('commentSection');
    const commentText = commentInput.value.trim();
    
    // Verifica se o campo de comentário não está vazio
    if (commentText) {
        // Cria um elemento de div para o comentário
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;
        
        // Adiciona o comentário à seção de comentários
        commentSection.appendChild(commentDiv);
        
        // Limpa o campo de entrada de comentário
        commentInput.value = '';
    }
}
