const waves = {
  1: {
    title: "1ª Onda — Sistemas Baseados em Regras",
    period: "Década de 1950 até aproximadamente 1980",
    idea: "A IA seguia regras criadas por humanos. Ela não aprendia sozinha.",
    example: "MYCIN: sistema especialista usado na medicina para auxiliar diagnósticos.",
    points: [
      "Também chamada de sistemas especialistas.",
      "Funcionava com regras do tipo: SE algo acontecer, ENTÃO faça algo.",
      "O conhecimento era colocado manualmente por especialistas.",
      "Era fácil de explicar, mas difícil de manter e atualizar.",
      "Não se adaptava bem a situações novas."
    ],
    keyword: "REGRAS"
  },
  2: {
    title: "2ª Onda — Machine Learning e Redes Neurais",
    period: "Principalmente a partir da década de 1980",
    idea: "A IA passa a aprender com dados e exemplos, em vez de depender apenas de regras manuais.",
    example: "Sistemas antifraude de bancos que aprendem padrões de transações suspeitas.",
    points: [
      "Máquinas começam a aprender com exemplos.",
      "Surgem redes neurais com maior importância.",
      "Boa para reconhecimento de padrões.",
      "Depende de dados para treinar.",
      "Pode melhorar seu desempenho com o tempo."
    ],
    keyword: "APRENDIZADO"
  },
  3: {
    title: "3ª Onda — Big Data e IA Cognitiva",
    period: "Anos 2000 até hoje",
    idea: "A IA usa grandes volumes de dados, internet, nuvem e GPUs para resolver problemas complexos.",
    example: "ChatGPT, Netflix, Alexa, reconhecimento facial e diagnósticos por imagem.",
    points: [
      "Baseada em Big Data.",
      "Usa computação em nuvem e GPUs.",
      "Trabalha com linguagem natural, imagens, voz e padrões complexos.",
      "Possibilita assistentes virtuais e sistemas de recomendação.",
      "É a fase mais próxima da IA que usamos no dia a dia."
    ],
    keyword: "BIG DATA"
  }
};

const waveCard = document.getElementById("waveCard");
const buttons = document.querySelectorAll(".wave-btn");

function renderWave(number) {
  const wave = waves[number];

  waveCard.innerHTML = `
    <h3>${wave.title}</h3>
    <p><strong>Período:</strong> ${wave.period}</p>
    <p><strong>Ideia principal:</strong> ${wave.idea}</p>

    <div class="wave-grid">
      <div class="info-box">
        <h4>Pontos importantes</h4>
        <ul>
          ${wave.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      </div>

      <div class="info-box">
        <h4>Exemplo</h4>
        <p>${wave.example}</p>
        <br>
        <h4>Palavra-chave para prova</h4>
        <p><strong>${wave.keyword}</strong></p>
      </div>
    </div>
  `;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderWave(button.dataset.wave);
  });
});

renderWave(1);

document.getElementById("startBtn").addEventListener("click", () => {
  document.querySelector(".timeline-section").scrollIntoView({ behavior: "smooth" });
});

const simScreen = document.getElementById("simScreen");
const simTexts = {
  rules:
`1ª ONDA — REGRAS

SE o paciente tem febre
E dor de garganta
ENTÃO sugerir infecção.

Aqui a IA não aprende.
Ela apenas segue comandos escritos por humanos.`,

  ml:
`2ª ONDA — MACHINE LEARNING

Entrada: milhares de exemplos.
A IA observa padrões.
Depois faz previsões.

Exemplo:
Transação comum = normal.
Transação estranha = possível fraude.`,

  bigdata:
`3ª ONDA — BIG DATA + IA COGNITIVA

A IA analisa textos, imagens, voz e milhões de dados.

Exemplo:
Você pergunta algo.
A IA entende a linguagem.
Depois gera uma resposta completa.`
};

document.querySelectorAll("[data-sim]").forEach(button => {
  button.addEventListener("click", () => {
    simScreen.textContent = simTexts[button.dataset.sim];
  });
});

const questions = [
  {
    q: "Qual é a principal característica da 1ª onda da IA?",
    options: ["Big Data", "Sistemas baseados em regras", "Redes sociais", "Computação quântica"],
    answer: 1
  },
  {
    q: "Na 2ª onda, a IA passa a:",
    options: ["Apenas seguir regras", "Aprender com dados", "Não usar algoritmos", "Funcionar sem computadores"],
    answer: 1
  },
  {
    q: "Qual tecnologia está fortemente ligada à 3ª onda?",
    options: ["Ábaco", "Big Data", "Máquina de escrever", "Disquete"],
    answer: 1
  },
  {
    q: "MYCIN é exemplo de:",
    options: ["Sistema especialista", "Rede social", "Sistema operacional", "Aplicativo de música"],
    answer: 0
  },
  {
    q: "Qual sequência representa corretamente as ondas da IA?",
    options: [
      "Big Data → Regras → Machine Learning",
      "Regras → Machine Learning → Big Data/IA Cognitiva",
      "Nuvem → Hardware → Software",
      "Internet → Dados → Cabos"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizBox = document.getElementById("quizBox");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextQuestion");

function renderQuiz() {
  answered = false;
  const item = questions[currentQuestion];

  quizBox.innerHTML = `
    <h3>${currentQuestion + 1}. ${item.q}</h3>
    ${item.options.map((option, index) => `
      <button class="option" data-index="${index}">${option}</button>
    `).join("")}
  `;

  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      if (answered) return;

      answered = true;
      const selected = Number(option.dataset.index);

      if (selected === item.answer) {
        option.classList.add("correct");
        score++;
      } else {
        option.classList.add("wrong");
        document.querySelector(`[data-index="${item.answer}"]`).classList.add("correct");
      }

      scoreText.textContent = `Pontuação: ${score}/${questions.length}`;
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    quizBox.innerHTML = `
      <h3>Quiz finalizado!</h3>
      <p>Você acertou ${score} de ${questions.length} perguntas.</p>
      <p>${score >= 4 ? "Muito bom! Você entendeu bem as 3 ondas." : "Revise a tabela comparativa e tente novamente."}</p>
    `;
    nextBtn.style.display = "none";
    return;
  }

  renderQuiz();
});

renderQuiz();
