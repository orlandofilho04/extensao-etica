// Ouve qualquer mensagem enviada por outras partes da extensão
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Verifica se a mensagem é para 'atualizarIcone'
  if (request.action === "atualizarIcone") {
    const count = request.count;

    // Se o número for maior que 0, mostra o badge
    if (count > 0) {
      // chrome.action.setBadgeText é a função que cria o badge
      chrome.action.setBadgeText({
        text: count.toString(),
        tabId: sender.tab.id, // Mostra o badge apenas na aba que enviou a mensagem
      });
      chrome.action.setBadgeBackgroundColor({
        color: "#e74c3c", // Uma cor vermelha
        tabId: sender.tab.id,
      });
    } else {
      // Se for 0, limpa o badge da aba
      chrome.action.setBadgeText({ text: "", tabId: sender.tab.id });
    }
  }
});
