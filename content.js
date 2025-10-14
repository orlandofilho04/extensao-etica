let pessoasEncontradasNaPagina = [];

// Função principal que roda assim que o script é injetado
function analisarEAtivar() {
  const textoDaPagina = document.body.innerText;
  let pessoasEncontradas = [];

  // 1. Analisa o texto e encontra as personalidades
  bancoDeDados.forEach((pessoa) => {
    // Usamos uma expressão regular para encontrar o nome completo, evitando falsos positivos
    // A flag 'g' garante que todas as ocorrências sejam encontradas
    const regex = new RegExp(`\\b${pessoa.nome}\\b`, "g");
    if (textoDaPagina.match(regex)) {
      pessoasEncontradas.push(pessoa);
    }
  });

  pessoasEncontradasNaPagina = pessoasEncontradas; // Salva para uso posterior pelo popup

  // 2. Envia a contagem para o background script (para o badge)
  chrome.runtime.sendMessage({
    action: "atualizarIcone",
    count: pessoasEncontradas.length,
  });

  // 3. Se encontrou alguém, começa o processo de destacar
  if (pessoasEncontradas.length > 0) {
    const nomes = pessoasEncontradas.map((p) => p.nome);
    destacarNomes(document.body, nomes);
  }
}

// Função mágica para destacar os nomes sem quebrar o HTML da página
function destacarNomes(elemento, nomes) {
  const regex = new RegExp(`\\b(${nomes.join("|")})\\b`, "gi");

  // Percorre todos os "nós" do HTML da página
  const treeWalker = document.createTreeWalker(elemento, NodeFilter.SHOW_TEXT);
  let nósDeTexto = [];
  while (treeWalker.nextNode()) {
    // Adiciona apenas os nós que não estão dentro de tags de script ou estilo
    if (
      treeWalker.currentNode.parentElement.tagName !== "SCRIPT" &&
      treeWalker.currentNode.parentElement.tagName !== "STYLE"
    ) {
      nósDeTexto.push(treeWalker.currentNode);
    }
  }

  // Para cada nó de texto, substitui o nome por uma tag <mark>
  nósDeTexto.forEach((nó) => {
    const texto = nó.nodeValue;
    if (regex.test(texto)) {
      const novoSpan = document.createElement("span");
      novoSpan.innerHTML = texto.replace(regex, (match) => {
        return `<mark style="background-color: #FFDE59; padding: 2px; border-radius: 3px;">${match}</mark>`;
      });
      nó.parentNode.replaceChild(novoSpan, nó);
    }
  });
}

// Ouve o pedido do popup (esta parte continua a mesma)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "analisarPagina") {
    // Simplesmente envia os dados que já analisamos quando a página carregou
    sendResponse({ dados: pessoasEncontradasNaPagina });
  }
  // Retornar true é importante para indicar que a resposta será assíncrona
  return true;
});

// Inicia todo o processo
analisarEAtivar();
