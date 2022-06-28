// Usando JavaScript Puro (Vanilla JavaScript)
/* const titulo = document.querySelector("h1");
titulo.style.color = "blue";
titulo.textContent = "Relação de Candidatos"; */

// Usando jQuery
const titulo = $('h1');
titulo.hide().fadeIn(5000);
titulo.css('color', 'blue');
titulo.text('Relação de Candidatos');

/* Script para o carregamento de candidatos */
const botao = $('#carregar');
const lista = $('#lista');
botao.on('click', function () {
  /* Técnica AJAX de comunicação */
  $.ajax({
    url:"http://localhost:3000/candidatos",
    dataType:"json",
    // Garantindo que a lista sempre inicie vazia a cada clique.
    success: function(resposta) {
      lista.html("");
      console.log(resposta);
     /* Loop (laço de repetição ) */
     $.each(resposta, function(indice , conteudo){
      // console.log(indice);
      // console.log(conteudo);
      lista.append(
        `<li class="list-group-item">
         ${conteudo.nome}
         </li>`
         ).hide().slideDown();      
     });
    }
  });
});







/* json-server --watch dados.json */