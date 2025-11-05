let pessoasEncontradasNaPagina = [];

// --- CRIAÇÃO DO TOOLTIP (só acontece uma vez) ---
const tooltip = document.createElement("div");
tooltip.id = "ar-tooltip"; // ar = Análise de Representatividade
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.border = "1px solid #ccc";
tooltip.style.backgroundColor = "white";
tooltip.style.padding = "10px";
tooltip.style.borderRadius = "5px";
tooltip.style.zIndex = "10000";
tooltip.style.width = "250px";
tooltip.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
tooltip.style.fontFamily = "sans-serif";
tooltip.style.fontSize = "14px";
tooltip.style.color = "black";
document.body.appendChild(tooltip);

// Função principal que roda assim que o script é injetado
function analisarEAtivar() {
  const textoDaPagina = document.body.innerText;
  let pessoasEncontradas = [];

  // Função para normalizar texto (remover acentos)
  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Função para escapar caracteres especiais em regex
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // 1. Analisa e encontra as personalidades
  bancoDeDados.forEach((pessoa) => {
    const nomeNormalizado = escapeRegExp(normalizeText(pessoa.nome));
    const textoNormalizado = normalizeText(textoDaPagina);
    const regex = new RegExp(`\\b${nomeNormalizado}\\b`, "gi");
    if (textoNormalizado.match(regex)) {
      pessoasEncontradas.push(pessoa);
    }
  });

  pessoasEncontradasNaPagina = pessoasEncontradas;

  // 2. Envia a contagem para o background script (para o badge)
  chrome.runtime.sendMessage({
    action: "atualizarIcone",
    count: pessoasEncontradas.length,
  });

  // 3. Se encontrou alguém, destaca os nomes
  if (pessoasEncontradas.length > 0) {
    destacarNomes(document.body, pessoasEncontradas);
  }
}

// Função para destacar os nomes
function destacarNomes(elemento, pessoas) {
  // Função auxiliar para escapar caracteres especiais em regex
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Função para normalizar texto (remover acentos para comparação)
  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Cria um mapa de nome -> pessoa para acesso rápido
  const pessoasMap = new Map(
    pessoas.map((p) => [normalizeText(p.nome.toLowerCase()), p])
  );

  // Prepara os nomes para a regex considerando variações com e sem acento
  const nomesNormalizados = pessoas.map((p) => {
    const nomeEscapado = escapeRegExp(p.nome);
    const nomeNormalizado = normalizeText(p.nome);
    return nomeEscapado === nomeNormalizado
      ? nomeEscapado
      : `(?:${nomeEscapado}|${escapeRegExp(nomeNormalizado)})`;
  });

  // Cria regex com todas as variações possíveis dos nomes
  const nomesRegex = new RegExp(`\\b(${nomesNormalizados.join("|")})\\b`, "gi");

  const treeWalker = document.createTreeWalker(elemento, NodeFilter.SHOW_TEXT);
  let nósDeTexto = [];
  while (treeWalker.nextNode()) {
    if (
      treeWalker.currentNode.parentElement.tagName !== "SCRIPT" &&
      treeWalker.currentNode.parentElement.tagName !== "STYLE"
    ) {
      nósDeTexto.push(treeWalker.currentNode);
    }
  }

  nósDeTexto.forEach((nó) => {
    const texto = nó.nodeValue;
    if (nomesRegex.test(texto)) {
      const novoSpan = document.createElement("span");
      // A mágica acontece aqui: criamos uma tag <mark> com 'data-attributes'
      novoSpan.innerHTML = texto.replace(nomesRegex, (match) => {
        const pessoa = pessoasMap.get(normalizeText(match.toLowerCase()));
        // Codificamos a bio para evitar problemas com aspas
        const bioCodificada = pessoa.bioCurta.replace(/"/g, "&quot;");
        return `<mark class="ar-destaque" data-bio="${bioCodificada}" data-imagem="${pessoa.imagemUrl}" style="background-color: #FFDE59; padding: 2px; border-radius: 3px; cursor: pointer;">${match}</mark>`;
      });
      nó.parentNode.replaceChild(novoSpan, nó);
    }
  });
}

// --- CONTROLE DO TOOLTIP COM O MOUSE ---

document.body.addEventListener("mouseover", function (e) {
  // Se o mouse está sobre um dos nossos destaques
  if (e.target.classList.contains("ar-destaque")) {
    const bio = e.target.getAttribute("data-bio");
    const imagem = e.target.getAttribute("data-imagem");

    // Monta o HTML interno do tooltip
    tooltip.innerHTML = `
      <img src="${imagem}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 3px;">
      <p style="margin: 5px 0 0 0;">${bio}</p>
    `;

    // Posiciona o tooltip perto do mouse
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.style.display = "block";
  }
});

document.body.addEventListener("mouseout", function (e) {
  // Se o mouse sair de um dos nossos destaques, esconde o tooltip
  if (e.target.classList.contains("ar-destaque")) {
    tooltip.style.display = "none";
  }
});

// Move o tooltip junto com o mouse
document.body.addEventListener("mousemove", function (e) {
  if (tooltip.style.display === "block") {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  }
});

// Ouve o pedido do popup (continua igual)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "analisarPagina") {
    sendResponse({ dados: pessoasEncontradasNaPagina });
  }
  return true;
});

// Inicia todo o processo
analisarEAtivar();
