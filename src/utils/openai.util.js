export const openAIGames = [
  {
    language: "english",
    data: [
      {
        level: "easy",
        config: [
          {
            role: "system",
            content:
              'A sua missão será retornar um conjunto de palavras em inglês e suas traduções em portugues, contendo 4 alternativas sendo uma delas a correta e precisa estar na ordem aleatória. O formato retornado deverá ser assim: [{"english_word": "hello", "translate": "olá", "options": ["olá", "tchau", "bem vindo", "surpresa"]}].',
          },
          {
            role: "user",
            content:
              "Traga para mim 20 palavras em inglês e suas traduções em português",
          },
        ],
      },
    ],
  },
];
