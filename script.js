document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function() {
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

      const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  alternaContraste.addEventListener('click', function() {
      document.body.classList.toggle('alto-contraste');
  });

  // Código para alterar imagem e tema de alto contraste
  const botao = document.getElementById('altera-imagem');
  const imagem = document.getElementById('imagem-titulo20');
  const body = document.body;

  botao.addEventListener('click', function() {
      // Alterna a visibilidade da imagem
      if (imagem.style.display === 'none' || imagem.style.display === '') {
          imagem.style.display = 'block'; // Mostra a imagem
      } else {
          imagem.style.display = 'none'; // Esconde a imagem
      }

      // Alterna o tema de alto contraste
      body.classList.toggle('alto-contraste');
  });

  // Animações de rolagem com ScrollReveal
  ScrollReveal().reveal('#inicio', { delay: 500 });
  ScrollReveal().reveal('#tropicalia', { delay: 500 });
  ScrollReveal().reveal('#galeria', { delay: 500 });
  ScrollReveal().reveal('#contato', { delay: 500 });
});
