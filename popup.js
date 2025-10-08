document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "analisarPagina" },
      function (response) {
        const canvasContainer = document.getElementById("chart-container");
        const mensagemDiv = document.getElementById("mensagem");
        const nomesContainer = document.getElementById(
          "nomes-encontrados-container"
        ); // << Pega a nova div de nomes
        const sugestoesContainer = document.getElementById(
          "sugestoes-container"
        );

        if (response && response.dados && response.dados.length > 0) {
          // --- PARTE 1: LÓGICA DO GRÁFICO (sem alterações) ---
          const contagemEtnia = response.dados.reduce((acc, pessoa) => {
            acc[pessoa.etnia] = (acc[pessoa.etnia] || 0) + 1;
            return acc;
          }, {});
          const labels = Object.keys(contagemEtnia);
          const data = Object.values(contagemEtnia);
          const ctx = document.getElementById("meuGrafico").getContext("2d");
          new Chart(ctx, {
            /* ...Configuração do gráfico... */ type: "doughnut",
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

          // --- NOVO BLOCO: LISTAR NOMES ENCONTRADOS ---
          nomesContainer.innerHTML = "<h3>Personalidades Encontradas:</h3>";
          const nomesArray = response.dados.map((pessoa) => pessoa.nome); // Pega apenas os nomes
          const nomesString = nomesArray.join(", "); // Junta os nomes com vírgula
          const p = document.createElement("p");
          p.textContent = nomesString;
          nomesContainer.appendChild(p);

          // --- PARTE 3: LÓGICA DAS SUGESTÕES (sem alterações) ---
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
          // Mensagem de "nada encontrado" (sem alterações)
          canvasContainer.style.display = "none";
          mensagemDiv.innerHTML =
            "<p>Nenhuma personalidade do nosso banco de dados foi encontrada.</p>";
        }
      }
    );
  });
});
