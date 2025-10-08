// Esta é a nova função do content.js: ouvir mensagens

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Verifica se a mensagem recebida é a que esperamos
  if (request.action === "analisarPagina") {
    console.log("Recebido pedido de análise do popup.");

    // Executa a mesma lógica de análise que já tínhamos
    const textoDaPagina = document.body.innerText;
    let pessoasEncontradas = [];

    bancoDeDados.forEach((pessoa) => {
      if (textoDaPagina.includes(pessoa.nome)) {
        pessoasEncontradas.push(pessoa);
      }
    });

    // Envia a resposta de volta para o popup.js
    sendResponse({ dados: pessoasEncontradas });
  }
});
