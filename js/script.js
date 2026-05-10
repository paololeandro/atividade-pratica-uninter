document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // para a pagina nao carregar

    // pega os valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    let formularioValido = true;

    // validacao dos campos
    if (nome === "") {
        document.getElementById('erro-nome').style.display = 'block';
        formularioValido = false;
    } else {
        document.getElementById('erro-nome').style.display = 'none';
    }

    if (email === "" || !email.includes('@')) {
        document.getElementById('erro-email').style.display = 'block';
        formularioValido = false;
    } else {
        document.getElementById('erro-email').style.display = 'none';
    }

    if (mensagem === "") {
        document.getElementById('erro-mensagem').style.display = 'block';
        formularioValido = false;
    } else {
        document.getElementById('erro-mensagem').style.display = 'none';
    }

    // simulao do envio pedido
    if (formularioValido) {
        const btn = document.getElementById('btnEnviar');
        btn.innerText = "Enviando...";
        btn.disabled = true;

        setTimeout(() => {
            document.getElementById('meuFormulario').reset(); // limpa os campos apos envio
            document.getElementById('sucesso').style.display = 'block';
            btn.innerText = "Enviar Mensagem";
            btn.disabled = false;
            
            console.log("Dados enviados:", { nome, email, mensagem });
        }, 1000); // coloca um atraso 1 segundo
    }
});
