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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/02.01.2023_-_Posse_de_Silvio_Almeida%2C_Ministro_de_Estado_dos_Direitos_Humanos_e_Cidadania_%2852626896288%29_%28cropped%29.jpg/250px-02.01.2023_-_Posse_de_Silvio_Almeida%2C_Ministro_de_Estado_dos_Direitos_Humanos_e_Cidadania_%2852626896288%29_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Artigo: 'O que é racismo Estrutural?' - Geledés",
      url: "https://pt.wikipedia.org/wiki/Silvio_Almeida",
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
      titulo: "Ailton Krenak - Academia Brasileira de Letras",
      url: "https://www.academia.org.br/academicos/ailton-krenak",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Djamila_Ribeiro.jpg/330px-Djamila_Ribeiro.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Djamila Ribeiro",
      url: "https://www.djamilaribeiro.com.br/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sueli-carneiro-foto-andre-seiti-e1521580460291.jpg/250px-Sueli-carneiro-foto-andre-seiti-e1521580460291.jpg",
    sugestaoLink: {
      titulo: "Biografia de Sueli Carneiro - Acervo Casa Sueli Carneiro",
      url: "https://acervo.casasuelicarneiro.org.br/biografia",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg/250px-L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg",
    sugestaoLink: {
      titulo:
        "Lélia Gonzalez - Enciclopédia de Antropologia",
      url: "https://ea.fflch.usp.br/autor/lelia-gonzalez",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Concei%C3%A7%C3%A3o_Evaristo%2C_September_2024.jpg/250px-Concei%C3%A7%C3%A3o_Evaristo%2C_September_2024.jpg",
    sugestaoLink: {
      titulo: "Enciclopédia Itaú Cultural - Conceição Evaristo",
      url: "https://enciclopedia.itaucultural.org.br/pessoas/1667-conceicao-evaristo#:~:text=Nasce%20em%20uma%20comunidade%20no,%C3%A9%20aprovada%20para%20o%20magist%C3%A9rio.",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Abdias_do_Nascimento_senador.jpg/260px-Abdias_do_Nascimento_senador.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Davi_Kopenawa_Yanomami_at_2024_Cannes_Film_Festival_for_The_Falling_Sky_%28cropped%29.jpg/250px-Davi_Kopenawa_Yanomami_at_2024_Cannes_Film_Festival_for_The_Falling_Sky_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Biografia de Davi Kopenawa - Survival Brasil",
      url: "https://www.survivalbrasil.org/informacao/davibiografia",
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
      "https://miltonsantos.com.br/site/wp-content/uploads/2011/04/23-300x214.jpg",
    sugestaoLink: {
      titulo:
        "Site Oficial Milton Santos - Vida e Obra",
      url: "https://miltonsantos.com.br/site/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Carolina_Maria_de_Jesus_assinando_seu_livro_Quarto_de_Despejo_em_1960.jpg/250px-Carolina_Maria_de_Jesus_assinando_seu_livro_Quarto_de_Despejo_em_1960.jpg",
    sugestaoLink: {
      titulo:
        "Exposição 'Carolina Maria de Jesus: Um Brasil para os Brasileiros' - SESC Rio Preto",
      url: "https://ims.com.br/exposicao/carolina-maria-de-jesus-um-brasil-para-os-brasileiros-sesc-rio-preto/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Marielle_Franco.jpg/250px-Marielle_Franco.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2023-01-26_Anielle_Franco.JPG/250px-2023-01-26_Anielle_Franco.JPG",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Liniker_%2B_Tulipa_Ruiz_%2852188211872%29_%28cropped%29.jpg/250px-Liniker_%2B_Tulipa_Ruiz_%2852188211872%29_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Célia Xakriabá",
      url: "https://www.celiaxakriaba.com/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2023-08-04_Joenia_Wapichana_%28cropped%29.jpg/250px-2023-08-04_Joenia_Wapichana_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Joenia Wapichana toma posse e é a primeira indígena a comandar a FUNAI - APIB",
      url: "https://apiboficial.org/2023/02/03/joenia-wapichana-tome-posse-e-e-a-primeira-indigena-a-comandar-a-funai/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cacique_Raoni_%282013%29.jpg/250px-Cacique_Raoni_%282013%29.jpg",
    sugestaoLink: {
      titulo: "Biografia de Raoni Metuktire - Cartas Indígenas São Brasil",
      url: "https://cartasindigenasaobrasil.com.br/biografia/raoni-metuktire/",
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
      titulo: "Zumbi dos Palmares - Herói Nacional",
      url: "https://www.gov.br/palmares/pt-br/assuntos/noticias/zumbi-heroi-nacional",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea1Je_bKkveoB_TnTeK5eZqbAsvlpXOyxdA&s",
    sugestaoLink: {
      titulo: "Dandara dos Palmares - Ebiografia",
      url: "https://www.ebiografia.com/dandara_dos_palmares/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Luiz_Gama_perfil.jpg/250px-Luiz_Gama_perfil.jpg",
    sugestaoLink: {
      titulo:
        "Luiz Gama, o advogado que libertou 500 escravos - Aventuras na História",
      url: "https://aventurasnahistoria.com.br/noticias/reportagem/luiz-gama-o-advogado-que-libertou-mais-de-500-escravizados.phtml",
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
      url: "https://aventurasnahistoria.com.br/noticias/reportagem/machado-de-assis-conheca-o-grande-erro-de-seculos-com-a-imagem-do-bruxo-do-cosme-velho.phtml",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Emicida_Festival_Sensacional_2020_%28cropped%29.jpg/250px-Emicida_Festival_Sensacional_2020_%28cropped%29.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Emicida",
      url: "https://emicida.com.br/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/L%C3%A1zaro_Ramos_01.jpg/250px-L%C3%A1zaro_Ramos_01.jpg",
    sugestaoLink: {
      titulo: "Site Oficial de Lázaro Ramos",
      url: "https://lazaroramos.com.br/",
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
      titulo: "Elza Soares - Ebiografia",
      url: "https://www.ebiografia.com/elza_soares/",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Daniel_Munduruku%2C_May_2025.jpg/250px-Daniel_Munduruku%2C_May_2025.jpg",
    sugestaoLink: {
      titulo: "Daniel Munduruku - Wikipédia",
      url: "https://pt.wikipedia.org/wiki/Daniel_Munduruku",
    },
  },
];
