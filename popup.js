document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Envia a mensagem para o content.js pedindo a análise
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "analisarPagina" },
      function (response) {
        const canvasContainer = document.getElementById("chart-container");
        const mensagemDiv = document.getElementById("mensagem");
        const sugestoesContainer = document.getElementById(
          "sugestoes-container"
        );

        // Verifica se a resposta do content.js veio e se contém dados
        if (response && response.dados && response.dados.length > 0) {
          // --- PARTE 1: LÓGICA DO GRÁFICO ---

          // Processa os dados para contar as etnias
          const contagemEtnia = response.dados.reduce((acc, pessoa) => {
            acc[pessoa.etnia] = (acc[pessoa.etnia] || 0) + 1;
            return acc;
          }, {});

          const labels = Object.keys(contagemEtnia);
          const data = Object.values(contagemEtnia);

          // Cria o gráfico
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

          // --- PARTE 2: LÓGICA DAS SUGESTÕES ---

          // Adiciona um título à seção de sugestões
          sugestoesContainer.innerHTML = "<h2>Para Saber Mais:</h2>";

          // Para cada pessoa encontrada, cria e adiciona um link
          response.dados.forEach((pessoa) => {
            if (pessoa.sugestaoLink && pessoa.sugestaoLink.url) {
              const link = document.createElement("a");
              link.href = pessoa.sugestaoLink.url;
              link.textContent = pessoa.sugestaoLink.titulo;
              link.target = "_blank"; // Para abrir em nova aba

              sugestoesContainer.appendChild(link);
            }
          });
        } else {
          // Se não encontrar dados, mostra a mensagem de "nada encontrado"
          canvasContainer.style.display = "none";
          mensagemDiv.innerHTML =
            "<p>Nenhuma personalidade do nosso banco de dados foi encontrada.</p>";
        }
      }
    );
  });
});
