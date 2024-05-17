document.getElementById('contatosForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    // Validações
    let nome = document.getElementById('nome1').value;
    let email = document.getElementById('email1').value;
    

    if (!/^[A-Za-z\s]+$/.test(nome)) {
        alert('Nome deve conter apenas letras.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email inválido.');
        return;
    }

    const messageField = document.getElementById('mensagem1'); // Substitua por ID do seu campo
    messageField.setAttribute('maxlength', '10');


    window.location.href = 'contatos.html';
});