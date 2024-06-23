function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentSection = document.getElementById('commentSection');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;
        commentSection.appendChild(commentDiv);
        commentInput.value = '';
    }
}
