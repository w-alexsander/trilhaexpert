const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipulação de banco de dados",
        "Estilização de páginas web",
        "Adicionar interatividade a páginas web"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let variavel = 10;",
        "const variavel = 'texto';",
        "both A and B"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo",
        "Compara valores e tipos de dados",
        "Concatena strings"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Um operador lógico"
      ],
      correta: 1
    },
    {
      pergunta: "Como você comenta uma única linha em JavaScript?",
      respostas: [
        "/* Comentário */",
        "// Comentário",
        "<!-- Comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - Uma linguagem de programação",
        "Display Object Manager - Gerenciador de exibição",
        "Document Object Model - Uma interface para interagir com documentos HTML e XML"
      ],
      correta: 2
    },
    {
      pergunta: "Como você executa um loop 'for' em JavaScript?",
      respostas: [
        "for (i <= 10; i++) { /* código */ }",
        "for (let i = 0; i < 10; i++) { /* código */ }",
        "loop.for (i = 0; i < 10) { /* código */ }"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener'?",
      respostas: [
        "Adicionar estilos a um elemento",
        "Manipular eventos do DOM",
        "Realizar operações matemáticas"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um formato de dados para intercâmbio de informações",
        "Uma biblioteca JavaScript popular",
        "Um método para criar funções em JavaScript"
      ],
      correta: 0
    },
    {
      pergunta: "Como você converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt('42')",
        "Number('42')",
        "both A and B"
      ],
      correta: 2
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  // loop

  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }

quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
   quiz.appendChild(quizItem)

}