const bancoDeDados = [
  // =================================================================
  // == FILOSOFIA, ACADEMIA E LITERATURA
  // =================================================================
  {
    nome: "Silvio Almeida",
    genero: "Homem",
    area: "Direito/Filosofia",
    etnia: "Negro",
    sugestaoLink: {
      titulo: "Artigo: 'O que é racismo estrutural?' - Geledés",
      url: "https://www.geledes.org.br/o-que-e-racismo-estrutural-de-silvio-almeida/",
    },
  },
  {
    nome: "Ailton Krenak",
    genero: "Homem",
    area: "Filosofia/Ativismo",
    etnia: "Indígena",
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
    sugestaoLink: {
      titulo: "Instituto Marielle Franco",
      url: "https://www.institutomariellefranco.org/",
    },
  },
  {
    nome: "Sonia Guajajara",
    genero: "Mulher",
    area: "Ativismo/Política",
    etnia: "Indígena",
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
    sugestaoLink: {
      titulo: "Site Oficial de Daniel Munduruku",
      url: "https://danielmunduruku.com.br/",
    },
  },
];
