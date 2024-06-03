document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = ''; // Limpa mensagens de erro anteriores

    const erros = [];

    if (!validarNome(nome)) {
        erros.push('Por favor, insira um nome válido (apenas letras e espaços são permitidos).');
    }

    if (!validarEmail(email)) {
        erros.push('Por favor, insira um endereço de e-mail válido.');
    }

    if (assunto.trim() === '') {
        erros.push('O campo assunto não pode estar vazio.');
    }

    if (mensagem.trim() === '') {
        erros.push('O campo mensagem não pode estar vazio.');
    }

    if (erros.length > 0) {
        mensagemErro.innerHTML = erros.join('<br>');
    } else {
        mensagemErro.textContent = alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar o formulário, como usando fetch() ou 
        document.getElementById('formContato').reset();
        //Limpa o formulário
    }
});

function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return nome.trim() !== '' && regex.test(nome);
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
