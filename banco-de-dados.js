const bancoDeDados = [
  // =================================================================
  // == FILOSOFIA, ACADEMIA E LITERATURA
  // =================================================================
  {
    nome: "Silvio Almeida",
    genero: "Homem",
    area: "Direito/Filosofia",
    etnia: "Negro",
    bioCurta:
      "Advogado, filósofo e Ministro dos Direitos Humanos do Brasil. Autor de obras influentes como 'Racismo Estrutural'.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Silvio_Almeida_em_2023.jpg/800px-Silvio_Almeida_em_2023.jpg",
    sugestaoLink: {
      titulo: "Artigo: 'O que é racismo Estrutural?' - Geledés",
      url: "https://www.geledes.org.br/o-que-e-racismo-estrutural-de-silvio-almeida/",
    },
  },
  {
    nome: "Ailton Krenak",
    genero: "Homem",
    area: "Filosofia/Ativismo",
    etnia: "Indígena",
    bioCurta:
      "Líder indígena, ambientalista e escritor. Autor de 'Ideias para Adiar o Fim do Mundo', é uma das maiores vozes do pensamento indígena contemporâneo.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ailton_Krenak_%285269420566%29_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "'Ideias para Adiar o Fim do Mundo' - Companhia das Letras",
      url: "https://www.companhiadasletras.com.br/livro/9788535932158/ideias-para-adiar-o-fim-do-mundo",
    },
  },
  {
    nome: "Djamila Ribeiro",
    genero: "Mulher",
    area: "Filosofia/Ativismo",
    etnia: "Negra",
    bioCurta:
      "Filósofa, feminista e escritora. Autora de best-sellers como 'Pequeno Manual Antirracista', é uma importante voz na luta antirracista.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Djamila_Ribeiro_em_2017_%282%29.jpg/800px-Djamila_Ribeiro_em_2017_%282%29.jpg",
    sugestaoLink: {
      titulo: "Selo Sueli Carneiro, fundado por Djamila Ribeiro",
      url: "https://www.selosuelicarneiro.com.br/",
    },
  },
  {
    nome: "Sueli Carneiro",
    genero: "Mulher",
    area: "Filosofia/Ativismo",
    etnia: "Negra",
    bioCurta:
      "Filósofa, escritora e uma das maiores ativistas do movimento negro no Brasil. Fundadora do Geledés – Instituto da Mulher Negra.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sueli_Carneiro_no_Sesc_24_de_Maio.jpg/800px-Sueli_Carneiro_no_Sesc_24_de_Maio.jpg",
    sugestaoLink: {
      titulo: "Biografia de Sueli Carneiro - Geledés",
      url: "https://www.geledes.org.br/sueli-carneiro-biografia/",
    },
  },
  {
    nome: "Lélia Gonzalez",
    genero: "Mulher",
    area: "Filosofia/Antropologia",
    etnia: "Negra",
    bioCurta:
      "Intelectual, política e antropóloga. Foi uma figura pioneira nos estudos sobre a cultura negra no Brasil e no feminismo negro.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/L%C3%A9lia_Gonzalez_em_1986.jpg/800px-L%C3%A9lia_Gonzalez_em_1986.jpg",
    sugestaoLink: {
      titulo:
        "Lélia Gonzalez: a amefricanidade e o feminismo negro - Politize!",
      url: "https://www.politize.com.br/lelia-gonzalez-amefricanidade-feminismo-negro/",
    },
  },
  {
    nome: "Conceição Evaristo",
    genero: "Mulher",
    area: "Literatura",
    etnia: "Negra",
    bioCurta:
      "Escritora e linguista, uma das mais importantes da literatura contemporânea. Conhecida pelo conceito de 'escrevivência'.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Concei%C3%A7%C3%A3o_Evaristo_na_FLUP_2017.jpg/800px-Concei%C3%A7%C3%A3o_Evaristo_na_FLUP_2017.jpg",
    sugestaoLink: {
      titulo: "Enciclopédia Itaú Cultural - Conceição Evaristo",
      url: "https://enciclopedia.itaucultural.org.br/pessoa423589/conceicao-evaristo",
    },
  },
  {
    nome: "Abdias do Nascimento",
    genero: "Homem",
    area: "Ativismo/Teatro/Política",
    etnia: "Negro",
    bioCurta:
      "Ativista, escritor e artista plástico. Foi um dos maiores expoentes da cultura e dos direitos do povo negro no século XX.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Abdias_do_Nascimento.jpg/800px-Abdias_do_Nascimento.jpg",
    sugestaoLink: {
      titulo: "Acervo Digital Abdias do Nascimento - IPEAFRO",
      url: "https://ipeafro.org.br/",
    },
  },
  {
    nome: "Davi Kopenawa",
    genero: "Homem",
    area: "Ativismo/Xamanismo",
    etnia: "Indígena",
    bioCurta:
      "Xamã e porta-voz do povo Yanomami. Co-autor do livro 'A Queda do Céu', um marco da cosmologia e da luta indígena.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Davi_Kopenawa_Yanomami.jpg/800px-Davi_Kopenawa_Yanomami.jpg",
    sugestaoLink: {
      titulo: "'A Queda do Céu', livro de Davi Kopenawa e Bruce Albert",
      url: "https://www.companhiadasletras.com.br/livro/9788535926225/a-queda-do-ceu",
    },
  },
  {
    nome: "Milton Santos",
    genero: "Homem",
    area: "Geografia/Academia",
    etnia: "Negro",
    bioCurta:
      "Geógrafo renomado e um dos maiores intelectuais do Brasil. Conhecido por sua análise crítica da globalização.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Miltong.jpg/800px-Miltong.jpg",
    sugestaoLink: {
      titulo:
        "Documentário 'Milton Santos e o Mundo Global Visto do Lado de Cá'",
      url: "https://www.youtube.com/watch?v=JcWEm2w-2-M",
    },
  },
  {
    nome: "Carolina Maria de Jesus",
    genero: "Mulher",
    area: "Literatura",
    etnia: "Negra",
    bioCurta:
      "Escritora, autora do best-seller 'Quarto de Despejo: Diário de uma Favelada', um relato contundente da vida na favela.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Carolina_Maria_de_Jesus_em_1961.jpg",
    sugestaoLink: {
      titulo:
        "Exposição Virtual 'Carolina Maria de Jesus: Um Brasil para os brasileiros'",
      url: "https://www.ims.com.br/exposicao/carolina-maria-de-jesus-um-brasil-para-os-brasileiros-ims-paulista/",
    },
  },

  // =================================================================
  // == POLÍTICA E ATIVISMO
  // =================================================================
  {
    nome: "Marielle Franco",
    genero: "Mulher",
    area: "Política",
    etnia: "Negra",
    bioCurta:
      "Socióloga e política, foi vereadora no Rio de Janeiro. Sua vida foi marcada pela defesa dos direitos humanos, sendo brutalmente assassinada em 2018.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Marielle_Franco_em_junho_de_2017.jpg/800px-Marielle_Franco_em_junho_de_2017.jpg",
    sugestaoLink: {
      titulo: "Instituto Marielle Franco",
      url: "https://www.institutomariellefranco.org/",
    },
  },
  {
    nome: "Sônia Guajajara",
    genero: "Mulher",
    area: "Ativismo/Política",
    etnia: "Indígena",
    bioCurta:
      "Líder indígena e Ministra dos Povos Indígenas do Brasil. Uma das principais vozes na luta pelos direitos indígenas e pelo meio ambiente.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/11.01.2023_-_Cerim%C3%B4nias_de_assun%C3%A7%C3%A3o_nos_cargos_das_ministras_da_Igualdade_Racial%2C_Anielle_Franco%2C_e_dos_Povos_Ind%C3%ADgenas%2C_S%C3%B4nia_Guajajara_%2852650320567%29_%28cropped%29.jpg/250px-thumbnail.jpg",
    sugestaoLink: {
      titulo: "Conheça a APIB (Articulação dos Povos Indígenas do Brasil)",
      url: "https://apiboficial.org/",
    },
  },
  {
    nome: "Anielle Franco",
    genero: "Mulher",
    area: "Política/Ativismo",
    etnia: "Negra",
    bioCurta:
      "Educadora e Ministra da Igualdade Racial do Brasil. Irmã de Marielle Franco, dá continuidade ao seu legado através do Instituto e da política.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Anielle_Franco_em_2023.jpg/800px-Anielle_Franco_em_2023.jpg",
    sugestaoLink: {
      titulo: "Ministério da Igualdade Racial",
      url: "https://www.gov.br/igualdaderacial/pt-br",
    },
  },
  {
    nome: "Célia Xakriabá",
    genero: "Mulher",
    area: "Política/Ativismo",
    etnia: "Indígena",
    bioCurta:
      "Ativista e deputada federal. É uma forte defensora da educação indígena e dos direitos territoriais de seu povo.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/C%C3%A9lia_Xakriab%C3%A1_%2852685233931%29.jpg/800px-C%C3%A9lia_Xakriab%C3%A1_%2852685233931%29.jpg",
    sugestaoLink: {
      titulo: "Perfil na Câmara dos Deputados",
      url: "https://www.camara.leg.br/deputados/220556/biografia",
    },
  },
  {
    nome: "Joenia Wapichana",
    genero: "Mulher",
    area: "Direito/Política",
    etnia: "Indígena",
    bioCurta:
      "Primeira mulher indígena a se formar em direito no Brasil e a ser eleita deputada federal. Atualmente, preside a FUNAI.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Joenia_Wapichana_em_2019.jpg/800px-Joenia_Wapichana_em_2019.jpg",
    sugestaoLink: {
      titulo: "Joenia Wapichana assume a presidência da Funai - GOV.BR",
      url: "https://www.gov.br/funai/pt-br/assuntos/noticias/2023/joenia-wapichana-assume-a-presidencia-da-funai",
    },
  },
  {
    nome: "Raoni Metuktire",
    genero: "Homem",
    area: "Ativismo",
    etnia: "Indígena",
    bioCurta:
      "Líder do povo Kayapó, é uma figura mundialmente reconhecida pela sua luta pela preservação da Amazônia e dos povos indígenas.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chief_Raoni_in_2018.jpg/800px-Chief_Raoni_in_2018.jpg",
    sugestaoLink: {
      titulo: "Instituto Raoni",
      url: "https://www.institutoraoni.org/",
    },
  },

  // =================================================================
  // == FIGURAS HISTÓRICAS
  // =================================================================
  {
    nome: "Zumbi dos Palmares",
    genero: "Homem",
    area: "Liderança Quilombola",
    etnia: "Negro",
    bioCurta:
      "Último líder do Quilombo dos Palmares, o maior do período colonial. É um ícone da resistência negra contra a escravidão.",
    imagemUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyMF5XICWdvxxGifuUGfUo9O354_Gc0EoWsNKHgEPjl99v_6EXgB9ZbLElp-fbHOGtWF9pJxDmB44ECFVCbJZenewU4eQL9qeMUe1mhsYY",
    sugestaoLink: {
      titulo: "Fundação Cultural Palmares - Quem foi Zumbi",
      url: "https://www.palmares.gov.br/?p=57551",
    },
  },
  {
    nome: "Dandara dos Palmares",
    genero: "Mulher",
    area: "Liderança Quilombola",
    etnia: "Negra",
    bioCurta:
      "Guerreira e líder feminina no Quilombo dos Palmares. Lutou ao lado de Zumbi e foi fundamental na resistência do quilombo.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Est%C3%A1tua_de_Dandara_dos_Palmares.jpg/800px-Est%C3%A1tua_de_Dandara_dos_Palmares.jpg",
    sugestaoLink: {
      titulo: "Dandara dos Palmares, a heroína que o Brasil esqueceu - El País",
      url: "https://brasil.elpais.com/brasil/2019/02/19/politica/1550598822_369762.html",
    },
  },
  {
    nome: "Luiz Gama",
    genero: "Homem",
    area: "Abolicionista/Direito",
    etnia: "Negro",
    bioCurta:
      "Advogado autodidata, jornalista e escritor. Um dos maiores abolicionistas, libertou mais de 500 pessoas escravizadas através da lei.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Luiz_Gama_3.jpg/800px-Luiz_Gama_3.jpg",
    sugestaoLink: {
      titulo:
        "Luiz Gama, o advogado que libertou 500 escravos - Aventuras na História",
      url: "https://aventurasnahistoria.uol.com.br/noticias/reportagem/luiz-gama-o-advogado-que-libertou-500-escravos-e-nunca-se-formou-em-direito.phtml",
    },
  },
  {
    nome: "Machado de Assis",
    genero: "Homem",
    area: "Literatura",
    etnia: "Negro",
    bioCurta:
      "Considerado o maior escritor da literatura brasileira. Sua ascendência negra foi por muito tempo invisibilizada pela crítica tradicional.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Machado_de_Assis_by_Marc_Ferrez.jpg/250px-Machado_de_Assis_by_Marc_Ferrez.jpg",
    sugestaoLink: {
      titulo: "Projeto 'Machado de Assis Negro' resgata a imagem do autor",
      url: "https://www.correiobraziliense.com.br/diversao-e-arte/2021/05/4924296-projeto-machado-de-assis-negro-resgata-a-imagem-real-do-autor.html",
    },
  },

  // =================================================================
  // == ARTES E CULTURA
  // =================================================================
  {
    nome: "Emicida",
    genero: "Homem",
    area: "Música/Literatura",
    etnia: "Negro",
    bioCurta:
      "Rapper, cantor e escritor, é um dos artistas mais influentes de sua geração, conhecido por suas letras socialmente conscientes.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Emicida_-_2019_%2848911578326%29_%28cropped%29.jpg/800px-Emicida_-_2019_%2848911578326%29_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Documentário 'AmarElo - É Tudo Pra Ontem' - Netflix",
      url: "https://www.netflix.com/title/81223964",
    },
  },
  {
    nome: "Lázaro Ramos",
    genero: "Homem",
    area: "Ator/Cinema/Literatura",
    etnia: "Negro",
    bioCurta:
      "Ator, diretor e escritor. Um dos artistas mais conhecidos do Brasil, atua fortemente no debate sobre questões raciais.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/L%C3%A1zaro_Ramos_em_2017.jpg/800px-L%C3%A1zaro_Ramos_em_2017.jpg",
    sugestaoLink: {
      titulo: "Livro 'Na Minha Pele' - Companhia das Letras",
      url: "https://www.companhiadasletras.com.br/livro/9788547000427/na-minha-pele",
    },
  },
  {
    nome: "Gilberto Gil",
    genero: "Homem",
    area: "Música",
    etnia: "Negro",
    bioCurta:
      "Cantor, compositor e ex-Ministro da Cultura. Um dos criadores do Tropicalismo e um pilar da música popular brasileira.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gilberto_Gil%2C_May_2025.jpg/250px-Gilberto_Gil%2C_May_2025.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Gilberto Gil",
      url: "https://gilbertogil.com.br/",
    },
  },
  {
    nome: "Elza Soares",
    genero: "Mulher",
    area: "Música",
    etnia: "Negra",
    bioCurta:
      "Eleita a 'Voz do Milênio', foi uma das maiores cantoras da história da música brasileira, conhecida por sua voz potente e vida de superação.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Elza_Soares_recebendo_o_diploma_de_Embaixatriz_do_Samba_no_Museu_da_Imagem_e_do_Sim%2C_com_Garrincha_ao_fundo_%28cropped%29.tif/339px-Elza_Soares_recebendo_o_diploma_de_Embaixatriz_do_Samba_no_Museu_da_Imagem_e_do_Sim%2C_com_Garrincha_ao_fundo_%28cropped%29.tif.jpg",
    sugestaoLink: {
      titulo: "Biografia de Elza Soares - Site Oficial",
      url: "https://www.elzasoares.com.br/biografia",
    },
  },
  {
    nome: "Daniel Munduruku",
    genero: "Homem",
    area: "Literatura/Ativismo",
    etnia: "Indígena",
    bioCurta:
      "Escritor e professor pertencente ao povo Munduruku. É um dos maiores nomes da literatura infanto-juvenil indígena no Brasil.",
    imagemUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Daniel_Munduruku_-_Bienal_do_Livro_de_Minas_2014.jpg/800px-Daniel_Munduruku_-_Bienal_do_Livro_de_Minas_2014.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Daniel Munduruku",
      url: "https://danielmunduruku.com.br/",
    },
  },
];
