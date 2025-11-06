document.addEventListener("DOMContentLoaded", function () {
  // --- INÍCIO DA NOVA LÓGICA DO INTERRUPTOR ---
  const toggleSwitch = document.getElementById("toggle-switch");

  // 1. Verificar o estado guardado e definir o interruptor
  // Por defeito, a extensão está ATIVADA (true) se nada estiver guardado
  chrome.storage.sync.get(["isExtensionActive"], function (storage) {
    toggleSwitch.checked = storage.isExtensionActive !== false;
  });

  // 2. Ouvir mudanças no interruptor e guardar o novo estado
  toggleSwitch.addEventListener("change", function () {
    const isActive = toggleSwitch.checked;
    chrome.storage.sync.set({ isExtensionActive: isActive }, function () {
      // Recarrega a aba atual para aplicar a mudança imediatamente
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
  // --- FIM DA NOVA LÓGICA DO INTERRUPTOR ---

  // --- LÓGICA EXISTENTE DO POP-UP ---
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "analisarPagina" },
      function (response) {
        const canvasContainer = document.getElementById("chart-container");
        const mensagemDiv = document.getElementById("mensagem");
        const nomesContainer = document.getElementById(
          "nomes-encontrados-container"
        );
        const sugestoesContainer = document.getElementById(
          "sugestoes-container"
        );

        // Se a resposta veio E tem dados, mostramos os resultados
        if (response && response.dados && response.dados.length > 0) {
          // --- PARTE 1: LÓGICA DO GRÁFICO ---
          const contagemEtnia = response.dados.reduce((acc, pessoa) => {
            acc[pessoa.etnia] = (acc[pessoa.etnia] || 0) + 1;
            return acc;
          }, {});
          const labels = Object.keys(contagemEtnia);
          const data = Object.values(contagemEtnia);
          const ctx = document.getElementById("meuGrafico").getContext("2d");
          new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Representatividade por Etnia",
                  data: data,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                  ],
                  borderColor: "rgba(255, 255, 255, 1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: {
                  display: true,
                  text: "Distribuição Étnica das Pessoas Mencionadas",
                },
              },
            },
          });

          // --- PARTE 2: LISTAR NOMES ENCONTRADOS ---
          nomesContainer.innerHTML = "<h3>Personalidades Encontradas:</h3>";
          const nomesArray = response.dados.map((pessoa) => pessoa.nome);
          const nomesString = nomesArray.join(", ");
          const p = document.createElement("p");
          p.textContent = nomesString;
          nomesContainer.appendChild(p);

          // --- PARTE 3: LÓGICA DAS SUGESTÕES ---
          sugestoesContainer.innerHTML = "<h2>Para Saber Mais:</h2>";
          response.dados.forEach((pessoa) => {
            if (pessoa.sugestaoLink && pessoa.sugestaoLink.url) {
              const link = document.createElement("a");
              link.href = pessoa.sugestaoLink.url;
              link.textContent = pessoa.sugestaoLink.titulo;
              link.target = "_blank";
              sugestoesContainer.appendChild(link);
            }
          });
        } else {
          // Se não houver resposta (extensão desligada) ou não encontrar dados

          // Esconde as secções de dados
          canvasContainer.style.display = "none";
          nomesContainer.style.display = "none";
          sugestoesContainer.style.display = "none";

          // Mostra a mensagem correta
          chrome.storage.sync.get(["isExtensionActive"], function (storage) {
            if (storage.isExtensionActive === false) {
              mensagemDiv.innerHTML =
                "<p>A extensão está desativada. Ligue-a no interruptor acima para analisar as páginas.</p>";
            } else {
              mensagemDiv.innerHTML =
                "<p>Nenhuma personalidade da nossa base de dados foi encontrada.</p>";
            }
          });
        }
      }
    );
  });
});
