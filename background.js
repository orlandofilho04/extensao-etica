// Ouve qualquer mensagem enviada por outras partes da extensão
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Verifica se a mensagem é para 'atualizarIcone'
  if (request.action === "atualizarIcone") {
    // --- NOVA VERIFICAÇÃO ---
    // Verifica se a extensão está ativa ANTES de mostrar o badge
    chrome.storage.sync.get(["isExtensionActive"], function (storage) {
      // Por defeito, está ATIVADA (true) se 'isExtensionActive' não for 'false'
      const isActive = storage.isExtensionActive !== false;

      if (!isActive) {
        // Se estiver desligada, certifica-se de que não há badge
        chrome.action.setBadgeText({ text: "", tabId: sender.tab.id });
        return;
      }

      // Se ESTIVER ATIVA, executa a lógica normal do badge
      const count = request.count;

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
    });
    // --- FIM DA NOVA VERIFICAÇÃO ---

    // Retorna true para permitir a resposta assíncrona do storage.get
    return true;
  }
});
