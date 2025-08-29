// Alertar ao clicar em Comprar
document.querySelectorAll('.btn-comprar').forEach(botao => {
  botao.addEventListener('click', () => {
    alert('Flor adicionada ao carrinho!');
  });
});

// Validação e envio do formulário de contato
const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! Entraremos em contato em breve.`);

  formContato.reset();
});
